import React, { useState } from "react";
import swal from "sweetalert";
import axios from "axios";
import { API_URL } from "../../constants";
import moment from "moment";

const CustomerLogin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");

  const [customerDetails, setCustomerDetails] = useState({
    _id: "",
    address: "",
    cardName: "",
    cardNumber: "",
    cvv: "",
    email: "",
    fname: "",
    lname: "",
    password: "",
    phone: "",
    registrationDate: "",
  });

  const onChange = (e) => {
    // this.setState({ [e.target.name]: e.target.value });
    // this.setState({ [e.target.name]: e.target.value });
    if (e.target.name == "email") setEmail(e.target.value);

    if (e.target.name == "password") setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let date = moment().format("DD-MM-YYYY hh:mm:ss");

    // console.log("email send : ", email);

    axios
      .get(`${API_URL}/customer/get-customer/${email}`)
      .then((response) => {
        console.log("login data", response.data);
        validateLogin(response.data);
      })
      .catch((e) => {
        console.log("error", e.data);
        swal({
          title: "Invalid Credentials!",
          text: "Please enter correct email and password!",
          icon: "error",
        }).then(() => {
          window.location = `/customer/login`;
        });
        // alert("error");
      });
  };

  const validateLogin = (data) => {
    let customerObj = {
      _id: data._id,
      address: data.address,
      cardName: data.cardName,
      cardNumber: data.cardNumber,
      cvv: data.cvv,
      email: data.email,
      fname: data.fname,
      lname: data.lname,
      password: data.password,
      phone: data.phone,
      registrationDate: data.registrationDate,
    };
    setCustomerDetails(customerObj);

    console.log("password:", customerObj.password);

    let checkPassword = customerObj.password;

    if (checkPassword == password) {
      let customerString = JSON.stringify(customerObj);
      localStorage.setItem("customer", customerString);

      // let itm = localStorage.getItem("customer");
      // console.log("cus log:", JSON.parse(itm));
      swal({
        title: "Login Successful!",
        text: "",
        icon: "success",
      }).then(() => {
        window.location = `/customer/`;
      });
    } else {
      swal({
        title: "Invalid Credentials!",
        text: "Please enter correct email and password!",
        icon: "error",
      }).then(() => {
        window.location = `/customer/login`;
      });
    }
  };

  return (
    <div>
      <div className="block mt-10 pb-10 min-h-screen">
        <div className="flex items-center justify-center">
          <form
            onSubmit={onSubmit}
            className="w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 mt-5 text-sm text-white bg-white shadow-2xl bg-opacity-25 rounded-xl overflow-hidden"
          >
            <br />
            <h2 className="text-center font-bold font-serif font- text-2xl text-indigo-700">
              LOGIN
            </h2>
            <br />
            <hr className="border-indigo-500" />
            <br />

            <div class="w-full px-3 mt-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-blue-700 text-xs font-semibold mb-2"
                for="grid-first-name"
              >
                User Email
              </label>
              <input
                class="appearance-none block w-full bg-purple-100 text-gray-700 border border-indigo-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
                required
              />
            </div>

            <div class="w-full px-3 mt-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-blue-700 text-xs font-semibold mb-2"
                for="grid-first-name"
              >
                Password
              </label>
              <input
                class="appearance-none block w-full bg-purple-100 text-gray-700 border border-indigo-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100"
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={onChange}
                required
              />
            </div>
            <br />
            <div class="w-full px-3 mt-3 mb-6 md:mb-0">
              <button
                type="submit"
                className="w-full rounded-md p-2 mb-5 bg-blue-500"
              >
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomerLogin;

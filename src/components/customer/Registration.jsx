import React, { Component } from "react";
import swal from "sweetalert";
import axios from "axios";
import { API_URL } from "../../constants";
import moment from "moment";

const initialState = {
  fname: "",
  lname: "",
  email: "",
  address: "",
  phone: "",
  password: "",
  confirmPassword: "",
  cardName: "",
  cardNumber: "",
  cvv: "",
};

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    let date = moment().format("DD-MM-YYYY hh:mm:ss");

    if (this.state.password !== this.state.confirmPassword) {
      alert("Password does not match!");
    } else {
      let customerObject = {
        fname: this.state.fname,
        lname: this.state.lname,
        email: this.state.email,
        address: this.state.address,
        phone: this.state.phone,
        password: this.state.password,
        cardName: this.state.cardName,
        cardNumber: this.state.cardNumber,
        cvv: this.state.cvv,
        registrationDate: date,
      };
      console.log("DATA to SEND : ", customerObject);

      axios
        .post(`${API_URL}/customer/create-customer`, customerObject)
        .then((response) => {
          console.log("success", response.data);
          swal({
            title: "Your have Registered Successfully!",
            text: "",
            icon: "success",
          }).then(() => {
            window.location = `/customer/`;
          });
        })
        .catch((e) => {
          console.log("error", e.data);
          alert("error");
        });
    }
  }

  render() {
    return (
      <div>
        <div className="block mt-10 pb-10 min-h-screen">
          <div className="flex items-center justify-center">
            {/* <div className="SPM-Registration"> */}
            {/* <h1 className="SPM-heading">Register</h1>
            <hr className="hrStyles" />
            <br /> */}

            <form
              onSubmit={this.onSubmit}
              className="w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 mt-5 text-sm text-white bg-white shadow-2xl bg-opacity-25 rounded-xl overflow-hidden"
            >
              <br />
              <h2 className="text-center font-bold font-serif font- text-2xl text-indigo-700">
                REGISTER
              </h2>
              <br />
              <hr className="border-indigo-500" />
              <br />
              <div class="w-full px-3 mt-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-blue-700 text-xs font-semibold mb-2"
                  for="grid-first-name"
                >
                  First Name
                </label>
                <input
                  class="appearance-none block w-full bg-purple-100 text-blue-700 border border-indigo-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100"
                  type="text"
                  id="fname"
                  name="fname"
                  value={this.state.fname}
                  onChange={this.onChange}
                  required
                />
                {/* {verifyState.fname.length < 5 ? (
                  <p class="text-red-500 text-sm italic text-center">
                    Please fill out this field. Length of the name should be
                    greater than 5
                  </p>
                ) : (
                  ""
                )} */}
              </div>
              <div class="w-full px-3 mt-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-blue-700 text-xs font-semibold mb-2"
                  for="grid-first-name"
                >
                  Last Name
                </label>
                <input
                  class="appearance-none block w-full bg-purple-100 text-gray-700 border border-indigo-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100"
                  type="text"
                  id="lname"
                  name="lname"
                  value={this.state.lname}
                  onChange={this.onChange}
                  required
                />
                {/* {!verifyState.lname || verifyState.lname.length < 5 ? (
                  <p class="text-red-500 text-sm italic text-center">
                    Please fill out this field. Length of the name should be
                    greater than 5
                  </p>
                ) : (
                  ""
                )} */}
              </div>
              <div class="w-full px-3 mt-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-blue-700 text-xs font-semibold mb-2"
                  for="grid-first-name"
                >
                  Email
                </label>
                <input
                  class="appearance-none block w-full bg-purple-100 text-gray-700 border border-indigo-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100"
                  type="email"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  required
                />
                {/* {!verifyState.email ? (
                  <p class="text-red-500 text-sm italic text-center">
                    Please fill out this field. Email address is invalid
                  </p>
                ) : (
                  ""
                )} */}
              </div>
              <div class="w-full px-3 mt-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-blue-700 text-xs font-semibold mb-2"
                  for="grid-first-name"
                >
                  Address
                </label>
                <input
                  class="appearance-none block w-full bg-purple-100 text-gray-700 border border-indigo-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100"
                  type="text"
                  id="address"
                  name="address"
                  value={this.state.address}
                  onChange={this.onChange}
                  required
                />
                {/* {verifyState.address ? (
                  <p class="text-red-500 text-sm italic text-center">
                    Please fill out this field. Please enter correct address
                  </p>
                ) : (
                  ""
                )} */}
              </div>
              <div class="w-full px-3 mt-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-blue-700 text-xs font-semibold mb-2"
                  for="grid-first-name"
                >
                  Phone
                </label>
                <input
                  class="appearance-none block w-full bg-purple-100 text-gray-700 border border-indigo-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100"
                  type="text"
                  id="phone"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.onChange}
                  required
                />
                {/* {!verifyState.phone ? (
                  <p class="text-red-500 text-sm italic text-center">
                    Please fill out this field. Please enter correct phone
                    number
                  </p>
                ) : (
                  ""
                )} */}
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
                  value={this.state.password}
                  onChange={this.onChange}
                  required
                />
                {/* {!verifyState.password ? (
                  <p class="text-red-500 text-sm italic text-center">
                    Please fill out this field. Please enter correct phone
                    number
                  </p>
                ) : (
                  ""
                )} */}
              </div>
              <div class="w-full px-3 mt-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-blue-700 text-xs font-semibold mb-2"
                  for="grid-first-name"
                >
                  Confirm Password
                </label>
                <input
                  class="appearance-none block w-full bg-purple-100 text-gray-700 border border-indigo-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-100"
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={this.state.confirmPassword}
                  onChange={this.onChange}
                  required
                />
                {/* {!verifyState.confirmPassword ||
                this.state.password !== this.state.confirmPassword ? (
                  <p class="text-red-500 text-sm italic text-center">
                    Please fill out this field. Passwords do not match
                  </p>
                ) : (
                  ""
                )} */}
              </div>

              <br />
              <h2 className="text-center font-bold italic font-sans text-indigo-700">
                CARD DETAILS
              </h2>
              <br />
              <hr className="border border-blue-300" />
              <br />

              <div class="w-full px-3 mt-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-blue-700 text-xs font-semibold mb-2"
                  for="grid-first-name"
                >
                  Card Holder's Name
                </label>
                <input
                  class="appearance-none block w-full bg-blue-100 text-gray-700 border border-indigo-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-purple-100"
                  id="cardName"
                  name="cardName"
                  value={this.state.cardName}
                  onChange={this.onChange}
                  required
                />
                {/* {!verifyState.cardName || this.state.cardName.length < 5 ? (
                  <p class="text-red-500 text-sm italic text-center">
                    Please fill out this field. Please enter correct name
                  </p>
                ) : (
                  ""
                )} */}
              </div>
              <div class="w-full px-3 mt-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-blue-700 text-xs font-semibold mb-2"
                  for="grid-first-name"
                >
                  Card Number
                </label>
                <input
                  class="appearance-none block w-full bg-blue-100 text-gray-700 border border-indigo-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-purple-100"
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={this.state.cardNumber}
                  onChange={this.onChange}
                  required
                />
                {/* {verifyState.cardName || this.state.cardName.length < 5 ? (
                  <p class="text-red-500 text-sm italic text-center">
                    Please fill out this field. Please enter correct card number
                  </p>
                ) : (
                  ""
                )} */}
              </div>
              <div class="w-full px-3 mt-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-blue-700 text-xs font-semibold mb-2"
                  for="grid-first-name"
                >
                  CVV
                </label>
                <input
                  class="appearance-none block w-full bg-blue-100 text-gray-700 border border-indigo-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-purple-100"
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={this.state.cvv}
                  onChange={this.onChange}
                  required
                />
                {/* {verifyState.cvv || this.state.cvv.length != 4 ? (
                  <p class="text-red-500 text-sm italic text-center">
                    Please fill out this field. Please enter correct CVV Code (4
                    digit pin)
                  </p>
                ) : (
                  ""
                )} */}
              </div>

              {/* <button type="submit" className="SPM-btn-register">
                Create Account
              </button>
              <button type="reset" className="SPM-btn-reset">
                Reset Form
              </button> */}
              <br />
              <div class="w-full px-3 mt-3 mb-6 md:mb-0">
                <button
                  type="submit"
                  className="w-full rounded-md p-2 mb-5 bg-blue-500"
                >
                  CREATE ACCOUNT
                </button>
              </div>
            </form>
          </div>
          {/* </div> */}
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
// import axios from 'axios';
import "../../styles/registration.css";

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

    if (this.state.password !== this.state.confirmPassword) {
      alert("Password does not match!");
    } else {
      let customer = {
        fname: this.state.fname,
        lname: this.state.lname,
        email: this.state.email,
        address: this.state.address,
        phone: this.state.phone,
        password: "",
        cardName: "",
        cardNumber: "",
        cvv: "",
      };
      console.log("DATA to SEND : ", customer);

      // axios.post('http://localhost:5000/customer/create', vehicle)
      //     .then(response => {
      //         alert('Your account has been created successfully!');
      //     })
      //     .catch(error => {
      //         console.error(error);
      //         alert(error);
      //     });
    }
  }

  render() {
    return (
      <div>
        <div className="SPM-Registration">
          <h1 className="SPM-heading">Register</h1>
          <hr className="hrStyles" />
          <br />

          <form onSubmit={this.onSubmit}>
            <label className="SPM-reg-label">First Name</label>
            <br />
            <br />
            <input
              className="SPM-reg-input"
              type="text"
              id="fname"
              name="fname"
              value={this.state.fname}
              onChange={this.onChange}
              required
            />
            <br />
            <br />
            <br />
            <label className="SPM-reg-label">Last Name</label>
            <br />
            <br />
            <input
              className="SPM-reg-input"
              type="text"
              id="lname"
              name="lname"
              value={this.state.lname}
              onChange={this.onChange}
              required
            />
            <br />
            <br />
            <br />
            <label className="SPM-reg-label">Email</label>
            <br />
            <br />
            <input
              className="SPM-reg-input"
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
              required
            />
            <br />
            <br />
            <br />
            <label className="SPM-reg-label">Address</label>
            <br />
            <br />
            <input
              className="SPM-reg-input"
              type="text"
              id="address"
              name="address"
              value={this.state.address}
              onChange={this.onChange}
              required
            />
            <br />
            <br />
            <br />
            <label className="SPM-reg-label">Phone Number</label>
            <br />
            <br />
            <input
              className="SPM-reg-input"
              type="text"
              id="phone"
              name="phone"
              value={this.state.phone}
              onChange={this.onChange}
              required
            />
            <br />
            <br />
            <br />
            <label className="SPM-reg-label">Password</label>
            <br />
            <br />
            <input
              className="SPM-reg-input"
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
              required
            />
            <br />
            <br />
            <br />
            <label className="SPM-reg-label">Confirm Password</label>
            <br />
            <br />
            <input
              className="SPM-reg-input"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.onChange}
              required
            />
            <br />
            <br />
            <br />
            <h1 className="SPM-heading">Payment Details</h1>
            <hr className="hrStyles" />
            <br /> <br />
            <label className="SPM-reg-label">Card Holder's Name</label>
            <br />
            <br />
            <input
              className="SPM-reg-input"
              type="text"
              id="cardName"
              name="cardName"
              value={this.state.cardName}
              onChange={this.onChange}
              required
            />
            <br />
            <br />
            <br />
            <label className="SPM-reg-label">Card Number</label>
            <br />
            <br />
            <input
              className="SPM-reg-input"
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={this.state.cardNumber}
              onChange={this.onChange}
              required
            />
            <br />
            <br />
            <br />
            <label className="SPM-reg-label">CVV Code</label>
            <br />
            <br />
            <input
              className="SPM-reg-input"
              type="text"
              id="cvv"
              name="cvv"
              value={this.state.cvv}
              onChange={this.onChange}
              required
            />
            <br />
            <br />
            <br />
            <button type="submit" className="SPM-btn-register">
              Register
            </button>
            <button type="reset" className="SPM-btn-reset">
              Reset Form
            </button>
          </form>
        </div>
      </div>
    );
  }
}

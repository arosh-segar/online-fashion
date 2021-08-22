import React, { Component } from "react";
import Slideshow from "./Slideshow";
import "../styles/home.css";
import men1 from "../images/categories/men1.jpg";
import men2 from "../images/categories/men2.jpg";
import women1 from "../images/categories/women1.jpg";
import women2 from "../images/categories/women2.jpg";
import boys1 from "../images/categories/boys1.jpg";
import boys2 from "../images/categories/boys2.jpg";
import girls1 from "../images/categories/girls1.jpeg";
import girls2 from "../images/categories/girls2.jpg";
import babies1 from "../images/categories/babies1.jpg";
import babies2 from "../images/categories/babies2.jpg";
import accessories1 from "../images/categories/accessories1.jpg";
import accessories2 from "../images/categories/accessories2.jpeg";

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    // axios.get('http://localhost:5000/')
    //     .then(response => {
    //         this.setState( {categories: response.data});
    //         console.log('DATA received: ', response.data);
    //     })
  }

  navigateProductPage(e, cid, cname) {
    window.location = `/product/${cid}/${cname}`;
  }

  render() {
    return (
      <div>
        <Slideshow />

        <div className="SPM-home-container">
          <h1 className="SPM-heading">Product Categories</h1>
          <hr className="hrStyles" />
          <br />
        </div>

        <div class="row">
          <div class="column">
            <div class="flip-box">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                  {/* <img src={logo} className="SPM-categories" alt="logo" /> */}
                  <img src={men1} className="SPM-categories" alt="logo" />
                </div>
                <div class="flip-box-back">
                  {/* <img src="#" style="width:300px;height:200px" /> */}
                  <img src={men2} className="SPM-categories" alt="logo" />
                </div>
              </div>
            </div>
            <h2>
              <a href="#" class="category_headings">
                Men's Wear
              </a>
            </h2>
          </div>

          <div class="column">
            <div class="flip-box">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                  <img src={boys1} className="SPM-categories" alt="logo" />
                </div>
                <div class="flip-box-back">
                  <img src={boys2} className="SPM-categories" alt="logo" />
                </div>
              </div>
            </div>
            <h2>
              <a href="#" class="category_headings">
                Boys' Wear
              </a>
            </h2>
          </div>

          <div class="column">
            <div class="flip-box">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                  <img src={babies1} className="SPM-categories" alt="logo" />
                </div>
                <div class="flip-box-back">
                  <img src={babies2} className="SPM-categories" alt="logo" />
                </div>
              </div>
            </div>
            <h2>
              <a href="#" class="category_headings">
                Babies' Wear
              </a>
            </h2>
          </div>
        </div>

        <br />
        <br />

        {/* Second row of flip image */}

        <div class="row">
          <div class="column">
            <div class="flip-box">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                  <img src={women1} className="SPM-categories" alt="logo" />
                </div>
                <div class="flip-box-back">
                  <img src={women2} className="SPM-categories" alt="logo" />
                </div>
              </div>
            </div>
            <h2>
              <a href="#" class="category_headings">
                Women's Wear
              </a>
            </h2>
          </div>

          <div class="column">
            <div class="flip-box">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                  <img src={girls1} className="SPM-categories" alt="logo" />
                </div>
                <div class="flip-box-back">
                  <img src={girls2} className="SPM-categories" alt="logo" />
                </div>
              </div>
            </div>
            <h2>
              <a href="#" class="category_headings">
                Girls' Wear
              </a>
            </h2>
          </div>

          <div class="column">
            <div class="flip-box">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                  <img
                    src={accessories1}
                    className="SPM-categories"
                    alt="logo"
                  />
                </div>
                <div class="flip-box-back">
                  <img
                    src={accessories2}
                    className="SPM-categories"
                    alt="logo"
                  />
                </div>
              </div>
            </div>
            <h2>
              <a href="#" class="category_headings">
                Accessories
              </a>
            </h2>
          </div>
        </div>

        <hr className="hrStyles" />
      </div>
    );
  }
}

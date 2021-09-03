import React, { Component } from "react";
import Navigation from "./Navigation";
import "../styles/productItems.css";
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

export default class ProductsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  //Slideshow added using local images
  componentDidMount() {
    // axios.get('http://localhost:5000/')
    //     .then(response => {
    //         this.setState( {categories: response.data});
    //         console.log('DATA received: ', response.data);
    //     })
  }

  render() {
    return (
      <div>
        <Navigation />

        <div class="perfume">
          <div class="title">
            <h3 className="SPM-cart-heading">Shirt</h3>
          </div>
          <div class="content">
            <div class="BOX3">
              <img
                src={men1}
                alt="s2"
                style={{ width: "260px", height: "260px" }}
              />
              {/* <br /><br />
					<p className="SPM-cart-description">Shirt</p>
                        <p className="SPM-cart-description">Size: 30L or 100XL </p> */}
            </div>
            <br />
            <br />
            <p className="SPM-price">Price: $55.00</p>
          </div>
          {/* <div class="cart">
				<p className="cartAdd">Add to Cart</p>	
			</div> */}
          <div className="SPM-cart-front-content">
            <button className="cartAdd">Add To Cart</button>
          </div>
        </div>

        {/* Image 2 */}

        <div class="perfume">
          <div class="title">
            <h3 className="SPM-cart-heading">Shirt</h3>
          </div>
          <div class="content">
            <div class="BOX3">
              <img
                src={women1}
                alt="s2"
                style={{ width: "260px", height: "260px" }}
              />
              {/* <br /><br />
					<p className="SPM-cart-description">Shirt</p>
                        <p className="SPM-cart-description">Size: 30L or 100XL </p> */}
            </div>
            <br />
            <br />
            <p className="SPM-price">Price: $55.00</p>
          </div>
          {/* <div class="cart">
				<p className="cartAdd">Add to Cart</p>	
			</div> */}
          <div className="SPM-cart-front-content">
            <button className="cartAdd">Add To Cart</button>
          </div>
        </div>

        <div class="perfume">
          <div class="title">
            <h3 className="SPM-cart-heading">Shirt</h3>
          </div>
          <div class="content">
            <div class="BOX3">
              <img
                src={women2}
                alt="s2"
                style={{ width: "260px", height: "260px" }}
              />
              {/* <br /><br />
					<p className="SPM-cart-description">Shirt</p>
                        <p className="SPM-cart-description">Size: 30L or 100XL </p> */}
            </div>
            <br />
            <br />
            <p className="SPM-price">Price: $55.00</p>
          </div>
          {/* <div class="cart">
				<p className="cartAdd">Add to Cart</p>	
			</div> */}
          <div className="SPM-cart-front-content">
            <button className="cartAdd">Add To Cart</button>
          </div>
        </div>

        <div class="perfume">
          <div class="title">
            <h3 className="SPM-cart-heading">Shirt</h3>
          </div>
          <div class="content">
            <div class="BOX3">
              <img
                src={boys1}
                alt="s2"
                style={{ width: "260px", height: "260px" }}
              />
              {/* <br /><br />
					<p className="SPM-cart-description">Shirt</p>
                        <p className="SPM-cart-description">Size: 30L or 100XL </p> */}
            </div>
            <br />
            <br />
            <p className="SPM-price">Price: $55.00</p>
          </div>
          {/* <div class="cart">
				<p className="cartAdd">Add to Cart</p>	
			</div> */}
          <div className="SPM-cart-front-content">
            <button className="cartAdd">Add To Cart</button>
          </div>
        </div>

        <div class="perfume">
          <div class="title">
            <h3 className="SPM-cart-heading">Shirt</h3>
          </div>
          <div class="content">
            <div class="BOX3">
              <img
                src={boys2}
                alt="s2"
                style={{ width: "260px", height: "260px" }}
              />
              {/* <br /><br />
					<p className="SPM-cart-description">Shirt</p>
                        <p className="SPM-cart-description">Size: 30L or 100XL </p> */}
            </div>
            <br />
            <br />
            <p className="SPM-price">Price: $55.00</p>
          </div>
          {/* <div class="cart">
				<p className="cartAdd">Add to Cart</p>	
			</div> */}
          <div className="SPM-cart-front-content">
            <button className="cartAdd">Add To Cart</button>
          </div>
        </div>
      </div>
    );
  }
}

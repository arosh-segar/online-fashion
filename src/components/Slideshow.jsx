import React from "react";
import "../styles/slideshow.css";
import s1 from "../images/slideshow/s1.png";
import s2 from "../images/slideshow/s2.jpg";
import s3 from "../images/slideshow/s3.png";
import s4 from "../images/slideshow/s4.jpg";
import s5 from "../images/slideshow/s5.jpg";
import s6 from "../images/slideshow/s6.jpg";
import s7 from "../images/slideshow/s7.jpg";
import s8 from "../images/slideshow/s8.jpg";
import s9 from "../images/slideshow/s9.jpg";
import s10 from "../images/slideshow/s10.jpg";

class Slideshow extends React.Component {
  state = { slideIndex: 1 };

  plusSlides(n) {
    this.showSlides((this.state.slideIndex += n));
  }
  currentSlide(n) {
    this.showSlides((this.state.slideIndex = n));
  }

  showSlides(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
      this.state.slideIndex = 1;
    }
    if (n < 1) {
      this.state.slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[this.state.slideIndex - 1].style.display = "block";
  }

  componentDidMount() {
    this.showSlides(this.state.slideIndex);
  }

  render() {
    return (
      <div>
        <div className="slideshow-container">
          <div className="mySlides fade">
            <img src={s1} alt="s1" style={{ width: "100%", height: "500px" }} />
          </div>

          <div className="mySlides fade">
            <img src={s2} alt="s2" style={{ width: "100%", height: "500px" }} />
          </div>

          <div className="mySlides fade">
            <img src={s3} alt="s3" style={{ width: "100%", height: "500px" }} />
          </div>

          <div className="mySlides fade">
            <img src={s4} alt="s4" style={{ width: "100%", height: "500px" }} />
          </div>

          <div className="mySlides fade">
            <img src={s5} alt="s5" style={{ width: "100%", height: "500px" }} />
          </div>

          <div className="mySlides fade">
            <img src={s6} alt="s6" style={{ width: "100%", height: "500px" }} />
          </div>

          <div className="mySlides fade">
            <img src={s7} alt="s7" style={{ width: "100%", height: "500px" }} />
          </div>

          <div className="mySlides fade">
            <img src={s8} alt="s8" style={{ width: "100%", height: "500px" }} />
          </div>

          <div className="mySlides fade">
            <img src={s9} alt="s9" style={{ width: "100%", height: "500px" }} />
          </div>

          <div className="mySlides fade">
            <img
              src={s10}
              alt="s10"
              style={{ width: "100%", height: "500px" }}
            />
          </div>

          <a className="prev" onClick={this.plusSlides.bind(this, -1)}>
            &#10094;
          </a>
          <a className="next" onClick={this.plusSlides.bind(this, 1)}>
            &#10095;
          </a>
        </div>
        <br />

        <div style={{ textAlign: "center" }}>
          <span
            className="dot"
            onClick={this.currentSlide.bind(this, 1)}
          ></span>
          <span
            className="dot"
            onClick={this.currentSlide.bind(this, 2)}
          ></span>
          <span
            className="dot"
            onClick={this.currentSlide.bind(this, 3)}
          ></span>
          <span
            className="dot"
            onClick={this.currentSlide.bind(this, 4)}
          ></span>
          <span
            className="dot"
            onClick={this.currentSlide.bind(this, 5)}
          ></span>
          <span
            className="dot"
            onClick={this.currentSlide.bind(this, 6)}
          ></span>
          <span
            className="dot"
            onClick={this.currentSlide.bind(this, 7)}
          ></span>
          <span
            className="dot"
            onClick={this.currentSlide.bind(this, 8)}
          ></span>
          <span
            className="dot"
            onClick={this.currentSlide.bind(this, 9)}
          ></span>
          <span
            className="dot"
            onClick={this.currentSlide.bind(this, 10)}
          ></span>
        </div>
      </div>
    );
  }
}

export default Slideshow;

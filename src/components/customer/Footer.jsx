import React from "react";
import "../../styles/footer.css";
class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer>
          <div className="footer-basic s text-center">
            <h3>LYNX SHOPPING</h3>

            <br />

            <div className="social">
              <a href="#">
                <i className="fa fa-facebook text-light"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter text-light"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram text-light"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin text-light"></i>
              </a>
            </div>
            <br />

            <p>Telephone: +94 71 238 9567 | Email: lynx@gmail.com</p>

            {/* <p className="copyright">
              © 2021 Lynx Shopping. All Rights Reserved
            </p> */}
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;

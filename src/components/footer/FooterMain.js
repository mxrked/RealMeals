import { Component } from "react";
import {
  FaCopyright,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaRegistered,
  FaTwitter,
} from "react-icons/fa";
import { BiSend } from "react-icons/bi";

import whiteLogo from "../../assets/medias/imgs/logos/white-logo.png";

class FooterMain extends Component {
  constructor(props) {
    super(props);

    this.createFooterGeneralLink = this.createFooterGeneralLink.bind(this);
    this.createFooterProductLink = this.createFooterProductLink.bind(this);
  }

  createFooterGeneralLink(props) {
    return (
      <p className="footer-general-link page-transition">
        {props.footerGeneralLinkTXT}
      </p>
    );
  }

  createFooterProductLink(props) {
    return (
      <p className="footer-product-link page-transition">
        {props.footerProductLinkTXT}
      </p>
    );
  }

  render() {
    return (
      <div>
        <footer id="footerMain">
          <div className="container-fluid footer-box">
            <div className="row footer-row">
              <div
                className="col-lg-4 col-md-4 col-sm-12 col-xs-12 footer-side"
                id="footerL"
              >
                <div className="footer-side-cnt">
                  <div className="footer-logo-holder">
                    <div id="footerLogo">
                      <img
                        data-src={whiteLogo}
                        className="lazyload"
                        alt="RealMeals Logo"
                      />

                      <h2>
                        RealMeals
                        <span>
                          <FaRegistered className="fa-icon" />
                        </span>
                      </h2>
                    </div>
                  </div>

                  <div className="footer-copyright">
                    <span>
                      <FaCopyright className="fa-icon" /> Copyright 2021, All
                      Rights Reserved.
                    </span>
                  </div>

                  <div className="footer-newsletter-holder">
                    <h6>Sign up to Newsletter for 15% OFF!</h6>

                    <div>
                      <input
                        type="email"
                        className="page-transition"
                        placeholder="johndoe@burner.com"
                        autoComplete="off"
                      />

                      <button className="page-transition">
                        <BiSend />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-4 col-sm-6 col-xs-12 footer-side"
                id="footerM"
              >
                <div className="footer-side-cnt">
                  <div className="footer-side-links-set-holder">
                    <div className="footer-links-set" id="footerGeneralLinks">
                      <span>General</span>

                      <ul>
                        <li>
                          <this.createFooterGeneralLink footerGeneralLinkTXT="Home"></this.createFooterGeneralLink>
                        </li>
                        <li>
                          <this.createFooterGeneralLink footerGeneralLinkTXT="About"></this.createFooterGeneralLink>
                        </li>
                        {/*  
                        <li>
                          <this.createFooterGeneralLink footerGeneralLinkTXT="Team"></this.createFooterGeneralLink>
                        </li>
                        */}
                        <li>
                          <this.createFooterGeneralLink footerGeneralLinkTXT="Contact"></this.createFooterGeneralLink>
                        </li>
                      </ul>
                    </div>
                    <div className="footer-links-set" id="footerProductsLinks">
                      <span>Products</span>

                      <ul>
                        <li>
                          <this.createFooterProductLink footerProductLinkTXT="All"></this.createFooterProductLink>
                        </li>
                        <li>
                          <this.createFooterProductLink footerProductLinkTXT="Meats"></this.createFooterProductLink>
                        </li>
                        <li>
                          <this.createFooterProductLink footerProductLinkTXT="Produce"></this.createFooterProductLink>
                        </li>
                        <li>
                          <this.createFooterProductLink footerProductLinkTXT="Desserts"></this.createFooterProductLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-4 col-sm-6 col-xs-12 footer-side"
                id="footerR"
              >
                <div className="footer-side-cnt">
                  <div className="footer-contact-support-links-set-holder">
                    <div className="footer-contact-support-links-set">
                      <span>Follow Us</span>

                      <ul>
                        <li>
                          <FaFacebook />
                        </li>

                        <li>
                          <FaTwitter />
                        </li>

                        <li>
                          <FaLinkedin />
                        </li>

                        <li>
                          <FaInstagram />
                        </li>
                      </ul>
                    </div>

                    <div className="footer-contact-support-links-set">
                      <span>Support</span>

                      <div>
                        <p>+1 202-555-0007</p>

                        <p>contact@realmeals.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default FooterMain;

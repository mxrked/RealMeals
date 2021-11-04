import { Component } from "react";
import { Link } from "react-router-dom";

import contactBG from "../../../assets/medias/imgs/index/contact/index-contact-bg.jpg";

class IndexContactMain extends Component {
  constructor(props) {
    super(props);

    this.createIndexContactBorder = this.createIndexContactBorder.bind(this);
  }

  createIndexContactBorder(props) {
    return (
      <div
        className="index-contact-border"
        id={props.indexContactBorderID}
      ></div>
    );
  }

  render() {
    return (
      <div id="indexContact">
        <div className="index-contact-box">
          <this.createIndexContactBorder indexContactBorderID="indexCBTR" />

          <div className="index-contact-box-cnt lazyload" data-bg={contactBG}>
            <div className="index-contact-box-cnt-overlay">
              <div>
                <h4>Want to get in touch?</h4>

                <Link to="/contact" className="page-transition">
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          <this.createIndexContactBorder indexContactBorderID="indexCBBL" />
        </div>
      </div>
    );
  }
}

export default IndexContactMain;

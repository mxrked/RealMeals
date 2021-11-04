import { Component } from "react";

import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

class ContactL extends Component {
  constructor(props) {
    super(props);

    this.createTeamMate = this.createTeamMate.bind(this);
  }

  createTeamMate(props) {
    return (
      <div className="teammate-item">
        <div className="teammate-img-holder">
          <div className="teammate-img lazyload" data-bg={props.teammateIMG} />

          <div className="teammate-socials-ol page-transition">
            <div>
              <FaTwitter className="fa-icon" />

              <FaFacebook className="fa-icon" />

              <FaInstagram className="fa-icon" />
            </div>
          </div>
        </div>

        <div className="teammate-item-info">
          <h6>{props.teammateH6}</h6>

          <h4>{props.teammateH4}</h4>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="contact-sides-main-side-cnt" id="contactL">
        <div className="contact-sides-main-side-cnt-inner">
          <h3>Follow Our Team</h3>

          <div className="teammates-holder">
            <this.createTeamMate
              teammateIMG="http://basicallyeasy.com/DynamicCDNS/realmeals/contact/teammates/tm-1.jpg"
              teammateH6="Lead Chef/CEO"
              teammateH4="John Doe"
            />

            <this.createTeamMate
              teammateIMG="http://basicallyeasy.com/DynamicCDNS/realmeals/contact/teammates/tm-2.jpg"
              teammateH6="Co-Owner/Lead Supervisor"
              teammateH4="John Doe"
            />

            <this.createTeamMate
              teammateIMG="http://basicallyeasy.com/DynamicCDNS/realmeals/contact/teammates/tm-3.jpg"
              teammateH6="Product Manager"
              teammateH4="Jane Doe"
            />

            <this.createTeamMate
              teammateIMG="http://basicallyeasy.com/DynamicCDNS/realmeals/contact/teammates/tm-4.jpg"
              teammateH6="Assistant Chef"
              teammateH4="John Doe"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ContactL;

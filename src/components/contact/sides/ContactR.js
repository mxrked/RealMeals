import { Component } from "react";

class ContactR extends Component {
  constructor(props) {
    super(props);

    this.createFormBtn = this.createFormBtn.bind(this);
  }

  createFormBtn(props) {
    return (
      <button type={props.contactFormBtnTYPE} className="page-transition">
        {props.contactFormBtnTXT}
      </button>
    );
  }

  render() {
    return (
      <div className="contact-sides-main-side-cnt" id="contactR">
        <div className="contact-sides-main-side-cnt-inner">
          <h3>Contacting Us</h3>

          <form action="#" method="#" autoComplete="off">
            <div className="contact-form-set-holder">
              <div className="contact-form-set">
                <h4>First Name *</h4>

                <input
                  type="text"
                  className="contact-form-set-input"
                  placeholder="John/Jane"
                  required
                />
              </div>

              <div className="contact-form-set">
                <h4>Last Name *</h4>

                <input
                  type="text"
                  className="contact-form-set-input"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            <div className="contact-form-set-holder">
              <div className="contact-form-set">
                <h4>Email Address *</h4>

                <input
                  type="email"
                  className="contact-form-set-input"
                  placeholder="burner123@burner.com"
                  required
                />
              </div>
            </div>

            <div className="contact-form-set-holder">
              <div className="contact-form-set">
                <h4>Phone Number *</h4>

                <input
                  type="tel"
                  className="contact-form-set-input"
                  placeholder="+1202-555-0731"
                  required
                />
              </div>
            </div>

            <div className="contact-form-set-holder">
              <div className="contact-form-set">
                <h4>Reason for Contact *</h4>

                <input
                  type="text"
                  className="contact-form-set-input"
                  placeholder="What is your reason for contact?"
                  required
                />
              </div>
            </div>

            <div className="contact-form-set-holder">
              <div className="contact-form-set">
                <h4>Message *</h4>

                <textarea
                  required="required"
                  placeholder="What is your message?"
                ></textarea>
              </div>
            </div>

            <div className="contact-form-btns-holder">
              <this.createFormBtn
                contactFormBtnTYPE="reset"
                contactFormBtnTXT="Reset"
              />
              <this.createFormBtn
                contactFormBtnTYPE="submit"
                contactFormBtnTXT="Send"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactR;

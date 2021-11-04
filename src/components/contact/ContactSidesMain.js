import ContactL from "./sides/ContactL";
import ContactR from "./sides/ContactR";

const ContactSidesMain = () => {
  return (
    <div id="contactSidesMain">
      <div className="container-fluid contact-sides-main-box">
        <div className="row contact-sides-main-row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 order-lg-first order-md-first order-sm-last order-last contact-sides-main-side">
            <ContactL />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 order-lg-last order-md-last order-sm-first order-first contact-sides-main-side">
            <ContactR />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSidesMain;

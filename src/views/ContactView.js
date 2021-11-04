//! Contact Page
import { useEffect } from "react";
import ContactSidesMain from "../components/contact/ContactSidesMain";

//* Components
import ContactTopMain from "../components/contact/ContactTopMain";

//* Assets
import OtherPageNavs from "../helpers/OtherPageNavs";

const ContactView = () => {
  useEffect(() => {
    document.title = "RealMeals.com | Contact Page";
  }, []);

  return (
    <div id="contactBody">
      <OtherPageNavs />

      <ContactTopMain />
      <ContactSidesMain />
    </div>
  );
};

export default ContactView;

//! About Page
import { useEffect } from "react";

//* Components
import AboutTopMain from "../components/about/AboutTopMain";
import AboutSectsMain from "../components/about/AboutSectsMain";

//* Assets
import OtherPageNavs from "../helpers/OtherPageNavs";

const AboutView = () => {
  useEffect(() => {
    document.title = "RealMeals.com | About Page";
  }, []);

  return (
    <div id="aboutBody">
      <OtherPageNavs />

      <AboutTopMain />
      <AboutSectsMain />
    </div>
  );
};

export default AboutView;

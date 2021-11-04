import { Link } from "react-router-dom";
import whiteLogo from "../../../assets/medias/imgs/logos/white-logo.png";

const NavL = () => {
  return (
    <div
      className="col-lg-4 col-md-4 col-sm-6 col-xs-6 navigation-side"
      id="navL"
    >
      <div className="navigation-side-cnt">
        <Link to="/home" className="page-transition" id="navLogo">
          <img data-src={whiteLogo} className="lazyload" alt="RealMeals Logo" />
          <div>
            <h1>RealMeals</h1>
            <span>Food | Grocery | Health</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavL;

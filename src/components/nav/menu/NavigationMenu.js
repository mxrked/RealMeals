import { FaTimes } from "react-icons/fa";
import GeneralSet from "./sets/GeneralSet";
import ProductsSet from "./sets/ProductsSet";
import SocialsSet from "./sets/SocialsSet";

const NavigationMenu = () => {
  return (
    <div>
      <div id="navMenuMain" className="full-second">
        <div className="nav-menu-main-side">
          <div
            id="navMenuBG"
            className="lazyload"
            data-bg="http://basicallyeasy.com/DynamicCDNS/realmeals/nav/right.jpg"
          />
        </div>

        <div className="nav-menu-main-side">
          <div className="page-transition" id="navMenuMainCnt">
            <div className="nav-menu-main-side-cnt-set-holder">
              <button id="navCloser" className="full-second">
                Close <FaTimes />
              </button>
              <GeneralSet />

              <div className="bottom-set page-transition" id="navBottomSet">
                <ProductsSet />
                <SocialsSet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;

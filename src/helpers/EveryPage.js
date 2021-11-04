import { Fragment } from "react";
//* Assets
import RefreshToTop from "../assets/scripts/cross-page/scroll/RefreshToTop";

//* Components
import FooterMain from "../components/footer/FooterMain";
import FadedBottom from "../components/cross-page/FadedBottom";
import BackToTop from "../components/cross-page/BackToTop";
import PageFade from "../components/overlay/PageFade";
import CartAdded from "../components/cart/CartAdded";

const EveryPage = () => {
  return (
    <div>
      <Fragment>
        <RefreshToTop />
      </Fragment>
      <BackToTop />
      <FooterMain />
      <FadedBottom />
      <PageFade />
      <CartAdded />
    </div>
  );
};

export default EveryPage;

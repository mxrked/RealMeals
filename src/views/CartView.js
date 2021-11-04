//! Cart Page
import { Fragment, useEffect } from "react";

//* Components
import CartTop from "../components/cart/CartTop.js";
import CartHeadings from "../components/cart/sects/CartHeadings.js";
import CartInner from "../components/cart/sects/CartInner.js";
import CartBottom from "../components/cart/sects/CartBottom.js";

//* Assets
import OtherPageNavs from "../helpers/OtherPageNavs";
import CartCheckerTester from "../assets/scripts/cross-page/products/CartCheckerTester.js";
import DisableCartLink from "../assets/scripts/single-page/nav/DisableCartLink";

const CartView = () => {
  useEffect(() => {
    document.title = "RealMeals.com | Your Cart";
  }, []);

  return (
    <div id="cartBody">
      <OtherPageNavs />

      {/* Dev Eyes only */}

      <div id="checkingTester">
        <div>
          <span>For Dev Eyes Only.</span>

          <h2>These items are in Session Storage:</h2>

          <button id="checkingTesterClearBtn">Clear SS</button>
        </div>
      </div>

      {/* UI */}
      <CartTop />
      <CartHeadings />
      <CartInner />
      <CartBottom />

      <Fragment>
        <CartCheckerTester />
        <DisableCartLink />
      </Fragment>
    </div>
  );
};

export default CartView;

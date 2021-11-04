import { FaShoppingCart } from "react-icons/fa";

const CartTop = () => {
  return (
    <div id="cartTop">
      <h2>
        <FaShoppingCart className="fa-icon" /> Your Cart
      </h2>

      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </p>
    </div>
  );
};

export default CartTop;

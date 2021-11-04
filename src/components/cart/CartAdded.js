import { useEffect } from "react";
import { createBrowserHistory } from "history";

const CartAdded = () => {
  const history = createBrowserHistory();

  useEffect(() => {
    document.querySelector("#cartAdded p").addEventListener("click", () => {
      history.push("/cart");

      setTimeout(() => {
        document.location.reload();
      }, 10);
    });
  }, [history]);

  return (
    <div id="cartAdded">
      <p to="/cart" className="page-transition">
        The item has been added to your cart!
      </p>
    </div>
  );
};

export default CartAdded;

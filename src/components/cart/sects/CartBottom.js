import { Component } from "react";
import { Items } from "../../../assets/scripts/cross-page/products/globals/Items";

class CartBottom extends Component {
  componentDidMount() {
    if (window.location.href.indexOf("cart") > -1) {
      //! Calculating Total Price

      let priceValue;
      let quantityValue;

      function calculateTotalPrice() {
        const subTotals = []; // Holds the prices of all individual items

        //* Getting Individual Subtotal
        document.querySelectorAll(".price").forEach((price) => {
          priceValue = price.innerHTML;
          quantityValue = price
            .closest(".cart-item")
            .querySelector(".quantity-side input").value;

          const subTotal = priceValue * quantityValue;

          subTotals.push(parseFloat(subTotal).toFixed(2)); // Rounds to nearest 2 decimals
        });

        //* Removing Quotations and keeping it in currency format
        const subTotalsCurrency = subTotals.map(Number);

        //* Adding up all of the subtotals
        var totalSum = 0;
        for (var i = 0; i < subTotalsCurrency.length; i++) {
          totalSum += subTotalsCurrency[i];
        }

        // If there are no prices/items, sets priceSum to 0, adds a empty hint and disables checkout btn
        if (subTotalsCurrency.length == 0) {
          totalSum = "0.00";

          const emptyHint = document.createElement("h6");
          emptyHint.innerHTML = "Cart is empty.";
          emptyHint.id = "cartEmpty";
          document.getElementById("cartItems").append(emptyHint);

          document.getElementById("cartCheckout").style.pointerEvents = "none";
          document.getElementById("cartCheckout").style.opacity = 0.5;
        }

        //* Sets cartTotal text to priceSum and rounds it to nearest 2 decimals
        document.getElementById("cartTotal").innerHTML = `$ ${
          Math.round(totalSum * 100) / 100
        }`;
      }
      calculateTotalPrice();

      // Every time user updates the quantity of an item, it will update the total
      document.querySelectorAll(".quantity-ipt").forEach((ipt) => {
        ipt.addEventListener("change", calculateTotalPrice);
      });

      document.getElementById("cartClearer").addEventListener("click", () => {
        Items.forEach((item) => {
          sessionStorage.removeItem(item);
        });

        setTimeout(() => {
          document.location.reload();
        }, 30);
      });
    }
  }

  render() {
    return (
      <div id="cartBottom">
        <div className="cart-bottom-box">
          <div className="cart-bottom-side">
            <div>
              <h5>
                Total: <span id="cartTotal"></span>
              </h5>
            </div>
          </div>

          <div className="cart-bottom-side">
            <div>
              <button
                id="cartClearer"
                className="page-transition cart-bottom-btn"
              >
                Clear
              </button>

              <button
                id="cartCheckout"
                className="page-transition cart-bottom-btn"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartBottom;

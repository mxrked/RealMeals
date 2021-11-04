import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Items } from "./globals/Items"; // All of the individual items

const CartCheckerTester = () => {
  const location = useLocation();

  useEffect(() => {
    const checkingCartTest = document.getElementById("checkingTester");

    document
      .getElementById("checkingTesterClearBtn")
      .addEventListener("click", () => {
        Items.forEach((key) => {
          sessionStorage.removeItem(key);
        });

        window.location.reload();
      });

    function cartCheckerStatus(status) {
      if (status === true) {
        checkingCartTest.style.display = "block";
      }

      if (status === false) {
        checkingCartTest.style.display = "none";
      }
    }
    cartCheckerStatus(false);

    function addCartItemToTester(ss, item) {
      const itemTest = document.createElement("p");
      itemTest.innerHTML = item;

      if (sessionStorage.getItem(ss)) {
        checkingCartTest.appendChild(itemTest);
      }
    }

    function checkingCartItemsTester() {
      //* Meats
      addCartItemToTester("Roasted Chicken", "Roasted Chicken");
      addCartItemToTester("Ribeye", "Ribeye");

      //* Produce
      addCartItemToTester("Canned Fruit", "Canned Fruit");
      addCartItemToTester("Corn", "Corn");

      //* Desserts
      addCartItemToTester("Chocolate Cake", "Chocolate Cake");
      addCartItemToTester("Mint Ice Cream", "Mint Ice Cream");
    }
    checkingCartItemsTester();
  }, [location]);

  return "";
};

export default CartCheckerTester;

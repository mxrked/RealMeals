import { useEffect } from "react";
import { useLocation } from "react-router";

const CheckingProductsList = () => {
  const location = useLocation();

  useEffect(() => {
    const ProductsList = []; // This will be what holds the items that will be added to cart count

    function meatsProducts() {
      if (sessionStorage.getItem("Roasted Chicken")) {
        ProductsList.push("Roasted Chicken");
      }

      if (sessionStorage.getItem("Ribeye")) {
        ProductsList.push("Ribeye");
      }

      if (sessionStorage.getItem("Lamb Chops")) {
        ProductsList.push("Lamb Chops");
      }

      if (sessionStorage.getItem("Lobster")) {
        ProductsList.push("Lobster");
      }

      if (sessionStorage.getItem("Salmon")) {
        ProductsList.push("Salmon");
      }

      if (sessionStorage.getItem("Turkey")) {
        ProductsList.push("Turkey");
      }
    }
    function produceProducts() {
      if (sessionStorage.getItem("Canned Fruit")) {
        ProductsList.push("Canned Fruit");
      }

      if (sessionStorage.getItem("Corn")) {
        ProductsList.push("Corn");
      }

      if (sessionStorage.getItem("Apples")) {
        ProductsList.push("Apples");
      }

      if (sessionStorage.getItem("Eggplant")) {
        ProductsList.push("Eggplant");
      }

      if (sessionStorage.getItem("Lemons")) {
        ProductsList.push("Lemons");
      }

      if (sessionStorage.getItem("Peanuts")) {
        ProductsList.push("Peanuts");
      }
    }
    function dessertProducts() {
      if (sessionStorage.getItem("Chocolate Cake")) {
        ProductsList.push("Chocolate Cake");
      }

      if (sessionStorage.getItem("Mint Ice Cream")) {
        ProductsList.push("Mint Ice Cream");
      }

      if (sessionStorage.getItem("Cheesecake")) {
        ProductsList.push("Cheesecake");
      }

      if (sessionStorage.getItem("Cupcakes")) {
        ProductsList.push("Cupcakes");
      }

      if (sessionStorage.getItem("Custard Cake")) {
        ProductsList.push("Custard Cake");
      }

      if (sessionStorage.getItem("Glaze Cake")) {
        ProductsList.push("Glaze Cake");
      }
    }

    function addingToProductsList() {
      meatsProducts();
      produceProducts();
      dessertProducts();

      console.log("Products List Items: " + ProductsList);
      console.log("Products List Length: " + ProductsList.length);
      document.getElementById("cartItemsLength").innerHTML =
        ProductsList.length;
    }
    addingToProductsList();

    document.querySelectorAll(".product-adder").forEach((adder) => {
      adder.addEventListener("click", () => {
        window.location.reload();
      });
    });
  }, [location]);
  return "";
};

export default CheckingProductsList;

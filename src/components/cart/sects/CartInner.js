import { Component } from "react";

class CartInner extends Component {
  componentDidMount() {
    function createCartItem(cID, cImg, cName, cPrice, itemSS) {
      const cartItemsHolder = document.getElementById("cartItems");

      const cartItem = document.createElement("div");
      cartItem.id = cID;
      cartItem.className += "cart-item";

      //* Product Side
      const cartProductSide = document.createElement("div");
      cartProductSide.className += "cart-item-side product-side";

      const cartImg = document.createElement("div");
      cartImg.className += "product-img";
      cartImg.style.backgroundImage = `url(${cImg})`;

      const cartName = document.createElement("p");
      cartName.innerHTML = cName;
      cartName.className += "product-name";

      cartProductSide.append(cartImg);
      cartProductSide.append(cartName);

      //* Quantity Side
      const cartQuantitySide = document.createElement("div");
      cartQuantitySide.className += "cart-item-side quantity-side";

      const cartQuantityIpt = document.createElement("input");
      cartQuantityIpt.className += "quantity-ipt";
      cartQuantityIpt.type = "number";

      cartQuantityIpt.max = 99;
      cartQuantityIpt.min = 0;
      cartQuantityIpt.value = 1;

      cartQuantitySide.append(cartQuantityIpt);

      cartQuantityIpt.addEventListener("change", () => {
        if (cartQuantityIpt.value === cartQuantityIpt.min) {
          removeCartItem(itemSS);
        }
      });

      function removeCartItem(itemSS) {
        cartItemRemover.parentElement.parentElement.remove();

        sessionStorage.removeItem(itemSS); // removing chance of recreating on remove

        setTimeout(() => {
          document.location.reload(); // helps update the cart counter
        }, 30);
      }

      //* Price Side
      const cartPriceSide = document.createElement("div");
      cartPriceSide.className += "cart-item-side price-side";

      const cartPrice = document.createElement("span");
      cartPrice.innerHTML = cPrice;
      cartPrice.className += "price";

      cartPriceSide.append(cartPrice);

      //* Remover Side
      const cartRemoverSide = document.createElement("div");
      cartRemoverSide.className += "cart-item-side remover-side";

      const cartItemRemover = document.createElement("button");
      cartItemRemover.innerHTML = "X";
      cartItemRemover.style.color = "white";
      cartItemRemover.className += "cart-item-remover page-transition";
      cartItemRemover.addEventListener("click", () => {
        removeCartItem(itemSS);
      });

      cartRemoverSide.append(cartItemRemover);
      cartItem.append(cartProductSide);
      cartItem.append(cartQuantitySide);
      cartItem.append(cartPriceSide);
      cartItem.append(cartRemoverSide);

      cartItemsHolder.append(cartItem); // Full Cart Item
    }

    function checkSSToCreateCartItem() {
      // Meats
      if (sessionStorage.getItem("Roasted Chicken")) {
        createCartItem(
          "cIRoastedChicken",
          "http://basicallyeasy.com/DynamicCDNS/realmeals/products/meats/roasted-chicken.jpg",
          "Roasted Chicken",
          "23.75",
          "Roasted Chicken"
        );
      }
      if (sessionStorage.getItem("Ribeye")) {
        createCartItem(
          "cIRibeye",
          "http://basicallyeasy.com/DynamicCDNS/realmeals/products/meats/ribeye.jpg",
          "Ribeye",
          "10.99",
          "Ribeye"
        );
      }
      if (sessionStorage.getItem("Lamb Chops")) {
        createCartItem(
          "cILambChops",
          "http://basicallyeasy.com/DynamicCDNS/realmeals/products/meats/lamb.jpg",
          "Lamb Chops",
          "10.55",
          "Lamb Chops"
        );
      }
      if (sessionStorage.getItem("Lobster")) {
        createCartItem(
          "cILobster",
          "http://basicallyeasy.com/DynamicCDNS/realmeals/products/meats/lobster.jpg",
          "Lobster",
          "16.99",
          "Lobster"
        );
      }
      if (sessionStorage.getItem("Salmon")) {
        createCartItem(
          "cISalmon",
          "http://basicallyeasy.com/DynamicCDNS/realmeals/products/meats/salmon.jpg",
          "Salmon",
          "9.45",
          "Salmon"
        );
      }

      // Produce
      if (sessionStorage.getItem("Canned Fruit")) {
        createCartItem(
          "cICannedFruit",
          "http://basicallyeasy.com/DynamicCDNS/realmeals/products/produce/canned-fruit.jpg",
          "Canned Fruit",
          "3.50",
          "Canned Fruit"
        );
      }
      if (sessionStorage.getItem("Corn")) {
        createCartItem(
          "cICorn",
          "http://basicallyeasy.com/DynamicCDNS/realmeals/products/produce/corn.jpg",
          "Corn",
          "4.49",
          "Corn"
        );
      }
      if (sessionStorage.getItem("Apples")) {
        createCartItem(
          "cIApples",
          "http://basicallyeasy.com/DynamicCDNS/realmeals/products/produce/apples.jpg",
          "Apples",
          "4.99",
          "Apples"
        );
      }
      if (sessionStorage.getItem("Eggplant")) {
        createCartItem(
          "cIEggplant",
          "http://basicallyeasy.com/DynamicCDNS/realmeals/products/produce/eggplant.jpg",
          "Eggplant",
          "4.60",
          "Eggplant"
        );
      }
      if (sessionStorage.getItem("Lemons")) {
        createCartItem(
          "cILemons",
          "http://basicallyeasy.com/DynamicCDNS/realmeals/products/produce/lemons.jpg",
          "Lemons",
          "2.85",
          "Lemons"
        );
      }
      if (sessionStorage.getItem("Peanuts")) {
        createCartItem(
          "cIPeanuts",
          "http://basicallyeasy.com/DynamicCDNS/realmeals/products/produce/peanuts.jpg",
          "Peanuts",
          "0.85",
          "Peanuts"
        );
      }

      // Desserts
      if (sessionStorage.getItem("Chocolate Cake")) {
        createCartItem(
          "cIChocolateCake",
          "http://basicallyeasy.com/DynamicCDNS/realmeals/products/desserts/chocolate-cake.jpg",
          "Chocolate Cake",
          "14.99",
          "Chocolate Cake"
        );
      }
      if (sessionStorage.getItem("Mint Ice Cream")) {
        createCartItem(
          "cIMintIceCream",
          "http://basicallyeasy.com/DynamicCDNS/realmeals/products/desserts/mint-ice-cream.jpg",
          "Mint Ice Cream",
          "5.29",
          "Mint Ice Cream"
        );
      }
      if (sessionStorage.getItem("Cheesecake")) {
        createCartItem(
          "cICheesecake",
          "http://basicallyeasy.com/DynamicCDNS/realmeals/products/desserts/cheesecake.jpg",
          "Cheesecake",
          "6.85",
          "Cheesecake"
        );
      }
      if (sessionStorage.getItem("Cupcakes")) {
        createCartItem(
          "cICupcakes",
          "http://basicallyeasy.com/DynamicCDNS/realmeals/products/desserts/cupcakes.jpg",
          "Cupcakes",
          "5.45",
          "Cupcakes"
        );
      }
      if (sessionStorage.getItem("Custard Cake")) {
        createCartItem(
          "cICustardCake",
          "http://basicallyeasy.com/DynamicCDNS/realmeals/products/desserts/custard-cake.jpg",
          "Custard Cake",
          "10.75",
          "Custard Cake"
        );
      }
      if (sessionStorage.getItem("Glaze Cake")) {
        createCartItem(
          "cIGlazeCake",
          "http://basicallyeasy.com/DynamicCDNS/realmeals/products/desserts/glaze-cake.jpg",
          "Glaze Cake",
          "10.20",
          "Glaze Cake"
        );
      }
    }

    if (window.location.href.indexOf("cart") > -1) {
      checkSSToCreateCartItem();
    }
  }

  render() {
    return (
      <div id="cartInner">
        <div id="cartItems"></div>
      </div>
    );
  }
}

export default CartInner;

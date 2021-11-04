import { useEffect } from "react";
import { useLocation } from "react-router";

const CartAddedAlert = () => {
  const location = useLocation();

  useEffect(() => {
    const cAdded = document.getElementById("cartAdded");
    cAdded.style.width = 0;

    function animateCartAdded() {
      if (sessionStorage.getItem("Product Added")) {
        cAdded.style.width = "100%";
      }

      setTimeout(() => {
        document.querySelector("#cartAdded p").style.opacity = "0";
        cAdded.style.width = 0;
        sessionStorage.removeItem("Product Added");
      }, 2000);
    }
    animateCartAdded();

    document.querySelectorAll(".product-adder").forEach((btn) => {
      btn.addEventListener("click", () => {
        sessionStorage.setItem("Product Added", true);

        setTimeout(() => {
          animateCartAdded();
        }, 10);
      });
    });

    document
      .querySelectorAll(".products-product-sect-item-cnt button")
      .forEach((btn) => {
        btn.addEventListener("click", () => {
          sessionStorage.setItem("Product Added", true);

          setTimeout(() => {
            animateCartAdded();
          }, 10);
        });
      });
  }, [location]);

  return "";
};

export default CartAddedAlert;

import { useEffect } from "react";
import { useHistory } from "react-router";

const ProductsScrollIntoView = () => {
  const history = useHistory();

  useEffect(() => {
    const globalURL = window.location.href;

    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    window.addEventListener("load", () => {
      if (window.location.href.indexOf("products") > -1) {
        if (globalURL.indexOf("products#p0") > -1) {
          window.scrollTo(0, 0);
        }

        if (globalURL.indexOf("products#p1") > -1) {
          document
            .getElementById("productsMeats")
            .scrollIntoView({ behavior: "smooth" });
        }

        if (globalURL.indexOf("products#p2") > -1) {
          document
            .getElementById("productsProduce")
            .scrollIntoView({ behavior: "smooth" });
        }

        if (globalURL.indexOf("products#p3") > -1) {
          document
            .getElementById("productsDesserts")
            .scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  }, [history]);

  return "";
};

export default ProductsScrollIntoView;

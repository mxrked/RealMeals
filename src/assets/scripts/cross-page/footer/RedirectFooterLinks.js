import { useEffect } from "react";
import { useHistory, withRouter } from "react-router";

const RedirectFooterLinks = () => {
  const history = useHistory();

  useEffect(() => {
    function redirectToPage(route) {
      history.push(`/${route}`);
      document.location.reload();
      window.scrollTo(0, 0);
    }

    const allGeneralLinks = document.querySelectorAll(".footer-general-link");
    const allProductLinks = document.querySelectorAll(".footer-product-link");

    //* General
    allGeneralLinks[0].addEventListener("click", () => {
      redirectToPage("home");
    });
    allGeneralLinks[1].addEventListener("click", () => {
      redirectToPage("about");
    });
    // allGeneralLinks[2].addEventListener("click", () => {
    //   redirectToPage("team");
    // });
    allGeneralLinks[2].addEventListener("click", () => {
      redirectToPage("contact");
    });
    // allGeneralLinks[3].addEventListener("click", () => {
    //   redirectToPage("contact");
    // });

    //* Products
    allProductLinks[0].addEventListener("click", () => {
      redirectToPage("products#p0");
    });
    allProductLinks[1].addEventListener("click", () => {
      redirectToPage("products#p1");
    });
    allProductLinks[2].addEventListener("click", () => {
      redirectToPage("products#p2");
    });
    allProductLinks[3].addEventListener("click", () => {
      redirectToPage("products#p3");
    });
  }, [history]);

  return "";
};

export default withRouter(RedirectFooterLinks);

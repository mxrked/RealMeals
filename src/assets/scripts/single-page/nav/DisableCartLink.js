import { useEffect } from "react";
import { useLocation } from "react-router";

const DisableCartLink = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.indexOf("cart") > -1) {
      document.getElementById("cartLink").style.pointerEvents = "none";
    }
  }, [location]);

  return "";
};

export default DisableCartLink;

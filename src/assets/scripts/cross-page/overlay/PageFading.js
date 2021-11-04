import { useEffect } from "react";
import { useLocation } from "react-router";

//! This script is used to create a pageFade/transition due to Framer Motion being broken due to new version
const PageFading = () => {
  const location = useLocation();

  useEffect(() => {
    const pF = document.getElementById("pageFade");
    pF.style.display = "block";
    pF.style.opacity = 1;

    setTimeout(() => {
      pF.style.opacity = 0;
    }, 300);
    setTimeout(() => {
      pF.style.display = "none";
    }, 700);
  }, [location.pathname]);

  return "";
};

export default PageFading;

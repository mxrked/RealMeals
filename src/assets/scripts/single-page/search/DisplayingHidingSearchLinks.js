import { useEffect } from "react";

const DisplayingHidingSearchLinks = () => {
  useEffect(() => {
    const sL = document.getElementById("searchLinks");
    sL.style.display = "none";

    document.getElementById("searchFieldIpt").addEventListener("click", () => {
      sL.style.display = "block";
    });

    document.getElementById("searchFieldIpt").addEventListener("blur", () => {
      setTimeout(() => {
        sL.style.display = "none";
      }, 100);
    });
  }, []);

  return "";
};

export default DisplayingHidingSearchLinks;

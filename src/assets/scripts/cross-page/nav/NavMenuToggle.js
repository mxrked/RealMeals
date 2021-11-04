import { useEffect } from "react";

const NavMenuToggle = () => {
  useEffect(() => {
    //! Defaults
    document.getElementById("navMenuMain").style.display = "none";
    document.getElementById("navMenuMain").classList.toggle("deactive");
    document.getElementById("navCloser").classList.toggle("deactive");
    document.getElementById("navMenuMainCnt").style.opacity = "0";
    document.getElementById("navMenuBG").style.transform =
      "translateX(-1200px)";
    document.getElementById("navCloser").style.pointerEvents = "none";

    //* Sets
    document.getElementById("generalSet").style.top = "-50px";
    document.getElementById("generalSet").classList.toggle("deactive");

    document.getElementById("navBottomSet").style.bottom = "-50px";
    document.getElementById("navBottomSet").classList.toggle("deactive");

    document.getElementById("navToggler").addEventListener("click", () => {
      document.body.style.overflowY = "hidden";
      document.getElementById("navMenuMain").style.display = "flex";

      setTimeout(() => {
        document.getElementById("navMenuMain").classList.remove("deactive");
        document.getElementById("navMenuBG").style.transform =
          "translateX(0px)";
      }, 200);

      setTimeout(() => {
        document.getElementById("navMenuMainCnt").style.opacity = "1";
      }, 900);

      setTimeout(() => {
        document.getElementById("generalSet").classList.remove("deactive");
        document.getElementById("generalSet").style.top = "0";

        document.getElementById("navBottomSet").style.bottom = "0px";
        document.getElementById("navBottomSet").classList.remove("deactive");
      }, 1700);

      setTimeout(() => {
        document.getElementById("navCloser").classList.remove("deactive");
      }, 2500);
      setTimeout(() => {
        document.getElementById("navCloser").style.pointerEvents = "auto";
      }, 2800);
    });
  }, []);

  return "";
};

export default NavMenuToggle;

import { useEffect } from "react";

const NavMenuClose = () => {
  useEffect(() => {
    document.getElementById("navCloser").addEventListener("click", () => {
      document.getElementById("navCloser").style.pointerEvents = "none";
      document.getElementById("navCloser").classList.toggle("deactive");
      document.getElementById("navMenuMainCnt").style.opacity = "0";

      setTimeout(() => {
        document.getElementById("navMenuBG").style.transform =
          "translateX(-1200px)";
      }, 400);

      setTimeout(() => {
        document.getElementById("navMenuMain").classList.toggle("deactive");
      }, 1200);

      setTimeout(() => {
        document.getElementById("navMenuMain").style.display = "none";
        document.body.style.overflowY = "auto";
      }, 2100);
    });
  }, []);

  return "";
};

export default NavMenuClose;

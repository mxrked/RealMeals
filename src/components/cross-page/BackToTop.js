import { useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

const BackToTop = () => {
  useEffect(() => {
    document.getElementById("backToTopBtn").addEventListener("click", () => {
      window.scrollTo(0, 0);
    });

    // This will determine to hide/show the backToTopBtn
    function backToTopState() {
      const y = window.scrollY;
      const bTT = document.getElementById("backToTopBtn");

      if (y <= 100) {
        bTT.style.bottom = "-100px";
      } else {
        bTT.style.bottom = "40px";
      }
    }

    backToTopState();
    window.addEventListener("scroll", backToTopState);
  }, []);

  return (
    <button id="backToTopBtn" className="page-transition">
      <FaChevronUp />
    </button>
  );
};

export default BackToTop;

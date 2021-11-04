import { useEffect } from "react";

const FilteringSearchLinks = () => {
  useEffect(() => {
    const sFInput = document.getElementById("searchFieldIpt");
    const sL = document.getElementById("searchLinks");
    const sLLi = sL.getElementsByTagName("li");

    function filterSL() {
      var filter, a, i, txtVal;

      filter = sFInput.value.toUpperCase();

      for (i = 0; i < sLLi.length; i++) {
        a = sLLi[i].getElementsByTagName("a")[0];
        txtVal = a.textContent || a.innerText;

        if (txtVal.toUpperCase().indexOf(filter) > -1) {
          sLLi[i].style.display = "";
        } else {
          sLLi[i].style.display = "none";
        }
      }
    }

    sFInput.addEventListener("keyup", filterSL);
  }, []);

  return "";
};

export default FilteringSearchLinks;

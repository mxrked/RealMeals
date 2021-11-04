import { useEffect } from "react";
import { useHistory } from "react-router";

const IndexCategoriesHP = () => {
  const history = useHistory();

  useEffect(() => {
    function addHPToIC(cat, hp) {
      cat.addEventListener("click", () => {
        history.push(hp);
        document.location.reload();
      });
    }

    addHPToIC(document.getElementById("iCI1"), "/products#p0");
    addHPToIC(document.getElementById("iCI2"), "/products#p1");
    addHPToIC(document.getElementById("iCI3"), "/products#p2");
    addHPToIC(document.getElementById("iCI4"), "/products#p3");
  }, [history]);

  return "";
};

export default IndexCategoriesHP;

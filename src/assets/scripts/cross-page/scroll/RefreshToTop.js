import { useEffect } from "react";
import { createBrowserHistory as createHistory } from "history";

const RefreshToTop = () => {
  const history = createHistory();

  useEffect(() => {
    function declaringSR(e) {
      if ("scrollRestoration" in history) {
        history.scrollRestoration = e;
      }

      window.scrollTo(0, 0);
    }

    window.addEventListener("load", declaringSR("manual"));
  }, [history]);

  return "";
};

export default RefreshToTop;

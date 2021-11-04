import { useEffect } from "react";
import { useHistory } from "react-router";

const PageChangeOverflowFix = () => {
  const history = useHistory();
  useEffect(() => {
    const unlisten = history.listen(() => {
      document.body.style.overflowY = "auto";
    });
    return function cleanup() {
      unlisten();
    };
  }, [history]);

  return "";
};

export default PageChangeOverflowFix;

//! Search Page
import { useEffect } from "react";

//* Components
import SearchMain from "../components/search/SearchMain";
import SearchBottom from "../components/search/bottom/SearchBottom";

//* Assets
import OtherPageNavs from "../helpers/OtherPageNavs";

const SearchView = () => {
  useEffect(() => {
    document.title = "RealMeals.com | Search Page";
  }, []);

  return (
    <div id="searchBody">
      <OtherPageNavs />

      <SearchMain />
      <SearchBottom />
    </div>
  );
};

export default SearchView;

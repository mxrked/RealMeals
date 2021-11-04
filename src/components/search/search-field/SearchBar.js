import { Fragment } from "react";

// Assets
import DisplayingHidingSearchLinks from "../../../assets/scripts/single-page/search/DisplayingHidingSearchLinks";
import FilteringSearchLinks from "../../../assets/scripts/single-page/search/FilteringSearchLinks";
import CheckingSearchFieldVal from "../../../assets/scripts/single-page/search/CheckingSearchFieldVal";

const SearchBar = () => {
  return (
    <div id="searchBar">
      <div className="search-bar-holder">
        <input
          type="text"
          id="searchFieldIpt"
          className="page-transition"
          placeholder="Search for something.."
        />

        <button id="searchFieldGo" className="page-transition">
          Search
        </button>
      </div>

      <Fragment>
        <DisplayingHidingSearchLinks />
        <FilteringSearchLinks />
        <CheckingSearchFieldVal />
      </Fragment>
    </div>
  );
};

export default SearchBar;

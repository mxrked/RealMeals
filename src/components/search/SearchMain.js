import SearchBar from "./search-field/SearchBar";
import SearchLinks from "./search-field/SearchLinks";

const SearchMain = () => {
  return (
    <div id="searchMain">
      <div
        className="search-field-box lazyload"
        data-bg="http://basicallyeasy.com/DynamicCDNS/realmeals/search/search-bar-bg.jpg"
        aria-label="Search Field Background."
      >
        <div className="search-field-cnt">
          <div className="search-field-cnt-inner">
            <h2>Where would you like to go?</h2>

            <SearchBar />
            <SearchLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchMain;

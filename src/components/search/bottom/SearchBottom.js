import { Component } from "react";
import { Link } from "react-router-dom";

class SearchBottom extends Component {
  constructor(props) {
    super(props);

    this.createSearchBottomSet = this.createSearchBottomSet.bind(this);
  }

  createSearchBottomSet(props) {
    return (
      <div className="search-bottom-set">
        <div className="search-bottom-set-cnt">
          <h3>{props.searchBottomH3}</h3>

          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren.
          </p>

          <div>
            <Link to={props.searchBottomLinkTO} className="page-transition">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div id="searchBottomMain">
        <this.createSearchBottomSet
          searchBottomH3="What can I search for?"
          searchBottomLinkTO="/products#p0"
        ></this.createSearchBottomSet>

        <this.createSearchBottomSet
          searchBottomH3="Help! I cannot find what I am looking for."
          searchBottomLinkTO="/contact"
        ></this.createSearchBottomSet>
      </div>
    );
  }
}

export default SearchBottom;

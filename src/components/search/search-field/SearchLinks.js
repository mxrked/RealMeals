import { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class SearchLinks extends Component {
  constructor(props) {
    super(props);

    this.createSearchLinks = this.createSearchLinks.bind(this);
  }

  createSearchLinks(props) {
    return (
      <li className="search-link-li">
        <Link to={props.searchLinkTO} className="page-transition">
          {props.searchLinkTXT}
        </Link>
      </li>
    );
  }

  render() {
    return (
      <div className="search-links-holder">
        <ul id="searchLinks">
          <this.createSearchLinks searchLinkTO="/home" searchLinkTXT="Home" />
          <this.createSearchLinks
            searchLinkTO="/about"
            searchLinkTXT="About Us"
          />
          <this.createSearchLinks
            searchLinkTO="/products#p0"
            searchLinkTXT="All Products"
          />
          <this.createSearchLinks
            searchLinkTO="/products#p1"
            searchLinkTXT="Meats"
          />
          <this.createSearchLinks
            searchLinkTO="/products#p2"
            searchLinkTXT="Produce"
          />
          <this.createSearchLinks
            searchLinkTO="/products#p3"
            searchLinkTXT="Desserts"
          />
          {/* 
          <this.createSearchLinks
            searchLinkTO="/team"
            searchLinkTXT="Our Team"
          />
          */}
          <this.createSearchLinks
            searchLinkTO="/contact"
            searchLinkTXT="Contact Us"
          />
        </ul>

        <Fragment></Fragment>
      </div>
    );
  }
}

export default SearchLinks;

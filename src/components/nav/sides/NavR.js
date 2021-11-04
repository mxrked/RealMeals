import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const NavR = () => {
  return (
    <div
      className="col-lg-8 col-md-8 col-sm-6 col-xs-6 navigation-side"
      id="navR"
    >
      <div className="navigation-side-cnt">
        <div className="nav-r-set">
          <Link to="/cart" className="page-transition" id="cartLink">
            <div className="nav-cart-holder">
              <FaShoppingCart />

              <p id="cartItemsLength">0</p>
            </div>
          </Link>
        </div>
        <div className="nav-r-set">
          <Link to="/search" className="page-transition">
            <FaSearch />
          </Link>
        </div>
        <div className="nav-r-set">
          <button id="navToggler">
            <span className="page-transition" />
            <span className="page-transition" />
            <span className="page-transition" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavR;

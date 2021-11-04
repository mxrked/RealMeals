import { useEffect } from "react";
import { Link } from "react-router-dom";

const ProductsSet = () => {
  useEffect(() => {
    document.querySelectorAll(".product-nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        document.location.reload();
      });
    });
  }, []);

  return (
    <div id="productsSet">
      <h3>Products</h3>

      <div>
        <ul>
          <li>
            <Link
              to="/products#p0"
              className="page-transition product-nav-link"
            >
              <p>All Products</p>
              <span className="page-transition" />
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/products#p1"
              className="page-transition product-nav-link"
            >
              <p>Meats</p>
              <span className="page-transition" />
            </Link>
          </li>
          <li>
            <Link
              to="/products#p2"
              className="page-transition product-nav-link"
            >
              <p>Produce</p>
              <span className="page-transition" />
            </Link>
          </li>
          <li>
            <Link
              to="/products#p3"
              className="page-transition product-nav-link"
            >
              <p>Desserts</p>
              <span className="page-transition" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductsSet;

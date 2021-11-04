import { Link } from "react-router-dom";

const IndexProductsTop = () => {
  return (
    <div className="index-products-top">
      <div className="index-products-top-cnt">
        <h2>Browse our products</h2>

        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor.
        </p>

        <Link to="/products#p0" className="page-transition">
          View All
        </Link>
      </div>
    </div>
  );
};

export default IndexProductsTop;

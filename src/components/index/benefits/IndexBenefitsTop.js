import { Link } from "react-router-dom";

const IndexBenefitsTop = () => {
  return (
    <div className="index-benefits-top">
      <div className="index-benefits-top-cnt">
        <h2>Awesome Benefits</h2>

        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor.
        </p>

        <div>
          <Link to="/products#p0" className="page-transition">
            Browse Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndexBenefitsTop;

import { Link } from "react-router-dom";

const IndexInfoText = () => {
  return (
    <div
      className="col-lg-8 col-md-8 col-sm-9 col-xs-12 index-info-side"
      id="indexInfoR"
    >
      <div className="index-info-side-cnt">
        <h2>Learn our background</h2>

        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </p>

        <div>
          <Link to="/about" className="page-transition">
            Learn More
          </Link>

          <Link to="/contact" className="page-transition">
            Our Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndexInfoText;

import { Link } from "react-router-dom";

const GeneralSet = () => {
  return (
    <div className="nav-main-menu-set page-transition" id="generalSet">
      <h3>General</h3>

      <div>
        <Link to="/home" className="page-transition">
          <p>Home</p>
          <span className="page-transition" />
        </Link>

        <Link to="/about" className="page-transition">
          <p>About Us</p>
          <span className="page-transition" />
        </Link>

        {/* 
        <Link to="/team" className="page-transition">
          <p>Our Team</p>
          <span className="page-transition" />
        </Link>
        */}

        <Link to="/contact" className="page-transition">
          <p>Contact Us</p>
          <span className="page-transition" />
        </Link>
      </div>
    </div>
  );
};

export default GeneralSet;

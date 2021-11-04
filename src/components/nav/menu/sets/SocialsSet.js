import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialsSet = () => {
  return (
    <div id="socialsSet">
      <h3>Socials</h3>

      <div>
        <Link to="/contact" className="page-transition">
          <p>Reaching Out</p>
          <span className="page-transition" />
        </Link>

        <ul>
          <li>
            <FaTwitter className="fa-icon page-transition" />
          </li>

          <li>
            <FaFacebook className="fa-icon page-transition" />
          </li>

          <li>
            <FaGithub className="fa-icon page-transition" />
          </li>

          <li>
            <FaLinkedin className="fa-icon page-transition" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialsSet;

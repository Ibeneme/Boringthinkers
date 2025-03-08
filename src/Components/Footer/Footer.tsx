// import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
// import { TbBrandThreads } from "react-icons/tb";
import logo from "../../assets/images/logo/vite.png";
import "./Footer.css";
import { Link } from "react-router-dom";

interface FooterProps {
  hideContactUs?: boolean;
  showContactUs?: boolean;
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-left">
          <div className="footer-logo-section">
            <img src={logo} alt="BoringThinkers Logo" className="footer-logo" />
          </div>
          <p className="footer-description">
            At Boring Thinkers, we transform complex challenges into simple,
            intuitive solutions. Our mission is to craft innovative, efficient,
            and user-friendly software that enhances productivity and improves
            everyday experiences. We believe technology should make life easier,
            not harder.
          </p>
          {/* <div className="footer-icons">
            <span className="social-icon">
              <FaFacebookF />
            </span>
            <span className="social-icon">
              <TbBrandThreads />
            </span>
            <span className="social-icon">
              <FaTwitter />
            </span>
            <span className="social-icon">
              <FaYoutube />
            </span>
            <span className="social-icon">
              <FaInstagram />
            </span>
          </div> */}
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <Link to="/about-us" className="footer-link">
            About Us
          </Link>
          <Link to="/projects" className="footer-link">
            Our Projects
          </Link>
          <Link to="/team" className="footer-link">
            Our Team
          </Link>
          <Link to="/careers" className="footer-link">
            Careers
          </Link>
          <Link to="/privacy-policy" className="footer-link">
            Privacy Policy
          </Link>{" "}
          {/* <Link to="/contact-us" className="footer-link">
            Contact Us
          </Link> */}
        </div>
      </div>

      {/* Bottom Section  {new Date().getFullYear()}*/}
      <div className="footer-bottom" style={{ color: "#fff" }}>
        <p>© 2024 BoringThinkers. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

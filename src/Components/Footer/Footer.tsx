import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/images/logo/vite.png";
import "./Footer.css";
import ContactUs from "./ContactUs";
import SlidingPage from "./SlidingPage";

interface FooterProps {
  hideContactUs?: boolean;
  showContactUs?: boolean;
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <section>
      <SlidingPage />
      <ContactUs />
      <footer className="footer">
        <div className="footer-content">
          {/* Left Section */}
          <div className="footer-left">
            <div className="footer-logo-section">
              <img
                src={logo}
                alt="BoringThinkers Logo"
                className="footer-logo"
              />
            </div>
            <p className="footer-description">
              At Boring Thinkers, we transform complex challenges into simple,
              intuitive solutions. Our mission is to craft innovative,
              efficient, and user-friendly software that enhances productivity
              and improves everyday experiences. We believe technology should
              make life easier, not harder.
            </p>

            {/* ✅ Email Links with Icons */}
            <div className="footer-emails">
              <p
                style={{
                  alignItems: "center",
                  display: "flex",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    backgroundColor: "#FFD00024",
                    borderRadius: 12,
                    padding: 12,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    width: "fit-content",
                  }}
                >
                  <FaEnvelope style={{ color: "#FFD000" }} />
                </span>{" "}
                <a
                  href="mailto:Contact@boringthinkers.com"
                  style={{ color: "#FFD000" }}
                >
                  Contact@boringthinkers.com
                </a>
              </p>
              <br />
              <p
                style={{
                  alignItems: "center",
                  display: "flex",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    backgroundColor: "#FFD00024",
                    borderRadius: 12,
                    padding: 12,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    width: "fit-content",
                  }}
                >
                  <FaEnvelope style={{ color: "#FFD000" }} />
                </span>{" "}
                <a
                  href="mailto:admin@boringthinkers.com"
                  style={{ color: "#FFD000" }}
                >
                  Admin@boringthinkers.com
                </a>
              </p>
              <br />

              <p
                style={{
                  alignItems: "center",
                  display: "flex",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    backgroundColor: "#FFD00024",
                    borderRadius: 12,
                    padding: 12,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    width: "fit-content",
                  }}
                >
                  <FaPhone style={{ color: "#FFD000" }} />
                </span>{" "}
                <a href="tel:+2348120710198" style={{ color: "#FFD000" }}>
                  (+234) 812 071 0198
                </a>
              </p>
              <br />
              <p
                style={{
                  alignItems: "center",
                  display: "flex",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    backgroundColor: "#25D36624", // WhatsApp green tint
                    borderRadius: 12,
                    padding: 12,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    width: "fit-content",
                  }}
                >
                  <FaWhatsapp style={{ color: "#25D366" }} />
                </span>{" "}
                <a
                  href="https://wa.me/2348120710198"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#25D366" }}
                >
                  WhatsApp Chat
                </a>
              </p>
            </div>
            <br />
            <br />
          </div>

          {/* Right Section */}

          <div className="footer-right">
            <Link to="/about-us" className="footer-link">
              About Us
            </Link>
            <Link to="/projects" className="footer-link">
              Our Projects
            </Link>
            {/* <Link to="/team" className="footer-link">
              Our Team
            </Link> */}
            <Link to="/careers" className="footer-link">
              Careers
            </Link>
            <Link to="/privacy-policy" className="footer-link">
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom" style={{ color: "#fff" }}>
          <p>
            © {new Date().getFullYear()} BoringThinkers. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;

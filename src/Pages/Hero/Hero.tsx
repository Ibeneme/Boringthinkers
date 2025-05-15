import React from "react";
import "./Hero.css";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import logo from "../../assets/images/logo/white.png";
import InfiniteCarousel from "./InfiniteCarousel";

const Hero: React.FC = () => {
  // Function to open email client
  const handleSendMail = () => {
    window.location.href = "mailto:contact@boringthinkers.com";
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <img src={logo} alt="logo" width={120} style={{ marginBottom: 48 }} />
        <h1 className="h1-hero">BORING THINKERS</h1>
        <p className="paragraph-hero">
          Software Development Company For Startups and businesses
        </p>

        {/* <p className="paragraph-hero">
          Software Development Company For{" "}
          <span style={{ color: "#FFD000", opacity: 2 }}>Startups </span> and
          <span style={{ color: "#FFD000", opacity: 2 }}> Businesses </span>
        </p>
        */}
        <button onClick={handleSendMail} className="cta">
          Send us a Mail
          <IoArrowForwardCircleSharp color="#011404" fontSize={48} />
        </button>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 48,
            gap: 12,
          }}
        >
          <span
            style={{ color: "#FFD000", fontSize: "24px", borderRadius: 24 }}
          >
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
          </span>
          <p style={{ fontSize: "16px", color: "#FFD000", margin: 0 }}>
            Trusted by 3+ Companies
          </p>
        </div>
      </div>
      <InfiniteCarousel />
    </section>
  );
};

export default Hero;

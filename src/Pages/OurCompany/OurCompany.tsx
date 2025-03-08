import React from "react";
import "./OurCompany.css";
import companyImage from "../../assets/images/snips/panka.jpg"; // Replace with actual image path
import { IoArrowForwardCircleSharp } from "react-icons/io5";

const OurCompany: React.FC = () => {
  const handleSendMail = () => {
    window.location.href = "mailto:boringthinkers@gmail.com";
  };

  return (
    <section className="company-container">
      <div className="company-content">
        <h1 className="company-title">OUR COMPANY</h1>
        <p className="company-description">
          Boring Thinkers specializes in building innovative software solutions
          for companies and startups. We simplify complex processes, helping
          businesses operate more efficiently with reliable, scalable, and user
          friendly technology.
          <br />
          We believe that “boring” can be powerful by eliminating unnecessary
          complexities, streamlining workflows, and focusing on what truly
          matters. Our approach is simple: identify the problem, solve the
          problem.
          <br />
          Our products are designed to empower businesses, automate tasks, and
          drive growth while making day to day operations feel effortless. In
          the end, we make software that works so seamlessly, it almost feels…
          boring.
        </p>
        <br />
        <div>
          <button onClick={handleSendMail} className="cta">
            Send us a Mail
            <IoArrowForwardCircleSharp color="#011404" fontSize={48} />
          </button>
        </div>
      </div>
      <div className="company-image-container">
        <img
          src={companyImage}
          alt="Boring Thinkers Team"
          className="company-image"
        />
      </div>
    </section>
  );
};

export default OurCompany;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./OurCompany.css";
import crayons from "../../assets/images/new/codeb.jpg";
import { IoArrowForwardCircleSharp } from "react-icons/io5";

const OurCompany: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  const handleSendMail = () => {
    window.location.href = "mailto:contact@boringthinkers.com";
  };

  return (
    <section className="company-container">
      <div className="company-content" data-aos="zoom-out">
        <h1 className="company-title">Our Company</h1>
        <p className="company-description" data-aos="zoom-out">
          Boring Thinkers is not your typical software development company,
          we’re a creative powerhouse built for startups and future-focused
          businesses.
          <br />
          <br />
          We don’t just write code; we craft digital experiences, solve complex
          problems, and bring bold ideas to life.
          <br />
          <br />
          From MVPs to enterprise platforms, we help visionary founders and
          teams turn their concepts into scalable, intuitive, and beautiful
          products.
          <br />
          <br />
          Our approach is lean, collaborative, and insanely driven by purpose.
          Whether you’re building from scratch or evolving something big, we
          bring the speed of a startup and the quality of a top-tier company.
          <br />
          <br />
          At Boring Thinkers, we believe in challenging the boring. We build
          fast. We think deep. We deliver smart
        </p>
        <br />
        <div data-aos="zoom-out">
          <button onClick={handleSendMail} className="cta">
            Send us a Mail
            <IoArrowForwardCircleSharp color="#011404" fontSize={48} />
          </button>
        </div>
      </div>
      <div className="company-image-container" data-aos="zoom-out">
        <img
          src={crayons}
          alt="Boring Thinkers Team"
          className="company-image"
        />
      </div>
    </section>
  );
};

export default OurCompany;

import React from "react";
import "./SlidingPage.css";

const SlidingPage: React.FC = () => {
  return (
    <div className="sliding-page">
      <div className="sliding-track">
        <span className="sliding-text">
          {"THE BORING THINKERS  ".repeat(20)}
        </span>
        <span className="sliding-text">
          {"THE BORING THINKERS  ".repeat(20)}
        </span>
      </div>
    </div>
  );
};

export default SlidingPage;
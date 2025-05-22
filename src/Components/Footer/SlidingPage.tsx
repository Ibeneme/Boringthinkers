import React from "react";
import "./SlidingPage.css";

const SlidingPage: React.FC = () => {
  return (
    <div className="sliding-page">
      <div className="scrolling-text">
        {/* Repeat text multiple times for smooth infinite scroll */}
        {"THE BORING THINKERS  ".repeat(20)}
      </div>
    </div>
  );
};

export default SlidingPage;
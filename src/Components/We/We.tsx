import dream from "../../../src/assets/images/we/dream.png";
import design from "../../../src/assets/images/we/design.png";
import main from "../../../src/assets/images/we/main.png";
import mainb from "../../../src/assets/images/we/mainb.png";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./We.css";

const sections = [
  {
    title: "You Dream, We Build.",
    description:
      "We turn your boldest ideas into functional, beautiful, scalable digital products. Whether it's an app, a platform, or something that doesn't exist yet if you can dream it, we can build it.",
    bgColor: "#DFFFDC",
    image: dream,
    textColor: "#121212",
  },
  {
    title: "Our Design Style",
    description:
      "Simplicity meets elegance. We design with the user in mind, blending clean interfaces with deep usability to create intuitive, memorable digital experiences.",

    bgColor: "#E8DEFF",
    image: design,
    textColor: "#121212",
  },
  {
    title: "Our Build Style",
    description:
      "Code that works and scales. Our engineering approach is modular, clean, and tested with a focus on performance, flexibility, and future-proof architecture.",

    bgColor: "#FFE2E9",
    image: main,
    textColor: "#121212", // <-- index 2
  },
  {
    title: "Speed, Security & Maintenance",
    description:
      "We don’t disappear after launch. We stay proactive monitoring, refining, and improving to ensure your product stays sharp and reliable over time. And we ship fast without compromising on security, privacy, or protection.",
    bgColor: "#FFEECB",
    image: mainb,
    textColor: "#121212",
  },
];

const We: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <div className="vision-page">
      <div className="vision-grid">
        {sections.map((section, index) => (
          <section
            className="vision-section"
            style={{
              backgroundColor: section.bgColor,
              color: section.textColor,
            }}
            key={index}
            data-aos="fade-up"
          >
            <div className="vision-section-content">
              <img
                src={section.image}
                alt={section.title}
                className="vision-image"
              />
              <h2 className="vision-title" style={{ color: section.textColor }}>
                {section.title}
              </h2>
              <p
                className="vision-description"
                style={{ color: section.textColor }}
              >
                {section.description}
              </p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default We;

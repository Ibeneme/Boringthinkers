import { useState } from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import "./AccordionSection.css"; // 👈 Import the CSS file

const sections = [
  {
    title: "Branding",
    items: [
      "Logo Design",
      "Brand Guidelines",
      "Collateral Design",
      "Rebranding Services",
    ],
  },
  {
    title: "UX/UI Designs",
    items: [
      "User Research and Analysis",
      "Wireframing and Prototyping",
      "User Interface Design",
      "User Experience Testing",
      "Responsive Design Solutions",
    ],
  },
  // {
  //   title: "Motion & Animation",
  //   items: [
  //     "Motion Graphics Design",
  //     "Animated Explainer Videos",
  //     "Interactive Presentations",
  //   ],
  // },
  {
    title: "Web Development & Design",
    items: [
      "Responsive Website Design",
      "Frontend Development (React, Vue)",
      "Backend Development (Node.js, PHP)",
      "Content Management Systems (WordPress, etc.)",
    ],
  },
  {
    title: "Mobile App Development",
    items: [
      "Cross-Platform App Development (React Native, Flutter)",
      "iOS & Android Native Development",
      "App Store Deployment & Optimization",
    ],
  },
  {
    title: "Software Development",
    items: [
      "Custom Software Solutions",
      "Enterprise Applications",
      "SaaS Product Development",
    ],
  },
  {
    title: "AI Models Development",
    items: [
      "Custom AI/ML Model Training",
      "Natural Language Processing",
      "Computer Vision Applications",
      "AI Integration into Apps",
    ],
  },
  {
    title: "Complex Server Development",
    items: [
      "Scalable API Architecture",
      "Database Optimization & Management",
      "Microservices and Cloud Infrastructure",
      "Real-Time Systems (Sockets, Queues)",
    ],
  },
];

const AccordionSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      <p>Our Services</p>
      {sections.map((section, index) => (
        <div key={index} className="accordion-item">
          <button onClick={() => toggle(index)} className="accordion-button">
            <span className="accordion-title">{section.title}</span>
            <IoArrowBackCircleSharp
              className={`accordion-icon ${openIndex === index ? "open" : ""}`}
            />
          </button>
          {openIndex === index && (
            <ul className="accordion-content">
              {section.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionSection;
import React, { useState } from "react";
import MinusIcon from "../Icons/MinusIcon";
import AddIcon from "../Icons/AddIcon";
import "./FAQPage.css";

const faqs = [
  {
    question: "What services does Boring Thinkers Limited provide?",
    answer:
      "Boring Thinkers Limited specializes in designing and developing user-centric software solutions, including web applications, mobile apps, enterprise software, and AI-powered tools. We also offer UI/UX design, software consulting, and product strategy services.",
  },
  {
    question:
      "How does Boring Thinkers Limited ensure quality in its software solutions?",
    answer:
      "We follow a structured process that includes thorough research, ideation, design, agile development, rigorous testing, and continuous improvement. Our focus is on building reliable, scalable, and intuitive solutions that meet real-world needs.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We develop solutions for various industries, including fintech, e-commerce, logistics, education, and AI-driven applications. Our team is flexible and can tailor software to meet the unique needs of any sector.",
  },
  {
    question:
      "How can I collaborate with Boring Thinkers Limited for my project?",
    answer:
      "You can reach out to us via email at contact@boringthinkers.com or through our website. We will discuss your project needs, define the scope, and develop a customized solution that aligns with your vision.",
  },
  {
    question:
      "Why choose Boring Thinkers Limited over other development firms?",
    answer:
      "We prioritize innovation, simplicity, and effectiveness in our solutions. Our team is committed to delivering products that make complex tasks easier, improve productivity, and enhance user experience. Plus, we focus on long-term partnerships and continuous product growth.",
  },
];

const FAQPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-header">Frequently Asked Questions</h1>
      <p className="faq-subtext">
        Get answers to some of the most common questions about our services. If
        you have further inquiries, feel free to reach out to us!
      </p>

      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? "active" : ""}`}
        >
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <h3 className="faq-title">{faq.question}</h3>
            <span
              style={{
                marginLeft: 12,
                backgroundColor: "#023009",
                border: "1px solid #023009",
                borderRadius: "50%",
                padding: 6,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {activeIndex === index ? (
                <MinusIcon width={24} height={24} color={`#FFD000`} />
              ) : (
                <AddIcon width={24} height={24} color={`#fff`} />
              )}
            </span>
          </div>
          <span>
            {activeIndex === index && (
              <p className="faq-answer">{faq.answer}</p>
            )}
          </span>{" "}
        </div>
      ))}
    </div>
  );
};

export default FAQPage;

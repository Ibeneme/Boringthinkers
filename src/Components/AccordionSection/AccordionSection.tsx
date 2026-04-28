import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoArrowBackCircleSharp } from "react-icons/io5";

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
      "User Research",
      "Wireframing & Prototyping",
      "Interface Design",
      "UX Testing",
      "Responsive Solutions",
    ],
  },
  {
    title: "Web Development",
    items: [
      "Frontend (React, Vue)",
      "Backend (Node.js, Go)",
      "CMS Solutions",
      "E-commerce Architecture",
    ],
  },
  {
    title: "Mobile App Development",
    items: [
      "Cross-Platform (React Native)",
      "iOS & Android Native",
      "Deployment & Optimization",
    ],
  },
  {
    title: "Software Development",
    items: ["Custom Solutions", "Enterprise Apps", "SaaS Product Build"],
  },
  {
    title: "AI Models Development",
    items: [
      "Custom Model Training",
      "NLP & Vision",
      "Neural Network Integration",
    ],
  },
  {
    title: "Server Development",
    items: [
      "Scalable API Architecture",
      "Database Optimization",
      "Microservices",
      "Cloud Infrastructure",
    ],
  },
];

const AccordionSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-6xl mx-auto py-24 px-6 bg-white">
      {/* Section Header */}
      <div className="mb-16">
        <span className="text-[#FFD000] text-[10px] font-black uppercase tracking-[0.4em] block mb-2">
          Expertise
        </span>
        <h2 className="text-4xl md:text-6xl font-black text-[#050505] tracking-tighter">
          WHAT WE <span className="opacity-30">DO.</span>
        </h2>
      </div>

      <div className="border-t border-black/5">
        {sections.map((section, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="border-b border-black/5 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full py-8 md:py-12 flex items-center justify-between group text-left outline-none transition-all duration-500"
              >
                <div className="flex items-center gap-6 md:gap-12">
                  <span
                    className={`text-sm font-mono transition-colors duration-500 ${
                      isOpen ? "text-[#FFD000]" : "text-black/20"
                    }`}
                  >
                    0{index + 1}
                  </span>
                  <span
                    className={`text-2xl md:text-5xl font-black uppercase tracking-tighter transition-all duration-500 
                    ${
                      isOpen
                        ? "text-[#050505] translate-x-4"
                        : "text-black/40 group-hover:text-black group-hover:translate-x-2"
                    }
                  `}
                  >
                    {section.title}
                  </span>
                </div>

                <motion.div
                  animate={{ rotate: isOpen ? -90 : 180 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className={`${
                    isOpen
                      ? "text-[#FFD000]"
                      : "text-black/10 group-hover:text-black/30"
                  }`}
                >
                  <IoArrowBackCircleSharp size={48} />
                </motion.div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="pb-12 pl-16 md:pl-32 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section.items.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center gap-3 text-[#050505] font-bold text-lg"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#FFD000]" />
                          {item}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AccordionSection;

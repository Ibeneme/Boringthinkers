import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";
import { ArrowDownRight } from "lucide-react";

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
      <div className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center mb-8 gap-4 bg-[#0A2F1D] py-2 pl-6 pr-2 rounded-full border border-[#FFD000]/10"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#FFD000]">
            OUR EXPERTISE
          </span>
          <div className="bg-[#FFD000] p-2.5 rounded-full text-[#011404]">
            <ArrowDownRight size={16} strokeWidth={3} />
          </div>
        </motion.div>

        <h2 className="text-5xl md:text-7xl font-black text-[#050505] tracking-tighter leading-none">
          WHAT WE <span className="opacity-20">DO.</span>
        </h2>
      </div>

      <div className="border-t border-black/10">
        {sections.map((section, index) => {
          const isOpen = openIndex === index;
          const formattedNumber = String(index + 1).padStart(2, "0");

          return (
            <div key={index} className="border-b border-black/10 group">
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={`panel-${index}`}
                id={`button-${index}`}
                className="w-full py-10 md:py-14 flex items-center justify-between text-left outline-none"
              >
                <div className="flex items-center gap-8 md:gap-16">
                  <span
                    className={`font-mono text-sm transition-all duration-500 ${
                      isOpen
                        ? "text-[#FFD000]"
                        : "text-black/40 group-hover:text-black/70"
                    }`}
                  >
                    {formattedNumber}
                  </span>

                  <span
                    className={`text-3xl md:text-5xl font-black tracking-[-0.02em] transition-all duration-500 ${
                      isOpen ? "text-[#050505]" : "text-black"
                    }`}
                  >
                    {section.title}
                  </span>
                </div>

                <div
                  className={`w-11 h-11 md:w-14 md:h-14 flex items-center justify-center rounded-2xl border transition-all duration-500 ${
                    isOpen
                      ? "bg-[#050505] border-[#050505] text-white"
                      : "bg-white border-black/10 group-hover:border-black/30"
                  }`}
                >
                  <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <FiChevronRight size={28} />
                  </motion.div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`panel-${index}`}
                    role="region"
                    aria-labelledby={`button-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pl-16 md:pl-28 pb-14">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                        {section.items.map((item, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ x: -30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: idx * 0.04 }}
                            className="flex items-start gap-4 text-[#050505] text-[17px] font-medium"
                          >
                            <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-[#FFD000] flex-shrink-0" />
                            <span>{item}</span>
                          </motion.div>
                        ))}
                      </div>
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

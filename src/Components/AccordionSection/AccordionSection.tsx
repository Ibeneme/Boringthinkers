import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { IoAdd, IoRemove } from "react-icons/io5";

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

const ServicesSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  return (
    <div className="max-w-6xl mx-auto py-24 px-2 bg-white">
      {/* Header */}
      <div className="mb-20">
        <div className="inline-flex items-center mb-8 gap-4 bg-[#0A2F1D] py-2 pl-6 pr-2 rounded-full border border-[#FFD000]/10">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#FFD000]">
            OUR EXPERTISE
          </span>
          <div className="bg-[#FFD000] p-2.5 rounded-full text-[#011404]">
            <ArrowDownRight size={16} strokeWidth={3} />
          </div>
        </div>

        <h2 className="text-5xl md:text-7xl font-black text-[#050505] tracking-tighter leading-none">
          WHAT WE <span className="opacity-20">DO.</span>
        </h2>
      </div>

      <div className="border-t border-black/10">
        {sections.map((section, index) => {
          const isOpen = openIndex === index;
          const formattedNumber = String(index + 1).padStart(2, "0");

          return (
            <div
              key={index}
              className="border-b border-black/10 last:border-none"
            >
              {/* Trigger Button */}
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full py-10 md:py-14 flex items-center justify-between text-left group outline-none"
              >
                <div className="flex items-center gap-8 md:gap-16">
                  <span
                    className={`font-mono text-sm transition-all duration-500 ${
                      isOpen
                        ? "text-[#011404]"
                        : "text-black/40 group-hover:text-black"
                    }`}
                  >
                    {formattedNumber}
                  </span>
                  <span
                    className={`text-3xl md:text-5xl font-black tracking-[-0.02em] transition-all duration-500 ${
                      isOpen ? "text-[#011404]" : "text-black"
                    }`}
                  >
                    {section.title}
                  </span>
                </div>

                <div
                  className={`p-3 rounded-full transition-all duration-500 ${
                    isOpen
                      ? "bg-[#011404] text-[#FFD000]"
                      : "bg-gray-100 text-gray-400 group-hover:bg-[#FFD000] group-hover:text-[#011404]"
                  }`}
                >
                  {isOpen ? <IoRemove size={26} /> : <IoAdd size={26} />}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="bg-[#0A2F1D] text-[#FFD000] rounded-[32px] mb-8 mx-4 md:mx-8 px-10 py-12">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        {section.items.map((item, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-start gap-4 text-[17px] font-medium"
                          >
                            <div className="w-2 h-2 mt-2.5 rounded-full bg-[#FFD000] flex-shrink-0" />
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

export default ServicesSection;

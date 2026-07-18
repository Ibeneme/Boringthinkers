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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="relative bg-[#06110A] py-28 px-6 md:px-8 overflow-hidden">
      {/* Shared brand type system */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&family=Space+Mono:wght@400;700&display=swap');
        .font-editorial { font-family: 'Instrument Serif', serif; font-style: italic; }
        .font-technical { font-family: 'Space Mono', monospace; }
      `}</style>

      {/* Faint graph-paper texture, in yellow to read on dark ink */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#FFD000 1px, transparent 1px), linear-gradient(90deg, #FFD000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 border-2 border-[#FFD000]/40 rounded-full px-6 py-2 mb-8">
            <span className="font-technical text-[#FFD000] text-xs font-bold tracking-[0.3em] uppercase">
              Excellence
            </span>
            <ArrowDownRight
              className="text-[#FFD000]"
              size={18}
              strokeWidth={3}
            />
          </div>

          <h2 className="text-6xl md:text-7xl font-black text-white tracking-tighter leading-none">
            WHAT WE <span className="text-white/30">DO BEST.</span>
          </h2>
          <p className="mt-8 text-xl md:text-2xl text-white/60 max-w-lg mx-auto leading-snug">
            Seven core disciplines, zero fluff — open any drawer to see the
            depth.
          </p>
        </div>

        {/* Services Accordion */}
        <div className="space-y-3">
          {sections.map((section, index) => {
            const isOpen = openIndex === index;
            const number = String(index + 1).padStart(2, "0");

            return (
              <div
                key={index}
                className="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02]"
              >
                {/* Trigger */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-8 md:px-12 py-8 flex items-center justify-between group text-left"
                >
                  <div className="flex items-center gap-8">
                    <span
                      className={`font-technical text-2xl transition-colors duration-300 ${
                        isOpen
                          ? "text-[#FFD000]"
                          : "text-white/30 group-hover:text-white/50"
                      }`}
                    >
                      {number}
                    </span>
                    <span className="text-3xl md:text-4xl font-black text-white tracking-tighter transition-all duration-300">
                      {section.title}
                    </span>
                  </div>

                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                      isOpen
                        ? "bg-[#FFD000] border-[#FFD000] text-[#06110A]"
                        : "border-white/20 text-white/40 group-hover:border-white/40 group-hover:text-white"
                    }`}
                  >
                    {isOpen ? <IoRemove size={28} /> : <IoAdd size={28} />}
                  </div>
                </button>

                {/* Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-8 md:px-12 pb-12 pt-2">
                        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-10 md:p-14">
                          <div className="font-technical uppercase text-xs tracking-[0.3em] text-[#FFD000]/70 mb-8">
                            File {number} — Capabilities
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-5 text-white/90 font-technical text-[15px]">
                            {section.items.map((item, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.04 }}
                                className="flex items-start gap-3"
                              >
                                <span className="text-[#FFD000]/70 mt-0.5">
                                  —
                                </span>
                                <span>{item}</span>
                              </motion.div>
                            ))}
                          </div>
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
    </div>
  );
};

export default ServicesSection;

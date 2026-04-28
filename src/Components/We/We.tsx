import React from "react";
import { motion } from "framer-motion";
import dream from "../../../src/assets/images/we/dream.png";
import design from "../../../src/assets/images/we/designa.png";
import main from "../../../src/assets/images/we/main.png";
import mainb from "../../../src/assets/images/we/mainb.png";

const sections = [
  {
    title: "You Dream, We Build.",
    description:
      "We turn your boldest ideas into functional, beautiful, scalable digital products. If you can dream it, we can build it.",
    bgColor: "bg-[#DFFFDC]",
    image: dream,
  },
  {
    title: "Our Design Style",
    description:
      "Simplicity meets elegance. We blend clean interfaces with deep usability to create intuitive, memorable digital experiences.",
    bgColor: "bg-[#FFE2E9]",
    image: main,
  },
  {
    title: "Our Build Style",
    description:
      "Code that works and scales. Our engineering approach is modular, clean, and tested with a focus on future-proof architecture.",
    bgColor: "bg-[#E8DEFF]",
    image: design,
  },
  {
    title: "Speed & Security",
    description:
      "Proactive monitoring and refining. We ship fast without compromising on security, privacy, or long-term protection.",
    bgColor: "bg-[#FFEECB]",
    image: mainb,
  },
];

const We: React.FC = () => {
  return (
    <div className="w-full bg-white pt-[120px]">
      {/* Heavy Header Section */}
      <div className="px-6 md:px-20 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="w-2 h-2 bg-[#050505] rounded-full" />
          <span className="text-[#050505] text-[11px] font-black uppercase tracking-[0.6em]">
            Capabilities
          </span>
        </motion.div>

        <h2 className="text-6xl md:text-[10rem] font-black text-[#050505] tracking-[-0.08em] uppercase leading-[0.8]">
          ENGINEERING <br />
          <span className="text-[#000]">EXCELLENCE.</span>
        </h2>
      </div>

      {/* Full-Bleed Color Block Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {sections.map((section, index) => (
          <motion.section
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`${section.bgColor} p-12 md:p-24 flex flex-col justify-between items-start group min-h-[650px] relative`}
          >
            {/* Top Image Layout */}
            <div className="w-full h-80 mb-16 overflow-hidden flex items-center justify-center">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
            </div>

            {/* Bottom Content Layout */}
            <div className="w-full">
              <span className="text-[11px] font-black uppercase tracking-widest text-[#050505]/30 mb-4 block">
                Protocol 0{index + 1}
              </span>

              <h2 className="text-4xl md:text-6xl font-black text-[#050505] uppercase tracking-tighter mb-8 leading-[0.9]">
                {section.title}
              </h2>

              <p className="text-[#050505] text-xl font-bold leading-tight max-w-sm tracking-tight">
                {section.description}
              </p>
            </div>

            {/* Subtle Text Decoration */}
            <div className="absolute bottom-8 right-8 overflow-hidden pointer-events-none hidden lg:block">
              <span className="text-9xl font-black text-[#050505]/5 uppercase tracking-tighter leading-none translate-y-8 block">
                {section.title.split(" ")[0]}
              </span>
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
};

export default We;

import React from "react";
import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  bgColor?: string; // New optional prop
}

const PageHero: React.FC<PageHeroProps> = ({ title, bgColor = "#FFD000" }) => {
  return (
    // Applied the bgColor prop here
    <section 
      className="relative pt-44 pb-32 px-6 md:px-20 overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      {/* Structural Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Minimal Vertical Marker */}
          <div className="w-1 h-12 bg-[#011404] mb-12" />

          <h1 className="text-6xl md:text-[13rem] font-black text-[#011404] leading-[0.8] tracking-[-0.06em]  break-words">
            {title.split(" ").map((word, i) => (
              <span key={i} className="block">
                {word}
              </span>
            ))}
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
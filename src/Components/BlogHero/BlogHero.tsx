import React from "react";
import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title }) => {
  return (
    <section className="relative pt-44 pb-32 px-6 md:px-20 bg-[#FFD000] overflow-hidden">
      {/* Structural Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Minimal Vertical Marker */}
          <div className="w-1 h-12 bg-[#050505] mb-12" />

          <h1 className="text-6xl md:text-[13rem] font-black text-[#050505] leading-[0.75] tracking-[-0.08em] uppercase break-words">
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

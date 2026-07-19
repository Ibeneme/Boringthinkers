import React from "react";
import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  bgColor?: string; // Optional override for the background
  
}

const toSlug = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const PageHero: React.FC<PageHeroProps> = ({ title, bgColor = "#0A1F13" }) => {
  return (
    <section
      className="relative pt-44 pb-32 px-6 md:px-20 overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      {/* Shared brand type system */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
        .font-technical { font-family: 'Space Mono', monospace; }
        @keyframes blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
        .cursor-blink { animation: blink 1s step-end infinite; }
      `}</style>

      {/* Editor-minimap dot grid, consistent with the rest of the site */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-[radial-gradient(#1F4030_1px,transparent_1px)] [background-size:22px_22px]" />
      <div
        aria-hidden="true"
        className="absolute -top-32 right-0 w-[420px] h-[420px] rounded-full bg-[#3FB950] opacity-[0.05] blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Terminal breadcrumb */}
          <p className="font-technical flex items-center gap-2 text-xs text-[#7FA08D] mb-6">
            <span className="text-[#3FB950]">$</span>
            cd ./{toSlug(title)}
            <span
              aria-hidden="true"
              className="inline-block w-[2px] h-[1em] bg-[#3FB950] cursor-blink"
            />
          </p>

          {/* Minimal Vertical Marker */}
          <div className="w-1 h-12 bg-[#3FB950] mb-12" />

          <h1 className="text-6xl md:text-[13rem] font-black text-[#D3E5D9] leading-[0.8] tracking-[-0.06em] break-words">
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
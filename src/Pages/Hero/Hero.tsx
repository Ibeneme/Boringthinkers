import React from "react";
import { motion, Variants } from "framer-motion"; // Added Variants type
import { ArrowUpRight } from "lucide-react";

const Hero: React.FC = () => {
  const handleSendMail = () => {
    window.location.href = "mailto:contact@boringthinkers.com";
  };

  // Explicitly typing the variants fixes the TS2322 error
  const item: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Now correctly recognized as a cubic-bezier array
      },
    },
  };

  return (
    <section className="relative flex flex-col items-center justify-start min-h-[120vh] px-6 bg-[#011404] text-white pt-[220px]">
      <motion.div
        initial="hidden"
        animate="show"
        // Also typed the container variants for safety
        variants={{
          show: {
            transition: { staggerChildren: 0.1 },
          },
        }}
        className="relative z-10 flex flex-col items-center w-full max-w-4xl text-center"
      >
        {/* Minimal Marker */}
        <motion.div
          variants={item}
          className="mb-10 w-8 h-[2px] bg-[#FFD000]"
        />

        {/* Scaled-Down Structural Headline */}
        <div className="mb-14">
          <motion.h1
            variants={item}
            className="text-6xl md:text-[8rem] font-black tracking-[-0.06em] leading-[0.8] uppercase"
          >
            BORING
          </motion.h1>
          <motion.h1
            variants={item}
            className="text-6xl md:text-[8rem] font-black tracking-[-0.06em] leading-[0.8] uppercase text-[#FFD000]"
          >
            THINKERS
          </motion.h1>
        </div>

        {/* Direct Statement */}
        <motion.div variants={item} className="max-w-md">
          <p className="text-lg md:text-xl font-black uppercase tracking-tight leading-tight text-white/60">
            Software Development Company For Startups and businesses
          </p>
        </motion.div>

        {/* Single Unified CTA */}
        <motion.div variants={item} className="mt-20 w-full max-w-[280px]">
          <button
            onClick={handleSendMail}
            className="w-full flex items-center justify-between px-8 py-6 bg-[#FFD000] text-[#011404] font-black uppercase tracking-[0.2em] text-xs group transition-all"
          >
            <span>Contact Us</span>
            <ArrowUpRight
              size={18}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </button>
        </motion.div>
      </motion.div>

      {/* Static Visual Anchor */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-10">
        <div className="w-[1px] h-32 bg-white" />
      </div>
    </section>
  );
};

export default Hero;

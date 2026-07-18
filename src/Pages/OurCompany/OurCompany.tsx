import React from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { FiChevronsRight } from "react-icons/fi";
import crayons from "../../assets/images/new/codeb.jpg";

const OurCompany: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  const handleSendMail = () => {
    window.location.href = "mailto:contact@boringthinkers.com";
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen bg-[#FAFAF6] overflow-hidden selection:bg-[#FFD000] selection:text-[#06110A]">
      {/* Type system: bold system grotesk for the headline, an editorial
          serif italic for the "thinking" copy, mono for labels/data marks */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&family=Space+Mono:wght@400;700&display=swap');
        . { font-family: 'Instrument Serif', serif; font-style: italic; }
        .font-technical { font-family: 'Space Mono', monospace; }
      `}</style>

      {/* Faint graph-paper texture — this is a lab notebook, not a poster */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#06110A 1px, transparent 1px), linear-gradient(90deg, #06110A 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative flex flex-col lg:flex-row items-stretch min-h-screen">
        {/* Left Content Side */}
        <div className="flex-1 flex flex-col justify-center px-4 md:px-24 py-24 lg:py-12 z-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-xl"
          >
            {/* Manuscript stamp */}
            <motion.div variants={itemVariants} className="mb-14">
              <span className="inline-block font-technical text-[11px] font-bold uppercase tracking-[0.5em] text-[#06110A] border-2 border-[#06110A] px-3 py-1.5 -rotate-1">
                The Brain House
              </span>
            </motion.div>

            {/* Headline with the red-pen correction */}
            <motion.div variants={itemVariants} className="mb-14 relative">
              <h1 className="text-5xl md:text-7xl font-black text-[#06110A] tracking-[-0.05em] leading-[0.9] pb-4 antialiased">
                It’s not just about code. <br />
                <span className="text-[#048C04]">
                  {" "}
                  It’s where coding meets business.
                </span>
              </h1>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-8 mt-[-32px]"
            >
              <p className=" text-2xl md:text-xl text-[#06110A] leading-snug">
                Boring Thinkers is a creative powerhouse built for visionary
                startups.
              </p>

              <p className="text-[#06110A]/80 text-[16px] md:text-[16px] leading-relaxed max-w-md">
                We craft digital experiences that solve complex problems — from
                MVPs to enterprise platforms, turning bold concepts into
                intuitive products.
              </p>
              {/* <div className="flex items-center gap-4 py-6 border-y-2 border-dotted border-[#06110A]/25">
                <span className="w-3 h-3 bg-[#FFD000] rounded-full shrink-0" />
                <p className="text-lg md:text-xl uppercase font-black text-[#06110A] tracking-tight">
                  Build fast. Think deep. Deliver smart.
                </p>
              </div> */}
              {/* <div className="flex items-center gap-4 py-6 border-y-2 border-dotted border-[#06110A]/25">
                <span className="w-3 h-3 bg-[#FFD000] rounded-full shrink-0" />
                <p className="text-lg md:text-xl uppercase font-black text-[#06110A] tracking-tight">
                  Build fast. Think deep. Deliver smart.
                </p>
              </div> */}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-16">
              <button
                onClick={handleSendMail}
                className="group flex items-center justify-between w-full max-w-md py-7 border-b-2 border-[#06110A] hover:border-[#D7301F] transition-colors duration-300"
              >
                <span className="text-xl md:text-xl uppercase font-black text-[#06110A] tracking-tighter transition-colors duration-300 ">
                  Get Started, Send a Mail
                </span>
                <FiChevronsRight
                  size={28}
                  className="text-[#06110A] transition-all duration-500 group-hover:translate-x-2"
                />
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Image Side */}
        <div className="flex-1 relative min-h-[500px] lg:min-h-screen overflow-hidden bg-[#06110A]">
          <motion.div
            style={{ y }}
            className="absolute inset-0 w-full h-[120%]"
          >
            <img
              src={crayons}
              alt="Production Environment"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

          {/* Blueprint corner marks — the image reads as an exhibit */}
          {[
            "top-6 left-6 border-t-2 border-l-2",
            "top-6 right-6 border-t-2 border-r-2",
            "bottom-6 left-6 border-b-2 border-l-2",
            "bottom-6 right-6 border-b-2 border-r-2",
          ].map((cls, i) => (
            <div
              key={i}
              className={`absolute ${cls} w-6 h-6 border-[#FFD000] z-30`}
            />
          ))}

          {/* Information plate */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute bottom-0 left-0 p-10 md:p-12 bg-[#FFD000] text-[#06110A] w-full lg:max-w-md z-30"
          >
            <p className=" text-xs font-bold tracking-[0.3em] mb-4 uppercase">
              Strategic Execution — Exhibit A
            </p>
            <h3 className=" text-xl md:text-2xl leading-[0.95] tracking-tight">
              We analyze the DNA of your business before writing a line of code.
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurCompany;

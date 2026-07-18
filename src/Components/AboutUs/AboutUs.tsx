import React from "react";
import { motion, Variants } from "framer-motion";

interface AboutUsProps {
  showCta?: boolean;
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const AboutUs: React.FC<AboutUsProps> = () => {
  return (
    <section className="relative bg-[#FAFAF6] min-h-screen overflow-hidden">
      {/* --- MISSION SECTION (Dark Green Background) --- */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#666 1px, transparent 1px), linear-gradient(90deg, #666 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="bg-[#0A2F1D] pt-[180px] pb-32 px-6 md:px-20 border-b border-black/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-36 items-start"
          >
            <div className="lg:col-span-5">
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-4 mb-8"
              >
                <div className="w-12 h-[3px] bg-[#FFD000]" />
                <span className="text-[#FFD000] text-[11px] font-black uppercase tracking-[0.6em]">
                  The Drive
                </span>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="text-6xl md:text-[10rem] font-black text-white leading-[0.8] tracking-[-0.07em] uppercase"
              >
                OUR <br />
                <span className="text-[#FFD000]">MISSION.</span>
              </motion.h2>
            </div>

            <motion.div
              variants={fadeInUp}
              className="lg:col-span-5 lg:pt-24 space-y-8"
            >
              <p className="text-white text-2xl md:text-3xl font-black uppercase tracking-tighter leading-none">
                To design and deliver reliable, user-centric software solutions
                that solve real-world problems.
              </p>
              <p className="text-white/60 text-lg font-bold leading-relaxed max-w-xl">
                Through relentless research and precise engineering, we strip
                away friction to simplify complex workflows, enhance baseline
                productivity, and maximize user output.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* --- VISION SECTION (White Background) --- */}
      <div className="bg-white py-32 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-32 items-start"
          >
            <div className="lg:col-span-5 lg:order-2">
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-4 mb-8"
              >
                <div className="w-12 h-[3px] bg-black" />
                <span className="text-[#050505] text-[11px] font-black uppercase tracking-[0.6em]">
                  The Future
                </span>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="text-6xl md:text-[10rem] font-black text-[#050505] leading-[0.8] tracking-[-0.07em] uppercase"
              >
                OUR <br />
                <span className="opacity-30">VISION.</span>
              </motion.h2>
            </div>

            <motion.div
              variants={fadeInUp}
              className="lg:col-span-6 lg:pt-24 lg:order-1 space-y-8"
            >
              <p className="text-[#050505] text-2xl md:text-3xl font-black uppercase tracking-tighter leading-none">
                To become the premier engineering engine for digital systems
                that drive the next generation of modern enterprise.
              </p>
              <p className="text-[#050505]/60 text-lg font-bold leading-relaxed max-w-xl">
                We design and integrate software seamlessly into active business
                pipelines—making operations predictable, highly visible, and
                effortlessly scalable.
              </p>
            </motion.div>
          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default AboutUs;

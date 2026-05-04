import React from "react";
import { motion } from "framer-motion";

const projectBriefSteps = [
  {
    title: "The Project Scope",
    description:
      "Send over your project brief, timeline expectations, and high-level requirements. We will analyze your goals to confirm technical feasibility.",
  },
  {
    title: "Architectural Review",
    description:
      "We review your goals within 24 hours to match your vision with the best design and development framework.",
  },
  {
    title: "Sprint Alignment",
    description:
      "Once aligned, we define milestones, sprint cycles, and establish real-time dashboard visibility to kick off work immediately.",
  },
];

const StartProjectPage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-white pt-[140px] md:pt-[180px] pb-24 px-6 md:px-20 min-h-screen select-none">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-[3px] bg-[#FFD000]" />
            <span className="text-[#050505] text-[11px] font-black uppercase tracking-[0.6em]">
              The Protocol
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl sm:text-6xl md:text-[10rem] font-black text-[#050505] leading-[0.85] tracking-[-0.07em] uppercase"
          >
            START <br /> A PROJECT.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 md:mt-12 max-w-xl text-lg md:text-xl font-black text-[#050505] uppercase tracking-tighter leading-tight"
          >
            Bring your product to life through transparent collaboration, clean
            architecture, and rapid engineering.
          </motion.p>
        </div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-0 mb-24 md:mb-32"
        >
          {projectBriefSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group flex flex-col md:flex-row items-start md:items-center py-10 md:py-12 border-b border-gray-100 hover:bg-gray-50 transition-colors px-4"
            >
              {/* Step Number */}
              <div className="text-4xl md:text-7xl font-black text-[#050505] opacity-5 group-hover:opacity-100 group-hover:text-[#FFD000] transition-all w-24 md:w-32 mb-4 md:mb-0">
                0{index + 1}
              </div>

              {/* Title */}
              <div className="flex-1">
                <h3 className="text-xl md:text-4xl font-black text-[#050505] uppercase tracking-tighter mb-2 group-hover:pl-4 transition-all duration-300">
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <div className="flex-[1.5]">
                <p className="text-[#050505] text-base md:text-lg font-bold opacity-50 group-hover:opacity-100 transition-opacity max-w-lg leading-snug">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Full-Section CTA Block */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-black/5 pt-12"
        >
          <a
            href="mailto:contact@boringthinkers.com"
            className="group block bg-[#050505] hover:bg-[#FFD000] transition-all duration-500 rounded-none w-full p-8 md:p-16 select-none cursor-pointer"
          >
            <div className="flex flex-col gap-6">
              <span className="text-[#FFD000] group-hover:text-[#050505] text-xs font-black uppercase tracking-[0.4em] transition-colors duration-500">
                Next Step
              </span>
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                <h3 className="text-3xl md:text-6xl font-black text-white group-hover:text-[#050505] uppercase tracking-tight leading-none transition-colors duration-500 max-w-2xl">
                  Ready to execute? Reach out directly.
                </h3>
                <span className="text-2xl md:text-4xl font-black text-[#FFD000] group-hover:text-[#050505] underline underline-offset-8 transition-colors duration-500 break-all lg:text-right shrink-0">
                  contact@boringthinkers.com
                </span>
              </div>
            </div>
          </a>
        </motion.div> */}
      </div>
    </section>
  );
};

export default StartProjectPage;

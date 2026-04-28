import React from "react";
import { motion } from "framer-motion";

const howWeWorkSteps = [
  {
    title: "Discovery & Consultation",
    description:
      "Every project starts with a conversation. We analyze your business, target users, and key challenges to ensure we're solving the right problem from the start.",
  },
  {
    title: "Planning & Onboarding",
    description:
      "We define clear milestones and success metrics. You get direct access to our dashboards for full visibility on timelines and deliverables. No black boxes.",
  },
  {
    title: "Design & Development",
    description:
      "Designers prototype while engineers build using clean architecture. We work in agile sprints, delivering features early for rapid feedback cycles.",
  },
  {
    title: "Transparent Client Access",
    description:
      "Real-time access to progress updates, task boards, and reports. You see what we build, as we build it. Total transparency is our default state.",
  },
  {
    title: "Flexible Payment Options",
    description:
      "Fixed-price, milestone-based, or retainers. We provide flexible billing structures designed to support your budget and scale with your growth.",
  },
  {
    title: "Long-Term Partnership",
    description:
      "Beyond delivery, we provide scaling support, upgrades, and monitoring. We are your long-term technical partner, not just a service provider.",
  },
];

const HowWeWorkComponent: React.FC = () => {
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
    <section className="bg-white pt-[180px] pb-24 px-6 md:px-20 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-32">
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
            className="text-6xl md:text-[10rem] font-black text-[#050505] leading-[0.8] tracking-[-0.07em] uppercase"
          >
            HOW <br /> WE WORK.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12 max-w-xl text-xl font-black text-[#050505] uppercase tracking-tighter leading-tight"
          >
            We architect solutions that solve real problems through
            transparency, creativity, and measurable results.
          </motion.p>
        </div>

        {/* Steps Section - Structural List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-0"
        >
          {howWeWorkSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group flex flex-col md:flex-row items-start md:items-center py-12 border-b border-gray-100 hover:bg-gray-50 transition-colors px-4"
            >
              {/* Step Number */}
              <div className="text-4xl md:text-7xl font-black text-[#050505] opacity-5 group-hover:opacity-100 group-hover:text-[#FFD000] transition-all w-24 md:w-32 mb-4 md:mb-0">
                0{index + 1}
              </div>

              {/* Title */}
              <div className="flex-1">
                <h3 className="text-2xl md:text-4xl font-black text-[#050505] uppercase tracking-tighter mb-2 group-hover:pl-4 transition-all duration-300">
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <div className="flex-[1.5]">
                <p className="text-[#050505] text-lg font-bold opacity-50 group-hover:opacity-100 transition-opacity max-w-lg leading-snug">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Callout */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-12 bg-[#FFD000] inline-block origin-left"
        >
          <p className="text-[#050505] font-black text-2xl uppercase tracking-tighter leading-none">
            System Initialized. Ready for Onboarding.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeWorkComponent;

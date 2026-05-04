import React from "react";
import { motion } from "framer-motion";
//import pencils from "../../assets/images/new/codeb.jpg";

const statusUpdates = [
  {
    title: "The Vision",
    statusLabel: "Active",
    isClosed: false,
    description:
      "We build high-performance, scalable engineering solutions. We look for technical partners and creators who value structural integrity, clean architecture, and rapid operational scaling over corporate noise.",
  },
  {
    title: "Application Status",
    statusLabel: "No Openings",
    isClosed: true,
    description:
      "Currently, all active engineering and design pipelines are operating at maximum capacity. The system is closed for new submissions at this time.",
  },
  {
    title: "Open Expressions",
    statusLabel: "Locked",
    isClosed: true,
    description:
      "We are not collecting external talent profiles or expressions of interest. The talent database remains locked for the current development cycle.",
  },
];

const Careers: React.FC = () => {
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
    <section className="bg-white pt-[180px] pb-24 px-6 md:px-20 min-h-screen select-none">
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
            JOIN THE <br /> TEAM.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12 max-w-xl text-xl font-black text-[#050505] uppercase tracking-tighter leading-tight"
          >
            We are always seeking exceptional talent to build clean,
            frictionless digital experiences for next-generation products.
          </motion.p>
        </div>

        {/* Status Section - Structural List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-0 mb-24"
        >
          {statusUpdates.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group flex flex-col md:flex-row items-start md:items-center py-12 border-b border-gray-100 transition-colors px-4 ${
                item.isClosed ? "bg-gray-50/30" : "hover:bg-gray-50"
              }`}
            >
              {/* Counter Number */}
              <div className="text-4xl md:text-7xl font-black text-[#050505] opacity-5 group-hover:opacity-100 group-hover:text-[#FFD000] transition-all w-24 md:w-32 mb-4 md:mb-0">
                0{index + 1}
              </div>

              {/* Title & Badge */}
              <div className="flex-1 mb-4 md:mb-0">
                <h3 className="text-2xl md:text-4xl font-black text-[#050505] uppercase tracking-tighter mb-2 group-hover:pl-2 transition-all duration-300">
                  {item.title}
                </h3>
                {/* Visual Status Indicator */}
                <span
                  className={`inline-block text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-none border ${
                    item.isClosed
                      ? "bg-black text-white border-black opacity-60"
                      : "bg-[#FFD000] text-[#050505] border-[#FFD000]"
                  }`}
                >
                  {item.statusLabel}
                </span>
              </div>

              {/* Description */}
              <div className="flex-[1.5]">
                <p
                  className={`text-[#050505] text-lg font-bold transition-opacity max-w-lg leading-snug ${
                    item.isClosed
                      ? "opacity-30"
                      : "opacity-50 group-hover:opacity-100"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Square Brutalist Image Integration */}
        {/* <div className="border-t border-black/5 pt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full h-[400px] overflow-hidden bg-gray-100 mb-12 rounded-none"
          >
            <img
              src={pencils}
              alt="Our Mission"
              className="w-full h-full object-cover rounded-none grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
            />
          </motion.div>
        </div> */}

        {/* Bottom Callout Block */}
        {/* <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="p-12 bg-black text-white inline-block origin-left rounded-none border border-black"
        >
          <p className="font-black text-2xl uppercase tracking-tighter leading-none">
            RECRUITING PIPELINE: PAUSED.
          </p>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Careers;

import React from "react";
import { motion, Variants } from "framer-motion";
import { Smartphone, Monitor, Cpu, Cloud, BrainCircuit } from "lucide-react";

interface BuildItem {
  icon: React.ElementType;
  title: string;
  description: string;
  platforms: string[];
  span: string; // Tailored mapping for grid systems
}

const buildItems: BuildItem[] = [
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native or cross-platform — built to ship on both stores without compromising on either.",
    platforms: ["iOS", "Android"],
    span: "sm:col-span-2 lg:col-span-2",
  },
  {
    icon: Monitor,
    title: "Desktop Apps",
    description:
      "Real desktop software for macOS, Windows, and Linux — not a browser tab wearing a costume.",
    platforms: ["macOS", "Windows", "Linux"],
    span: "sm:col-span-2 lg:col-span-2",
  },
  {
    icon: Cpu,
    title: "Sensors & Hardware",
    description:
      "Embedded systems and IoT sensors that talk to your software in real time, not just sit on a shelf.",
    platforms: ["IoT", "Embedded", "Firmware"],
    span: "sm:col-span-2 lg:col-span-2",
  },
  {
    icon: Cloud,
    title: "Cloud & Servers",
    description:
      "Infrastructure that scales quietly in the background — servers, clouds, and the plumbing between them, kept boring on purpose so it never surprises you.",
    platforms: ["Cloud", "Servers", "DevOps", "CI/CD"],
    span: "sm:col-span-3 lg:col-span-3",
  },
  {
    icon: BrainCircuit,
    title: "AI Models",
    description:
      "Models trained on your data and shaped around your problem — not an API key wrapped in a UI.",
    platforms: ["NLP", "Vision", "ML"],
    span: "sm:col-span-3 lg:col-span-3",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const WhatWeBuild: React.FC = () => {
  return (
    <section className="relative bg-[#FAFAF6] py-16 sm:py-24 px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden">
      {/* Shared brand type system */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&family=Space+Mono:wght@400;700&display=swap');
        .font-editorial { font-family: 'Instrument Serif', serif; font-style: italic; }
        .font-technical { font-family: 'Space Mono', monospace; }
      `}</style>

      {/* Faint graph-paper texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#06110A 1px, transparent 1px), linear-gradient(90deg, #06110A 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-20 max-w-4xl"
        >
          <span className="inline-block font-technical text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.5em] text-[#06110A] border-2 border-[#06110A] px-3 py-1.5 -rotate-1 mb-6 sm:mb-8">
            Build Matrix
          </span>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#06110A] tracking-[-0.06em] leading-[0.9] sm:leading-[0.85] mb-6 sm:mb-8">
            As Creatives
            <br />
            <span className="relative inline-block text-[#048C04] whitespace-normal sm:whitespace-nowrap">
              We Engineer & Create
            </span>
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-[#06110A]/70 leading-snug max-w-2xl">
            Phones, desktops, hardware, the cloud, and the models running on top
            of it — five surfaces, one team.
          </p>
        </motion.div>

        {/* Build Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-6 gap-4 sm:gap-6"
        >
          {buildItems.map((item, index) => {
            const Icon = item.icon;
            const number = String(index + 1).padStart(2, "0");

            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className={`group relative bg-white border border-[#06110A]/10 hover:border-[#D7301F]/50 rounded-2xl p-5 sm:p-6 flex flex-col transition-colors duration-500 w-full ${item.span}`}
              >
                {/* Perforated ticket edge */}
                <div className="absolute top-0 left-6 right-6 border-t-2 border-dashed border-[#06110A]/10" />

                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <span className="font-technical text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] text-[#06110A]/40">
                    Build {number}
                  </span>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#06110A] flex items-center justify-center text-[#06110A] group-hover:bg-[#06110A] group-hover:text-[#FFD000] transition-colors duration-500 shrink-0">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#06110A] tracking-tighter mb-3 sm:mb-4">
                  {item.title}
                </h3>

                <p className="text-base sm:text-lg md:text-xl text-[#06110A]/70 leading-snug mb-6 sm:mb-8 flex-1">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {item.platforms.map((platform) => (
                    <span
                      key={platform}
                      className="font-technical text-[9px] sm:text-[10px] bg-[#048C0414] font-bold uppercase tracking-widest text-[#048C04] rounded-full px-2.5 py-1 sm:px-3 sm:py-1.5 group-hover:border-[#FFD000] group-hover:text-[#06110A] transition-colors duration-500 whitespace-nowrap"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeBuild;

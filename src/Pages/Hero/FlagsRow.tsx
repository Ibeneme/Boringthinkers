import React from "react";
import { motion, Variants } from "framer-motion";
import ReactCountryFlag from "react-country-flag";

interface FlagEntry {
  code: string;
  name: string;
  // true = only shown on md+ screens (web); hidden on mobile
  extra?: boolean;
}

const flags: FlagEntry[] = [
  { code: "NG", name: "Nigeria" },
  { code: "CA", name: "Canada" },
  { code: "US", name: "United States" },
  { code: "GH", name: "Ghana" },
  { code: "NL", name: "Netherlands" },
  { code: "GB", name: "United Kingdom" },
  { code: "CH", name: "Switzerland" },
  { code: "DE", name: "Germany" },
  
  { code: "AU", name: "Australia" },
  // { code: "NZ", name: "New Zealand", },

  // --- Shown on web, hidden on mobile ---
  { code: "TZ", name: "Tanzania", extra: true },
  { code: "IN", name: "India", extra: true },
  { code: "KE", name: "Kenya", extra: true },

  // { code: "GB-WLS", name: "Wales", extra: true },
  // { code: "GB-SCT", name: "Scotland", extra: true },
  // { code: "AE", name: "Dubai (UAE)", extra: true },
  // { code: "ES", name: "Spain", extra: true },
  // { code: "IT", name: "Italy",extra: true }
];

const tilts = [-4, 3, -6, 5, -2, 4, -5, 3, -4];

const FlagsRow: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const stampVariants: Variants = {
    hidden: { opacity: 0, y: 16, scale: 0.9 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: tilts[custom % tilts.length],
      transition: { duration: 0.45, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative bg-[#FAFAF6] overflow-hidden px-4 py-20 md:py-24">
      {/* Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&family=Space+Mono:wght@400;700&display=swap');
        .font-editorial { font-family: 'Instrument Serif', serif; font-style: italic; }
        .font-technical { font-family: 'Space Mono', monospace; }
      `}</style>

      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#06110A 1px, transparent 1px), linear-gradient(90deg, #06110A 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto pb-[64px]">
        <div className="flex flex-col items-start gap-16 lg:gap-20">
          {/* Text Content */}
          <div className="max-w-5xl">
            <span className="inline-block font-technical text-[11px] font-bold uppercase tracking-[0.5em] text-[#06110A] border-2 border-[#06110A] px-3 py-1.5 -rotate-1 mb-8">
              Our Trust is Global
            </span>

            <h2 className="text-5xl md:text-7xl font-black text-[#06110A] tracking-[-0.05em] leading-[0.85]">
              Our Clients’ Countries 
              <br />
              <span className="relative inline-block text-[#048C04]">
                Building across borders.
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-[#06110A]/70 mt-8 leading-relaxed">
              Engineering impact across countries by turning ideas into
              high-performance digital systems beyond borders. We collaborate
              across time zones to build robust web, mobile, and desktop
              architectures that scale.
            </p>
          </div>

          {/* Flags Row */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative flex flex-wrap gap-x-10 gap-y-14 items-center w-full"
          >
            {/* Dotted route line */}
            <div className="absolute left-0 right-0 top-[38px] border-t-2 border-dashed border-[#06110A]/15 -z-0" />

            {flags.map(({ code, name, extra }, i) => (
              <motion.div
                key={code}
                custom={i}
                variants={stampVariants}
                whileHover={{ rotate: 0, y: -4, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className={`relative z-10 ${
                  extra ? "hidden md:flex" : "flex"
                } flex-col items-center gap-3 group cursor-default`}
              >
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-dashed border-[#06110A]/40 bg-white flex items-center justify-center overflow-hidden shadow-sm transition-colors duration-300 group-hover:border-[#D7301F]">
                  <ReactCountryFlag
                    countryCode={code}
                    svg
                    title={name}
                    style={{
                      width: "70%",
                      height: "70%",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <span className="font-technical text-[10px] md:text-[11px] uppercase tracking-[0.15em] text-[#06110A]/80 text-center">
                  {name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FlagsRow;

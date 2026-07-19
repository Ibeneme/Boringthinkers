import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ContactUs: React.FC = () => {
  return (
    <section className="relative bg-[#FFD000] py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-10 overflow-hidden">
      {/* Shared brand type system */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&family=Space+Mono:wght@400;700&display=swap');
        .font-editorial { font-family: 'Instrument Serif', serif; font-style: italic; }
      `}</style>

      {/* Faint graph-paper texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#0A1F13 1px, transparent 1px), linear-gradient(90deg, #0A1F13 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Background Texture - Clamped sizing for mobile safety */}
      <div className="absolute top-[-40px] right-[-40px] sm:top-[-80px] sm:right-[-80px] opacity-[0.04] pointer-events-none select-none window-overflow-hidden">
        <span className="text-[8rem] sm:text-[18rem] md:text-[24rem] lg:text-[28rem] font-black leading-none uppercase tracking-[-0.05em] text-[#0A1F13]">
          Contact
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-end justify-between gap-12 sm:gap-16 lg:gap-20">
          {/* Left Content */}
          <div className="max-w-2xl w-full">
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.5em] text-[#0A1F13] border-2 border-[#0A1F13] px-3 py-1.5 -rotate-1 mb-6 sm:mb-8"
            >
              Initiate Briefing
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] font-black text-[#0A1F13] leading-[0.9] lg:leading-[0.85] tracking-[-0.06em] mb-6 sm:mb-10"
            >
              Reach
              <br />
              Out.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-lg md:text-xl text-[#0A1F13] max-w-md lg:max-w-[38ch] leading-snug"
            >
              Discuss your next big project, or learn how our systems can
              accelerate your business growth.
            </motion.p>
          </div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-auto"
          >
            <a
              href="mailto:contact@boringthinkers.com"
              className="group block bg-[#0A1F13] rounded-2xl p-6 sm:p-8 md:p-10 min-h-[280px] sm:min-h-[340px] md:min-h-[380px] w-full lg:min-w-[420px] flex flex-col border border-[#0A1F13] hover:border-[#D7301F] transition-all duration-700 box-border"
            >
              {/* Top Bar */}
              <div className="flex justify-between items-start gap-4">
                <div className="px-3 sm:px-4 py-1.5 bg-[#FFD000]/10 text-[#FFD000] text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] rounded-full border border-[#FFD000]/20 whitespace-nowrap">
                  Official Mail
                </div>

                <ArrowUpRight
                  className="text-[#FFD000] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0"
                  size={36}
                  strokeWidth={2.5}
                />
              </div>

              {/* Bottom Content */}
              <div className="mt-auto pt-8">
                <p className="text-white text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-none mb-3 sm:mb-4">
                  Send a Mail
                </p>
                <p className="text-[#FFD000] text-base sm:text-lg md:text-xl break-all sm:break-normal">
                  contact@boringthinkers.com
                </p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

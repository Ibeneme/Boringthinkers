import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ContactUs: React.FC = () => {
  return (
    <section className="relative bg-[#FFD000] py-24 md:py-32 px-6 md:px-10 overflow-hidden">
      {/* Shared brand type system */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&family=Space+Mono:wght@400;700&display=swap');
        .font-editorial { font-family: 'Instrument Serif', serif; font-style: italic; }
        .font-technical { font-family: 'Space Mono', monospace; }
      `}</style>

      {/* Faint graph-paper texture, consistent with the rest of the site */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#06110A 1px, transparent 1px), linear-gradient(90deg, #06110A 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Background Texture */}
      <div className="absolute top-[-80px] right-[-80px] opacity-[0.04] pointer-events-none select-none">
        <span className="text-[18rem] md:text-[28rem] font-black leading-none uppercase tracking-[-0.05em] text-[#06110A]">
          Contact
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-16 lg:gap-20">
          {/* Left Content */}
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block font-technical text-[11px] font-bold uppercase tracking-[0.5em] text-[#06110A] border-2 border-[#06110A] px-3 py-1.5 -rotate-1 mb-8"
            >
              Initiate Briefing
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[4.5rem] md:text-[7rem] lg:text-[8rem] font-black text-[#06110A] leading-[0.85] tracking-[-0.06em] mb-10"
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
              className="text-[1.6rem] md:text-2xl text-[#06110A] max-w-[38ch] leading-snug"
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
              className="group block bg-[#06110A] rounded-2xl p-8 md:p-10 min-h-[340px] md:min-h-[380px] min-w-[340px] md:min-w-[420px] flex flex-col border border-[#06110A] hover:border-[#D7301F] transition-all duration-700 hover:shadow-2xl hover:shadow-black/40 hover:-translate-y-1"
            >
              {/* Top Bar */}
              <div className="flex justify-between items-start">
                <div className="px-4 py-1.5 bg-[#FFD000]/10 text-[#FFD000] font-technical text-[10px] font-bold uppercase tracking-[0.2em] rounded-full border border-[#FFD000]/20">
                  Official Mail
                </div>

                <ArrowUpRight
                  className="text-[#FFD000] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                  size={42}
                  strokeWidth={2.5}
                />
              </div>

              {/* Bottom Content */}
              <div className="mt-auto">
                <p className="text-white text-4xl md:text-5xl font-black tracking-tighter leading-none mb-4">
                  Send a Mail
                </p>
                <p className="font-technical text-[#FFD000] text-lg md:text-xl">
                  contact@boringthinkers.com
                </p>
              </div>
            </a>
          </motion.div>
        </div>

        {/* Footer Bar
        <div className="mt-24 pt-8 border-t border-dashed border-[#06110A]/15 flex flex-col sm:flex-row justify-between items-center gap-4 text-[#06110A]/50 font-technical text-[11px] font-bold uppercase tracking-[0.2em]">
          <span>Boring Thinkers Limited</span>
          <span className="text-center sm:text-right">
            © {new Date().getFullYear()} • All Rights Reserved
          </span>
        </div> */}
      </div>
    </section>
  );
};

export default ContactUs;

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ContactUs: React.FC = () => {
  return (
    <section className="relative bg-[#FFD000] py-32 px-6 md:px-20 overflow-hidden">
      {/* Decorative Texture */}
      <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none">
        <span className="text-[20rem] font-black leading-none uppercase select-none">
          Contact
        </span>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-end justify-between gap-16">
        {/* Text Side */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-[3px] bg-[#011404]" />
            <span className="text-[#011404] text-[11px] font-black uppercase tracking-[0.6em]">
              Initiate Briefing
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-[8rem] font-black text-[#011404] leading-[0.8] tracking-[-0.07em] uppercase mb-12"
          >
            REACH <br /> OUT.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#011404] text-xl md:text-2xl font-black uppercase tracking-tighter leading-tight"
          >
            Discuss your next big project or learn how our systems can
            accelerate your business growth.
          </motion.p>
        </div>

        {/* Action Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full lg:w-auto"
        >
          <a
            href="mailto:contact@boringthinkers.com"
            className="group relative flex flex-col items-start justify-between p-12 bg-[#011404] min-w-[320px] md:min-w-[450px] min-h-[300px] transition-all duration-500 hover:bg-black"
          >
            <div className="w-full flex justify-between items-start">
              <span className="text-[#FFD000] text-[10px] font-black uppercase tracking-[0.4em]">
                Official Channel
              </span>
              <ArrowUpRight
                className="text-[#FFD000] group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"
                size={40}
              />
            </div>

            <div className="mt-auto">
              <span className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter block mb-2">
                Send a Mail
              </span>
              <span className="text-[#FFD000] text-sm font-bold tracking-widest opacity-60">
                CONTACT@BORINGTHINKERS.COM
              </span>
            </div>
          </a>
        </motion.div>
      </div>

      {/* Identification Bar */}
      <div className="mt-32 pt-8 border-t-[1px] border-[#011404]/10 flex flex-wrap justify-between items-center gap-6">
        <span className="text-[10px] font-black text-[#011404]/40 uppercase tracking-[1em]">
          Boring Thinkers Ltd // Port Harcourt
        </span>
        <div className="flex gap-8">
          <span className="text-[10px] font-black text-[#011404] uppercase tracking-widest">
            System: Stable
          </span>
          <span className="text-[10px] font-black text-[#011404] uppercase tracking-widest">
            Build: 2026.04
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

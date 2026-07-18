import React from "react";
import { motion } from "framer-motion";

const termsSections = [
  {
    title: "Scope of Service",
    description:
      "Boring Thinkers Limited delivers digital product design, custom software architecture, and infrastructure scaling. All milestones, sprint outputs, and technical scopes are strictly dictated by individual Master Services Agreements (MSA).",
  },
  {
    title: "Intellectual Property",
    description:
      "Upon final clearance of all agreed payments, complete ownership of the custom code, digital assets, and system deployment architecture transfers directly to the client. Boring Thinkers retains rights only to its pre-existing core libraries.",
  },
  {
    title: "Client Obligations",
    description:
      "Clients must provide clear product specifications, access to third-party dashboards when necessary, and swift feedback during testing phases. Delays in access or milestone approvals directly affect the original launch timeline.",
  },
  {
    title: "Payment Terms",
    description:
      "Billing operates on fixed-price tiers, milestone-based installments, or retainer cycles. Unpaid invoices past 14 business days trigger automatic system-level hold protocols on all active engineering and design sprints.",
  },
  {
    title: "Termination & Exits",
    description:
      "Either party may pause or terminate engagement with a written notice of 30 days. Upon exit, any unbilled development hours or completed milestones will be invoiced and delivered immediately.",
  },
  {
    title: "Liability & Warranty",
    description:
      "We build robust, scalable architecture. However, Boring Thinkers Limited is not liable for upstream outages or security vulnerabilities originating from external third-party infrastructure tools (e.g., AWS, GCP, Cloudflare).",
  },
];

const TermsOfService: React.FC = () => {
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
    <section className="relative bg-[#FAFAF6] pt-[180px] pb-24 px-6 md:px-20 min-h-screen overflow-hidden">
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
      />{" "}
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
            TERMS OF <br /> SERVICE.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12 max-w-xl text-xl font-black text-[#050505] uppercase tracking-tighter leading-tight"
          >
            Rules of engagement, technical obligations, and intellectual
            property ownership definitions for Boring Thinkers Limited.
          </motion.p>
        </div>

        {/* Sections Grid - Structural List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-0"
        >
          {termsSections.map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group flex flex-col md:flex-row items-start md:items-center py-12 border-b border-gray-100 hover:bg-gray-50 transition-colors px-4"
            >
              {/* Section Number */}
              <div className="text-4xl md:text-7xl font-black text-[#050505] opacity-5 group-hover:opacity-100 group-hover:text-[#FFD000] transition-all w-24 md:w-32 mb-4 md:mb-0">
                0{index + 1}
              </div>

              {/* Title */}
              <div className="flex-1">
                <h3 className="text-2xl md:text-4xl font-black text-[#050505] uppercase tracking-tighter mb-2 group-hover:pl-4 transition-all duration-300">
                  {section.title}
                </h3>
              </div>

              {/* Description */}
              <div className="flex-[1.5]">
                <p className="text-[#050505] text-lg font-bold opacity-50 group-hover:opacity-100 transition-opacity max-w-lg leading-snug">
                  {section.description}
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
          className="mt-24 p-12 bg-[#FFD000] inline-block origin-left rounded-none"
        >
          <p className="text-[#050505] font-black text-2xl uppercase tracking-tighter leading-none">
            Terms Confirmed. Ready to Build.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TermsOfService;

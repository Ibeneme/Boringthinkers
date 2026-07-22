import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const securitySections = [
  {
    title: "Codebase Security",
    description:
      "All repositories are strictly isolated with automated dependency scanning enabled. We use rigorous static and dynamic application security testing (SAST/DAST) in our CI/CD pipelines to intercept vulnerabilities long before production.",
  },
  {
    title: "Data Encryption",
    description:
      "Your data is fully encrypted at rest and in transit. We enforce end-to-end TLS 1.3 encryption across all communication networks, and use AES-256 standards for persistent disk storage.",
  },
  {
    title: "Access Controls",
    description:
      "Access to client systems operates on a strict Principle of Least Privilege (PoLP). Team access requires mandatory hardware-backed multi-factor authentication (MFA) and is continuously logged in immutable audit trails.",
  },
  {
    title: "Infrastructure & Isolation",
    description:
      "We build on secure microservices architecture and isolate staging, testing, and production environments. Server configurations are maintained via Infrastructure as Code (IaC) to prevent manual configuration drift.",
  },
  {
    title: "Continuous Monitoring",
    description:
      "Our system alerts are integrated directly with round-the-clock monitoring networks. We track application access patterns, server anomalies, and incoming traffic to shut down potential threats instantly.",
  },
  {
    title: "Third-Party Compliance",
    description:
      "Any third-party provider or cloud service integrated into your system is vetted through strict compliance reviews. We work exclusively with tier-1 enterprise platforms that guarantee SOC2 and ISO 27001 compliance.",
  },
];

export const SecurityPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Security Architecture | Boring Thinkers",
    url: "https://boringthinkers.com/security",
    description:
      "A high-standard blueprint of systemic defenses, zero-trust policies, and deployment safeguards designed to keep your IP protected.",
    publisher: {
      "@type": "Organization",
      name: "Boring Thinkers",
      url: "https://boringthinkers.com/",
      logo: "https://boringthinkers.com/logo.png",
      sameAs: [
        "https://www.linkedin.com/company/boring-thinkers/",
        "https://x.com/BoringThinkers",
        "https://www.instagram.com/boringthinkers",
      ],
    },
  };

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
      <Helmet>
        <title>Security Architecture | Boring Thinkers</title>
        <meta
          name="description"
          content="Explore the rigorous security architecture, encryption standards, and zero-trust access controls used by Boring Thinkers."
        />
        <link rel="canonical" href="https://boringthinkers.com/security" />
        <meta
          property="og:title"
          content="Security Architecture | Boring Thinkers"
        />
        <meta
          property="og:description"
          content="Systemic defenses, zero-trust policies, and deployment safeguards designed to keep your IP protected."
        />
        <meta property="og:url" content="https://boringthinkers.com/security" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Boring Thinkers" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&family=Space+Mono:wght@400;700&display=swap');
        .font-editorial { font-family: 'Instrument Serif', serif; font-style: italic; }
        .font-technical { font-family: 'Space Mono', monospace; }
      `}</style>
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#06110A 1px, transparent 1px), linear-gradient(90deg, #06110A 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="max-w-7xl mx-auto">
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
            SECURITY <br /> ARCHITECTURE.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12 max-w-xl text-xl font-black text-[#050505] uppercase tracking-tighter leading-tight"
          >
            A high-standard blueprint of systemic defenses, zero-trust policies,
            and deployment safeguards designed to keep your IP protected.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-0"
        >
          {securitySections.map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group flex flex-col md:flex-row items-start md:items-center py-12 border-b border-gray-100 hover:bg-gray-50 transition-colors px-4"
            >
              <div className="text-4xl md:text-7xl font-black text-[#050505] opacity-5 group-hover:opacity-100 group-hover:text-[#FFD000] transition-all w-24 md:w-32 mb-4 md:mb-0">
                0{index + 1}
              </div>

              <div className="flex-1">
                <h3 className="text-2xl md:text-4xl font-black text-[#050505] uppercase tracking-tighter mb-2 group-hover:pl-4 transition-all duration-300">
                  {section.title}
                </h3>
              </div>

              <div className="flex-[1.5]">
                <p className="text-[#050505] text-lg font-bold opacity-50 group-hover:opacity-100 transition-opacity max-w-lg leading-snug">
                  {section.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-12 bg-[#FFD000] inline-block origin-left rounded-none"
        >
          <p className="text-[#050505] font-black text-2xl uppercase tracking-tighter leading-none">
            Zero trust enforced. Your architecture is secure.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SecurityPage;

import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const privacySections = [
  {
    title: "Data Collection",
    description:
      "We collect minimal operational data necessary for software development. This includes client-provided specs, codebase references, and basic project communications. We do not harvest or buy third-party user data.",
  },
  {
    title: "Data Processing",
    description:
      "Your project data is purely used to build, optimize, and maintain custom solutions. We analyze workflow data internally to speed up code reviews, improve system testing, and ensure structural scalability.",
  },
  {
    title: "Data Protection",
    description:
      "We implement high-grade industrial encryption and secure microservices architecture. Your digital assets, source code, and configurations are isolated within strict access-control protocols.",
  },
  {
    title: "Third-Party Scope",
    description:
      "We do not sell, rent, or trade your data. Any metadata shared with specialized third-party cloud tools (e.g., Vercel, AWS, GitHub) is bound strictly by enterprise-level non-disclosure agreements.",
  },
  {
    title: "Client Controls",
    description:
      "You retain absolute ownership of your intellectual property. At any point, you may request full code audits, total structural export, or complete removal of any operational project metadata from our servers.",
  },
  {
    title: "System Updates",
    description:
      "This policy may be amended to reflect new regulatory compliance or security updates. Changes will be instantly active, with historical revisions tracked with total transparency.",
  },
];

export const PrivacyPolicy: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy | Boring Thinkers",
    url: "https://boringthinkers.com/privacy",
    description:
      "Boring Thinkers Limited takes security seriously. We handle client data, intellectual property, and system infrastructure with total transparency.",
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
        <title>Privacy Policy | Boring Thinkers</title>
        <meta
          name="description"
          content="Learn how Boring Thinkers handles client data, intellectual property privacy, and secure cloud infrastructure protection."
        />
        <link rel="canonical" href="https://boringthinkers.com/privacy" />
        <meta property="og:title" content="Privacy Policy | Boring Thinkers" />
        <meta
          property="og:description"
          content="Handling client data, intellectual property, and system infrastructure with total transparency."
        />
        <meta property="og:url" content="https://boringthinkers.com/privacy" />
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
            PRIVACY <br /> POLICY.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12 max-w-xl text-xl font-black text-[#050505] uppercase tracking-tighter leading-tight"
          >
            Boring Thinkers Limited takes security seriously. We handle client
            data, intellectual property, and system infrastructure with total
            transparency.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-0"
        >
          {privacySections.map((section, index) => (
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
            Infrastructure Secure. Protocols Active.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;

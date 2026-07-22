import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import dream from "../../../src/assets/images/we/dream.png";
import design from "../../../src/assets/images/we/designa.png";
import main from "../../../src/assets/images/we/main.png";
import mainb from "../../../src/assets/images/we/mainb.png";

const sections = [
  {
    title: "Dream, We Build.",
    description:
      "We take your biggest ideas and turn them into real, easy-to-use digital tools. Whatever you have in mind, we have the skills to bring it to life.",
    bgColor: "bg-[#DFFFDC]",
    image: dream,
  },
  {
    title: "How We Design",
    description:
      "We believe in keeping things simple and beautiful. We focus on making sure our apps and websites are clean, look great, and are very easy for your customers to use.",
    bgColor: "bg-[#FFE2E9]",
    image: main,
  },
  {
    title: "How We Build",
    description:
      "We write code that is organized, reliable, and built to last. Our goal is to create technology that works perfectly today and can easily grow with your business tomorrow.",
    bgColor: "bg-[#E8DEFF]",
    image: design,
  },
  {
    title: "Fast & Secure",
    description:
      "We work quickly to get your project launched without ever cutting corners. We keep a close eye on everything to make sure your data stays safe and your site stays secure.",
    bgColor: "bg-[#FFEECB]",
    image: mainb,
  },
];

const We: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: sections.map((section, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: section.title,
      description: section.description,
    })),
  };

  return (
    <>
      <Helmet>
        <title>Engineering Capabilities & Process | Boring Thinkers</title>
        <meta
          name="description"
          content="Explore our core engineering capabilities, user-centric design workflows, scalable full-stack development processes, and security practices at Boring Thinkers Limited."
        />
        <link rel="canonical" href="https://boringthinkers.com/about-us" />
        <meta
          property="og:title"
          content="Engineering Capabilities & Process | Boring Thinkers"
        />
        <meta
          property="og:description"
          content="Discover how we turn visionary ideas into scalable, secure, and intuitive digital tools."
        />
        <meta
          property="og:url"
          content="https://boringthinkers.com/about-us"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Boring Thinkers" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="w-full bg-white pt-[120px]">
        {/* Heavy Header Section */}
        <div className="px-6 md:px-20 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-2 h-2 bg-[#011404] rounded-full" />
            <span className="text-[#011404] text-[11px] font-black uppercase tracking-[0.6em]">
              Capabilities
            </span>
          </motion.div>

          <h1 className="text-6xl md:text-[10rem] font-black text-[#011404] tracking-[-0.08em] leading-[0.8]">
            Engineering <br />
            <span className="text-[#011404]">Excellence.</span>
          </h1>
        </div>

        {/* Full-Bleed Color Block Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {sections.map((section, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`${section.bgColor} p-12 md:p-24 flex flex-col justify-between items-start group min-h-[680px] relative`}
            >
              {/* Top Image Layout */}
              <div className="w-full h-80 mb-16 overflow-hidden flex items-center justify-center">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>

              {/* Bottom Content Layout */}
              <div className="w-full">
                <span className="text-[11px] font-black uppercase tracking-widest text-[#011404]/30 mb-4 block">
                  {/* Protocol 0{index + 1} */}
                </span>

                <h2 className="text-4xl md:text-6xl font-black text-[#011404] tracking-tighter mb-8 leading-[0.9]">
                  {section.title}
                </h2>

                <p className="text-[#011404] text-xl leading-tight max-w-sm tracking-tight">
                  {section.description}
                </p>
              </div>

              {/* Subtle Text Decoration */}
              <div className="absolute bottom-8 right-8 overflow-hidden pointer-events-none hidden lg:block">
                <span className="text-9xl font-black text-[#011404]/5 tracking-tighter leading-none translate-y-8 block">
                  {section.title.split(" ")[0]}
                </span>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </>
  );
};

export default We;

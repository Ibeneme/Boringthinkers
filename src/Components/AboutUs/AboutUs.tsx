import React from "react";
import { motion, Variants } from "framer-motion";

interface AboutUsProps {
  showCta?: boolean;
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } 
  },
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.1 } }
};

const AboutUs: React.FC<AboutUsProps> = () => {
  return (
    <section className="bg-white">
      {/* --- MISSION SECTION --- */}
      <div className="bg-[#011404] py-24 lg:py-40 px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start"
        >
          <div>
            <motion.p 
              variants={fadeInUp}
              className="text-[#FFD000] text-xs font-bold uppercase tracking-widest mb-6"
            >
              The Drive
            </motion.p>
            <motion.h2 
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-black text-white leading-none uppercase tracking-tighter"
            >
              Our <br />
              <span className="text-[#FFD000]">Mission.</span>
            </motion.h2>
          </div>

          <motion.div variants={fadeInUp} className="space-y-8">
            <p className="text-white text-xl md:text-2xl font-medium leading-relaxed opacity-90">
              Our mission is to design and deliver reliable, user-centric software 
              solutions that address real-world problems. We exceed expectations, 
              empowering users to accomplish more with less effort.
            </p>
            <p className="text-white/60 text-lg leading-relaxed">
              Through relentless research and development, we simplify tasks, 
              enhance productivity, and improve everyday experiences.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* --- VISION SECTION --- */}
      <div className="bg-white py-24 lg:py-40 px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start"
        >
          <div className="order-2 lg:order-1">
            <motion.div variants={fadeInUp} className="space-y-8">
              <p className="text-gray-900 text-xl md:text-2xl font-medium leading-relaxed">
                We aim to become a leading provider of software products that 
                simplify daily challenges. We empower organizations to work 
                more efficiently, making life easier and more productive.
              </p>
              <div className="h-1 w-12 bg-[#011404]" />
              <p className="text-gray-500 text-lg leading-relaxed uppercase font-bold tracking-tight">
                Technology integrated seamlessly into the workflow of modern enterprise.
              </p>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2 lg:text-right">
            <motion.p 
              variants={fadeInUp}
              className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-6"
            >
              The Future
            </motion.p>
            <motion.h2 
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-black text-black leading-none uppercase tracking-tighter"
            >
              Our <br />
              Vision.
            </motion.h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
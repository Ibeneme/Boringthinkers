import React from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion"; // Added Variants
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import crayons from "../../assets/images/new/codeb.jpg";

const OurCompany: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const handleSendMail = () => {
    window.location.href = "mailto:contact@boringthinkers.com";
  };

  // Explicitly typing containerVariants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  // Explicitly typing itemVariants fixes the TS2322 errors
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut", // Now recognized as a valid Easing string
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-white overflow-hidden selection:bg-[#FFD000] selection:text-[#011404]">
      <div className="flex flex-col lg:flex-row items-stretch min-h-screen">
        {/* Left Content Side */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-24 py-24 lg:py-12 bg-white z-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-xl"
          >
            {/* Structural Marker */}
            <motion.div variants={itemVariants} className="mb-12">
              <span className="text-[#011404] text-[11px] font-black uppercase tracking-[0.6em] border-b-4 border-[#FFD000] pb-1">
                Since 2025
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-9xl font-black text-[#011404] tracking-[-0.06em] mb-12 leading-[0.8]"
            >
              NOT JUST <br />
              CODE.
            </motion.h1>

            <motion.div variants={itemVariants} className="space-y-12">
              <p className="text-2xl font-black text-[#011404] leading-tight uppercase tracking-tighter">
                Boring Thinkers is a creative powerhouse built for visionary
                startups.
              </p>

              <p className="text-[#011404] text-lg leading-relaxed font-bold max-w-md">
                We craft digital experiences that solve complex problems. From
                MVPs to enterprise platforms, we turn bold concepts into
                intuitive products.
              </p>

              <div className="flex items-center gap-4 py-6 border-y border-gray-100">
                <span className="w-3 h-3 bg-[#FFD000] rounded-full" />
                <p className="text-xl font-black text-[#011404] uppercase tracking-tighter">
                  Build fast. Think deep. Deliver smart.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-20">
              <button
                onClick={handleSendMail}
                className="group flex items-center justify-between w-full max-w-md py-8 px-0 border-b-2 border-[#011404] hover:border-[#FFD000] transition-colors duration-300"
              >
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#011404]/30 mb-2">
                    Action
                  </span>
                  <span className="text-4xl font-black text-[#011404] uppercase tracking-tighter">
                    Send a Mail
                  </span>
                </div>
                <IoArrowForwardCircleSharp
                  size={64}
                  className="text-[#011404] transition-transform duration-500 group-hover:text-[#FFD000] group-hover:translate-x-2"
                />
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Image Side */}
        <div className="flex-1 relative min-h-[500px] lg:min-h-screen overflow-hidden bg-gray-50">
          <motion.div
            style={{ y }}
            className="absolute inset-0 w-full h-[115%]"
          >
            <img
              src={crayons}
              alt="Production Environment"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>


          {/* Solid Information Plate */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="absolute bottom-0 left-0 p-12 bg-[#FFD000] text-[#011404] w-full lg:max-w-md z-30"
          >
            <p className="font-black text-xs uppercase tracking-[0.3em] mb-4">
              Strategic Execution
            </p>
            <h3 className="font-black text-2xl uppercase leading-[0.9] tracking-tighter">
              We analyze the DNA of your business before writing a line of code.
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurCompany;

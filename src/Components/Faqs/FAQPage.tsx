import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoAdd, IoRemove } from "react-icons/io5";

const faqs = [
  {
    question: "What services does Boring Thinkers Limited provide?",
    answer:
      "Boring Thinkers Limited specializes in designing and developing user-centric software solutions, including web applications, mobile apps, enterprise software, and AI-powered tools. We also offer UI/UX design, software consulting, and product strategy services.",
  },
  {
    question: "How does Boring Thinkers Limited ensure quality?",
    answer:
      "We follow a structured process that includes thorough research, ideation, design, agile development, rigorous testing, and continuous improvement. Our focus is on building reliable, scalable, and intuitive solutions.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We develop solutions for various industries, including fintech, e-commerce, logistics, education, and AI-driven applications. Our team is flexible and can tailor software to meet the unique needs of any sector.",
  },
  {
    question: "Do you have a platform for clients to track projects?",
    answer:
      "Yes. We’ve built custom software specifically for managing and tracking client projects. Once onboarded, clients receive secure login credentials to access real-time updates about progress, milestones, and team activity.",
  },
  {
    question: "Can I do equity-based business with you?",
    answer:
      "Yes, we’re open to equity and cash-based partnerships for select clients and startups. We’re happy to discuss hybrid business models that align incentives and create long-term value.",
  },
  {
    question: "How can I collaborate for my project?",
    answer:
      "Reach out via email at contact@boringthinkers.com. We will discuss your project needs, define the scope, and develop a customized solution that aligns with your vision.",
  },
];

const FAQPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white pt-[120px] pb-24 px-6 md:px-20 selection:bg-[#FFD000] selection:text-[#050505]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <span className="text-[#050505] text-[10px] font-black uppercase tracking-[0.6em] mb-4 block">
            Information Base
          </span>
          <h1 className="text-5xl md:text-[8rem] font-black text-[#050505] tracking-[-0.07em] uppercase leading-[0.8]">
            QUESTIONS.
          </h1>
        </motion.div>

        {/* FAQ List */}
        <div className="">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-100">
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full py-10 flex items-start justify-between text-left group transition-all"
              >
                <div className="flex gap-8 items-start">
                  <span
                    className={`font-mono text-sm pt-2 transition-colors duration-300 ${
                      activeIndex === index ? "text-[#FFD000]" : "text-gray-300"
                    }`}
                  >
                    {index < 9 ? `0${index + 1}` : index + 1}
                  </span>
                  <h3
                    className={`text-xl md:text-3xl font-black uppercase tracking-tighter transition-all duration-300 ${
                      activeIndex === index
                        ? "text-[#050505]"
                        : "text-[#050505]/40 group-hover:text-[#050505]"
                    }`}
                  >
                    {faq.question}
                  </h3>
                </div>

                <div
                  className={`mt-1 p-2 rounded-full transition-all duration-500 ${
                    activeIndex === index
                      ? "bg-[#050505] text-[#FFD000] rotate-180"
                      : "bg-gray-50 text-gray-400 group-hover:bg-[#050505] group-hover:text-white"
                  }`}
                >
                  {activeIndex === index ? (
                    <IoRemove size={24} />
                  ) : (
                    <IoAdd size={24} />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="pb-12 pl-16 md:pl-32 pr-6 md:pr-24">
                      <p className="text-lg md:text-xl font-bold text-[#050505]/70 leading-relaxed max-w-3xl">
                        {faq.answer.split(" ").map((word, i) => (
                          <span
                            key={i}
                            className={
                              word.includes("@")
                                ? "text-[#FFD000] underline"
                                : ""
                            }
                          >
                            {word}{" "}
                          </span>
                        ))}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Support Callout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-10 bg-gray-50 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="text-[#050505] font-black uppercase tracking-tighter text-xl">
            Still looking for technical clarification?
          </p>
          <button className="bg-[#050505] text-white px-8 py-4 font-black uppercase tracking-widest text-xs hover:bg-[#FFD000] hover:text-[#050505] transition-all">
            Contact Engineering
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQPage;

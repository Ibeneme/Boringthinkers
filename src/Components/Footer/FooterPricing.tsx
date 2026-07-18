import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Smartphone } from "lucide-react";

const FooterPricing: React.FC = () => {
  const handleSendMail = () => {
    window.location.href = "mailto:contact@boringthinkers.com";
  };

  const plans = [
    {
      id: "social-basic",
      category: "Social Media",
      title: "Basic",
      price: "₦200K",
      features: [
        "Twitter, Facebook, Instagram, TikTok",
        "3 Posts Weekly",
        "Custom Graphics",
        "SEO Blog Content",
        "Monthly Analytics",
      ],
    },
    {
      id: "social-premium",
      category: "Social Media",
      title: "Premium",
      price: "₦500K",
      features: [
        "Everything in Basic",
        "Video Production",
        "Ad Campaign Boosting",
        "Advanced Copywriting",
        "Priority Support",
      ],
    },
    {
      id: "social-enterprise",
      category: "Social Media",
      title: "Enterprise",
      price: "Custom",
      features: [
        "Dedicated Manager",
        "Custom Strategy",
        "AI Analytics",
        "Multi-Platform Scale",
        "Growth Consulting",
      ],
    },
  ];

  const developmentServices = [
    { id: "dev-static", title: "Static Website", price: "From ₦350,000" },
    {
      id: "dev-ecommerce",
      title: "E-Commerce Platform",
      price: "From ₦1,000,000",
    },
    { id: "dev-mobile", title: "Mobile Application", price: "From ₦1,000,000" },
    { id: "dev-uber", title: "Uber-Like Platform", price: "₦4,000,000+" },
    { id: "dev-ai", title: "Custom AI Systems", price: "Contact Us" },
  ];

  // Middle social plan carries the same red-pen "Editor's Pick" mark used
  // on the main pricing page, kept consistent rather than reinvented here.
  const recommendedId = "social-premium";

  return (
    <section className="relative bg-[#FFD000] py-32 px-6 md:px-20 overflow-hidden">
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

      {/* Background Decorative Text */}
      <div className="absolute top-0 right-0 opacity-[0.04] pointer-events-none">
        <span className="text-[20rem] font-black uppercase leading-none select-none text-[#06110A]">
          Pricing
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <span className="inline-block font-technical text-[11px] font-bold uppercase tracking-[0.5em] text-[#06110A] border-2 border-[#06110A] px-3 py-1.5 -rotate-1 mb-8">
            Service Packages
          </span>
          <h2 className="text-6xl md:text-[8rem] font-black text-[#06110A] leading-[0.8] tracking-[-0.07em] mb-10">
            Simple
            <br />
            Packages.
          </h2>
          <p className="max-w-2xl text-2xl md:text-2xl text-[#06110A] leading-snug">
            Strategic systems, growth marketing, and digital products — built to
            move ambitious brands, not just look busy.
          </p>
        </motion.div>

        {/* Pricing Cards Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-32">
          {plans.map((plan, index) => (
            <motion.div
              id={plan.id}
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-[#06110A] p-10 min-h-[580px] flex flex-col rounded-2xl border border-[#06110A] hover:border-[#FFD000] transition-colors duration-500"
            >
              {plan.id === recommendedId && (
                <span className="absolute -top-3 -right-3 bg-[#FFD000] border-2 border-[#D7301F] text-[#D7301F] rounded-full px-3 py-1 font-technical text-[10px] font-bold uppercase tracking-widest rotate-3 z-10">
                  Editor’s Pick
                </span>
              )}

              <span className="text-[#FFD000] font-technical text-[10px] font-bold uppercase tracking-[0.4em]">
                {plan.category}
              </span>
              <h3 className="text-white text-4xl font-black mt-8">
                {plan.title}
              </h3>
              <div className="my-10">
                <span className="text-[#FFD000] font-technical text-5xl md:text-6xl font-bold tracking-tight">
                  {plan.price}
                </span>
                {plan.price !== "Custom" && (
                  <span className="block text-white/40 mt-2 font-technical text-xs uppercase tracking-widest">
                    Per Month
                  </span>
                )}
              </div>
              <div className="space-y-4 flex-1">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 border-b border-white/10 pb-4 text-white/80 font-technical text-sm"
                  >
                    <span className="text-[#FFD000]/70 mt-0.5">—</span>
                    {feature}
                  </div>
                ))}
              </div>
              <button
                onClick={handleSendMail}
                className="mt-12 flex justify-between items-center border-t border-white/10 pt-8 text-white group-hover:text-[#FFD000] transition-colors"
              >
                <span className="font-black uppercase tracking-tight">
                  {plan.price === "Custom" ? "Discuss Project" : "Get Started"}
                </span>
                <ArrowUpRight
                  size={30}
                  className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"
                />
              </button>
            </motion.div>
          ))}
        </div>

        {/* SEO and Development Services Section */}
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <span className="inline-block font-technical text-[11px] font-bold uppercase tracking-[0.5em] text-[#06110A] border-2 border-[#06110A] px-3 py-1.5 -rotate-1 mb-8">
              SEO Services
            </span>
            <div className="bg-[#06110A] rounded-2xl p-10 border border-[#06110A]">
              <div className="border-b border-white/10 pb-8 mb-8">
                <h3 className="text-white text-3xl font-black mb-4">
                  Basic SEO
                </h3>
                <p className="text-[#FFD000] font-technical text-5xl font-bold">
                  ₦150,000
                </p>
              </div>
              <div className="space-y-4 text-white/80 font-technical text-sm">
                {[
                  "Keyword Audit",
                  "On-Page Optimization",
                  "Technical Improvements",
                  "Monthly Reporting",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-[#FFD000]/70 mt-0.5">—</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <span className="inline-block font-technical text-[11px] font-bold uppercase tracking-[0.5em] text-[#06110A] border-2 border-[#06110A] px-3 py-1.5 -rotate-1 mb-8">
              Development
            </span>
            <div className="space-y-1">
              {developmentServices.map((service) => (
                <div
                  id={service.id}
                  key={service.id}
                  className="flex justify-between items-center py-8 border-b border-[#06110A]/20 hover:pl-4 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    {service.id === "dev-mobile" && (
                      <Smartphone size={24} className="text-[#06110A]" />
                    )}
                    <span className="text-[#06110A] text-xl md:text-2xl font-black uppercase">
                      {service.title}
                    </span>
                  </div>
                  <span className="font-technical font-bold text-[#06110A]">
                    {service.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterPricing;

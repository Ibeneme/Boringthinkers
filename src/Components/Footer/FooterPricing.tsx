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

  return (
    <section className="relative bg-[#FFD000] py-32 px-6 md:px-20 overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none">
        <span className="text-[20rem] font-black uppercase leading-none select-none">
          Pricing
        </span>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[3px] bg-[#011404]" />
            <span className="text-[#011404] text-[11px] font-black uppercase tracking-[0.6em]">
              Service Packages
            </span>
          </div>
          <h2 className="text-6xl md:text-[8rem] font-black text-[#011404] leading-[0.8] tracking-[-0.07em] mb-10">
            Simple <br />
            Packages.
          </h2>
          <p className="max-w-2xl text-xl md:text-2xl text-[#011404] font-black tracking-tight leading-tight">
            Strategic systems, growth marketing and digital products designed to
            accelerate ambitious brands.
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
              className="group bg-[#011404] p-10 min-h-[580px] flex flex-col"
            >
              <span className="text-[#FFD000] text-[10px] font-black uppercase tracking-[0.4em]">
                {plan.category}
              </span>
              <h3 className="text-white text-4xl font-black  mt-8">
                {plan.title}
              </h3>
              <div className="my-10">
                <span className="text-[#FFD000] text-6xl font-black tracking-tighter">
                  {plan.price}
                </span>
                {plan.price !== "Custom" && (
                  <span className="block text-white/40 mt-2 text-sm uppercase font-bold tracking-widest">
                    Per Month
                  </span>
                )}
              </div>
              <div className="space-y-4 flex-1">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="border-b border-white/10 pb-4 text-white font-bold"
                  >
                    {feature}
                  </div>
                ))}
              </div>
              <button
                onClick={handleSendMail}
                className="mt-12 flex justify-between items-center border-t border-white/10 pt-8 text-white group-hover:text-[#FFD000] transition-colors"
              >
                <span className="font-black uppercase">
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
            <span className="text-[11px] font-black uppercase tracking-[0.6em] text-[#011404] block mb-8">
              SEO Services
            </span>
            <div className="bg-[#011404] p-10">
              <div className="border-b border-white/10 pb-8 mb-8">
                <h3 className="text-white text-3xl font-black  mb-4">
                  Basic SEO
                </h3>
                <p className="text-[#FFD000] text-5xl font-black">₦150,000</p>
              </div>
              <div className="space-y-4 text-white font-bold">
                <div>Keyword Audit</div>
                <div>On-Page Optimization</div>
                <div>Technical Improvements</div>
                <div>Monthly Reporting</div>
              </div>
            </div>
          </div>
          <div>
            <span className="text-[11px] font-black uppercase tracking-[0.6em] text-[#011404] block mb-8">
              Development
            </span>
            <div className="space-y-2">
              {developmentServices.map((service) => (
                <div
                  id={service.id}
                  key={service.id}
                  className="flex justify-between items-center py-8 border-b border-[#011404]/20 hover:pl-4 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    {service.id === "dev-mobile" && (
                      <Smartphone size={24} className="text-[#011404]" />
                    )}
                    <span className="text-[#011404] text-xl md:text-2xl font-black uppercase">
                      {service.title}
                    </span>
                  </div>
                  <span className="font-black text-[#011404]">
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

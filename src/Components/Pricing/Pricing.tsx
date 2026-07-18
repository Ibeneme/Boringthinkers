import React from "react";
import { type Variants, motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

interface Plan {
  tagline: string;
  title: string;
  price: string;
  features: string[];
}

const PricingComponent: React.FC = () => {
  const handleSendMail = () =>
    (window.location.href = "mailto:contact@boringthinkers.com");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const renderFeatures = (features: string[]) => (
    <ul className="space-y-4 mb-12 flex-1">
      {features.map((feature, i) => (
        <li
          key={i}
          className="flex items-start gap-3 text-white/80 font-technical text-[13px] leading-snug group-hover:text-white transition-colors"
        >
          <div className="mt-0.5 w-4 h-4 border border-[#FFD000]/50 flex items-center justify-center shrink-0">
            <Check size={11} className="text-[#FFD000]" strokeWidth={3} />
          </div>
          {feature}
        </li>
      ))}
    </ul>
  );

  const Section = ({ title, plans }: { title: string; plans: Plan[] }) => {
    // The middle-ish tier carries the "editor's pick" — a red-pen note,
    // the same mark used for the headline correction across the site.
    const recommendedIndex =
      plans.length > 1 ? Math.floor(plans.length / 2) : -1;

    return (
      <div className="mb-28 md:mb-36">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black text-[#fff] leading-[0.85] tracking-[-0.06em]">
            {title}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {plans.map((plan, i) => (
            <motion.div
              key={plan.title + i}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-[#ffffff08] p-8 md:p-10 flex flex-col border border-[#06110A] hover:border-[#FFD000] transition-all duration-500 rounded-2xl"
            >
              {i === recommendedIndex && (
                <span className="absolute -top-3 -right-3 bg-[#FAFAF6] border-2 border-[#D7301F] text-[#D7301F] rounded-full px-3 py-1 font-technical text-[10px] font-bold uppercase tracking-widest rotate-3 z-10">
                  Editor’s Pick
                </span>
              )}

              <div className="mb-8">
                <span className="inline-block text-[#FFD000] font-technical text-[10px] font-bold uppercase tracking-[0.4em] mb-3">
                  {plan.tagline}
                </span>
                <h3 className="text-white text-4xl font-black tracking-tighter mb-2">
                  {plan.title}
                </h3>
                <p className="text-[#FFD000] font-technical text-4xl font-bold tracking-tight">
                  {plan.price}
                </p>
              </div>

              {renderFeatures(plan.features)}

              <motion.button
                onClick={handleSendMail}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.985 }}
                className="mt-auto w-full py-4 px-6 pr-3 bg-[#FFD000] text-[#06110A] font-black uppercase text-[13px] tracking-widest flex items-center justify-between transition-all duration-300 rounded-full"
              >
                <span>Let's Get Started</span>
                <div className="w-9 h-9 bg-[#FAFAF6] rounded-full flex items-center justify-center">
                  <ArrowUpRight
                    size={18}
                    className="text-[#06110A] group-hover:rotate-45 transition-transform duration-300"
                  />
                </div>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <section className="relative bg-[#06110A] pt-[140px] md:pt-[180px] pb-24 px-6 md:px-20 font-sans min-h-screen overflow-hidden">
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
            "linear-gradient(#ffffff85 1px, transparent 1px), linear-gradient(90deg, #ffffff85 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="mb-24 md:mb-32">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl sm:text-7xl md:text-[9.5rem] font-black text-[#fff] leading-[0.82] tracking-[-0.07em] relative inline-block"
          >
            Pricing
            <span className="absolute left-0 -bottom-2 md:-bottom-4 w-full h-[4px] bg-[#FFD000]" />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 max-w-2xl text-2xl md:text-3xl text-[#fff]/70 leading-snug"
          >
            Engineering great software is what we do
          </motion.p>
        </div>

        <Section
          title="Software Development Systems"
          plans={[
            {
              tagline: "Foundation",
              title: "Basic",
              price: "₦3,600,000",
              features: [
                "Infrastructure Web Server Setup",
                "MVP Mobile App Architecture",
                "User-Centric Admin Panel",
                "Standard Encryption Protocols",
                "Scalable Database Schema",
                "Custom UI/UX Wireframing",
                "Seamless Email Integration",
                "SEO-Ready Search Indexing",
                "Cross-Platform Optimization",
                "12 Months Full Maintenance",
              ],
            },
            {
              tagline: "Growth",
              title: "Premium",
              price: "₦9,400,000",
              features: [
                "Cloud-Native Web Server",
                "Full Feature iOS & Android",
                "Operational Admin Dashboard",
                "End-to-End Data Encryption",
                "Automated Cloud Backups",
                "Custom API Middleware",
                "Behavioral User Analytics",
                "Advanced Push Notifications",
                "Performance Latency Tuning",
                "12 Months Full Maintenance",
              ],
            },
            {
              tagline: "Scale",
              title: "Complex",
              price: "₦25,000,000",
              features: [
                "Microservices Architecture",
                "Elastic Cloud Infrastructure",
                "Real-time Distributed Sync",
                "RBAC Security Framework",
                "High-Availability Balancing",
                "Comprehensive Security Audit",
                "Business Intelligence Reporting",
                "Third-Party API Integration",
                "CI/CD Pipeline Automation",
                "12 Months Full Maintenance",
              ],
            },
            {
              tagline: "Institutional",
              title: "Fintech",
              price: "₦40,000,000",
              features: [
                "Bank-Grade Security Layers",
                "Distributed Transaction Engine",
                "KYC/AML Compliance Modules",
                "Global Multi-Currency Core",
                "Hardware Security Integration",
                "Institutional Trading UI",
                "Fraud Detection Algorithms",
                "Automated Compliance Auditing",
                "24/7 Server Infrastructure",
                "12 Months Full Maintenance",
              ],
            },
            {
              tagline: "Education",
              title: "Edutech",
              price: "₦25,000,000",
              features: [
                "Learning Management System (LMS)",
                "Student & Teacher Portals",
                "Live Class & Webinar System",
                "Assessment & Grading Engine",
                "Progress Tracking Dashboard",
                "Payment & Subscription System",
                "Content Delivery Network",
                "Mobile Learning App",
                "Certificate Generation",
                "12 Months Full Maintenance",
              ],
            },
            {
              tagline: "Mobility",
              title: "Ride Hailing",
              price: "₦15,000,000",
              features: [
                "Driver & Rider Mobile Apps",
                "Real-time GPS Tracking",
                "Ride Booking & Matching Engine",
                "Payment Gateway Integration",
                "Driver Rating System",
                "Fare Calculation Logic",
                "Admin Management Panel",
                "Push Notifications",
                "Trip History & Analytics",
                "12 Months Full Maintenance",
              ],
            },
          ]}
        />

        <Section
          title="Fintech Software Solutions"
          plans={[
            {
              tagline: "Starter",
              title: "Basic",
              price: "₦30,000,000",
              features: [
                "Core Banking Features",
                "User & Wallet Management",
                "Basic Payment Gateway",
                "Transaction History",
                "KYC Verification System",
                "Mobile App (iOS & Android)",
                "Admin Dashboard",
                "Basic Security Protocols",
                "SMS & Email Notifications",
                "12 Months Full Maintenance",
              ],
            },
            {
              tagline: "Professional",
              title: "Premium",
              price: "₦65,000,000",
              features: [
                "Advanced Payment Processing",
                "Multi-Currency Support",
                "Lending & Credit Module",
                "Investment & Savings Engine",
                "Real-time Transaction Monitoring",
                "Fraud Detection System",
                "API Integration Layer",
                "Advanced Analytics Dashboard",
                "Compliance & Audit Tools",
                "12 Months Full Maintenance",
              ],
            },
            {
              tagline: "Enterprise",
              title: "Complex",
              price: "₦120,000,000",
              features: [
                "Full Banking Platform",
                "Distributed Ledger Technology",
                "High-Volume Transaction Engine",
                "Advanced Risk Management",
                "Regulatory Compliance Suite",
                "AI-Powered Fraud Prevention",
                "Institutional Grade Security",
                "White Label Solution",
                "Custom Blockchain Integration",
                "24/7 Infrastructure Support",
                "12 Months Full Maintenance",
              ],
            },
          ]}
        />

        <Section
          title="Static Websites"
          plans={[
            {
              tagline: "Entry",
              title: "Basic",
              price: "₦350,000",
              features: [
                "Single-Page Authority Site",
                "Mobile Adaptive Layout",
                "Direct Contact Conversion",
                "Foundation SEO Strategy",
                "Custom Domain Management",
                "Ultra-Fast Load Delivery",
                "Social Media Ecosystem Link",
                "Asset Image Optimization",
                "Standard Web Security",
                "12 Months Full Maintenance",
              ],
            },
            {
              tagline: "Standard",
              title: "Premium",
              price: "₦1,600,000",
              features: [
                "Multi-Page Corporate Structure",
                "CMS Content Management",
                "Advanced Search Optimization",
                "Geographic Map Integration",
                "Lead Generation Newsletter",
                "Custom Interactive Animation",
                "SSL Compliance Certificate",
                "Integrated Blog Architecture",
                "Quarterly Performance Audit",
                "12 Months Full Maintenance",
              ],
            },
            {
              tagline: "Bespoke",
              title: "Custom",
              price: "₦4,000,000+",
              features: [
                "Bespoke Creative UI Design",
                "Complex Motion Storytelling",
                "High-Traffic E-commerce Core",
                "Secure Member Account Area",
                "External API Synchronizing",
                "Headless CMS Performance",
                "Enterprise CRM Integration",
                "Advanced Interactive UX",
                "Multi-Region Localization",
                "12 Months Full Maintenance",
              ],
            },
          ]}
        />

        <Section
          title="SEO Setup & Management"
          plans={[
            {
              tagline: "Visibility",
              title: "Basic",
              price: "₦250k/mo",
              features: [
                "Deep Keyword Intelligence",
                "On-Page Tactical SEO",
                "Meta Data Optimization",
                "Site Velocity Correction",
                "Monthly Growth Analytics",
                "Competitor Market Review",
                "Broken Backlink Recovery",
                "Sitemap Submission Flow",
                "Image Alt-Tag Automation",
                "Google Business Listing",
              ],
            },
            {
              tagline: "Authority",
              title: "Pro",
              price: "₦600k/mo",
              features: [
                "Long-term Content Strategy",
                "Authority Backlink Acquisition",
                "Full Technical SEO Audit",
                "Schema Markup Implementation",
                "Content Gap Identification",
                "Localized Search Dominance",
                "Conversion Path Tracking",
                "Search Console Management",
                "Monthly Strategy Consulting",
                "Rank Progression Reporting",
              ],
            },
            {
              tagline: "Domination",
              title: "Enterprise",
              price: "Custom",
              features: [
                "Global Market Strategy",
                "Off-Page Authority Building",
                "PR Link Acquisition Suite",
                "Deep Technical Infrastructure",
                "Predictive Trend Analytics",
                "Conversion Rate Engineering",
                "Dedicated Account Executive",
                "Brand Sentiment Management",
                "Custom Performance Portal",
                "Ongoing Strategy Syncing",
              ],
            },
          ]}
        />
      </div>
    </section>
  );
};

export default PricingComponent;

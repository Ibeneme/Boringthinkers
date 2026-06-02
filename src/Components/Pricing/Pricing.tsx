import React from "react";
import { ArrowUpRight, Check } from "lucide-react";

const PricingComponent: React.FC = () => {
  const handleSendMail = () =>
    (window.location.href = "mailto:contact@boringthinkers.com");

  const renderFeatures = (features: string[]) => (
    <ul className="space-y-4 mb-10 flex-1">
      {features.map((f, i) => (
        <li
          key={i}
          className="flex items-start text-white text-sm font-bold uppercase tracking-tight leading-snug"
        >
          <Check size={18} className="text-[#FFD000] mr-3 mt-0.5 shrink-0" />
          {f}
        </li>
      ))}
    </ul>
  );

  const Section = ({ title, plans }: { title: string; plans: any[] }) => (
    <div className="mb-32">
      <h2 className="text-5xl font-black uppercase text-[#011404] mb-16 border-l-8 border-[#011404] pl-6">
        {title}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((p) => (
          <div
            key={p.title}
            className="bg-[#011404] p-10 flex flex-col border-4 border-[#011404] hover:border-[#FFD000] transition-colors duration-300"
          >
            <span className="text-[#FFD000] text-[10px] font-black uppercase tracking-[0.3em] mb-4">
              {p.tagline}
            </span>
            <h3 className="text-white text-3xl font-black uppercase mb-1">
              {p.title}
            </h3>
            <p className="text-[#FFD000] text-4xl font-black mb-10">
              {p.price}
            </p>
            {renderFeatures(p.features)}
            <button
              onClick={handleSendMail}
              className="w-full py-5 bg-[#FFD000] text-[#011404] font-black uppercase text-center flex items-center justify-center gap-3 hover:bg-white transition-colors duration-300 mt-auto"
            >
              Select Investment <ArrowUpRight size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="bg-[#fff] py-32 px-6 md:px-20 font-sans">
      <div className="max-w-[1500px] mx-auto">
        <div className="mb-24">
          <p className="text-[#011404] font-black uppercase tracking-[0.5em] mb-6">
            Let's Build
          </p>
          <h1 className="text-[5rem] md:text-[7rem] font-black uppercase text-[#011404] leading-[0.9]">
            PRICING PLANS
            <br />
          </h1>
        </div>

        {/* Software Development Systems */}
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

        {/* New Fintech Software Section */}
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

        {/* Static Web Infrastructure */}
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

        {/* SEO & Growth Engine */}
        <Section
          title="SEO & Growth Engine"
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

        {/* Social Media Orchestration */}
        <Section
          title="Social Media Management"
          plans={[
            {
              tagline: "Presence",
              title: "Basic",
              price: "₦200k/mo",
              features: [
                "4-Channel Platform Setup",
                "3 Weekly Content Drops",
                "Custom Graphic Assets",
                "Bio-Link Optimization",
                "Community Engagement",
                "Hashtag Intelligence",
                "Automated Content Calendar",
                "Active Moderation Flow",
                "Performance Analytics",
                "Brand Voice Verification",
              ],
            },
            {
              tagline: "Engagement",
              title: "Premium",
              price: "₦500k/mo",
              features: [
                "Daily Audience Engagement",
                "Cinematic Video Editing",
                "Ad Campaign Administration",
                "Direct Support Management",
                "Strategic Influencer Outreach",
                "Professional Copywriting",
                "Social Trend Analysis",
                "Content Pillar Definition",
                "Crisis Mitigation Logic",
                "Quarterly Strategy Review",
              ],
            },
            {
              tagline: "Empire",
              title: "Enterprise",
              price: "Custom",
              features: [
                "Full Scale Campaign Logic",
                "Viral Content Engineering",
                "Professional Video Production",
                "Paid Media Spend Budgeting",
                "AI Audience Data Parsing",
                "Influencer Partnership Core",
                "Real-time Live Streaming",
                "Dedicated Growth Strategist",
                "Market Expansion Roadmap",
                "Detailed ROI Attribution",
              ],
            },
          ]}
        />
      </div>
    </section>
  );
};

export default PricingComponent;

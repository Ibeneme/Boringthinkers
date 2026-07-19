import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../../assets/images/logo/vite.png";
import ContactUs from "./ContactUs";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/company/boring-thinkers/",
      label: "LinkedIn",
    },
    { icon: FaTwitter, link: "https://x.com/BoringThinkers", label: "Twitter" },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/boringthinkers",
      label: "Instagram",
    },
  ];

  // Comprehensive list of routes from App.tsx
  const navLinks = [
    { name: "About Us", path: "/about-us" },
    { name: "Projects", path: "/projects" },
    // { name: "Services", path: "/how-we-work" }, // Mapping to HowWeWorkPage
    // { name: "Team", path: "/team" },
    { name: "Careers", path: "/careers" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name: "Start a Project", path: "/start-a-project" },
  ];

  return (
    <section className="relative bg-[#011404] text-white overflow-hidden">
      {/* Shared brand type system */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&family=Space+Mono:wght@400;700&display=swap');
        .font-editorial { font-family: 'Instrument Serif', serif; font-style: italic; }
        .font-technical { font-family: 'Space Mono', monospace; }
      `}</style>

      {/* Faint graph-paper texture, in yellow this time to read on dark ink */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#FFD000 1px, transparent 1px), linear-gradient(90deg, #FFD000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <ContactUs />

      <footer className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-6">
              <img
                src={logo}
                alt="BoringThinkers Logo"
                className="h-10 w-auto"
              />
              <h2 className="text-[22px] font-black text-[#fff] ">
                {" "}
                Boring Thinkers Limited
              </h2>
              <p className="text-[19px] text-white/70 max-w-sm leading-snug">
                A premium software development company building digital
                solutions for startups and ambitious businesses.
              </p>
            </div>

            <div className="flex gap-4 mt-12">
              {socialLinks.map(({ icon: Icon, link, label }) => (
                <a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-4 rounded-full border border-white/10 bg-white/5 hover:bg-[#FFD000] hover:border-[#FFD000] hover:text-[#011404] transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <nav className="lg:col-span-5 bg-[#FFD000] text-[#011404] p-10 rounded-2xl">
            <h4 className="font-technical font-bold text-[11px] uppercase opacity-70 mb-8">
              VISIT ALSO
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
              {navLinks.map((item, i) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="group flex items-baseline gap-3 hover:translate-x-2 transition-transform duration-300"
                >
                  <span className="font-technical text-xs text-[#011404]/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xl font-black uppercase tracking-tighter">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </nav>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 pt-10 border-t border-dashed border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 font-technical text-xs font-bold uppercase tracking-widest text-white/40">
          <p>© {currentYear} Boring Thinkers Limited.</p>

          <div className="flex gap-8">
            <Link
              to="/privacy-policy"
              className="hover:text-[#FFD000] transition-colors"
            >
              Privacy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="hover:text-[#FFD000] transition-colors"
            >
              Terms
            </Link>
            <Link
              to="/security"
              className="hover:text-[#FFD000] transition-colors"
            >
              Security
            </Link>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;

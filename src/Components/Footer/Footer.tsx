import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { GitBranch, CheckCircle2 } from "lucide-react";
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

  const navLinks = [
    { name: "About Us", path: "/about-us" },
    { name: "Projects", path: "/projects" },
    { name: "Careers", path: "/careers" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name: "Start a Project", path: "/start-a-project" },
  ];

  return (
    <section className="relative bg-[#011404] text-[#D3E5D9] overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
        .font-technical { font-family: 'Space Mono', monospace; }
        @keyframes blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
        @keyframes pulseDot { 0% { transform: scale(1); opacity: 0.75; } 100% { transform: scale(2.2); opacity: 0; } }
        .cursor-blink { animation: blink 1s step-end infinite; }
        .pulse-dot { animation: pulseDot 1.6s ease-out infinite; }
      `}</style>

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#FFD000 1px, transparent 1px), linear-gradient(90deg, #FFD000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: "radial-gradient(#1F4030 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 left-0 w-[480px] h-[480px] rounded-full bg-[#3FB950] opacity-[0.05] blur-[130px] pointer-events-none"
      />

      <ContactUs />

      <footer className="relative max-w-7xl mx-auto px-6 py-20 font-technical">
        <div className="rounded-lg border border-[#1F4030] bg-[#0A1F13] overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0F2A1A] border-b border-[#1F4030]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
            <span className="ml-3 text-xs text-[#7FA08D]">
              footer.config.ts
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Brand Section */}
            <div className="lg:col-span-7 flex flex-col justify-between p-10 lg:border-r border-[#1F4030]">
              <div className="space-y-5">
                <img
                  src={logo}
                  alt="BoringThinkers Logo"
                  className="h-9 w-auto"
                />
                <p className="text-xs text-[#7FA08D]">
                  <span className="text-[#4F6B5A]">// </span>company
                </p>
                <h2 className="text-2xl font-bold text-white">
                  Boring Thinkers Limited
                </h2>

                <p className="text-sm leading-relaxed text-[#D3E5D9]">
                  <span className="text-[#D2A8FF]">const</span>{" "}
                  <span className="text-[#79C0FF]">mission</span>{" "}
                  <span className="text-[#D3E5D9]">=</span>{" "}
                  <span className="text-[#A5D6FF]">
                    "A premium software development company building digital
                    solutions for startups and ambitious businesses."
                  </span>
                  <span className="text-[#D3E5D9]">;</span>
                </p>
              </div>

              <div className="flex gap-3 mt-10">
                {socialLinks.map(({ icon: Icon, link, label }) => (
                  <a
                    key={label}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-3.5 rounded-md border border-[#1F4030] bg-[#0F2A1A] hover:bg-[#3FB950] hover:border-[#3FB950] hover:text-[#0A1F13] text-[#D3E5D9] transition-all duration-200 cursor-pointer"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <nav className="lg:col-span-5 bg-[#0F2A1A]">
              <div className="flex items-center gap-2 px-5 py-2.5 border-b border-[#1F4030]">
                <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
                <span className="ml-2 text-xs text-[#7FA08D]">
                  routes.config.json
                </span>
              </div>

              <div className="py-3">
                <div className="px-5 py-1 text-xs text-[#7FA08D]">{"{"}</div>
                {navLinks.map((item, i) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="group flex items-center gap-3 px-5 py-2 hover:bg-[#16331F] border-l-2 border-transparent hover:border-[#3FB950] transition-colors duration-150 cursor-pointer"
                  >
                    <span className="text-xs text-[#4F6B5A] w-5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm">
                      <span className="text-[#D2A8FF] group-hover:text-white transition-colors">
                        "{item.name}"
                      </span>
                      <span className="text-[#D3E5D9]">: </span>
                      {/* Highlighted the values dynamically with underlines to represent active hyperlinking */}
                      <span className="text-[#A5D6FF] group-hover:text-[#3FB950] group-hover:underline decoration-[#3FB950]/40 transition-all">
                        "{item.path}"
                      </span>
                      <span className="text-[#D3E5D9]">,</span>
                    </span>
                    <span className="ml-auto text-xs text-[#3FB950] opacity-30 group-hover:opacity-100 transition-opacity">
                      &gt;
                    </span>
                  </Link>
                ))}
                <div className="px-5 py-1 text-xs text-[#7FA08D]">{"}"}</div>
              </div>
            </nav>
          </div>

          {/* Status bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-5 py-3 bg-[#0F2A1A] border-t border-[#1F4030] text-[11px] uppercase tracking-widest text-[#7FA08D]">
            <div className="flex items-center gap-5">
              <span className="flex items-center gap-1.5 text-[#3FB950]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-[#3FB950] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#3FB950]" />
                </span>
                <GitBranch size={12} />
                main
              </span>
              <span className="flex items-center gap-1.5 text-[#7FA08D]">
                <CheckCircle2 size={12} className="text-[#3FB950]" />
                build passing
              </span>
              <span className="normal-case">
                © {currentYear} Boring Thinkers Limited.
              </span>
            </div>

            <div className="flex items-center gap-4">
              {/* Added dotted underlines that become solid on hover so text links are visually distinct from plain text statuses */}
              <Link
                to="/privacy-policy"
                className="underline decoration-dotted hover:decoration-solid hover:text-[#3FB950] text-[#7FA08D] transition-colors cursor-pointer"
              >
                Privacy
              </Link>
              <span className="text-[#1F4030]">|</span>
              <Link
                to="/terms-and-conditions"
                className="underline decoration-dotted hover:decoration-solid hover:text-[#3FB950] text-[#7FA08D] transition-colors cursor-pointer"
              >
                Terms
              </Link>
              <span className="text-[#1F4030]">|</span>
              <Link
                to="/security"
                className="underline decoration-dotted hover:decoration-solid hover:text-[#3FB950] text-[#7FA08D] transition-colors cursor-pointer"
              >
                Security
              </Link>
              <span className="text-[#1F4030] hidden sm:inline">|</span>
              <span className="hidden sm:inline normal-case">UTF-8</span>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-[#4F6B5A] mt-6">
          // EOF
          <span
            aria-hidden="true"
            className="inline-block w-[2px] h-[0.9em] bg-[#4F6B5A] ml-1 align-middle cursor-blink"
          />
        </p>
      </footer>
    </section>
  );
};

export default Footer;

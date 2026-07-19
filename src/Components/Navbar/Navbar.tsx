import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";
import logo from "../../assets/images/logo/vite.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const currentPath = window.location.pathname;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Projects", path: "/projects" },
  ];

  const toSlug = (name: string) =>
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  const handleNavigation = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
        .font-technical { font-family: 'Space Mono', monospace; }
        .clip-path-closed { clip-path: circle(0% at 92% 5%); }
        .clip-path-open { clip-path: circle(150% at 92% 5%); }
        @keyframes spin-once { from { transform: rotate(0deg); } to { transform: rotate(90deg); } }
        .animate-spin-once { animation: spin-once 0.3s ease-out; }
        @keyframes pulseDot { 0% { transform: scale(1); opacity: 0.75; } 100% { transform: scale(2.2); opacity: 0; } }
        .pulse-dot { animation: pulseDot 1.6s ease-out infinite; }
      `}</style>

      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-4 md:px-8 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <nav
          className={`font-technical max-w-6xl mx-auto transition-all duration-500 ease-in-out px-6 rounded-full border flex items-center justify-between relative z-[120] backdrop-blur-md shadow-2xl
            ${
              scrolled
                ? "h-14 bg-[#0A1F13]/90 border-[#1F4030] shadow-[#0A1F13]/20"
                : "h-16 bg-[#0A1F13]/70 border-[#1F4030]/40 shadow-transparent"
            }`}
        >
          {/* Window chrome + Brand Logo */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="hidden sm:flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
            </div>
            <button
              onClick={() => handleNavigation("/")}
              className="relative z-[130] transition-transform hover:scale-105 active:scale-95 bg-transparent border-0 outline-none cursor-pointer flex items-center"
            >
              <img
                src={logo}
                alt="Logo"
                className="h-5 md:h-6 w-auto object-contain"
              />
            </button>
          </div>

          {/* Desktop Navigation (Tabs style) */}
          <div className="hidden lg:flex items-center gap-1 h-full">
            {navItems.map(({ name, path }) => {
              const isActive = currentPath === path;
              return (
                <button
                  key={name}
                  onClick={() => handleNavigation(path)}
                  className={`group h-full flex items-center gap-2 px-5 text-xs tracking-wide border-b-2 transition-all duration-300 shrink-0
                    ${
                      isActive
                        ? "border-[#FFD000] text-[#FFD000] bg-[#0F2A1A]/80 font-bold"
                        : "border-transparent text-[#7FA08D] hover:text-[#D3E5D9] hover:bg-[#0F2A1A]/30"
                    }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 group-hover:scale-125 ${
                      isActive ? "bg-[#FFD000]" : "bg-[#4F6B5A]"
                    }`}
                  />
                  Our {toSlug(name)}.tsx
                </button>
              );
            })}
          </div>

          {/* Desktop Action Button */}
          <button
            onClick={() => handleNavigation("/start-a-project")}
            className="hidden lg:flex items-center gap-2 bg-transparent border-2 border-[#FFD000] text-[#FFD000] hover:bg-[#FFD000] hover:text-[#0A1F13] px-5 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300 transform active:scale-95 shrink-0 outline-none select-none"
          >
            <span>&gt;</span>
            Start a Project
          </button>

          {/* Mobile / Tablet Menu Hamburg-Trigger */}
          <button
            className="lg:hidden relative z-[130] text-[#D3E5D9] p-2.5 focus:outline-none flex items-center justify-center select-none bg-[#0F2A1A] hover:bg-[#1F4030] active:scale-95 border border-[#1F4030] transition-all rounded-full"
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            <div className="space-y-1.5 flex flex-col items-end w-5 h-3 justify-center">
              <div className="w-5 h-0.5 bg-[#D3E5D9] rounded-full"></div>
              <div className="w-3.5 h-0.5 bg-[#FFD000] rounded-full"></div>
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Fullscreen Overlay */}
      <div
        className={`font-technical fixed inset-0 bg-[#0A1F13] z-[150] flex flex-col justify-center transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          isOpen
            ? "clip-path-open opacity-100 visible pointer-events-auto"
            : "clip-path-closed opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Subtle grid accent background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.12]"
          style={{
            backgroundImage: "radial-gradient(#1F4030 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Circular Functional Dismiss Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 md:top-8 md:right-8 z-[160] text-[#FFD000] p-4 bg-[#0F2A1A] hover:bg-[#1F4030] transition-all rounded-full border border-[#1F4030] flex items-center justify-center select-none shadow-xl active:scale-95"
          aria-label="Close Menu"
        >
          <AiOutlineClose
            size={22}
            className={isOpen ? "animate-spin-once" : ""}
          />
        </button>

        <div className="relative flex flex-col items-start px-6 sm:px-12 md:px-20 space-y-6 md:space-y-8 w-full max-w-2xl select-none">
          <div className="w-full flex flex-col items-start gap-4 md:gap-6">
            {navItems.map(({ name, path }, index) => (
              <button
                key={name}
                onClick={() => handleNavigation(path)}
                className="group flex items-center gap-4 md:gap-6 text-left bg-transparent border-0 outline-none w-full py-2"
                style={{
                  transitionDelay: isOpen ? `${index * 70}ms` : "0ms",
                  transform: isOpen ? "translateX(0)" : "translateX(-30px)",
                  transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                <span className="text-[#4F6B5A] text-sm md:text-xl font-bold font-mono">
                  0{index + 1}.
                </span>
                <span
                  className={`text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight transition-all duration-300 group-hover:pl-4 ${
                    currentPath === path
                      ? "text-[#FFD000]"
                      : "text-[#D3E5D9] hover:text-white"
                  }`}
                >
                  {name}
                </span>
                <FaArrowRightLong
                  className="text-[#FFD000] opacity-0 -translate-x-6 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 ml-auto md:ml-4"
                  size={24}
                />
              </button>
            ))}
          </div>

          {/* Action CTA Block inside Mobile Drawer */}
          <div
            className="w-full pt-6 transition-all duration-500"
            style={{
              transitionDelay: isOpen ? `${navItems.length * 70}ms` : "0ms",
              transform: isOpen ? "translateY(0)" : "translateY(20px)",
              opacity: isOpen ? 1 : 0,
            }}
          >
            <button
              onClick={() => handleNavigation("/start-a-project")}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#FFD000] text-[#0A1F13] px-8 py-4 rounded-full text-xs md:text-sm font-black uppercase tracking-widest transition-all duration-300 hover:bg-[#4ae25e] shadow-lg shadow-[#FFD000]/10 hover:shadow-[#FFD000]/20 transform active:scale-[0.98] outline-none select-none"
            >
              <span>&gt;</span>
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

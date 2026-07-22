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
    // { name: "Pricing", path: "/pricing" },
    // { name: "Blog", path: "/blog" },
    { name: "faq", path: "/faq" },
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

  const handleStartProject = () => {
    setIsOpen(false);
    window.open(
      "mailto:contact@boringthinkers.com",
      "_blank",
      "noopener,noreferrer"
    );
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
      `}</style>

      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-3 sm:px-6 md:px-8 ${
          scrolled ? "py-2 sm:py-3" : "py-4 sm:py-6"
        }`}
      >
        <nav
          className={`font-technical max-w-6xl mx-auto transition-all duration-500 ease-in-out px-3 sm:px-6 rounded-full border flex items-center justify-between relative z-[120] backdrop-blur-md shadow-2xl
            ${
              scrolled
                ? "h-12 sm:h-14 bg-[#011404]/95 border-[#1F4030] shadow-[#011404]/20"
                : "h-14 sm:h-16 bg-[#011404]/80 border-[#1F4030]/40 shadow-transparent"
            }`}
        >
          {/* Window chrome + Brand Logo */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <div className="hidden md:flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
            </div>
            <button
              onClick={() => handleNavigation("/")}
              className="relative z-[130] transition-transform hover:scale-105 active:scale-95 bg-transparent border-0 outline-none cursor-pointer flex items-center py-1"
            >
              <img
                src={logo}
                alt="Logo"
                className="h-4 sm:h-5 md:h-6 w-auto object-contain"
              />
            </button>
          </div>

          {/* Desktop Navigation (Tabs style) */}
          <div className="hidden xl:flex items-center gap-1 h-full overflow-x-auto no-scrollbar">
            {navItems.map(({ name, path }) => {
              const isActive = currentPath === path;
              return (
                <button
                  key={name}
                  onClick={() => handleNavigation(path)}
                  className={`group h-full flex items-center gap-2 px-3 lg:px-4 text-[11px] tracking-wide border-b-2 transition-all duration-300 shrink-0
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
            onClick={handleStartProject}
            className="hidden xl:flex items-center gap-2 bg-transparent border-2 border-[#FFD000] text-[#FFD000] hover:bg-[#FFD000] hover:text-[#011404] px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300 transform active:scale-95 shrink-0 outline-none select-none cursor-pointer"
          >
            <span>&gt;</span>
            Start a Project
          </button>

          {/* Mobile / Tablet Menu Hamburg-Trigger */}
          <button
            className="xl:hidden relative z-[130] text-[#D3E5D9] p-2 sm:p-2.5 focus:outline-none flex items-center justify-center select-none bg-[#0F2A1A] hover:bg-[#1F4030] active:scale-95 border border-[#1F4030] transition-all rounded-full cursor-pointer"
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            <div className="space-y-1.5 flex flex-col items-end w-4 sm:w-5 h-3 justify-center">
              <div className="w-4 sm:w-5 h-0.5 bg-[#D3E5D9] rounded-full"></div>
              <div className="w-3 sm:w-3.5 h-0.5 bg-[#FFD000] rounded-full"></div>
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Fullscreen Overlay */}
      <div
        className={`font-technical fixed inset-0 bg-[#011404] z-[150] flex flex-col justify-start lg:justify-center overflow-y-auto transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] py-20 px-4 sm:px-8 md:px-12 ${
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
          className="fixed top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-[160] text-[#FFD000] p-3 sm:p-4 bg-[#0F2A1A] hover:bg-[#1F4030] transition-all rounded-full border border-[#1F4030] flex items-center justify-center select-none shadow-xl active:scale-95 cursor-pointer"
          aria-label="Close Menu"
        >
          <AiOutlineClose
            size={20}
            className={isOpen ? "animate-spin-once" : ""}
          />
        </button>

        <div className="relative flex flex-col items-start mx-auto space-y-4 sm:space-y-6 w-full max-w-2xl select-none my-auto">
          <div className="w-full flex flex-col items-start gap-3 sm:gap-5">
            {navItems.map(({ name, path }, index) => (
              <button
                key={name}
                onClick={() => handleNavigation(path)}
                className="group flex items-center gap-3 sm:gap-6 text-left bg-transparent border-0 outline-none w-full py-1.5 cursor-pointer"
                style={{
                  transitionDelay: isOpen ? `${index * 60}ms` : "0ms",
                  transform: isOpen ? "translateX(0)" : "translateX(-20px)",
                  transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                <span className="text-[#4F6B5A] text-xs sm:text-sm md:text-xl font-bold font-mono shrink-0">
                  0{index + 1}.
                </span>
                <span
                  className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight transition-all duration-300 group-hover:pl-2 sm:group-hover:pl-4 break-words ${
                    currentPath === path
                      ? "text-[#FFD000]"
                      : "text-[#D3E5D9] hover:text-white"
                  }`}
                >
                  {name}
                </span>
                <FaArrowRightLong
                  className="text-[#FFD000] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-all duration-300 ml-auto shrink-0 hidden sm:block"
                  size={20}
                />
              </button>
            ))}
          </div>

          {/* Action CTA Block inside Mobile Drawer */}
          <div
            className="w-full pt-4 sm:pt-6 transition-all duration-500"
            style={{
              transitionDelay: isOpen ? `${navItems.length * 60}ms` : "0ms",
              transform: isOpen ? "translateY(0)" : "translateY(20px)",
              opacity: isOpen ? 1 : 0,
            }}
          >
            <button
              onClick={handleStartProject}
              className="w-full flex items-center justify-center gap-2 bg-[#FFD000] text-[#011404] px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-black uppercase tracking-widest transition-all duration-300 hover:bg-[#4ae25e] shadow-lg shadow-[#FFD000]/10 hover:shadow-[#FFD000]/20 transform active:scale-[0.98] outline-none select-none cursor-pointer"
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

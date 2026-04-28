import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";
import logo from "../../assets/images/logo/vite.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const currentPath = window.location.pathname;

  // Handle scroll effect for the "Floating" look
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Projects", path: "/projects" },
    { name: "How We Work", path: "/how-we-work" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[100] px-6 py-8 transition-all duration-500">
      <nav
        className={`max-w-6xl mx-auto transition-all duration-500 ease-in-out px-8 rounded-full border flex items-center justify-between
          ${
            scrolled
              ? "h-20 bg-[#011404] backdrop-blur-xl border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
              : "h-20 bg-[#011404] border-transparent"
          }`}
      >
        {/* Brand Logo */}
        <a
          href="/"
          className="relative z-[110] transition-transform hover:scale-105 active:scale-95"
        >
          <img src={logo} alt="Logo" className="h-5 md:h-6 object-contain" />
        </a>

        {/* Desktop Navigation - Minimalist Pill Style */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map(({ name, path }) => {
            const isActive = currentPath === path;
            return (
              <a
                key={name}
                href={path}
                className={`px-5 py-2 text-xs uppercase tracking-[0.15em] font-bold transition-all duration-300 rounded-full
                  ${
                    isActive
                      ? "bg-[#FFD000] text-[#011404]"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
              >
                {name}
              </a>
            );
          })}
        </div>

        {/* Action Button (Desktop Only) */}
        <a
          href="mailto:contact@boringthinkers.com"
          className="hidden md:block bg-white text-[#011404] px-6 py-2 rounded-full text-xs font-black uppercase tracking-wider hover:bg-[#FFD000] transition-colors"
        >
          Start a Project
        </a>

        {/* Mobile Toggle - Minimalist Custom Icon */}
        <button
          className="md:hidden relative z-[110] text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <AiOutlineClose size={28} className="animate-spin-once" />
          ) : (
            <div className="space-y-1.5">
              <div className="w-8 h-0.5 bg-white rounded-full"></div>
              <div className="w-5 h-0.5 bg-[#FFD000] rounded-full ml-auto"></div>
            </div>
          )}
        </button>

        {/* Mobile Menu - Full Screen Kinetic Overlay */}
        <div
          className={`fixed inset-0 bg-[#011404] transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
            isOpen
              ? "clip-path-open opacity-100"
              : "clip-path-closed opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col justify-center items-start h-full px-12 space-y-8">
            <p className="text-[#FFD000] text-sm font-bold uppercase tracking-[0.3em] mb-4">
              Navigation
            </p>
            {navItems.map(({ name, path }, index) => (
              <a
                key={name}
                href={path}
                onClick={() => setIsOpen(false)}
                className="group flex items-center gap-6 overflow-hidden"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="text-white/20 text-2xl font-mono">
                  0{index + 1}
                </span>
                <span
                  className={`text-5xl md:text-7xl font-black uppercase transition-all duration-500 group-hover:italic group-hover:translate-x-4 ${
                    currentPath === path ? "text-[#FFD000]" : "text-white"
                  }`}
                >
                  {name}
                </span>
                <FaArrowRightLong
                  className="text-[#FFD000] opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"
                  size={32}
                />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Required CSS for the kinetic effect - Add to your globals.css */}
      <style>{`
        .clip-path-closed { clip-path: circle(0% at 100% 0%); }
        .clip-path-open { clip-path: circle(150% at 100% 0%); }
        @keyframes spin-once { from { transform: rotate(0deg); } to { transform: rotate(90deg); } }
        .animate-spin-once { animation: spin-once 0.3s ease-out; }
      `}</style>
    </header>
  );
};

export default Navbar;

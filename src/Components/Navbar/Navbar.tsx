import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";
import logo from "../../assets/images/logo/vite.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const currentPath = window.location.pathname;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Projects", path: "/projects" },
    { name: "How We Work", path: "/how-we-work" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? "py-4" : "py-8"
      } px-4 md:px-6`}
    >
      <nav
        className={`max-w-6xl mx-auto transition-all duration-500 ease-in-out px-6 md:px-8 rounded-full border flex items-center justify-between relative z-[120]
          ${
            scrolled
              ? "h-16 md:h-20 bg-[#011404]/90 backdrop-blur-xl border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
              : "h-20 bg-[#011404] border-transparent"
          }`}
      >
        {/* Brand Logo */}
        <a
          href="/"
          className="relative z-[130] transition-transform hover:scale-105 active:scale-95"
        >
          <img src={logo} alt="Logo" className="h-5 md:h-6 object-contain" />
        </a>

        {/* Desktop Navigation */}
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

        {/* Desktop Action Button */}
        <a
          href="mailto:contact@boringthinkers.com"
          className="hidden md:block bg-white text-[#011404] px-6 py-2 rounded-full text-xs font-black uppercase tracking-wider hover:bg-[#FFD000] transition-colors"
        >
          Start a Project
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-[130] text-white p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <AiOutlineClose size={28} className="animate-spin-once" />
          ) : (
            <div className="space-y-1.5 flex flex-col items-end">
              <div className="w-8 h-0.5 bg-white rounded-full"></div>
              <div className="w-5 h-0.5 bg-[#FFD000] rounded-full"></div>
            </div>
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-[#011404] z-[110] flex flex-col justify-center transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
            isOpen
              ? "clip-path-open opacity-100 visible"
              : "clip-path-closed opacity-0 invisible"
          }`}
        >
          <div className="flex flex-col items-start px-10 md:px-20 space-y-6 md:space-y-8 w-full">
            <p className="text-[#FFD000] text-xs md:text-sm font-bold uppercase tracking-[0.3em] mb-2">
              Navigation
            </p>
            {navItems.map(({ name, path }, index) => (
              <a
                key={name}
                href={path}
                onClick={() => setIsOpen(false)}
                className="group flex items-center gap-4 md:gap-6"
                style={{
                  transitionDelay: isOpen ? `${index * 100}ms` : "0ms",
                  transform: isOpen ? "translateX(0)" : "translateX(-20px)",
                  transition: "all 0.5s ease",
                }}
              >
                <span className="text-white/20 text-xl md:text-2xl font-mono">
                  0{index + 1}
                </span>
                <span
                  className={`text-4xl md:text-7xl font-black uppercase transition-all duration-500 group-hover:italic ${
                    currentPath === path ? "text-[#FFD000]" : "text-white"
                  }`}
                >
                  {name}
                </span>
                <FaArrowRightLong
                  className="text-[#FFD000] hidden md:block opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"
                  size={32}
                />
              </a>
            ))}

            {/* Mobile Action Button inside menu */}
            <a
              href="mailto:contact@boringthinkers.com"
              className="mt-8 bg-[#FFD000] text-[#011404] px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest"
            >
              Start a Project
            </a>
          </div>
        </div>
      </nav>

      <style>{`
        .clip-path-closed { clip-path: circle(0% at 90% 5%); }
        .clip-path-open { clip-path: circle(150% at 90% 5%); }
        @keyframes spin-once { from { transform: rotate(0deg); } to { transform: rotate(90deg); } }
        .animate-spin-once { animation: spin-once 0.3s ease-out; }
      `}</style>
    </header>
  );
};

export default Navbar;

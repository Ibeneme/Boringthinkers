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
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
    { name: "How We Work", path: "/how-we-work" },
  ];

  const handleNavigation = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          scrolled ? "py-4" : "py-8"
        } px-4 md:px-6`}
      >
        <nav
          className={`max-w-6xl mx-auto transition-all duration-500 ease-in-out px-6 md:px-8 rounded-full border flex items-center justify-between relative z-[120]
            ${
              scrolled
                ? "h-16 bg-[#011404]/90 backdrop-blur-xl border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
                : "h-20 bg-[#011404] border-transparent"
            }`}
        >
          {/* Brand Logo */}
          <button
            onClick={() => handleNavigation("/")}
            className="relative z-[130] transition-transform hover:scale-105 active:scale-95 bg-transparent border-0 outline-none cursor-pointer flex items-center shrink-0"
          >
            <img src={logo} alt="Logo" className="h-5 md:h-6 object-contain" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map(({ name, path }) => {
              const isActive = currentPath === path;
              return (
                <button
                  key={name}
                  onClick={() => handleNavigation(path)}
                  className={`px-4 py-2 text-[11px] uppercase tracking-[0.15em] font-bold transition-all duration-300 rounded-full shrink-0
                    ${
                      isActive
                        ? "bg-[#FFD000] text-[#011404]"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {name}
                </button>
              );
            })}
          </div>

          {/* Desktop Action Button */}
          <button
            onClick={() => handleNavigation("/start-a-project")}
            className="hidden lg:block bg-white text-[#011404] px-5 py-2.5 rounded-full text-[11px] font-black uppercase tracking-wider hover:bg-[#FFD000] transition-colors shrink-0 outline-none select-none"
          >
            Start a Project
          </button>

          {/* Mobile / Tablet Menu Toggle */}
          <button
            className="lg:hidden relative z-[130] text-white p-3 focus:outline-none flex items-center justify-center select-none bg-white/5 hover:bg-white/10 active:bg-white/20 transition-colors rounded-full"
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            <div className="space-y-1.5 flex flex-col items-end w-6">
              <div className="w-6 h-0.5 bg-white rounded-full"></div>
              <div className="w-4 h-0.5 bg-[#FFD000] rounded-full"></div>
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#011404] z-[150] flex flex-col justify-center transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          isOpen
            ? "clip-path-open opacity-100 visible pointer-events-auto"
            : "clip-path-closed opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Explicit Close Button Inside the Modal */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 text-[#FFD000] p-4 bg-white/5 hover:bg-white/10 transition-colors rounded-full border border-white/10 flex items-center justify-center select-none"
          aria-label="Close Menu"
        >
          <AiOutlineClose size={28} className="animate-spin-once" />
        </button>

        <div className="flex flex-col items-start px-8 md:px-20 space-y-6 md:space-y-8 w-full max-w-lg select-none">
          <p className="text-[#FFD000] text-xs font-bold uppercase tracking-[0.3em] mb-2">
            Navigation
          </p>
          {navItems.map(({ name, path }, index) => (
            <button
              key={name}
              onClick={() => handleNavigation(path)}
              className="group flex items-center gap-4 md:gap-6 text-left bg-transparent border-0 outline-none w-full"
              style={{
                transitionDelay: isOpen ? `${index * 80}ms` : "0ms",
                transform: isOpen ? "translateX(0)" : "translateX(-20px)",
                transition: "all 0.5s ease",
              }}
            >
              <span className="text-white/20 text-lg md:text-2xl font-mono">
                0{index + 1}
              </span>
              <span
                className={`text-3xl md:text-6xl font-black uppercase tracking-tight transition-all duration-500 group-hover:italic break-words ${
                  currentPath === path ? "text-[#FFD000]" : "text-white"
                }`}
              >
                {name}
              </span>
              <FaArrowRightLong
                className="text-[#FFD000] hidden md:block opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"
                size={32}
              />
            </button>
          ))}

          {/* Mobile Action Button */}
          <button
            onClick={() => handleNavigation("/start-a-project")}
            className="mt-6 bg-[#FFD000] text-[#011404] px-7 py-4 rounded-full text-xs md:text-sm font-black uppercase tracking-widest transition-transform hover:scale-[1.02] active:scale-[0.98] outline-none select-none"
          >
            Start a Project
          </button>
        </div>
      </div>

      <style>{`
        .clip-path-closed { clip-path: circle(0% at 90% 5%); }
        .clip-path-open { clip-path: circle(150% at 90% 5%); }
        @keyframes spin-once { from { transform: rotate(0deg); } to { transform: rotate(90deg); } }
        .animate-spin-once { animation: spin-once 0.3s ease-out; }
      `}</style>
    </>
  );
};

export default Navbar;

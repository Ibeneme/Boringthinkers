import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";
import "./Navbar.css";
import logo from "../../assets/images/logo/vite.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = window.location.pathname;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Projects", path: "/projects" },
    { name: "Team", path: "/team" },
    { name: "How We Work", path: "./how-we-work" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="logo" onClick={() => setIsOpen(false)}>
          <img
            src={logo}
            alt="Boring Thinkers Logo"
            className="clipped-image"
            style={{ height: 24 }}
          />
        </a>

        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <AiOutlineClose size={24} /> : "☰"}
        </button>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          {navItems.map(({ name, path }) => {
            const isActive = currentPath === path;

            return (
              <li key={name}>
                <a
                  href={path}
                  onClick={() => setIsOpen(false)}
                  className={`nav-item-link ${isActive ? "active" : ""}`}
                >
                  <div className="nav-item">
                    <p className="nav-item-p">{name}</p>
                    {isOpen && (
                      <FaArrowRightLong size={14} className="mode-arrow" />
                    )}
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

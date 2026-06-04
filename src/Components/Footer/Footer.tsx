import React from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import logo from "../../assets/images/logo/vite.png";
import ContactUs from "./ContactUs";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="bg-[#011404] text-white">
      <ContactUs />

      <footer className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand & Mission */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-8">
              <img src={logo} alt="BoringThinkers" className="h-10 w-auto" />
              <p className="text-white/40 text-lg leading-relaxed max-w-sm">
                Software Development Company For Startups and businesses{" "}
              </p>
            </div>

            <div className="flex gap-3 mt-12">
              {[
                {
                  icon: FaLinkedin,
                  link: "https://www.linkedin.com/company/boring-thinkers/",
                },
                { icon: FaTwitter, link: "https://x.com/BoringThinkers" },
                {
                  icon: FaInstagram,
                  link: "https://www.instagram.com/boringthinkers",
                },
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-full bg-white/5 hover:bg-[#FFD000] hover:text-[#011404] transition-all"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Bento Box */}
          <div className="lg:col-span-4 bg-white/[0.03] p-8 rounded-2xl border border-white/5">
            <h4 className="text-[15px] font-black font-black   text-[#FFD000] mb-8">
              Contact Us
            </h4>
            <div className="space-y-6">
              {[
                {
                  icon: FaEnvelope,
                  label: "Contact@boringthinkers.com",
                  href: "mailto:Contact@boringthinkers.com",
                },
                {
                  icon: FaPhone,
                  label: "(+234) 812 071 0198",
                  href: "tel:+2348120710198",
                },
                {
                  icon: FaWhatsapp,
                  label: "Live WhatsApp Chat",
                  href: "https://wa.me/2348120710198",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 bg-white/5 rounded-lg text-white group-hover:bg-[#FFD000] group-hover:text-[#011404] transition-all">
                    <item.icon size={14} />
                  </div>
                  <span className="text-sm font-medium opacity-70 group-hover:opacity-100">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Sitemap Block */}
          <div className="lg:col-span-3 bg-[#FFD000] text-[#011404] p-8 rounded-2xl flex flex-col justify-between">
            <h4 className="font-black text-[15px] font-black ">Quick Links</h4>
            <nav className="flex flex-col gap-5 mt-8">
              {["About Us", "Our Projects", "Careers", "Privacy"].map(
                (link) => (
                  <Link
                    key={link}
                    to={`/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-2xl font-black tracking-tighter hover:translate-x-2 transition-transform"
                  >
                    {link}
                  </Link>
                )
              )}
            </nav>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[15px] font-black uppercase  text-white/30">
          <p>© {currentYear} Boring Thinkers Limited. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/terms-and-conditions" className="hover:text-[#FFD000]">
              Terms
            </Link>
            <Link to="/security" className="hover:text-[#FFD000]">
              Security
            </Link>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;

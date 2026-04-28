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

interface FooterProps {
  hideContactUs?: boolean;
  showContactUs?: boolean;
}

const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="bg-[#011404]">
      <ContactUs />

      <footer className="max-w-7xl mx-auto px-6 pb-12 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Brand & Mission - Takes up 5 columns */}
          <div className="lg:col-span-5 space-y-8">
            <img
              src={logo}
              alt="BoringThinkers"
              className="h-8 object-contain"
            />
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              At Boring Thinkers, we transform complex challenges into simple,
              intuitive solutions. We believe technology should make life
              easier, not harder.
            </p>

            {/* Social Pill */}
            <div className="flex items-center gap-4 p-2 bg-white/5 border border-white/10 rounded-full w-fit">
              {[
                {
                  icon: <FaLinkedin />,
                  link: "https://linkedin.com/company/boring-thinkers",
                },
                { icon: <FaTwitter />, link: "https://x.com/BoringThinkers" },
                {
                  icon: <FaInstagram />,
                  link: "https://instagram.com/boringthinkers/",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  className="p-3 text-white hover:text-[#FFD000] hover:bg-white/10 rounded-full transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Bento Box - Takes up 4 columns */}
          <div className="lg:col-span-4 grid grid-cols-1 gap-4">
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#FFD000]/30 transition-colors group">
              <p className="text-[#FFD000] text-xs font-black uppercase tracking-widest mb-4">
                Get in Touch
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:Contact@boringthinkers.com"
                  className="flex items-center gap-4 text-white hover:text-[#FFD000] transition-colors"
                >
                  <div className="p-3 rounded-xl bg-[#FFD000]/10 text-[#FFD000]">
                    <FaEnvelope />
                  </div>
                  <span className="text-sm font-medium">
                    Contact@boringthinkers.com
                  </span>
                </a>

                <a
                  href="tel:+2348120710198"
                  className="flex items-center gap-4 text-white hover:text-[#FFD000] transition-colors"
                >
                  <div className="p-3 rounded-xl bg-[#FFD000]/10 text-[#FFD000]">
                    <FaPhone />
                  </div>
                  <span className="text-sm font-medium">
                    (+234) 812 071 0198
                  </span>
                </a>

                <a
                  href="https://wa.me/2348120710198"
                  target="_blank"
                  className="flex items-center gap-4 text-[#25D366] hover:brightness-110 transition-all"
                >
                  <div className="p-3 rounded-xl bg-[#25D366]/10">
                    <FaWhatsapp />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-tighter">
                    Live WhatsApp Chat
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links - Takes up 3 columns */}
          <div className="lg:col-span-3 p-8 rounded-3xl bg-[#FFD000] text-[#011404]">
            <p className="font-black uppercase tracking-widest text-xs mb-6 opacity-60">
              Sitemap
            </p>
            <div className="flex flex-col gap-4">
              {[
                { name: "About Us", path: "/about-us" },
                { name: "Our Projects", path: "/projects" },
                { name: "Careers", path: "/careers" },
                { name: "Privacy Policy", path: "/privacy-policy" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-xl font-black hover:translate-x-2 transition-transform inline-block"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-medium">
            © {currentYear} <span className="text-white">BoringThinkers</span>.
            All rights reserved.
          </p>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-500">
            <span className="hover:text-white cursor-pointer">Terms</span>
            <span className="hover:text-white cursor-pointer">Security</span>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;

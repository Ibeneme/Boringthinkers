import React from "react";
import { motion } from "framer-motion";
import { FiChevronsRight, FiExternalLink } from "react-icons/fi";

// Asset Imports
import nexus from "../../assets/projects/nexus.png";
//import zaeda from "../../assets/projects/zaeda.png";
import pickars from "../../assets/projects/pickars.png";
import bulkup from "../../assets/projects/bulkup.png";
import kraft from "../../assets/projects/kraft.png";
import yare from "../../assets/projects/yare.png";

interface Project {
  id: number;
  title: string;
  role: string;
  thumbnail: string;
  url: string; // Added URL field
}

const sampleProjects: Project[] = [
  {
    id: 91,
    title: "CloneKraft",
    role: "Digital Brand Identity",
    thumbnail: kraft,
    url: "http://www.clonekraft.com/",
  },
  {
    id: 92,
    title: "Yare Heights",
    role: "Academic Learning Hub",
    thumbnail: yare,
    url: "https://www.yareheightlearninghub.com/",
  },
  {
    id: 2,
    title: "Pickars",
    role: "Logistics & Delivery",
    thumbnail: pickars,
    url: "http://pickars.com/",
  },
  {
    id: 3,
    title: "Bulkupdata",
    role: "SME Fintech Platform",
    thumbnail: bulkup,
    url: "https://www.bulkupdata.com/",
  },
  {
    id: 5,
    title: "Nexus Music",
    role: "Music Publishing",
    thumbnail: nexus,
    url: "https://www.nexusmusicpublishing.com/",
  },
  // {
  //   id: 6,
  //   title: "Zaeda Oracle",
  //   role: "Legal Company",
  //   thumbnail: zaeda,
  //   url: "https://zaedaoracle.com/",
  // },
];

const NewProjects: React.FC = () => {
  const handleProjectClick = (url: string) => {
    // Opens the project site in a new tab
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="bg-white py-24 px-6 md:px-12">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-20">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-[#050505] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block opacity-40"
        >
          Selected Works 2024 — 2026
        </motion.span>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-black/5 pb-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-8xl font-black text-[#050505] tracking-tighter leading-[0.85]"
          >
            THE <br />
            <span className="text-[#FFD000]">PORTFOLIO.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-sm text-gray-500 text-lg leading-snug font-medium"
          >
            A curated selection of digital experiences and scalable products
            built for the next generation of founders.
          </motion.p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {sampleProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={() => handleProjectClick(project.url)}
            className="group cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 mb-8 rounded-none">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover rounded-none group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />

              {/* External Link Badge (Top Right) */}
              <div className="absolute top-6 right-6 bg-white p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <FiExternalLink size={18} className="text-[#050505]" />
              </div>

              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-[#050505]/0 group-hover:bg-[#050505]/5 transition-colors duration-500 rounded-none" />
            </div>

            {/* Project Details */}
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[#FFD000] text-[10px] font-black uppercase tracking-widest mb-2">
                  {project.role}
                </p>
                <h3 className="text-4xl font-black text-[#050505] tracking-tight group-hover:text-[#FFD000] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mt-2 group-hover:text-gray-500 transition-colors">
                  Visit Official Site
                </p>
              </div>

              {/* Minimal Chevron Icon */}
              <div className="text-[#050505] opacity-10 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500 p-2">
                <FiChevronsRight size={40} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NewProjects;

import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { IoArrowForwardCircleSharp } from "react-icons/io5";

// Asset Imports (Keeping your existing paths)
// import main from "../../assets/imagesa/cw/cw_a.png";
// import pay from "../../assets/imagesa/100/100_a.png";
// import cw_web from "../../assets/imagesa/cw_web/cw_web_a.png";
// import nexus from "../../assets/projects/nexus.png";
//import padiman from "../../assets/projects/padiman.png";
// import zaeda from "../../assets/projects/zaeda.png";
import pickars from "../../assets/projects/pickars.png";
import bulkup from "../../assets/projects/bulkup.png";
import kraft from "../../assets/projects/kraft.png";
import yare from "../../assets/projects/yare.png";

const sampleProjects = [
  {
    id: 91,
    title: "CloneKraft",
    role: "Digital Brand Identity",
    thumbnail: kraft,
  },
  {
    id: 92,
    title: "Yare Heights",
    role: "Academic Learning Hub",
    thumbnail: yare,
  },
  { id: 2, title: "Pickars", role: "Logistics & Delivery", thumbnail: pickars },
  {
    id: 3,
    title: "Bulkupdata",
    role: "SME Fintech Platform",
    thumbnail: bulkup,
  },
  // {
  //   id: 4,
  //   title: "Padiman Route",
  //   role: "Property Management",
  //   thumbnail: padiman,
  // },
  // { id: 5, title: "Nexus Music", role: "Music Publishing", thumbnail: nexus },
  // {
  //   id: 6,
  //   title: "Zaeda Oracle",
  //   role: "Strategic Consulting",
  //   thumbnail: zaeda,
  // },
  // {
  //   id: 1,
  //   title: "Chat Wazobia AI",
  //   role: "Multilingual AI (Mobile)",
  //   thumbnail: main,
  // },
  // { id: 10, title: "100pay", role: "Payment Infrastructure", thumbnail: pay },
  // {
  //   id: 11,
  //   title: "Chat Wazobia AI",
  //   role: "Multilingual AI (Web)",
  //   thumbnail: cw_web,
  // },
];

const NewProjects: React.FC = () => {
  const navigate = useNavigate();

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
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {sampleProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={() => navigate(`/projects/${project.id}`)}
            className="group cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gray-100 mb-6">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover  group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-[#050505]/0 group-hover:bg-[#050505]/5 transition-colors duration-500" />
            </div>

            {/* Project Details */}
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[#FFD000] text-[10px] font-black uppercase tracking-widest mb-1">
                  {project.role}
                </p>
                <h3 className="text-3xl font-black text-[#050505] tracking-tight  transition-all">
                  {project.title}
                </h3>
              </div>

              <motion.div
                whileHover={{ rotate: -45 }}
                className="text-[#050505] opacity-20 group-hover:opacity-100 transition-opacity"
              >
                <IoArrowForwardCircleSharp size={48} />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NewProjects;

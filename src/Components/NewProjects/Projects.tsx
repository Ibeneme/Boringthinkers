import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { ArrowDownRight } from "lucide-react";

// Asset Imports
import nexus from "../../assets/projects/nexus.png";
import pickars from "../../assets/projects/pickars.png";
import bulkup from "../../assets/projects/bulkup.png";
import kraft from "../../assets/projects/kraft.png";
import yare from "../../assets/projects/yare.png";

interface Project {
  id: number;
  title: string;
  role: string;
  status: string;
  thumbnail: string;
  url: string;
}

const sampleProjects: Project[] = [
  {
    id: 91,
    title: "CloneKraft",
    role: "Digital Brand Identity",
    status: "Live",
    thumbnail: kraft,
    url: "http://www.clonekraft.com/",
  },
  {
    id: 92,
    title: "Yare Heights",
    role: "Academic Learning Hub",
    status: "Live",
    thumbnail: yare,
    url: "https://www.yareheightlearninghub.com/",
  },
  {
    id: 2,
    title: "Pickars",
    role: "Logistics & Delivery",
    status: "Live",
    thumbnail: pickars,
    url: "http://pickars.com/",
  },
  {
    id: 3,
    title: "Bulkupdata",
    role: "SME Fintech Platform",
    status: "Live",
    thumbnail: bulkup,
    url: "https://www.bulkupdata.com/",
  },
  {
    id: 5,
    title: "Nexus Music",
    role: "Music Publishing",
    status: "Live",
    thumbnail: nexus,
    url: "https://www.nexusmusicpublishing.com/",
  },
];

// Fixed tilt per case tag — same device as the passport stamps, kept stable.
const tilts = [-3, 2, -2, 3, -4];

const NewProjects: React.FC = () => {
  return (
    <section className="relative bg-[#FAFAF6] py-32 px-6 md:px-20 text-[#06110A] overflow-hidden">
      {/* Shared brand type system */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&family=Space+Mono:wght@400;700&display=swap');
        .font-editorial { font-family: 'Instrument Serif', serif; font-style: italic; }
        .font-technical { font-family: 'Space Mono', monospace; }
      `}</style>

      {/* Faint graph-paper texture, consistent with the rest of the site */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#06110A 1px, transparent 1px), linear-gradient(90deg, #06110A 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Header Section */}
      <div className="relative max-w-7xl mx-auto mb-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 bg-[#06110A] py-2 pl-6 pr-2 rounded-full"
          >
            <span className="font-technical text-[10px] font-bold tracking-[0.3em] uppercase text-[#FFD000]">
              Case Files
            </span>
            <div className="bg-[#FFD000] p-2.5 rounded-full text-[#06110A]">
              <ArrowDownRight size={16} strokeWidth={3} />
            </div>
          </motion.div>

          <h2 className="text-7xl md:text-9xl font-black tracking-tighter leading-none uppercase">
            Recent
            <br />
            <span className="relative inline-block">
              Projects.
              <span className="absolute left-0 -bottom-2 w-full h-[3px] bg-[#FFD000]" />
            </span>
          </h2>
        </div>

        <p className=" max-w-md text-xl text-[#06110A]/70 leading-snug">
          Design-led engineering for scalable digital products — the record,
          2025 to 2026.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
        {sampleProjects.map((project, index) => (
          <motion.a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`group block ${
              index % 2 !== 0 ? "md:mt-24" : "md:mt-0"
            }`}
          >
            <div className="relative overflow-hidden mb-8 bg-gray-200 aspect-[4/3] border-2 border-[#06110A]/10 group-hover:border-[#D7301F]/60 transition-colors duration-500">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover grayscale-[40%] transition-all duration-1000 scale-100 group-hover:scale-105 group-hover:grayscale-0"
              />

              {/* Case tag — a stamped file number, not a decorative index */}
              <div
                className="absolute top-6 left-6 bg-[#FAFAF6] border-2 border-[#06110A] px-3 py-1 font-technical text-[10px] font-bold uppercase tracking-[0.2em]"
                style={{
                  transform: `rotate(${tilts[index % tilts.length]}deg)`,
                }}
              >
                Case N°0{index + 1}
              </div>

              {/* Status stamp */}
              <div className="absolute top-6 right-6 bg-[#FFD000] text-[#06110A] px-3 py-1 font-technical text-[10px] font-bold uppercase tracking-[0.2em]">
                {project.status}
              </div>

              <div className="absolute bottom-6 right-6 bg-[#06110A] text-white p-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <FiArrowUpRight size={24} />
              </div>
            </div>

            <div>
              <span className="block font-technical text-[10px] font-bold uppercase tracking-widest text-[#06110A]/50 mb-2">
                {project.role}
              </span>
              <h3 className="text-3xl font-bold tracking-tight text-[#06110A] uppercase transition-colors duration-300 group-hover:text-[#D7301F]">
                {project.title}
              </h3>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default NewProjects;

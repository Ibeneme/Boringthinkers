import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

// Asset Imports
import nexus from "../../assets/projects/nexus.png";
import pickars from "../../assets/projects/pickars.png";
import bulkup from "../../assets/projects/bulkup.png";
import kraft from "../../assets/projects/kraft.png";
import yare from "../../assets/projects/yare.png";
import { ArrowDownRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  role: string;
  thumbnail: string;
  url: string;
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
];

const NewProjects: React.FC = () => {
  return (
    <section className="bg-[#FAFAFA] py-32 px-6 md:px-20 text-[#050505]">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-4 bg-[#0A2F1D] py-2 pl-6 pr-2 rounded-full border border-[#FFD000]/10 shadow-lg"
          >
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#FFD000]">
              Selected Works
            </span>
            <div className="bg-[#FFD000] p-2.5 rounded-full text-[#011404]">
              <ArrowDownRight size={16} strokeWidth={3} />
            </div>
          </motion.div>
          <h2 className="text-[#0A2F1D] text-7xl md:text-9xl font-extrabold tracking-tighter leading-none">
            Recent
            <br />
            <h2 className="text-[#0A2F1D]">Projects.</h2>
          </h2>
        </div>
        <p className="max-w-xs text-sm font-medium text-gray-500 leading-relaxed">
          Design-led engineering for scalable digital products. 2024—2026.
        </p>
      </div>

      {/* Projects Grid  011404*/}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
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
            <div className="relative overflow-hidden mb-8 bg-gray-200 aspect-[4/3]">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-1000 scale-100 group-hover:scale-105"
              />
              {/* Overlay Arrow */}
              <div className="absolute top-6 left-6 bg-[#050505] text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <FiArrowUpRight size={24} />
              </div>
            </div>

            <div className="flex justify-between items-start">
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                  0{index + 1} / {project.role}
                </span>
                <h3 className="text-3xl font-bold tracking-tight">
                  {project.title}
                </h3>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default NewProjects;

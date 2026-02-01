import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";
import main from "../../assets/imagesa/cw/cw_a.png";
import pay from "../../assets/imagesa/100/100_a.png";
import cw_web from "../../assets/imagesa/cw_web/cw_web_a.png";

import { IoArrowForwardCircleSharp } from "react-icons/io5";
import AOS from "aos";
import nexus from "../../assets/projects/nexus.png";
import padiman from "../../assets/projects/padiman.png";
import zaeda from "../../assets/projects/zaeda.png";
import pickars from "../../assets/projects/pickars.png";
import bulkup from "../../assets/projects/bulkup.png";
import kraft from "../../assets/projects/kraft.png";
import yare from "../../assets/projects/yare.png";

import "aos/dist/aos.css";

const sampleProjects = [
  {
    id: 9,
    title: "CloneKraft",
    company: "CloneKraft",
    role: "A digital brand site featuring modern UI, deep color themes, smooth transitions, and a stunning presentation of the CloneKraft identity.",
    thumbnail: kraft,
    link: "https://www.clonekraft.com/",
  },
  {
    id: 9,
    title: "Yare Heights",
    company: "Yare Heights",
    role: "A polished academic website for Yare Heights Learning Hub featuring structured content, smooth animations, and an inspiring presentation of the institution.",
    thumbnail: yare,
    link: "https://www.yareheightlearninghub.com/",
  },

  {
    id: 2,
    title: "Pickars",
    company: "Pickars",
    role: "A courier logistics platform for fast and reliable bike deliveries.",
    thumbnail: pickars,
    link: "https://www.pickars.com",
  },
  {
    id: 3,
    title: "Bulkupdata",
    company: "Bulkupdata",
    role: "Airtime and data top-up platform for individuals and SMEs.",
    thumbnail: bulkup,
    link: "https://www.bulkupdata.com",
  },

  {
    id: 4,
    title: "Padiman Route",
    company: "Padiman Route",
    role: "Modern property and housing management platform.",
    thumbnail: padiman,
    link: "https://www.padimanroute.com",
  },
  {
    id: 5,
    title: "Nexus Music Publishing",
    company: "Nexus Music",
    role: "A digital-first music publishing platform empowering creators.",
    thumbnail: nexus,
    link: "https://nexusmusicpublishing.com/",
  },
  {
    id: 6,
    title: "Zaeda Oracle",
    company: "Zaeda Oracle",
    role: "A strategic consulting and digital solutions company.",
    thumbnail: zaeda,
    link: "https://zaedaoracle.com/",
  },

  {
    id: 1,
    title: "Chat Wazobia AI (Mobile)",
    company: "Chat Wazobia AI",
    role: "A multilingual AI chatbot designed for African languages, featuring a seamless mobile interface for real-time conversations.",
    thumbnail: main,
  },
  {
    id: 2,
    title: "100pay",
    company: "100pay",
    role: "A secure, intuitive payment platform for effortless local and international transactions by individuals and businesses.",
    thumbnail: pay,
  },
  {
    id: 3,
    title: "Chat Wazobia AI (Web)",
    company: "Chat Wazobia AI",
    role: "The web version of Chat Wazobia AI with a responsive UI that supports rich, multilingual interactions across African dialects.",
    thumbnail: cw_web,
  },
];

const NewProjects: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <section className="projects">
      <div className="projects-header">
        <h2 className="section-title">
          Our (4) Most Recent Projects 2024' - 25'
        </h2>
        <p className="section-description">
          A showcase of the designs and products I’ve worked on: from mobile
          apps to web dashboards. Each project reflects a unique challenge,
          creative solution, and collaborative effort.
        </p>
      </div>
      <div className="projects-grid">
        {sampleProjects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            data-aos="zoom-out"
            onClick={() => navigate(`/projects/${project.id}`)}
          >
            <img src={project.thumbnail} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.role}</p>
              {/* View Project Button */}
              <button
                className="ctaButtonNew"
                style={{
                  backgroundColor: "#000",
                  padding: `16px 14px`,
                  marginTop: 16,
                }}
                data-aos="zoom-out"
                onClick={() => navigate(`/projects/${project.id}`)}
              >
                <IoArrowForwardCircleSharp color="#fff" fontSize={24} />
                <p
                  style={{
                    padding: 0,
                    margin: 0,
                    paddingRight: 12,
                    color: "#fff",
                  }}
                >
                  View Project
                </p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewProjects;

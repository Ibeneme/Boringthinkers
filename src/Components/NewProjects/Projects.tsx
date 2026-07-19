import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { GitBranch } from "lucide-react";
import PickarIcon from "../../assets/projects/icon.png";
import KokoIcon from "../../assets/projects/kokoicon.png";
import csIcon from "../../assets/projects/csicon.png";
import yareicon from "../../assets/projects/yareicon.png";
import agip from "../../assets/projects/agip.png";
//agip
export const IOS_URL = "https://apps.apple.com/ng/app/pickars/id6746796884";
export const ANDROID_URL =
  "https://play.google.com/store/apps/details?id=com.pickars.app&hl=en";

import pickars from "../../assets/projects/new-pickars.png";
import pickarsapp from "../../assets/projects/content_e.png";
import yare from "../../assets/projects/yare.png";
import koko from "../../assets/projects/koko.png";
import ariad from "../../assets/projects/ariad.png";
import voted from "../../assets/projects/voted.png";
import rivers from "../../assets/projects/image.png";
import total from "../../assets/projects/total.png";
import cols from "../../assets/projects/cols.png";
import afdb from "../../assets/projects/afdb.png";
//afdb

interface ProjectLink {
  label: "App Store" | "Google Play" | "Visit Website";
  url: string;
  icon?: React.ReactNode;
}

interface Project {
  id: number;
  title: string;
  role: string;
  status: string;
  thumbnail: string;
  url?: string;
  links?: ProjectLink[];
}

const sampleProjects: Project[] = [
  {
    id: 1,
    title: "Yare Heights",
    role: "Academic Learning Hub",
    status: "Live",
    thumbnail: yare,
    url: "https://www.yareheightlearninghub.com/",
  },
  {
    id: 2,
    title: "Pickars Website",
    role: "Web - Logistics",
    status: "Live",
    thumbnail: pickars,
    url: "http://pickars.com/",
  },
  {
    id: 3,
    title: "Pickars Mobile App",
    role: "Mobile App - Logistics",
    status: "Live",
    thumbnail: pickarsapp,
    links: [
      { label: "App Store", url: IOS_URL, icon: <FaApple size={15} /> },
      {
        label: "Google Play",
        url: ANDROID_URL,
        icon: <FaGooglePlay size={15} />,
      },
    ],
  },
  {
    id: 4,
    title: "Colsphere",
    role: "Collaborative Platform",
    status: "Live",
    thumbnail: cols,
    url: "https://www.colsphere.com/",
  },
  {
    id: 5,
    title: "KokoHor Circle",
    role: "Brand & Web Experience",
    status: "Live",
    thumbnail: koko,
    url: "https://www.kokohorcircle.com/",
  },
  {
    id: 6,
    title: "Ariad Psych Services",
    role: "Mental Health Platform",
    status: "Live",
    thumbnail: ariad,
    url: "https://www.ariadpsychservices.com/",
  },
  // {
  //   id: 7,
  //   title: "Votedamarcus",
  //   role: "Campaign Website",
  //   status: "Live",
  //   thumbnail: voted,
  //   url: "https://www.votedamarcus.com/",
  // },
];

const ndaProjects: Project[] = [
  {
    id: 8,
    title: "Rivers State Government",
    role: "Public Sector Platform",
    status: "Live",
    thumbnail: rivers,
  },
  {
    id: 9,
    title: "TotalEnergies",
    role: "Corporate Web Platform",
    status: "Live",
    thumbnail: total,
  },
  // {
  //   id: 10,
  //   title: "Yare Heights",
  //   role: "Academic Learning Hub",
  //   status: "Live",
  //   thumbnail: yareicon,
  // },
  // {
  //   id: 11,
  //   title: "KokoHor Circle",
  //   role: "Logistics Platform",
  //   status: "Brand & Web Experience",
  //   thumbnail: KokoIcon,
  // },
  // {
  //   id: 2,
  //   title: "Pickars Website",
  //   role: "Web - Logistics",
  //   status: "Live",
  //   thumbnail: PickarIcon,

  // },afdb
  {
    id: 14,
    title: "Afdb",
    role: "Afdb",
    status: "Live",
    thumbnail: afdb,

  },
  {
    id: 15,
    title: "Agip",
    role: "Agip",
    status: "Live",
    thumbnail: agip,

  },
  {
    id: 16,
    title: "Colsphere",
    role: "Collaborative Platform",
    status: "Live",
    thumbnail: csIcon,

  },
];

const toSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const EditorChrome: React.FC<{ filename: string }> = ({ filename }) => (
  <div className="flex items-center gap-2 px-4 py-2.5 bg-[#06110A] border border-[#ffffff30] rounded-t-lg">
    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
    <span className="ml-3 font-technical text-xs text-[#6E7681]">
      {filename}
    </span>
  </div>
);

const CaseFileMedia: React.FC<{ project: Project }> = ({ project }) => (
  <div className="relative bg-[#161B22] border border-[#30363D] border-t-0 rounded-b-lg overflow-hidden">
    <div className="relative aspect-[4/3] overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-[#011404]/80 backdrop-blur-sm border-r border-[#30363D] flex flex-col items-center pt-3 gap-[6px] z-10">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="font-technical text-[10px] text-[#484F58]">
            {String(i + 1).padStart(2, "0")}
          </span>
        ))}
      </div>

      <img
        src={project.thumbnail}
        alt={`Screenshot of ${project.title}`}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover pl-8 transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />

      <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-[#011404]/90 border border-[#30363D] rounded-full px-3 py-1">
        <span className="relative flex h-2 w-2">
          <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-[#3FB950] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3FB950]" />
        </span>
        <GitBranch size={11} className="text-[#3FB950]" />
        <span className="font-technical text-[11px] text-[#3FB950]">main</span>
      </div>
    </div>
  </div>
);

const CardMeta: React.FC<{ project: Project }> = ({ project }) => (
  <div className="mt-5 px-1">
    <p className="font-technical text-xs text-[#6E7681]">
      <span className="text-[#484F58]">// </span>
      {project.role}
    </p>
    <h3 className="text-2xl font-brand font-bold tracking-tight mt-1.5 mb-4 text-[#C9D1D9] group-hover:text-[#D2A8FF] transition-colors duration-300">
      {project.title}
    </h3>
  </div>
);

const ActionButton: React.FC<{ link: ProjectLink; projectTitle: string }> = ({
  link,
  projectTitle,
}) => (
  <a
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`${link.label} ${projectTitle}`}
    className="flex-1 flex items-center justify-center gap-2 bg-[#ffffff12] text-[#fff] py-4 px-5 rounded-full font-technical text-[16px] font-semibold tracking-wide transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#011404] focus-visible:ring-[#3FB950]"
  >
    {link.icon && <span aria-hidden="true">{link.icon}</span>}
    <span>{link.label}</span>
    {!link.icon && <FiArrowUpRight size={14} />}
  </a>
);

const NewProjects: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const revealMotion = (index: number) => ({
    initial: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
      delay: shouldReduceMotion ? 0 : (index % 2) * 0.08,
    },
  });

  return (
    <>
      <style>{`
        @keyframes blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
        @keyframes pulseDot { 0% { transform: scale(1); opacity: 0.75; } 100% { transform: scale(2.2); opacity: 0; } }
        .cursor-blink { animation: blink 1s step-end infinite; }
        .pulse-dot { animation: pulseDot 1.6s ease-out infinite; }
      `}</style>

      {/* 1. TOP COMPANIES SECTION (White Background) */}
      <section className="relative bg-[#FAFAF6] py-24 px-6 md:px-20 overflow-hidden border-b border-[#06110A]/10">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#06110A 1px, transparent 1px), linear-gradient(90deg, #06110A 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative max-w-7xl mx-auto pl-0 md:pl-6"
        >
          <div className="flex items-center gap-2 mb-4 font-technical text-sm text-[#06110A]/50">
            <span className="text-[#048C04]">contact@boringthinkers.com</span>
            {/* <span>:</span>
            <span className="text-[#0A2540]">~/work</span>
            <span>$ cat ./sealed/*.log</span> */}
          </div>

          {/* <div className="max-w-4xl">
            <h3 className="text-4xl md:text-6xl font-brand font-bold tracking-tight text-[#06110A]">
              {/* <span className="text-[#048C04]">// </span> 
              Top companies we've built for
            </h3>
            <p className="mt-3 text-sm font-technical text-[#06110A]/60 max-w-2xl">
              NDA on file. Hover a log to peek — names stay redacted either way.
            </p>
          </div> */}

          <div className="max-w-4xl">
            <span className="font-technical text-xs font-bold tracking-[0.4em] bg-[#FFD000] px-2 py-0.5 rounded">
              SEALED FILES
            </span>
            <h3 className="text-5xl md:text-7xl font-brand font-black tracking-tight mt-4">
              Top Companies we've Engineered Solutions for.
            </h3>
            <p className="mt-4 text-lg font-medium">
              Several projects were completed under{" "}
              <strong>NDA (Non-Disclosure Agreement)</strong>. These are
              confidential partnerships where we delivered solutions for major
              organizations. While the work exists and continues to power
              important systems, the names and specific details remain sealed
              due to strict confidentiality agreements. But the companies are
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 rounded-2xl p-6 md:grid-cols-5 gap-6 bg-white border border-[#06110A]/10 shadow-sm">
            {ndaProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-xl"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={`Screenshot of ${project.title}`}
                    width={400}
                    height={300}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-all duration-500 "
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 2. RECENT PROJECTS SECTION (Maintains Dark Background) */}
      <section className="relative bg-[#011404] py-32 px-6 md:px-20 text-[#C9D1D9] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#FFD000 1px, transparent 1px), linear-gradient(90deg, #FFD000 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.15]"
          style={{
            backgroundImage: "radial-gradient(#30363D 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-[#D2A8FF] opacity-[0.06] blur-[120px] pointer-events-none"
        />

        <div className="relative max-w-7xl mx-auto mb-24">
          <div className="flex items-center gap-2 mb-6 font-technical text-sm text-[#6E7681]">
            <span className="text-[#3FB950]">user@studio</span>
            <span>:</span>
            <span className="text-[#79C0FF]">~/work</span>
            <span>$ cat portfolio.ts</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-brand font-bold tracking-tight leading-tight">
            <span className="text-[#FF7B72]">Our Most</span>{" "}
            <span className="text-[#D2A8FF]">Recent works</span>{" "}
            <span className="text-[#C9D1D9]">= {"{"}</span>
            <span
              aria-hidden="true"
              className={`inline-block w-[3px] h-[0.85em] bg-[#3FB950] ml-2 align-middle ${
                shouldReduceMotion ? "" : "cursor-blink"
              }`}
            />
          </h2>

          <p className="mt-6 max-w-xl font-technical text-sm text-[#6E7681] pl-6 border-l-2 border-[#30363D]">
            <span className="text-[#484F58]">/* </span>
            thoughtful engineering, shipped and running in production
            <span className="text-[#484F58]"> */</span>
            <br />
            <span className="text-[#484F58]">// record: 2025 – 2026</span>
          </p>
        </div>

        {/* Primary Projects Grid */}
        <ul className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 list-none p-0 m-0 pl-0 md:pl-6">
          {sampleProjects.map((project, index) => {
            const hasLinks = !!project.links?.length;
            const hasUrl = !!project.url;

            const displayLinks = hasLinks
              ? project.links!
              : hasUrl
              ? [{ label: "Visit Website" as const, url: project.url! }]
              : [];

            return (
              <motion.li key={project.id} {...revealMotion(index)}>
                <div className="group block">
                  <EditorChrome filename={`${toSlug(project.title)}.tsx`} />
                  <CaseFileMedia project={project} />
                  <CardMeta project={project} />

                  {displayLinks.length > 0 && (
                    <div className="flex flex-col sm:flex-row gap-2.5 mt-6 px-1">
                      {displayLinks.map((link) => (
                        <ActionButton
                          key={link.label}
                          link={link}
                          projectTitle={project.title}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </motion.li>
            );
          })}
        </ul>

        <div className="relative max-w-7xl mx-auto mt-24 pl-0 md:pl-6">
          <span className="font-brand font-bold text-3xl text-[#C9D1D9]">
            {"}"}
          </span>
          <span className="font-technical text-lg text-[#6E7681]">
            {" "}
            satisfies Project[];
          </span>
        </div>
      </section>
    </>
  );
};

export default NewProjects;

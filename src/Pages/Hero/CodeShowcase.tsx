import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import fintech from "../../assets/images/codes/fintech.png";
import uber from "../../assets/images/codes/uber.png";

const projects = [
  {
    label: "We Write Clean Code",
    file: "sendMoney.ts",
    caseNumber: "01",
    image: fintech,
    alt: "Moniel Fintech App",
  },
  {
    label: "We Build Clean UI",
    file: "addTask.tsx",
    caseNumber: "02",
    image: uber,
    alt: "FlowCal App",
  },
];

const Showcase = () => {
  const [activeMobileTab, setActiveMobileTab] = useState(0);

  return (
    <section className="relative bg-[#06110A] py-16 md:py-24 lg:py-32 px-4 md:px-6 text-white overflow-hidden">
      {/* Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&family=Space+Mono:wght@400;700&display=swap');
        .font-editorial { font-family: 'Instrument Serif', serif; font-style: italic; }
        .font-technical { font-family: 'Space Mono', monospace; }
      `}</style>

      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#FFD000 1px, transparent 1px), linear-gradient(90deg, #FFD000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Main Alignment Wrapper: Aligns headers and layout grid strictly together */}
      <div className="relative max-w-7xl mx-auto w-full">
        
        {/* Header Label */}
        <div className="flex items-center justify-start gap-3 mb-8">
          <div className="w-6 h-[1px] bg-[#FFD000]" />
          <span className="font-technical text-[#FFD000] text-[10px] md:text-xs font-bold uppercase tracking-widest">
            Building Businesses
          </span>
          <div className="w-6 h-[1px] bg-[#FFD000]" />
        </div>

        {/* Hero Copy Block */}
        <div className="text-left mb-12 md:mb-20">
          <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-black leading-[0.95] tracking-tighter">
            Building Softwares for{" "}
            <span className="text-[#FFD000]">Businesses</span>
          </h1>
          <p className="mt-6 md:mt-8 text-white/70 text-xl md:text-xl lg:text-2xl max-w-2xl mr-auto leading-snug">
            Premium design. Butter-smooth interactions. Production-ready systems.
          </p>
        </div>

        {/* Mobile Tab Toggles (Only visible on small viewports) */}
        <div className="flex md:hidden bg-black/40 border border-white/10 rounded-lg p-1 mb-6 max-w-sm mx-auto">
          {projects.map((proj, idx) => (
            <button
              key={proj.caseNumber}
              onClick={() => setActiveMobileTab(idx)}
              className={`flex-1 py-2 font-technical text-xs transition-all rounded-md ${
                activeMobileTab === idx
                  ? "bg-[#FFD000] text-[#06110A] font-bold"
                  : "text-white/60"
              }`}
            >
              {proj.file}
            </button>
          ))}
        </div>

        {/* Desktop Grid Layout (Bounded strictly to max-w-5xl now) */}
        <div className="hidden md:grid grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.caseNumber}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col w-full"
            >
              <ProjectCard project={project} index={idx} />
            </motion.div>
          ))}
        </div>

        {/* Mobile Viewport with Tab States */}
        <div className="block md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMobileTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col w-full"
            >
              <ProjectCard
                project={projects[activeMobileTab]}
                index={activeMobileTab}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => (
  <div className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-[#FFD000]/40 bg-[#081c15] shadow-2xl transition-all duration-500 flex-1 flex flex-col w-full">
    {/* MacOS Header Mockup */}
    <div className="flex items-center gap-2 px-5 md:px-6 py-3.5 border-b border-white/10 bg-black/40">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
      </div>
      <div className="ml-auto text-white/40 font-technical text-xs truncate">
        {project.file}
      </div>
    </div>

    {/* Integrated Code Rendering Block */}
    <div className="p-6 md:p-8 font-mono text-xs md:text-sm leading-relaxed text-white/50 overflow-x-auto flex-1 select-text">
      {index === 0 ? (
        <>
          <pre className="whitespace-pre-wrap">
            <span className="text-violet-400">const</span>{" "}
            <span className="text-yellow-300">sendMoney</span> ={" "}
            <span className="text-yellow-300">async</span> (data:{" "}
            <span className="text-sky-400">TransferData</span>) =&gt; {"{"}
          </pre>
          <div className="pl-4 md:pl-6 text-emerald-400/80 mt-2">
            // Validate balance
          </div>
          <pre className="pl-4 md:pl-6">
            <span className="text-violet-400">if</span> (data.amount &gt;
            currentBalance){" "}
            <span className="text-red-400">
              throw new Error("Insufficient funds")
            </span>
            ;
          </pre>
          <pre className="pl-4 md:pl-6 mt-4">
            <span className="text-emerald-400">const</span> res ={" "}
            <span className="text-sky-400">await</span> fetch("/api/transfer",{" "}
            {"{"}
          </pre>
          <pre className="pl-8 md:pl-10">method: "POST",</pre>
          <pre className="pl-8 md:pl-10">body: JSON.stringify(data),</pre>
          <pre className="pl-8 md:pl-10">
            headers: {"{ 'Content-Type': 'application/json' }"}
          </pre>
          <pre className="pl-4 md:pl-6">{"}"});</pre>
        </>
      ) : (
        <>
          <pre className="whitespace-pre-wrap">
            <span className="text-violet-400">const</span> addTask = (task:{" "}
            <span className="text-sky-400">Task</span>) =&gt; {"{"}
          </pre>
          <pre className="pl-4 md:pl-6">
            setTasks(prev =&gt; [...prev, {"{"}
          </pre>
          <pre className="pl-8 md:pl-10">id: Date.now(),</pre>
          <pre className="pl-8 md:pl-10">title: task.title,</pre>
          <pre className="pl-8 md:pl-10">priority: task.priority,</pre>
          <pre className="pl-8 md:pl-10">completed: false</pre>
          <pre className="pl-4 md:pl-6">{"}"}]);</pre>
          <pre className="mt-6 text-white/40 text-sm italic">
            // Production ready. Clean. Fast.
          </pre>
        </>
      )}
    </div>

    {/* Graphic Frame */}
    <div className="p-4 md:p-6 pt-0 mt-auto">
      <img
        src={project.image}
        alt={project.alt}
        className="w-full rounded-xl shadow-2xl group-hover:scale-[1.01] transition-transform duration-700 object-cover border border-white/5"
      />
    </div>
  </div>
);

export default Showcase;
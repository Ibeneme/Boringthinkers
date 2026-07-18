import { motion } from "framer-motion";
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

      {/* Header */}
      <div className="relative flex items-center justify-start gap-3 mb-8">
        <div className="w-6 h-[1px] bg-[#FFD000]" />
        <span className="font-technical text-[#FFD000] text-[10px] md:text-xs font-bold uppercase tracking-widest">
          Building Businesses
        </span>
        <div className="w-6 h-[1px] bg-[#FFD000]" />
      </div>

      <div className="relative max-w-5xl text-left mb-12 md:mb-20 px-2">
        <h1 className="text-6xl sm:text-6xl md:text-6xl lg:text-[6.2rem] font-black leading-[0.95] tracking-tighter">
          Building Softwares for{" "}
          <span className="text-[#FFD000]">Businesses</span>
        </h1>
        <p className="mt-6 md:mt-8 text-white/70 text-xl md:text-xl lg:text-2xl max-w-2xl mr-auto leading-snug">
          Premium design. Butter-smooth interactions. Production-ready systems.
        </p>
      </div>

      {/* Mobile: Only 1 project | Desktop: 2 projects */}
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* First Project - Always shown */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col w-full"
          >
            {ProjectCard(projects[0], 0)}
          </motion.div>

          {/* Second Project - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden md:flex flex-col w-full"
          >
            {ProjectCard(projects[1], 1)}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Reusable Project Card
const ProjectCard = (project: any, i: number) => (
  <div className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-[#FFD000]/40 bg-[#081c15] shadow-2xl transition-all duration-500 flex-1 flex flex-col w-full">
    {/* MacOS Header */}
    <div className="flex items-center gap-2 px-5 md:px-6 py-3.5 border-b border-white/10 bg-black/40">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <div className="ml-auto text-white/40 font-technical text-xs truncate">
        {project.file}
      </div>
    </div>

    {/* Code Area */}
    <div className="p-6 md:p-8 font-mono text-sm leading-relaxed text-white/50 overflow-x-auto flex-1">
      {i === 0 ? (
        <>
          <pre className="select-text whitespace-pre-wrap">
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
          <pre className="mt-6 text-white/50 text-sm">
            // Production ready. Clean. Fast.
          </pre>
        </>
      )}
    </div>

    {/* Image */}
    <div className="p-4 md:p-6 pt-0 mt-auto">
      <img
        src={project.image}
        alt={project.alt}
        className="w-full rounded-xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-700 object-cover"
      />
    </div>
  </div>
);

export default Showcase;

import React from "react";
import { motion } from "framer-motion";
import fintech from "../../assets/images/codes/fintech.png";
import uber from "../../assets/images/codes/uber.png";

const Showcase = () => {
  return (
    <section className="bg-[#0A2F1D] py-32 px-6 text-white overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="w-8 h-[1px] bg-[#FFD000]" />
        <span className="text-[#FFD000] text-xs font-black uppercase tracking-[0.125em]">
          BUILDING BUSINESSES
        </span>
        <div className="w-8 h-[1px] bg-[#FFD000]" />
      </div>

      <div className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-black leading-[0.9] tracking-tighter">
          Building Businesses with <span className="text-[#FFD000]">code</span>
        </h1>
        <p className="mt-6 text-white/70 text-lg md:text-xl max-w-xl mx-auto">
          Premium design. Butter-smooth interactions. Production-ready systems.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Fintech Project */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6  mt-[64px]">
            <h2 className="text-2xl font-black text-[#FFFFFF65] ">We Write Clean Codes</h2>
            <span className="text-[#FFD000] text-xl font-light">—</span>
            {/* <span className="text-white/50">Digital Wallet</span> */}
          </div>

          <div className="group relative rounded-3xl overflow-hidden border border-white/10 bg-[#081c15] shadow-xl">
            {/* MacOS-style header */}
            <div className="flex items-center gap-2 px-6 py-4 border-b border-white/10 bg-black/40">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="ml-auto text-white/40 text-xs font-mono">
                sendMoney.ts
              </div>
            </div>

            {/* Code Snippet */}
            <div className="p-8 font-mono text-sm leading-relaxed text-white/90 overflow-x-auto">
              <pre className="select-text">
                <span className="text-violet-400">const</span>{" "}
                <span className="text-yellow-300">sendMoney</span> ={" "}
                <span className="text-yellow-300">async</span> (data:{" "}
                <span className="text-sky-400">TransferData</span>) =&gt; {"{"}
              </pre>
              <div className="pl-6 text-emerald-400/80">
                // Validate balance
              </div>
              <pre className="pl-6">
                <span className="text-violet-400">if</span> (data.amount &gt;
                currentBalance)
                <span className="text-red-400">
                  {" "}
                  throw new Error("Insufficient funds")
                </span>
                ;
              </pre>
              <pre className="pl-6 mt-4">
                <span className="text-emerald-400">const</span> res ={" "}
                <span className="text-sky-400">await</span>{" "}
                fetch("/api/transfer", {"{"}
              </pre>
              <pre className="pl-10">method: "POST",</pre>
              <pre className="pl-10">body: JSON.stringify(data),</pre>
              <pre className="pl-10">
                headers: {"{ 'Content-Type': 'application/json' }"}
              </pre>
              <pre className="pl-6">{"}"});</pre>
            </div>

            {/* Image Preview */}
            <div className="p-6 pt-0">
              <img
                src={fintech}
                alt="Moniel Fintech App"
                className="w-full rounded-2xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </div>
        </motion.div>

        {/* Second Project */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-6  mt-[64px]">
            <h2 className="text-2xl font-black text-[#FFFFFF65] ">
             We Build Clean UI
            </h2>
            <span className="text-[#FFD000] text-xl font-light">—</span>
            {/* <span className="text-white/50">Task &amp; Calendar</span> */}
          </div>

          <div className="group relative rounded-3xl overflow-hidden border border-white/10 bg-[#081c15] shadow-xl">
            {/* MacOS-style header */}
            <div className="flex items-center gap-2 px-6 py-4 border-b border-white/10 bg-black/40">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="ml-auto text-white/40 text-xs font-mono">
                addTask.tsx
              </div>
            </div>

            {/* Code Snippet */}
            <div className="p-8 font-mono text-sm leading-relaxed text-white/90 overflow-x-auto">
              <pre>
                <span className="text-violet-400">const</span> addTask = (task:{" "}
                <span className="text-sky-400">Task</span>) =&gt; {"{"}
              </pre>
              <pre className="pl-6">setTasks(prev =&gt; [...prev, {"{"}</pre>
              <pre className="pl-10">id: Date.now(),</pre>
              <pre className="pl-10">title: task.title,</pre>
              <pre className="pl-10">priority: task.priority,</pre>
              <pre className="pl-10">completed: false</pre>
              <pre className="pl-6">{"}"}]);</pre>
              <pre className="mt-6 text-white/50">
                // Production ready. Clean. Fast.
              </pre>
            </div>

            {/* Image Preview */}
            <div className="p-6 pt-0">
              <img
                src={uber}
                alt="FlowCal App"
                className="w-full rounded-2xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;

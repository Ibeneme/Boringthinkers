import fintech from "../../assets/images/codes/fintech.png";
import uber from "../../assets/images/codes/uber.png";
import { motion } from "framer-motion";


const Showcase = () => {
  return (
    <section className="bg-[#0A2F1D] min-h-screen py-48 px-6 text-white overflow-hidden">
      {/* GLOBAL HEADER */}

      <motion.div className="mb-8 flex items-center justify-center gap-4">
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#FFD000] font-black">
          BUILDING BUSINESSES WITH CODES
        </span>
        <div className="w-12 h-[1px] bg-[#FFD000]" />
      </motion.div>

      <div className="max-w-5xl mx-auto text-center mb-40">
        <h1 className="text-6xl md:text-8xl font-black leading-tight tracking-tight">
          Building Businesses with
          <span className="text-[#FFD000]"> codes</span>
          <span className="bg-clip-text text-[#FFD000]"></span>
        </h1>
        {/* <p className="text-white/60 mt-6 text-xl max-w-2xl mx-auto">
          Premium design • Smooth animations •{" "}
          <span className="text-[#FFD000] font-semibold">
            Production ready code
          </span>
        </p> */}
      </div>

      <div className="max-w-7xl mt-24 mx-auto grid lg:grid-cols-2 gap-16">
        {/* ================= MONIEL - FINTECH APP ================= */}
        <div>
          <h2 className="text-[#FFD000] text-2xl font-bold mb-6 flex items-center gap-3">
            Finance{" "}
            <span className="text-white/40 text-base font-normal">
              — Digital Wallet
            </span>
          </h2>
          {/* CODE SNIPPET */}
          <div className="rounded-3xl border border-white/10 bg-[#081c15] overflow-hidden mb-10">
            <div className="flex gap-2 px-5 py-4 border-b border-white/10">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="ml-auto text-white/40 text-xs">
                sendMoney.ts
              </span>
            </div>
            <div className="p-6 font-mono text-sm leading-7 overflow-x-auto">
              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-yellow-400">sendMoney</span> ={" "}
                <span className="text-yellow-400">async</span> (data:
                TransferData) =&gt; {"{"}
              </p>
              <p className="pl-6 text-gray-400">// Validate balance</p>
              <p className="pl-6 text-purple-400">if</p>
              <p className="pl-8">
                (data.amount &gt; currentBalance) throw new Error("Insufficient
                funds");
              </p>
              <p className="pl-6 mt-3 text-green-400">
                const response = await fetch("/api/transfer", {"{"}
              </p>
              <p className="pl-12">method: "POST",</p>
              <p className="pl-12">body: JSON.stringify(data),</p>
              <p className="pl-12">
                headers: {"{ 'Content-Type': 'application/json' }"}
              </p>
              <p className="pl-6">{"}"});</p>
              <p className="pl-6 mt-3 text-emerald-400">
                return response.json();
              </p>
              <p>{"}"}</p>
            </div>
            {/* DIRECT IMAGE */}
            <div className="flex justify-center">
              <img
                src={fintech}
                alt="Moniel Fintech App"
                className="w-full rounded-3xl shadow-2xl "
              />
            </div>
          </div>
        </div>

        {/* ================= FLOWCAL - TASK & CALENDAR ================= */}
        <div>
          <h2 className="text-[#FFD000] text-2xl font-bold mb-6 flex items-center gap-3">
            Shop{" "}
            <span className="text-white/40 text-base font-normal">
              — Airplane Purchase
            </span>
          </h2>
          {/* CODE SNIPPET */}
          <div className="rounded-3xl border border-white/10 bg-[#081c15] overflow-hidden mb-10">
            <div className="flex gap-2 px-5 py-4 border-b border-white/10">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="ml-auto text-white/40 text-xs">tasks.tsx</span>
            </div>
            <div className="p-6 font-mono text-sm leading-7 overflow-x-auto">
              <p>
                <span className="text-purple-400">const</span> addTask = (task:
                Task) =&gt; {"{"}
              </p>
              <p className="pl-6 text-green-400">
                setTasks(prev =&gt; [...prev, {"{"}
              </p>
              <p className="pl-12">id: Date.now(),</p>
              <p className="pl-12">title: task.title,</p>
              <p className="pl-12">time: task.time,</p>
              <p className="pl-12">priority: task.priority,</p>
              <p className="pl-12">completed: false</p>
              <p className="pl-6">{"}"}]);</p>
              <p>{"}"}</p>
              <p className="mt-4 text-gray-400">// Example usage</p>
              <p className="text-purple-400">addTask</p>
              <p className="pl-6">
                {
                  "({ title: 'Finish client UI', time: '10:00', priority: 'high' })"
                }
              </p>
            </div>
            {/* DIRECT IMAGE */}
            <div className="flex justify-center">
              <img
                src={uber}
                alt="FlowCal Task & Calendar App"
                className=" w-full rounded-3xl shadow-2xl "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShieldAlert,
  ArrowLeft,
  Terminal,
  Activity,
  AlertTriangle,
} from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-[#011404] pt-[200px] pb-[200px] overflow-hidden flex items-center justify-center text-white">
      {/* GRID */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(255,208,0,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,208,0,0.08)_1px,transparent_1px)] bg-[size:80px_80px]" />


      <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFD000]/15 blur-[180px]" />


      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(255,255,255,0.03)_50%)] bg-[size:100%_4px] pointer-events-none" /> */}

      {/* FLOATING CARD 1 */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="absolute top-48 left-16 border border-yellow-400/20 bg-yellow-400/5 backdrop-blur px-4 py-3"
      >
        <div className="flex items-center gap-2 text-yellow-400">
          <AlertTriangle size={14} />
          <span className="text-xs tracking-[0.3em] uppercase">
            Page Not Found
          </span>
        </div>
      </motion.div>

      {/* FLOATING CARD 2 */}
      <motion.div
        animate={{
          y: [0, 25, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
        }}
        className="absolute bottom-16 right-16 border border-yellow-400/20 bg-yellow-400/5 backdrop-blur px-4 py-3"
      >
        <div className="flex items-center gap-2 text-yellow-400">
          <Activity size={14} />
          <span className="text-xs tracking-[0.3em] uppercase">
            Broken Link
          </span>
        </div>
      </motion.div>

      <div className="relative z-10 max-w-5xl text-center px-6">
        {/* ICON */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex justify-center"
        >
          <div className="relative">
            <ShieldAlert
              size={100}
              className="text-yellow-400 drop-shadow-[0_0_30px_rgba(255,208,0,0.8)]"
            />

            <motion.div
              animate={{
                opacity: [0, 1, 0],
                scale: [1, 1.5, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="absolute inset-0 rounded-full border border-yellow-400"
            />
          </div>
        </motion.div>

        {/* 404 */}
        <motion.h1
          animate={{
            textShadow: [
              "0 0 20px rgba(255,208,0,.3)",
              "0 0 50px rgba(255,208,0,.8)",
              "0 0 20px rgba(255,208,0,.3)",
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          className="text-[120px] md:text-[220px] font-black leading-none tracking-[-0.08em] text-yellow-400"
        >
          404
        </motion.h1>

        {/* TITLE */}
        <div className="relative inline-block">
          <motion.h2
            animate={{
              x: [0, -3, 3, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 0.2,
              repeatDelay: 4,
            }}
            className="text-4xl md:text-6xl font-black uppercase"
          >
            PAGE NOT FOUND
          </motion.h2>
        </div>

        {/* DESCRIPTION */}
        <p className="max-w-xl mx-auto mt-8 text-gray-300 uppercase tracking-[0.18em] text-sm leading-8">
          Oops! We couldn't find the page you're looking for. It may have been
          moved, deleted, or the link may be incorrect.
        </p>

        {/* STATUS PANEL */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 mx-auto max-w-2xl border border-yellow-400/20 bg-[#011404]/60 backdrop-blur-xl rounded-xl overflow-hidden"
        >
          <div className="border-b border-yellow-400/10 px-4 py-3 flex items-center gap-2">
            <Terminal size={14} />

            <span className="text-xs uppercase tracking-widest">
              PAGE STATUS
            </span>
          </div>

          <div className="p-6 text-left font-mono text-sm text-green-400 space-y-2">
            <p>{">"} Searching for page...</p>

            <p>{">"} Page not found</p>

            <p>{">"} Preparing return to homepage...</p>

            <motion.p
              animate={{
                opacity: [1, 0, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 1,
              }}
            >
              {">"} Ready_
            </motion.p>
          </div>
        </motion.div>

        {/* BUTTON */}
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 40px rgba(255,208,0,.4) pb-[120px]",
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={() => navigate("/")}
          className="mt-12 group px-10 py-5 border border-yellow-400 text-yellow-400 rounded-full flex items-center gap-4 mx-auto hover:bg-yellow-400 hover:text-[#011404] transition-all"
        >
          <ArrowLeft
            size={18}
            className="group-hover:-translate-x-1 transition"
          />

          <span className="uppercase tracking-[0.3em] text-xs font-black">
            GO BACK HOME
          </span>
        </motion.button>
      </div>

      {/* MASSIVE BACKGROUND TEXT */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[35vw] font-black text-white/[0.02]">404</span>
      </div>
    </section>
  );
};

export default NotFound;

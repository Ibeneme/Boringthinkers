import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Terminal, ArrowLeft, ShieldAlert, Activity } from "lucide-react";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="max-w-3xl w-full text-center">
        {/* Animated Icon Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-12"
        >
          <div className="relative">
            <ShieldAlert size={80} strokeWidth={1} className="text-gray-100" />
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Activity size={32} className="text-[#FFD000]" />
            </motion.div>
          </div>
        </motion.div>

        {/* Error Code */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-[10px] font-black uppercase tracking-[0.8em] text-[#FFD000] mb-4 block">
            404
          </span>
          <h1 className="text-6xl md:text-9xl font-black text-[#050505] leading-none tracking-[-0.06em] uppercase mb-8">
            404 - Page Not Found
          </h1>
        </motion.div>

        {/* Technical Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-md mx-auto mb-16"
        >
          <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest leading-[1.8]">
            The requested Page is not found. The path may have been removed or
            moved to a restricted sector of the web.
          </p>
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col items-center gap-8"
        >
          <button
            onClick={() => navigate("/")}
            className="group flex items-center gap-4 border border-[#050505] px-10 py-5 rounded-full hover:bg-[#050505] transition-all duration-300"
          >
            <ArrowLeft
              size={18}
              className="text-[#050505] group-hover:text-white group-hover:-translate-x-1 transition-all"
            />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#050505] group-hover:text-white">
              Return to Home
            </span>
          </button>

          {/* Decorative Terminal Line */}
          <div className="flex items-center gap-3 opacity-20 mt-12">
            <Terminal size={12} />
            <span className="text-[9px] font-mono uppercase tracking-[0.3em]">
              Waiting for input...
            </span>
          </div>
        </motion.div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-[0.03] z-0">
        <div className="absolute top-10 left-10 text-[20vw] font-black">
          404
        </div>
        <div className="absolute bottom-10 right-10 text-[20vw] font-black">
          NULL
        </div>
      </div>
    </section>
  );
};

export default NotFound;

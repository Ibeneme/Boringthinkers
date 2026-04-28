import React from "react";

const SlidingPage: React.FC = () => {
  const content = "THE BORING THINKERS // ".repeat(15);

  return (
    <div className="w-full bg-[#011404] py-12 overflow-hidden flex items-center border-t border-b border-white/5 pointer-events-none">
      <div className="flex whitespace-nowrap animate-infinite-scroll">
        {/* First Set */}
        <span className="text-[5rem] md:text-[10rem] font-black text-transparent stroke-text uppercase tracking-tighter pr-10">
          {content}
        </span>
        {/* Duplicate for Seamless Loop */}
        <span className="text-[5rem] md:text-[10rem] font-black text-transparent stroke-text uppercase tracking-tighter pr-10">
          {content}
        </span>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 208, 0, 0.3);
        }
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 30s linear infinite;
        }
      `,
        }}
      />
    </div>
  );
};

export default SlidingPage;

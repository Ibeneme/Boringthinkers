import React from "react";
import ReactCountryFlag from "react-country-flag";

const flags = [
  { code: "NG", name: "Nigeria" },
  { code: "CA", name: "Canada" },
  { code: "US", name: "United States" },
  { code: "GH", name: "Ghana" },
  { code: "KE", name: "Kenya" },
  { code: "NL", name: "Netherlands" },
  { code: "GB", name: "United Kingdom" },
];

const FlagsRow: React.FC = () => {
  return (
    <section className="w-full bg-[#fcfcfc] border-t border-b border-[#011404]/5">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Technical Label */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#011404]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#011404]/40">
              Our Clients’
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#011404] uppercase tracking-tighter leading-none">
            Our Clients’ <br /> <span className="opacity-30">Countries.</span>
          </h2>
        </div>

        {/* The Registry Grid */}
        <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-10 hover:opacity-100 transition-opacity duration-500">
          {flags.map(({ code, name }) => (
            <div
              key={code}
              className="group relative flex items-center justify-center"
            >
              <ReactCountryFlag
                countryCode={code}
                svg
                className="  transition-all duration-500 "
                style={{
                  width: "56px",
                  height: "auto",
               //   filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.05))",
                }}
                title={name}
              />
              {/* Tooltip Label */}
              <span className="absolute -bottom-6 text-[9px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity text-[#011404]">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlagsRow;

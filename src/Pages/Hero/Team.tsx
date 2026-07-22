import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import sandra from "../../assets/images/team/sandra.png";

const Team = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "Person",
      name: "Sandra",
      jobTitle: "Chief Executive Officer & Co-Founder",
      worksFor: {
        "@type": "Organization",
        name: "Boring Thinkers Limited",
      },
      email: "contact@boringthinkers.com",
      image: sandra,
      description:
        "Chief Executive Officer of Boring Thinkers Limited, leading software engineering and product strategy.",
    },
  };

  return (
    <>
      <Helmet>
        <title>Our Team & Leadership | Boring Thinkers</title>
        <meta
          name="description"
          content="Meet the team at Boring Thinkers Limited. Led by CEO Sandra, we engineer reliable, scalable, and beautifully designed digital solutions."
        />
        <link rel="canonical" href="https://boringthinkers.com/our-team" />
        <meta
          property="og:title"
          content="Our Team & Leadership | Boring Thinkers"
        />
        <meta
          property="og:description"
          content="Meet Sandra, CEO of Boring Thinkers Limited, and explore our mission of building clean code and bulletproof digital products."
        />
        <meta property="og:url" content="https://boringthinkers.com/our-team" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Boring Thinkers" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <section className="relative min-h-screen w-full bg-[#0A2F1D] text-white px-4 py-20 md:py-24 overflow-hidden">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&family=Space+Mono:wght@400;700&display=swap');
          .font-editorial { font-family: 'Instrument Serif', serif; font-style: italic; }
          .font-technical { font-family: 'Space Mono', monospace; }
        `}</style>
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-8 h-[1px] bg-[#FFD000]" />
          <span className="text-[#FFD000] text-xs font-black uppercase tracking-[0.125em]">
            OUR TEAM
          </span>
          <div className="w-8 h-[1px] bg-[#FFD000]" />
        </div>

        <div className="max-w-5xl mx-auto text-center mb-20">
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[0.9] tracking-tighter">
            Built by Thinkers.
            <br />
            Led by <span className="text-[#FFD000]">Sandra</span>.
          </h1>
          <p className="mt-6 text-white/70 text-lg md:text-xl max-w-xl mx-auto">
            Boring Thinkers Limited — Where clean code meets exceptional
            execution.
          </p>
        </div>

        {/* CEO Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="group relative rounded-3xl overflow-hidden border border-white/10 bg-[#081c15] shadow-2xl">
              {/* MacOS-style header */}
              <div className="flex items-center gap-2 px-6 py-4 border-b border-white/10 bg-black/40">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="ml-auto text-white/40 text-xs font-mono tracking-wide">
                  CEO — SANDRA
                </div>
              </div>

              <div className="grid md:grid-cols-5 gap-0">
                {/* Left: Image */}
                <div className="md:col-span-2 relative">
                  <img
                    src={sandra}
                    alt="Sandra - CEO of Boring Thinkers Limited"
                    className="w-full h-full object-cover aspect-[4/5] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>

                {/* Right: Content */}
                <div className="md:col-span-3 p-8 md:p-8 flex flex-col justify-center">
                  <div className="mb-8">
                    <span className="inline-block px-4 py-1.5 bg-[#FFD000] text-black text-xs font-black tracking-widest rounded-full mb-4">
                      CO - FOUNDER &amp; CEO
                    </span>
                    <h2 className="text-5xl md:text-6xl font-black leading-none tracking-tighter mb-3">
                      Sandra
                    </h2>
                    <p className="text-[#FFD000] text-xl font-light">
                      Chief Executive Officer
                    </p>
                  </div>

                  <div className="space-y-6 text-white/80 leading-relaxed text-[15.5px]">
                    <p>
                      With over a decade of experience building digital
                      products, Sandra founded
                      <span className="text-white font-medium">
                        {" "}
                        Boring Thinkers Limited
                      </span>{" "}
                      with one mission: to create software that is both
                      beautiful and bulletproof.
                    </p>
                    <p>
                      She believes in writing code that lasts, designing
                      interfaces that feel alive, and building companies that
                      solve real problems.
                    </p>
                  </div>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <a
                      href="mailto:contact@boringthinkers.com"
                      className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors px-6 py-4 rounded-2xl group"
                    >
                      <span className="text-sm font-medium">
                        Send Sandra a message
                      </span>
                      <span className="text-[#FFD000] group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </a>
                  </div>

                  <div className="mt-auto pt-10 border-t border-white/10 text-xs font-mono text-white/50">
                    contact@boringthinkers.com
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16 text-white/40 text-sm font-light">
          One founder. One standard. Zero excuses.
        </div>
      </section>
    </>
  );
};

export default Team;

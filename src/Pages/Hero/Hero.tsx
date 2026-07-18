import { useEffect, useState } from "react";

const EMAIL = "contact@boringthinkers.com";

function mailto(subject: string) {
  window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
    subject
  )}`;
}

const PITCH_LINE = "boring-thinkers --pitch --no-boring";

type TabId = "ts" | "rust" | "readme";

const TABS: { id: TabId; label: string; dot: string }[] = [
  { id: "ts", label: "boring-thinkers.ts", dot: "#6ab0f3" },
  { id: "readme", label: "README.md", dot: "#9aa4b2" },
  { id: "rust", label: "engine.rs", dot: "#ce6a3f" },
];

const MONO = { fontFamily: "'JetBrains Mono', monospace" };
const DISPLAY = { fontFamily: "'Lufga', 'Space Grotesk', sans-serif" };

export default function IDEHero() {
  const [typed, setTyped] = useState("");
  const [activeTab, setActiveTab] = useState<TabId>("ts");
  const [caretOn, setCaretOn] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setTyped(PITCH_LINE.slice(0, i));
      if (i >= PITCH_LINE.length) {
        clearInterval(interval);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setCaretOn((prev) => !prev), 530);
    return () => clearInterval(interval);
  }, []);

  const lineCount = activeTab === "ts" ? 22 : activeTab === "rust" ? 19 : 0;

  return (
    <section className="relative min-h-screen w-full bg-[#011404] px-4 py-20 md:py-24 overflow-hidden">
      <style>{`
        @keyframes bt-drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -15px) scale(1.05); }
        }
        @keyframes bt-scan {
          0% { background-position: 0 0; }
          100% { background-position: 0 100%; }
        }
        .bt-scanlines {
          background-image: repeating-linear-gradient(
            0deg, rgba(255,255,255,0.035) 0px, rgba(255,255,255,0.035) 1px,
            transparent 1px, transparent 3px
          );
          animation: bt-scan 8s linear infinite;
        }
        @keyframes bt-fade {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .bt-pane { animation: bt-fade 0.35s ease-out forwards; }
      `}</style>

      {/* Ambient backdrop */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 15% 20%, #011404 0%, transparent 70%), radial-gradient(50% 45% at 85% 70%, #011404 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(#3b4252 1px, transparent 1px), linear-gradient(90deg, #3b4252 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative mx-auto max-w-6xl md:pt-[120px] pt-[60px]">
        {/* Headline */}
        <div className="mb-12 md:mb-16 text-left">
          {/* <div className="mx-auto md:mx-0 mb-6 inline-flex items-center gap-2 rounded-full bg-[#ffd00021] px-4 py-1 text-[16px] text-[#ffd000]">
            {/* <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ffd000] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ffd000]" />
            </span>
            EST. 2024 — BORING THINKERS
          </div> */}

          <h1
            className="py-2 text-5xl md:text-8xl lg:text-8xl font-bold tracking-[-1.5px] leading-[1.05] text-[#f0f3f7]"
            style={DISPLAY}
          >
            Engineering{" "}
            <span className="bg-gradient-to-r from-[#ffd000] via-[#ffd000] to-[#ffd000] bg-clip-text text-transparent">
              great software
            </span>{" "}
            is what we do
          </h1>

          <p
            className="mt-6 max-w-2xl mx-auto md:mx-0 text-base md:text-lg text-[#ffffff45] leading-relaxed"
            style={DISPLAY}
          >
            A software development company for startups and businesses who want
            their idea shipped, not just discussed. Hardware too, if it comes to
            that.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => mailto("Let's build a project")}
              className="rounded-full bg-[#ffd000] px-8 py-4 font-medium text-base text-[#0b0e14] hover:bg-[#ffdf4d] active:scale-[0.985] transition-all duration-200"
              style={DISPLAY}
            >
              Send us a mail →
            </button>
            {/* <button
              onClick={() => mailto("I have a mad idea")}
              className="rounded-full border border-[#1e2530] px-8 py-4 font-medium text-base text-[#d5dae3] hover:border-[#4ec9b0] hover:text-[#4ec9b0] active:scale-[0.985] transition-all duration-200"
              style={DISPLAY}
            >
              Pitch to us
            </button> */}
          </div>
        </div>

        {/* IDE Window */}
        <div className="overflow-hidden rounded-2xl border border-[#1e2530] bg-[#081c15] w-full shadow-none">
          {/* Title bar */}
          <div className="flex items-center justify-between border-b border-[#1e2530] bg-[#011404] px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
            </div>
            <span className="text-[11px] text-[#5c6370]" style={MONO}>
              ~/codes
            </span>
            <div className="w-6" />
          </div>

          {/* Tabs */}
          <div className="flex border-b border-[#1e2530] bg-[#081c15] overflow-x-auto">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 border-r border-[#1e2530] px-5 py-3 text-xs whitespace-nowrap transition-colors flex-shrink-0 ${
                  tab.id === activeTab
                    ? "bg-[#011404] text-[#d5dae3] border-b-2 border-b-[#6ab0f3]"
                    : "text-[#5c6370] hover:text-[#ffffff45]"
                }`}
                style={MONO}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: tab.dot }}
                />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Area */}
          {activeTab !== "readme" ? (
            <div className="relative flex min-h-[420px] md:min-h-[520px]">
              <div className="bt-scanlines pointer-events-none absolute inset-0 z-10" />

              {/* Line numbers */}
              <div
                className="select-none px-4 py-6 text-right text-xs leading-[1.85] text-[#3b4252] border-r border-[#1e2530] bg-[#011404] hidden sm:block"
                style={MONO}
              >
                {Array.from({ length: lineCount }, (_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>

              {activeTab === "ts" ? (
                <pre
                  className="bt-pane flex-1 overflow-auto p-6 text-[13px] md:text-sm leading-[1.75] text-[#ffffff45] whitespace-pre-wrap"
                  style={MONO}
                >
                  <span className="text-[#5c6370">
                    // Est. 2024 — Boring Thinkers
                  </span>
                  {"\n"}
                  <span className="text-[#c678dd]">import</span> {"{ "}
                  <span className="text-[#4ec9b0]">startups</span>,{" "}
                  <span className="text-[#4ec9b0]">businesses</span> {"}"}{" "}
                  <span className="text-[#c678dd]">from</span>{" "}
                  <span className="text-[#e3b341]">"reality"</span>;{"\n\n"}
                  <span className="text-[#c678dd]">interface</span>{" "}
                  <span className="text-[#6ab0f3]">Project</span> {"{"}
                  {"\n"}
                  {"  "}idea: <span className="text-[#4ec9b0]">string</span>;
                  {"\n"}
                  {"  "}deadline: <span className="text-[#4ec9b0]">Date</span>;
                  {"\n"}
                  {"  "}madness: <span className="text-[#4ec9b0]">number</span>;
                  {"\n"}
                  {"}"}
                  {"\n\n"}
                  <span className="text-[#c678dd]">const</span>{" "}
                  <span className="text-[#6ab0f3]">services</span> = [{"\n"}
                  {"  "}
                  {"{ name: "}
                  <span className="text-[#e3b341]">"Mobile & Web"</span>, mad:{" "}
                  <span className="text-[#c678dd]">true</span> {"},"}
                  {"\n"}
                  {"  "}
                  {"{ name: "}
                  <span className="text-[#e3b341]">"Backend + Infra"</span>,
                  mad: <span className="text-[#c678dd]">true</span> {"},"}
                  {"\n"}
                  {"  "}
                  {"{ name: "}
                  <span className="text-[#e3b341]">"Hardware Integration"</span>
                  , mad: <span className="text-[#c678dd]">true</span> {"},"}
                  {"\n"}
                  {"  "}
                  {"{ name: "}
                  <span className="text-[#e3b341]">"Boring Paperwork"</span>,
                  mad: <span className="text-[#c678dd]">false</span> {"},"}
                  {"\n"}];{"\n\n"}
                  <span className="text-[#c678dd]">function</span>{" "}
                  <span className="text-[#6ab0f3]">contactUs</span>(idea:{" "}
                  <span className="text-[#4ec9b0]">string</span>) {"{"}
                  {"\n"}
                  {"  "}
                  <button
                    onClick={() => mailto("Got a mad idea 💡")}
                    className="inline-flex items-center gap-1 rounded px-1 -mx-1 text-[#d5dae3] hover:bg-[#1e2530] transition-colors"
                    title="Run contactUs()"
                  >
                    <span className="underline decoration-dotted decoration-[#5c6370] underline-offset-4 hover:decoration-[#e3b341]">
                      send(idea)
                    </span>
                  </button>
                  {"\n"}
                  {"}"}
                  {"\n\n"}
                  <span className="text-[#c678dd]">export default</span> {"{ "}
                  services, contactUs {"};"}
                </pre>
              ) : (
                <pre
                  className="bt-pane flex-1 overflow-auto p-6 text-[13px] md:text-sm leading-[1.75] text-[#ffffff45] whitespace-pre-wrap"
                  style={MONO}
                >
                  <span className="text-[#5c6370">
                    // engine.rs — the thing that never sleeps
                  </span>
                  {"\n\n"}
                  <span className="text-[#c678dd]">use</span>{" "}
                  std::time::Duration;{"\n"}
                  <span className="text-[#c678dd]">use</span> tokio::{"{"}task,
                  time{"}"};{"\n\n"}
                  <span className="text-[#c678dd]">async fn</span>{" "}
                  <span className="text-[#6ab0f3]">main</span>() {"{"}
                  {"\n"}
                  {"  "}loop {"{"}
                  {"\n"}
                  {"    "}ship_feature().await;{"\n"}
                  {"    "}time::sleep(Duration::from_secs(1)).await;{"\n"}
                  {"  "}
                  {"}"}
                  {"\n"}
                  {"}"}
                  {"\n\n"}
                  <span className="text-[#c678dd]">async fn</span>{" "}
                  <span className="text-[#6ab0f3]">ship_feature</span>() {"{"}
                  {"\n"}
                  {"  "}println!("Built. Shipped. No drama.");{"\n"}
                  {"}"}
                </pre>
              )}
            </div>
          ) : (
            <div className="bt-pane px-8 py-12 md:px-14 md:py-16 text-[#ffffff45] max-w-3xl">
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  ["status", "shipping", "#27c93f"],
                  ["coffee", "infinite", "#e3b341"],
                  ["boring", "false", "#ce6a3f"],
                ].map(([key, value, color]) => (
                  <span
                    key={key}
                    className="rounded-full border border-[#1e2530] bg-[#011404] px-4 py-1 text-xs"
                    style={MONO}
                  >
                    <span className="text-[#5c6370]">{key}: </span>
                    <span style={{ color }}>{value}</span>
                  </span>
                ))}
              </div>

              <h2
                className="text-4xl font-bold text-[#f0f3f7] tracking-tight"
                style={DISPLAY}
              >
                Boring Thinkers
              </h2>
              <p className="mt-3 text-[#ffffff45] text-lg" style={DISPLAY}>
                We ship software that works. Est. 2024.
              </p>

              <div className="mt-10 space-y-6 text-[#ffffff45]">
                <p>
                  No hype. No endless meetings. Just clean, reliable code that
                  solves real problems.
                </p>
                <p>
                  From mobile apps to backend systems and hardware integrations
                  — we turn ideas into production reality.
                </p>
              </div>
            </div>
          )}

          {/* Bottom terminal bar */}
          <div className="border-t border-[#1e2530] bg-[#011404] px-4 py-4">
            <p className="text-xs md:text-sm text-[#5c6370]" style={MONO}>
              <span className="text-[#4ec9b0]">➜</span>{" "}
              <span className="text-[#6ab0f3]">boring-thinkers</span>{" "}
              <span className="text-[#d5dae3]">{typed}</span>
              <span className={caretOn ? "text-[#e3b341]" : "opacity-0"}>
                ▍
              </span>
            </p>
          </div>

          {/* Status bar */}
          <div
            className="flex items-center justify-between border-t border-[#1e2530] bg-[#011404] px-4 py-2 text-[11px] text-[#5c6370]"
            style={MONO}
          >
            <div className="flex items-center gap-4">
              <span>⎇ main</span>
              <span className="hidden md:inline">
                {activeTab === "ts"
                  ? "TypeScript"
                  : activeTab === "rust"
                  ? "Rust"
                  : "Markdown"}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden md:inline">Ln 12, Col 9</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#27c93f]" />
                building the future
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

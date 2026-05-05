import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import {
  CalendarDays,
  User,

  ArrowLeft,
  Terminal,
  Cpu,
  Database,
  ShieldCheck,
  Activity,
  GitBranch,

  Search,
  AlertTriangle,
} from "lucide-react";

// Technical Data Structure for the Engineering Log
const BLOG_CONTENT = {
  "solid-principles-startups": {
    title: "Why SOLID Principles Are Not Boring For Startups",
    author: "BT Engineering",
    date: "May 15, 2024",
    readTime: "35 min read",
    category: "Architecture",
    content: (
      <>
        <p className="lead leading-[2.4] text-[16px]">
          In the chaos of startup development, speed is often prioritized over
          structure. It’s a pragmatic choice, but skipping core architectural
          principles like <strong>SOLID</strong> isn’t saving time—it’s just
          hiding technical debt in the foundation. At Boring Thinkers, we view
          SOLID not as a rigid academic exercise, but as a{" "}
          <strong>survival strategy</strong> for the inevitable pivot.
        </p>

        <h2 className="leading-[2.4] text-[16px]">I. The God Object Protocol (SRP)</h2>
        <p className="leading-[2.4] text-[16px]">
          Startups often fall into the trap of the <strong>God Object</strong>—a
          single service or class that handles authentication, database
          persistence, and third-party API logic. We combat this using the{" "}
          <strong>Single Responsibility Principle (SRP)</strong>.
        </p>
        <p className="leading-[2.4] text-[16px]">
          SRP isn't just about small files; it's about{" "}
          <strong>axis of change</strong>. If a file needs to change because the
          database schema changed AND because the marketing team wanted a new
          email template, that file has two reasons to exist. When those two
          reasons collide during a merge, you get "Merge Hell." By isolating
          these concerns, we ensure that a change in your payment provider
          doesn't break your user registration flow.
        </p>

        <div className="my-10 p-8 border-l-4 border-[#FFD000] bg-gray-50 text-[#050505]">
          <h4 className="font-black uppercase mb-2">
            BT Protocol: Inversion of Control
          </h4>
          <p className="text-[24px] leading-[2.4] text-[16px] text-gray-500 font-bold">
            We never allow high-level business logic to depend on low-level
            infrastructure. We depend on abstractions. This makes the system
            "Pivot-Ready."
          </p>
        </div>

        <h2 className="leading-[2.4] text-[16px]">II. The Open-Closed Principle (OCP)</h2>
        <p className="leading-[2.4] text-[16px]">
          The Open-Closed Principle states that software entities should be{" "}
          <strong>open for extension but closed for modification</strong>. In a
          startup, requirements change every Tuesday. If every new feature
          requires you to go back and rewrite 40% of your existing functions,
          you aren't building a product; you're building a house of cards.
        </p>
        <p className="leading-[2.4] text-[16px]">
          We implement OCP through <strong>Strategy Patterns</strong>. Instead
          of massive <code>switch</code> statements that check for user types
          (Admin, Guest, Premium) to calculate discounts, we pass a{" "}
          <code>DiscountStrategy</code> object. When the business introduces a
          "Black Friday" tier, we don't touch the core checkout logic—we simply
          pass a new strategy.
        </p>

        <pre className="leading-[2.4] text-[16px]">
          <div className="flex items-center gap-2 mb-4 text-[#FFD000]">
            <Terminal size={14} />
            <span className="text-[10px] font-black uppercase tracking-widest">
              strategy_pattern.ts
            </span>
          </div>
          <code>{`// Bad Approach (Modification required for new types)
function getPrice(user) {
  if (user.type === 'PREMIUM') return 80;
  if (user.type === 'VIP') return 50;
  return 100;
}

// OCP Approach (Extension via strategy)
interface PriceStrategy { calculate(): number; }
class PremiumStrategy implements PriceStrategy { calculate() { return 80; } }

function checkout(strategy: PriceStrategy) {
  return strategy.calculate();
}`}</code>
        </pre>

        <h2 className="leading-[2.4] text-[16px]">
          III. Liskov Substitution Principle (LSP)
        </h2>
        <p className="leading-[2.4] text-[16px]">
          LSP is the most misunderstood of the five. It dictates that objects of
          a superclass should be replaceable with objects of its subclasses
          without breaking the application.
        </p>
        <p className="leading-[2.4] text-[16px]">
          In practical terms: <strong>Don't lie to your interfaces</strong>. If
          you have a <code>BasePaymentGateway</code> and your{" "}
          <code>CryptoPayment</code> subclass throws an "Error: Not Implemented"
          for the <code>refund()</code> method, you have violated LSP. The
          calling code expects a refund to work. Now you have to add{" "}
          <code>if (gateway instanceof Crypto)</code> checks everywhere, and
          your architecture has become "Fragile."
        </p>

        <h2 className="leading-[2.4] text-[16px]">
          IV. Interface Segregation Principle (ISP)
        </h2>
        <p className="leading-[2.4] text-[16px]">
          We architect interfaces that are lean. No client should be forced to
          depend on methods they do not use. Startups often create a{" "}
          <code>UserInterface</code> that contains 50 methods:{" "}
          <code>updateBio()</code>, <code>processPayment()</code>,{" "}
          <code>uploadAvatar()</code>, <code>deleteAccount()</code>.
        </p>
        <p className="leading-[2.4] text-[16px]">
          This is a mistake. A "Profile Page" component doesn't need to know how
          to <code>processPayment()</code>. By splitting these into{" "}
          <code>IProfileEditor</code> and <code>IBillingEntity</code>, we reduce
          the <strong>cognitive load</strong> for engineers and prevent
          unnecessary re-renders in frontend frameworks like React when
          unrelated data changes.
        </p>

        <h2 className="leading-[2.4] text-[16px]">
          V. Dependency Inversion Principle (DIP)
        </h2>
        <p className="leading-[2.4] text-[16px]">
          This is the "D" in SOLID and the heart of clean architecture. It
          states that high-level modules should not depend on low-level modules;
          both should depend on abstractions.
        </p>
        <p className="leading-[2.4] text-[16px]">
          Think of it like a wall socket. Your lamp (high-level logic) doesn't
          care if the electricity comes from a coal plant or a solar farm
          (low-level infrastructure). It just cares that the plug fits the
          socket (the interface). We use <strong>Dependency Injection</strong>{" "}
          to swap out real databases for "Mock" databases during testing,
          allowing our test suites to run in milliseconds rather than minutes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
          <div className="p-10 border border-gray-100 bg-white">
            <ShieldCheck size={32} className="mb-6 text-[#FFD000]" />
            <h4 className="uppercase font-black text-lg">Testability</h4>
            <p className="text-[24px] leading-[2.4] text-[16px] text-gray-500 font-bold">
              SOLID code is inherently testable. When dependencies are injected
              via interfaces, you can simulate any failure state (Network
              timeouts, DB crashes) with ease.
            </p>
          </div>
          <div className="p-10 border border-gray-100 bg-white">
            <GitBranch size={32} className="mb-6 text-[#FFD000]" />
            <h4 className="uppercase font-black text-lg">Parallel Dev</h4>
            <p className="text-[24px] leading-[2.4] text-[16px] text-gray-500 font-bold">
              With clear interfaces, the Frontend team can work against a Mock
              API while the Backend team builds the real one. There is zero
              blocked time.
            </p>
          </div>
        </div>

        <h2 className="leading-[2.4] text-[16px]">VI. The Economics of Quality</h2>
        <p className="leading-[2.4] text-[16px]">
          Many founders argue: "We don't have time for SOLID." The
          counter-argument is: "You don't have time for the alternative."
          Technical debt grows at compound interest. A "Quick and Dirty"
          approach takes 1 week today, but makes every future feature take 3
          weeks.
        </p>
        <p className="leading-[2.4] text-[16px]">
          By investing 20% more time upfront in{" "}
          <strong>Interface Design</strong> and{" "}
          <strong>Responsibility Mapping</strong>, you ensure that your codebase
          can survive the "Series A" scale-up where you go from 2 developers to
          20.
        </p>

        <h2 className="leading-[2.4] text-[16px]">VII. Avoiding "Over-Engineering"</h2>
        <p className="leading-[2.4] text-[16px]">
          A final word of caution: SOLID is a tool, not a religion. Do not
          create 15 interfaces for a 10-line function. The goal is{" "}
          <strong>Decoupling</strong>, not <strong>Complexity</strong>. At
          Boring Thinkers, we follow the "Rule of Three": Don't abstract until
          you've had to implement the same logic three times. Until then, stay
          lean, but keep your responsibilities isolated.
        </p>

        <div className="mt-12 p-8 border-t-4 border-gray-900 bg-gray-50">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-2">
            Protocol Footer
          </p>
          <p className="text-[24px] leading-[2.4] text-[16px] font-bold text-gray-600">
            SOLID is the difference between a product that dies in the legacy
            graveyard and a platform that evolves into an industry leader.
            Choose your foundation wisely.
          </p>
        </div>
      </>
    ),
  },
  "ci-cd-pipelines-efficiency": {
    title: "Automated Deployment Protocols: Zero-Downtime Pipelines",
    author: "BT Systems",
    date: "May 10, 2024",
    readTime: "45 min read",
    category: "DevOps",
    content: (
      <>
        <p className="leading-[2.4] text-[16px]">
          Building resilient CI/CD workflows isn't just about moving code; it's
          about building a <strong>Safety Protocol</strong> that allows for
          aggressive iteration without production risk. At Boring Thinkers, we
          treat the pipeline as the final arbiter of quality, ensuring that
          software is not just "functional" but operationally elite.
        </p>

        <h2 className="leading-[2.4] text-[16px]">I. Blue-Green vs. Canary Rollouts</h2>
        <p className="leading-[2.4] text-[16px]">
          We utilize <strong>Canary Deployments</strong> for high-traffic
          software. By routing 5% of traffic to the new version, we monitor
          telemetry for error spikes. If the <strong>P99 latency</strong>{" "}
          exceeds our threshold, the system triggers an{" "}
          <strong>Automated Rollback</strong>
          via Kubernetes orchestration. This "Blast Radius" control is essential
          for maintaining high availability in the African logistics sector,
          where network volatility requires extreme backend resilience.
        </p>
        <p className="leading-[2.4] text-[16px]">
          The philosophy here is <strong>Immutable Infrastructure</strong>. We
          never patch a running server; we destroy the old container and spin up
          a new one from a verified image. This eliminates "Configuration Drift"
          and ensures that the environment where the code was tested is
          identical to the environment where the user interacts with it.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
          <div className="p-6 border border-gray-100 bg-white">
            <GitBranch size={24} className="mb-4 text-[#FFD000]" />
            <h4 className="mt-0 font-black uppercase leading-[2.4] text-[16px]">
              Trunk-Based Dev
            </h4>
            <p className="text-xs font-bold text-gray-400 leading-[2.4] text-[16px]">
              Short-lived feature branches to prevent merge hell and ensure
              continuous integration of code units. We favor high-frequency
              merges over "feature freeze" periods.
            </p>
          </div>
          <div className="p-6 border border-gray-100 bg-white">
            <ShieldCheck size={24} className="mb-4 text-[#FFD000]" />
            <h4 className="mt-0 font-black uppercase leading-[2.4] text-[16px]">
              Secrets Management
            </h4>
            <p className="text-xs font-bold text-gray-400 leading-[2.4] text-[16px]">
              Zero-trust architecture. No environment variables in plain text;
              everything is injected at runtime via encrypted vaults and
              ephemeral tokens.
            </p>
          </div>
        </div>

        <h2 className="leading-[2.4] text-[16px]">
          II. The Pre-Flight Checklist: Beyond Simple Tests
        </h2>
        <p className="leading-[2.4] text-[16px]">
          Every build must pass a <strong>Three-Tier Validation</strong>{" "}
          protocol before it is even considered for a staging environment. We
          believe that catching a bug in the pipeline costs pennies, while
          catching it in production costs reputations.
        </p>
        <ol className="text-gray-500 font-bold space-y-6 my-12 leading-[2.4] text-[16px]">
          <li>
            <strong>Static Analysis & AST Parsing:</strong> Beyond simple
            linting, we use abstract syntax tree (AST) parsing to enforce strict
            architectural standards. This prevents "Anti-Patterns"—such as
            direct database calls from the UI layer.
          </li>
          <li>
            <strong>Unit Validation & Mutation Testing:</strong> We target an
            85% Minimum Code Coverage, but we also employ{" "}
            <strong>Mutation Testing</strong> to ensure test suite
            effectiveness.
          </li>
          <li>
            <strong>Integration Synthesis & Chaos Simulation:</strong> We
            simulate real-world API latency and database contention within a
            Dockerized environment.
          </li>
        </ol>

        <h2 className="leading-[2.4] text-[16px]">
          III. Security Orchestration & DevSecOps
        </h2>
        <p className="leading-[2.4] text-[16px]">
          Security is not a final step; it is integrated into every git push.
          Our pipelines include <strong>SAST</strong> to scan for
          vulnerabilities and <strong>DAST</strong> to probe the running
          environment for common exploits. We also enforce{" "}
          <strong>Artifact Provenance</strong> to prevent Supply Chain Attacks.
        </p>

        <h2 className="leading-[2.4] text-[16px]">
          IV. Ephemeral Environments and Pull Request Previews
        </h2>
        <p className="leading-[2.4] text-[16px]">
          To eliminate the "It works on my machine" excuse, our CI/CD pipeline
          spawns a completely isolated, <strong>Ephemeral Environment</strong>
          for every Pull Request. Once the PR is closed or merged, the entire
          infrastructure stack is atomically destroyed.
        </p>

        <h2 className="mt-12 leading-[2.4] text-[16px]">
          V. Post-Deployment Observability & Self-Healing
        </h2>
        <p className="leading-[2.4] text-[16px]">
          Deployment is not the end. Our pipelines integrate directly with{" "}
          <strong>Prometheus and Grafana</strong>. We take this further with
          <strong>Self-Healing Infrastructure</strong> that triggers automated
          rollbacks based on real-time error thresholds.
        </p>

        <div className="mt-20 p-12 bg-[#050505] text-white border-l-[24px] border-[#FFD000]">
          <h4 className="font-black uppercase mb-6 text-2xl tracking-tighter leading-[2.4] text-[16px]">
            The BT Pipeline Standard
          </h4>
          <p className="text-gray-400 font-bold leading-[2.4] text-[16px]">
            A pipeline is not a tool; it is a philosophy. If a human has to
            manually click "Deploy," the system is flawed. True boring
            engineering is when the machine is more paranoid about quality than
            the engineer who wrote the code.
          </p>
        </div>
      </>
    ),
  },
  "database-indexing-strategies": {
    title: "The Mechanics of High-Speed Query Optimization",
    author: "BT Backend",
    date: "May 05, 2024",
    readTime: "90 min read",
    category: "Infrastructure",
    content: (
      <>
        <p className="lead leading-[2.4] text-[16px]">
          Latency is the silent killer of growth. In high-stakes environments
          like logistics and fintech, every millisecond spent waiting for a disk
          I/O operation is a potential loss of revenue. We dive deep into the
          binary structures that allow for <strong>Sub-10ms Queries</strong> on
          multi-million row tables.
        </p>

        <h2 className="leading-[2.4] text-[16px]">I. B-Tree vs. Hash Indexing Mechanics</h2>
        <p className="leading-[2.4] text-[16px]">
          At Boring Thinkers, we default to <strong>B-Tree Indexes</strong> for
          their versatility. A B-Tree maintains a balanced structure that allows
          the database to perform searches, sequential access, and range scans
          in logarithmic time.
        </p>
        <p className="leading-[2.4] text-[16px]">
          The magic of the B-Tree lies in its <strong>High Fan-out</strong>. A
          single 8KB page can point to hundreds of other pages. However, the
          true performance gain comes from <strong>Covering Indexes</strong>{" "}
          using the
          <code>INCLUDE</code> clause to store data directly within the index.
        </p>

        <pre className="my-8 leading-[2.4] text-[16px]">
          <div className="flex items-center gap-2 mb-4 text-[#FFD000]">
            <Database size={14} />
            <span className="text-[10px] font-black uppercase tracking-widest text-white">
              query_optimization.sql
            </span>
          </div>
          <code>{`CREATE INDEX idx_drivers_active_loc 
ON drivers(last_lat, last_lng) 
INCLUDE (driver_id, vehicle_type, battery_level) 
WHERE status = 'active' AND is_online = true;`}</code>
        </pre>

        <h2 className="leading-[2.4] text-[16px]">
          II. The Cardinality Rule & Composite Keys
        </h2>
        <p className="leading-[2.4] text-[16px]">
          Using <code>EXPLAIN ANALYZE</code>, we hunt for "Seq Scans"
          ruthlessly. To prevent this, we implement{" "}
          <strong>Composite Keys</strong>
          carefully ordered by <strong>Cardinality</strong>. The "Leading
          Column" rule is paramount: the most selective column must come first.
        </p>

        <h2 className="leading-[2.4] text-[16px]">
          III. The Trade-off: Write-Amplification
        </h2>
        <p className="leading-[2.4] text-[16px]">
          In write-heavy systems like the Pickars logistics engine, we use
          <strong>Partial Indexes</strong>. By indexing only the subset of data
          that is actually queried, we keep our indexes lean and our write
          latency low.
        </p>

        <h2 className="leading-[2.4] text-[16px]">IV. Vacuuming and Index Bloat</h2>
        <p className="leading-[2.4] text-[16px]">
          In relational databases like PostgreSQL, deleted rows cause{" "}
          <strong>Index Bloat</strong>. Our protocols include automated{" "}
          <strong>Autovacuum Tuning</strong> and monitoring "Fill Factor" to
          allow for "HOT" (Heap Only Tuple) updates.
        </p>

        <h2 className="leading-[2.4] text-[16px]">V. BRIN and GIN: Beyond the B-Tree</h2>
        <p className="leading-[2.4] text-[16px]">
          For massive time-series data, we utilize <strong>BRIN</strong> (Block
          Range Indexes). When dealing with JSONB data in Kindred, we deploy{" "}
          <strong>GIN</strong>
          (Generalized Inverted Indexes) for internal object searching.
        </p>

        <div className="my-16 p-10 border-4 border-[#050505] bg-[#FFD000]/5">
          <h4 className="font-black uppercase mb-4 flex items-center gap-2 leading-[2.4] text-[16px]">
            <AlertTriangle size={20} />
            BT Protocol: Index Audit
          </h4>
          <p className="text-[24px] leading-[2.4] text-[16px] text-gray-500 font-bold">
            Every 30 days, we run a "Stale Index Scan." Any index that hasn't
            been used in the last 720 hours is slated for deletion.
          </p>
        </div>

        <h2 className="leading-[2.4] text-[16px]">VI. The Mechanics of LSM-Trees</h2>
        <p className="leading-[2.4] text-[16px]">
          In our analytics engines, we swap B-Trees for{" "}
          <strong>LSM-Trees</strong>. LSM-Trees treat all writes as appends to
          an immutable log, turning random writes into sequential writes for
          superior NVMe performance.
        </p>

        <h2 className="leading-[2.4] text-[16px]">VII. Summary: The Sub-10ms Goal</h2>
        <p className="leading-[2.4] text-[16px]">
          Optimizing a database is about understanding hardware reality. We
          align our software structures with SSD/RAM physics to ensure retrieval
          paths are truly architected, not just incidental.
        </p>
      </>
    ),
  },
  "optimizing-react-native-performance": {
    title: "Achieving 60FPS: Advanced React Native Performance Tuning",
    author: "BT Mobile",
    date: "April 22, 2024",
    readTime: "25 min read",
    category: "React Native",
    content: (
      <>
        <p className="lead leading-[2.4] text-[16px]">
          Peak mobile performance isn't just about fast code; it's about{" "}
          <strong>UI Thread Management</strong> and eliminating the overhead of
          the JavaScript bridge.
        </p>

        <h2 className="leading-[2.4] text-[16px]">
          I. The JSI (JavaScript Interface) & The New Architecture
        </h2>
        <p className="leading-[2.4] text-[16px]">
          The historical bottleneck of React Native was the{" "}
          <strong>Bridge</strong>. By adopting the <strong>JSI</strong>, JS code
          can call native functions directly as if they were local methods,
          using <strong>TurboModules</strong>
          for lean initial heaps.
        </p>

        <div className="p-8 border border-[#050505] my-12 bg-white">
          <h4 className="mt-0 flex items-center gap-3 leading-[2.4] text-[16px]">
            <Activity size={20} className="text-[#FFD000]" />
            Performance Audit Checklist
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-bold text-gray-500 mt-4 leading-[2.4] text-[16px]">
            <li>• Use FlashList for Cell Recycling</li>
            <li>• Offload Worklets to UI Thread</li>
            <li>• Optimize Image Caching Strategy</li>
            <li>• Reduce Bridge Traffic via JSI</li>
            <li>• Hermes Engine GC Tuning</li>
            <li>• LeakCanary Integration</li>
          </ul>
        </div>

        <h2 className="leading-[2.4] text-[16px]">
          II. Worklets and the Reanimated Execution Model
        </h2>
        <p className="leading-[2.4] text-[16px]">
          We solve frame drops using <strong>Worklets</strong>. These are
          transpiled to run on the <strong>UI Thread</strong>, ensuring math is
          executed at 60Hz or 120Hz regardless of main thread activity.
        </p>

        <h2 className="leading-[2.4] text-[16px]">
          III. Memory Management & The Hermes Engine
        </h2>
        <p className="leading-[2.4] text-[16px]">
          We leverage the <strong>Hermes Engine</strong>'s{" "}
          <strong>GenGC</strong>
          to minimize "Stop the World" events. For lists, we use{" "}
          <strong>FlashList</strong>
          to <strong>recycle</strong> native views rather than unmounting them.
        </p>

        <pre className="leading-[2.4] text-[16px]">
          <div className="flex items-center gap-2 mb-4 text-[#FFD000]">
            <Cpu size={14} />
            <span className="text-[10px] font-black uppercase tracking-widest">
              optimization_logic.ts
            </span>
          </div>
          <code>{`// Example of a UI Thread Worklet
const onGestureEvent = useAnimatedGestureHandler({
  onActive: (event, ctx) => {
    'worklet'; 
    ctx.translateX.value = event.translationX;
  },
});`}</code>
        </pre>

        <h2 className="leading-[2.4] text-[16px]">
          IV. Asset Pipeline & Image Optimization
        </h2>
        <p className="leading-[2.4] text-[16px]">
          Images are major RAM contributors. Our protocol involves:
        </p>
        <ol className="font-bold text-gray-500 space-y-4 my-8 leading-[2.4] text-[16px]">
          <li>
            <strong>WebP Encoding:</strong> 30% better compression than PNG.
          </li>
          <li>
            <strong>Dynamic Sizing:</strong> Resizing buffers via Cloudinary.
          </li>
          <li>
            <strong>FastImage Caching:</strong> Native-layer proactive caching.
          </li>
        </ol>

        <h2 className="leading-[2.4] text-[16px]">
          V. The Interaction Manager & Task Prioritization
        </h2>
        <p className="leading-[2.4] text-[16px]">
          We wrap all non-essential updates in{" "}
          <code>runAfterInteractions()</code>. This ensures navigation
          animations or ripples take priority over state updates.
        </p>

        <div className="my-10 p-8 bg-gray-900 text-white border-l-4 border-[#FFD000]">
          <h4 className="text-[#FFD000] uppercase mb-4 leading-[2.4] text-[16px]">
            Engineering Note: The 16ms Rule
          </h4>
          <p className="text-[24px] leading-[2.4] text-[16px] opacity-80">
            Every frame has a budget of exactly 16.67ms. In a world of 120Hz
            ProMotion displays, that budget shrinks to <strong>8ms</strong>.
          </p>
        </div>

        <h2 className="leading-[2.4] text-[16px]">VI. Native Modules vs. Expo Modules</h2>
        <p className="leading-[2.4] text-[16px]">
          For heavy computation, we drop down into{" "}
          <strong>C++ / Swift / Kotlin</strong>. Native Modules harness the full
          power of GCD and ThreadPools for multi-threaded processing.
        </p>

        <h2 className="leading-[2.4] text-[16px]">
          VII. Conclusion: Performance is a Feature
        </h2>
        <p className="leading-[2.4] text-[16px]">
          Optimization is integrated into our{" "}
          <strong>Definition of Done</strong>. We are no longer building "web
          apps in a shell"—we are building high-performance native software.
        </p>
      </>
    ),
  },
};

const BlogDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const post = useMemo(() => {
    return BLOG_CONTENT[id as keyof typeof BLOG_CONTENT];
  }, [id]);

  if (!post)
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center">
          <Search size={40} className="mb-4 text-gray-200" />
          <h2 className="font-black uppercase tracking-tighter text-2xl">
            Log ID Not Found
          </h2>
          <Link
            to="/blog"
            className="mt-4 text-[10px] font-black uppercase tracking-widest text-[#FFD000]"
          >
            Return to Log
          </Link>
        </div>
      </div>
    );

  return (
    <section className="bg-white min-h-screen text-[#050505] pt-44 pb-32 px-6 md:px-20 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Header Protocol Bar */}
        <div className="flex justify-between items-center mb-16">
          <Link
            to="/blog"
            className="group flex items-center gap-3 border border-gray-100 px-6 py-3 rounded-full hover:border-[#050505] transition-all"
          >
            <ArrowLeft
              size={16}
              className="text-gray-400 group-hover:text-[#050505] group-hover:-translate-x-1 transition-transform"
            />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 group-hover:text-[#050505]">
              Back
            </span>
          </Link>
          <div className="hidden md:flex gap-1">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-1.5 h-1.5 bg-[#FFD000]" />
            ))}
          </div>
        </div>

        {/* Title Section */}
        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-[#FFD000] text-[10px] font-black uppercase tracking-[0.6em]">
              {post.category}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-8xl font-black text-[#050505] leading-[0.9] tracking-[-0.06em] uppercase mb-12"
          >
            {post.title}
          </motion.h1>

          {/* Technical Info Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-y-6 py-10 border-y border-gray-100"
          >
            {[
              { icon: CalendarDays, label: "PUBLISHED", text: post.date },
            //   { icon: Clock, label: "READ TIME", text: post.readTime },
              { icon: User, label: "AUTHOR", text: post.author },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-2">
                <span className="text-[9px] font-black text-gray-300 tracking-[0.3em]">
                  {item.label}
                </span>
                <div className="flex items-center gap-2">
                  <item.icon size={14} className="text-[#FFD000]" />
                  <span className="text-[11px] font-black uppercase tracking-[0.1em] text-[#050505]">
                    {item.text}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </header>

        {/* Article Body */}
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="prose prose-lg max-w-none 
          prose-headings:uppercase prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-[#050505]
          prose-p:text-gray-500 prose-p:leading-[2.4] text-[16px] prose-p:font-bold
          prose-strong:text-[#050505] prose-strong:font-black
          prose-code:text-[#050505] prose-code:bg-gray-100 prose-code:px-2 prose-code:py-0.5 prose-code:rounded prose-code:font-bold
          prose-pre:bg-[#050505] prose-pre:text-white prose-pre:rounded-none prose-pre:border-l-4 prose-pre:border-[#FFD000] prose-pre:p-8"
        >
          {post.content}
        </motion.article>
      </div>
    </section>
  );
};

export default BlogDetailsPage;

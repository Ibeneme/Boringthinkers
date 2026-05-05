import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight,  } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  "System Architecture",
  "React Native",
  "Infrastructure",
  "DevOps",
  "API Design",
];

const blogPosts = [
  {
    id: "solid-principles-startups",
    category: "Architecture",
    date: "May 15, 2024",
    author: "BT Engineering",
    title: "Why SOLID Principles Are Not Boring For Startups",
    excerpt:
      "Skipping clean architecture early is technical debt on high interest. We analyze why structural integrity is essential for rapid scaling without code rot.",
  },
  {
    id: "ci-cd-pipelines-efficiency",
    category: "DevOps",
    date: "May 10, 2024",
    author: "BT Systems",
    title: "Automated Deployment Protocols: Zero-Downtime Pipelines",
    excerpt:
      "Building resilient CI/CD workflows that handle automated testing, container orchestration, and instant rollback capabilities for production environments.",
  },
  {
    id: "database-indexing-strategies",
    category: "Infrastructure",
    date: "May 05, 2024",
    author: "BT Backend",
    title: "The Mechanics of High-Speed Query Optimization",
    excerpt:
      "Deep dive into B-Tree indexing, composite keys, and query execution plans. How we reduce latency in data-intensive software systems.",
  },
  {
    id: "optimizing-react-native-performance",
    category: "React Native",
    date: "April 22, 2024",
    author: "BT Mobile",
    title: "Achieving 60FPS: Advanced React Native Performance Tuning",
    excerpt:
      "Investigating bridge traffic, JSI (JavaScript Interface), and UI thread management for peak mobile performance in complex applications.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const BlogComponent: React.FC = () => {
  return (
    <section className="bg-white min-h-screen text-[#050505] pt-40 pb-24 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-24 border-b border-gray-100 pb-16">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-[2px] bg-[#FFD000]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
              Technical Documentation // Log
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10vw] md:text-[8rem] font-black tracking-[-0.07em] leading-[0.8] uppercase"
          >
            THE <span className="text-gray-200">CORE</span> <br />
            INSIGHTS.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-10 max-w-2xl text-base font-bold uppercase tracking-tight text-gray-400 leading-tight"
          >
            Engineering standards, deployment strategies, and architectural
            blueprints for modern software infrastructure.
          </motion.p>
        </div>

        {/* Filter System */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-2 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className="px-4 py-2 border border-gray-100 text-[#050505] text-[10px] font-black uppercase tracking-[0.15em] hover:bg-[#FFD000] hover:border-[#FFD000] transition-all"
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Blog Post List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col"
        >
          {blogPosts.map((post, index) => (
            <Link
              to={`/blog/${post.id}`}
              key={post.id}
              className="group relative"
            >
              <motion.div
                variants={itemVariants}
                className="flex flex-col md:flex-row items-start md:items-center py-10 border-b border-gray-100 group-hover:border-[#050505] transition-colors duration-300"
              >
                {/* Index Number */}
                <div className="text-4xl md:text-7xl font-black text-gray-100 group-hover:text-[#FFD000] transition-colors w-24 md:w-32 mb-4 md:mb-0">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Content Block */}
                <div className="flex-1 md:pr-10">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-[9px] font-black bg-gray-100 px-2 py-1 uppercase tracking-widest text-gray-500 group-hover:bg-[#FFD000] group-hover:text-black transition-colors">
                      {post.category}
                    </span>
                    <span className="text-[9px] font-bold text-gray-300 uppercase tracking-tighter">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none group-hover:pl-4 transition-all duration-300">
                    {post.title}
                  </h3>
                </div>

                {/* Excerpt */}
                <div className="flex-[1.3] pt-4 md:pt-0">
                  <p className="text-gray-400 text-sm md:text-base font-bold leading-snug group-hover:text-[#050505] transition-colors max-w-lg">
                    {post.excerpt}
                  </p>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex ml-4 opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all">
                  <ArrowUpRight size={32} />
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* Bottom Callout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex items-center gap-4"
        >
          <div className="flex gap-1">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-1.5 h-1.5 bg-[#FFD000]" />
            ))}
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">
            End of Current Log // Database Synced
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogComponent;

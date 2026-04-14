import React from "react";
import { motion } from "framer-motion";
import { FiTarget, FiEye, FiActivity, FiGlobe } from "react-icons/fi";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function AboutBlock() {
  const cards = [
    {
      title: "Our Mission",
      content: "To empower students with technical expertise, leadership skills, and innovative thinking through workshops, technical talks, and hands-on projects.",
      icon: <FiTarget />,
      color: "from-blue-500 to-cyan-500",
      shadow: "group-hover:shadow-blue-500/20"
    },
    {
      title: "Our Vision",
      content: "To build a dynamic technical community that nurtures creativity, ethical values, and lifelong learning for future-ready engineers.",
      icon: <FiEye />,
      color: "from-purple-500 to-pink-500",
      shadow: "group-hover:shadow-purple-500/20"
    },
    {
      title: "What We Do",
      content: "We organize hackathons, seminars, coding sessions, research activities, and industry interactions to provide real-world exposure.",
      icon: <FiActivity />,
      color: "from-emerald-500 to-teal-500",
      shadow: "group-hover:shadow-emerald-500/20"
    },
    {
      title: "Why IEEE VGU",
      content: "Being part of IEEE VGU means learning beyond classrooms, connecting globally, and contributing to technology for the betterment of society.",
      icon: <FiGlobe />,
      color: "from-orange-500 to-red-500",
      shadow: "group-hover:shadow-orange-500/20"
    },
  ];

  return (
    <section
      /* 🔥 FIX: py-28 को हटाकर pt-10 pb-20 कर दिया है ताकि अलाइनमेंट एकदम ऊपर से हो और फालतू गैप ना रहे। Light Mode को प्योर व्हाइट (bg-white) रखा है। */
      className="relative pt-10 pb-20 lg:pt-12 lg:pb-28 overflow-hidden bg-white dark:bg-[#020617] transition-colors duration-500"
    >
      {/* ================= BACKGROUND GLOWS (Dark Mode Only) ================= */}
      <div className="hidden dark:block absolute top-[10%] left-[5%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="hidden dark:block absolute bottom-[10%] right-[5%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block px-5 py-2 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-400 text-sm font-bold tracking-widest uppercase mb-6 shadow-sm"
        >
          Our Purpose
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-blue-400"
        >
          Mission & <span className="text-blue-600 dark:text-indigo-400">Vision</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16 text-lg md:text-xl font-medium text-slate-600 dark:text-gray-400 leading-relaxed"
        >
          The IEEE Student Branch at Vivekananda Global University focuses on
          innovation, collaboration, and shaping future technology leaders.
        </motion.p>

        {/* ================= CARDS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.03, y: -8 }}
              className={`
                group relative p-8 lg:p-10 rounded-[2rem] transition-all duration-300 overflow-hidden
                
                /* LIGHT MODE CARD */
                bg-white border border-gray-200 shadow-lg shadow-gray-200/50
                hover:border-blue-200
                
                /* DARK MODE CARD */
                dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 dark:shadow-none
                dark:hover:border-white/20
                
                ${card.shadow}
              `}
            >
              {/* Card Hover Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start">
                
                {/* Icon Box */}
                <div className={`shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-tr ${card.color} flex items-center justify-center text-3xl text-white shadow-lg transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110`}>
                  {card.icon}
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="text-2xl font-black mb-3 text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="leading-relaxed text-slate-600 dark:text-gray-400 font-medium text-[15px] lg:text-base">
                    {card.content}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
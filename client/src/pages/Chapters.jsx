import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { FiCpu, FiStar, FiRadio, FiArrowRight } from "react-icons/fi";

const chapters = [
  {
    title: "Computer Society",
    desc: "Focused on software development, Artificial Intelligence, web technologies, and competitive programming.",
    color: "from-blue-500 to-cyan-500",
    icon: <FiCpu />,
    path: "/chapters/computer-society",
    shadow: "hover:shadow-blue-500/25",
  },
  {
    title: "Women in Engineering",
    desc: "Empowering female leadership, fostering innovation, and driving inclusion in the tech industry.",
    color: "from-rose-500 to-orange-500",
    icon: <FiStar />,
    path: "/chapters/wie",
    shadow: "hover:shadow-orange-500/25",
  },
  {
    title: "MTT-S Chapter",
    desc: "Advancing global knowledge in RF, microwave systems, and cutting-edge electronics technologies.",
    color: "from-emerald-500 to-teal-500",
    icon: <FiRadio />,
    path: "/chapters/mtt",
    shadow: "hover:shadow-emerald-500/25",
  },
];

export default function Chapters() {
  const navigate = useNavigate();

  return (
    <>
      {/* 🔥 FIX: pt-28 को हटाकर pt-8 lg:pt-12 कर दिया है */}
      <div className="relative min-h-screen bg-slate-50 text-slate-900 dark:bg-[#020617] dark:text-white transition-colors duration-500 overflow-hidden pt-8 lg:pt-12 pb-20">
        
        {/* ================= BACKGROUND GLOWS ================= */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-400/20 dark:bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          
          {/* ================= HEADER SECTION ================= */}
          {/* 🔥 FIX: mb-20 को कम करके mb-16 किया */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-5 py-2 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-400 text-sm font-bold tracking-widest uppercase mb-6 shadow-sm"
            >
              Explore Our Communities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700 dark:from-white dark:to-blue-400"
            >
              Student Chapters
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl leading-relaxed text-slate-600 dark:text-gray-400"
            >
              Join our specialized IEEE Student Chapters at VGU. We promote innovation, leadership, technical excellence, and collaborative learning across various engineering domains.
            </motion.p>
          </div>

          {/* ================= CARDS GRID ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
            {chapters.map((chapter, i) => (
              <motion.div
                key={i}
                onClick={() => navigate(chapter.path)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className={`w-full cursor-pointer group p-8 md:p-10 rounded-[2.5rem] bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl ${chapter.shadow} relative overflow-hidden flex flex-col h-full`}
              >
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>

                <div className={`h-20 w-20 mb-8 rounded-2xl bg-gradient-to-tr ${chapter.color} text-white flex items-center justify-center text-4xl shadow-lg transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110`}>
                  {chapter.icon}
                </div>

                <h2 className="text-2xl font-black mb-4 text-slate-800 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {chapter.title}
                </h2>

                <p className="text-slate-600 dark:text-gray-400 leading-relaxed font-medium mb-8 flex-grow">
                  {chapter.desc}
                </p>

                <div className="flex items-center text-sm font-black tracking-widest uppercase text-blue-600 dark:text-blue-400 mt-auto">
                  Explore Chapter 
                  <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                </div>

                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1.5 w-0 rounded-t-full bg-gradient-to-r ${chapter.color} transition-all duration-500 group-hover:w-1/2`}></span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}
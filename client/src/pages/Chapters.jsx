import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const chapters = [
  {
    title: "Computer Society",
    desc: "Focused on software development, AI, web technologies and competitive programming.",
    color: "from-blue-500 to-indigo-500",
    icon: "💻",
    path: "/chapters/computer-society",
  },
  {
    title: "WIE",
    desc: "Women in Engineering society empowering leadership, innovation and inclusion.",
    color: "from-rose-500 to-orange-500",
    icon: "🌸",
    path: "/chapters/wie",
  },
  {
    title: "MTT",
    desc: "Advancing knowledge in RF, microwave systems, electronics technologies.",
    color: "from-green-500 to-emerald-500",
    icon: "🛡️",
    path: "/chapters/mtt",
  },
];

export default function Chapters() {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="
          pt-0 min-h-screen px-6
          bg-white text-gray-900
          dark:bg-[#020617] dark:text-white
          transition-colors duration-300
        "
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            text-4xl font-bold text-center mb-4
            text-blue-800 dark:text-white
          "
        >
          Student Chapters
        </motion.h1>

        <p
          className="
            text-center max-w-2xl mx-auto mb-16
            text-blue-700/80 dark:text-gray-400
          "
        >
          Explore our IEEE Student Chapters at VGU that promote innovation,
          leadership, technical excellence and collaborative learning.
        </p>

        {/* Cards Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
          {chapters.map((s, i) => (
            <motion.div
              key={i}
              onClick={() => navigate(s.path)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.08 }}
              className="w-full max-w-sm cursor-pointer"
            >
              <div
                className="
                  group relative
                  bg-blue-50 border border-blue-100
                  dark:bg-white/5 dark:border-white/10
                  p-8 rounded-2xl text-center
                  transition-all duration-300
                  hover:shadow-[0_20px_50px_rgba(59,130,246,0.25)]
                  dark:hover:shadow-[0_20px_50px_rgba(99,102,241,0.35)]
                "
              >
                {/* Icon */}
                <div
                  className={`
                    h-16 w-16 mx-auto mb-5 rounded-full
                    bg-gradient-to-tr ${s.color}
                    flex items-center justify-center
                    text-2xl
                    transition-transform duration-300
                    group-hover:rotate-6 group-hover:scale-110
                  `}
                >
                  {s.icon}
                </div>

                {/* Title */}
                <h2 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-400">
                  {s.title}
                </h2>

                {/* Description */}
                <p className="text-sm text-blue-700/70 dark:text-gray-400 dark:group-hover:text-gray-300 transition">
                  {s.desc}
                </p>

                {/* Hover underline */}
                <span
                  className={`
                    absolute bottom-0 left-1/2 -translate-x-1/2
                    h-1 w-0 rounded-full
                    bg-gradient-to-r ${s.color}
                    transition-all duration-300
                    group-hover:w-28
                  `}
                ></span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

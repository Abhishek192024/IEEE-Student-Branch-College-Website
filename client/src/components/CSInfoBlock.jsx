import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { FiUsers, FiCalendar, FiBookOpen, FiMic } from "react-icons/fi";

export default function CSInfoBlock() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-50px", // 🔥 UPDATE: Margin एडजस्ट किया ताकि एनीमेशन जल्दी शुरू हो
  });

  const stats = [
    {
      value: 12,
      label: "Student Members",
      desc: "Active IEEE student members across domains",
      icon: <FiUsers />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      value: 10,
      label: "Events & Workshops",
      desc: "Seminars, talks, workshops & competitions",
      icon: <FiCalendar />,
      color: "from-purple-500 to-pink-500"
    },
    {
      value: 3,
      label: "Technical Chapters",
      desc: "Societies like CS, WIE, MTT and more",
      icon: <FiBookOpen />,
      color: "from-emerald-500 to-teal-500"
    },
    {
      value: 10,
      label: "Speakers & Mentors",
      desc: "Industry, research and academic experts",
      icon: <FiMic />,
      color: "from-orange-500 to-red-500"
    },
  ];

  return (
    <section
      ref={sectionRef}
      /* 🔥 FIX: bg-slate-50 को bg-white कर दिया है और pt-8 से टेक्स्ट को एकदम ऊपर कर दिया है */
      className="relative pt-10 pb-20 lg:pt-12 lg:pb-28 overflow-hidden bg-white dark:bg-[#020617] transition-colors duration-500"
    >
      {/* ================= BACKGROUND GLOWS (Only for Dark Mode now, Light mode is pure white) ================= */}
      <div className="hidden dark:block absolute top-[-10%] left-[10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="hidden dark:block absolute bottom-[-10%] right-[10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">

        {/* ================= HEADING SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-block px-5 py-2 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-400 text-sm font-bold tracking-widest uppercase mb-6 shadow-sm"
        >
          Our Impact
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700 dark:from-white dark:to-blue-400"
        >
          IEEE Student Branch
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl md:text-2xl font-bold mb-6 text-slate-800 dark:text-blue-300"
        >
          Vivekananda Global University (VGU)
          <span className="block mt-2 text-base md:text-lg text-blue-600 dark:text-indigo-400 font-semibold italic">
            "Advancing technology for the benefit of humanity."
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-4xl mx-auto mb-16 lg:mb-20 leading-relaxed text-slate-600 dark:text-gray-400 text-base md:text-lg font-medium"
        >
          IEEE (Institute of Electrical and Electronics Engineers) is the world’s
          largest professional technical organization. The IEEE Student Branch at VGU provides a
          platform for students to learn, innovate, collaborate, and lead through
          technical activities, professional development programs, workshops,
          seminars, and expert talks.
        </motion.p>

        {/* ================= STAT CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.15,
                ease: "easeOut",
              }}
              whileHover={{ y: -10 }}
              /* 🔥 FIX: Pure white background hone की वजह से कार्ड्स को bg-white और थोड़ा मजबूत बॉर्डर/शैडो दिया है ताकि वो साफ़ दिखें */
              className="group relative p-8 rounded-[2rem] text-center bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/15 overflow-hidden shadow-lg shadow-gray-200/50 dark:shadow-none"
            >
              {/* Card Hover Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col items-center">
                
                {/* Icon Box */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl text-white mb-6 bg-gradient-to-tr ${item.color} shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                  {item.icon}
                </div>

                {/* Number (CountUp) */}
                <h3 className="text-5xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-gray-300">
                  {isInView ? (
                    <CountUp
                      start={0}
                      end={item.value}
                      duration={2.5}
                      useEasing={true}
                    />
                  ) : "0"}
                  <span className="text-blue-600 dark:text-blue-500 ml-1">+</span>
                </h3>

                {/* Label & Description */}
                <p className="text-lg font-bold text-slate-800 dark:text-white mb-2">
                  {item.label}
                </p>

                <p className="text-sm leading-relaxed text-slate-500 dark:text-gray-400 font-medium">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
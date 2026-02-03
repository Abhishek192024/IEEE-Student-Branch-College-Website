import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";

/**
 * CSInfoBlock
 * ----------------------------------
 * IEEE CSE Section
 * Light Mode  → white + blue cards
 * Dark Mode   → deep blue bg + glass cards
 * Hover       → lift + glow
 */
export default function CSInfoBlock() {

  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-120px",
  });

  const stats = [
    {
      value: 500,
      label: "Members",
      desc: "Active student members across CS domains",
    },
    {
      value: 50,
      label: "Technical Events",
      desc: "Workshops, hackathons & seminars",
    },
    {
      value: 4,
      label: "Active Societies",
      desc: "Specialized IEEE technical groups",
    },
    {
      value: 10,
      label: "Mentors",
      desc: "Industry & academic experts",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="
        relative py-36 overflow-hidden

        /* LIGHT MODE */
        bg-gradient-to-b from-white via-blue-50/40 to-white
        text-gray-900

        /* DARK MODE */
        dark:bg-gradient-to-b
        dark:from-[#020617]
        dark:via-[#020617]/95
        dark:to-[#020617]

        transition-colors duration-300
      "
    >
      {/* Decorative glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        {/* ================= HEADING ================= */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="
            text-4xl md:text-6xl font-extrabold mb-4
            text-blue-800
            dark:text-white
          "
        >
          Computer Science & Engineering
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.15 }}
          className="mb-3 text-blue-600 dark:text-gray-400"
        >
          IEEE Student Branch
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.25 }}
          className="text-xl font-medium mb-6 text-blue-700 dark:text-blue-400"
        >
          Advancing computing technology for the benefit of humanity.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="
            max-w-3xl mx-auto mb-24 leading-relaxed
            text-blue-700/80
            dark:text-gray-400
          "
        >
          As part of the IEEE Student Branch, the Computer Science & Engineering
          community promotes innovation in software development, artificial
          intelligence, data science, cybersecurity, and emerging technologies.
          Our goal is to empower students with technical excellence, leadership
          skills, and a strong professional network while contributing to IEEE’s
          global mission of advancing technology for humanity.
        </motion.p>

        {/* ================= STAT CARDS ================= */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          style={{ perspective: "1400px" }}
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: 0.15 + index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{ y: -18, scale: 1.12 }}
              className="
                relative rounded-3xl p-10 text-left cursor-pointer
                transition-all duration-300

                /* LIGHT MODE CARD */
                bg-white
                border border-blue-200/60
                shadow-[0_10px_30px_rgba(59,130,246,0.15)]
                hover:shadow-[0_25px_70px_rgba(59,130,246,0.35)]

                /* DARK MODE CARD (FIXED – NO WHITE) */
                dark:bg-gradient-to-br
                dark:from-[#0b1224]
                dark:to-[#020617]
                dark:border dark:border-white/10
                dark:shadow-[0_12px_35px_rgba(0,0,0,0.7)]
                dark:hover:shadow-[0_30px_90px_rgba(0,102,255,0.45)]
              "
              style={{
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-3xl bg-blue-500/5 opacity-0 hover:opacity-100 transition duration-300 pointer-events-none" />

              <div style={{ transform: "translateZ(35px)" }}>
                <h3 className="text-5xl font-extrabold mb-2 text-blue-700 dark:text-[#1e7bff]">
                  {isInView && (
                    <CountUp
                      start={0}
                      end={item.value}
                      duration={1.4}
                      scrollSpyOnce
                    />
                  )}
                  +
                </h3>

                <p className="text-lg font-semibold text-blue-800 dark:text-gray-200">
                  {item.label}
                </p>

                <p className="text-sm mt-2 leading-relaxed text-blue-700/70 dark:text-gray-400">
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

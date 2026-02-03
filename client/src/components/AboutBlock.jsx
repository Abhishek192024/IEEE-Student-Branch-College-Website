import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
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
      content:
        "To empower students with technical expertise, leadership skills, and innovative thinking through workshops, technical talks, and hands-on projects.",
    },
    {
      title: "Our Vision",
      content:
        "To build a dynamic technical community that nurtures creativity, ethical values, and lifelong learning for future-ready engineers.",
    },
    {
      title: "What We Do",
      content:
        "We organize hackathons, seminars, coding sessions, research activities, and industry interactions to provide real-world exposure.",
    },
    {
      title: "Why IEEE VGU",
      content:
        "Being part of IEEE VGU means learning beyond classrooms, connecting globally, and contributing to technology for the betterment of society.",
    },
  ];

  return (
    <section
      className="
        relative py-28 overflow-hidden transition-colors duration-500

        /* LIGHT MODE */
        bg-gradient-to-b from-white via-blue-50 to-white
        text-blue-900

        /* DARK MODE */
        dark:bg-gradient-to-b dark:from-[#050b1e] dark:to-[#020617]
        dark:text-white
      "
    >
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* ================= HEADING ================= */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            text-4xl md:text-5xl font-bold mb-6
            text-blue-800 dark:text-white
          "
        >
          Mission & <span className="text-blue-600 dark:text-blue-500">Vision</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="
            max-w-3xl mx-auto mb-16 text-lg
            text-blue-700/80 dark:text-gray-400
          "
        >
          IEEE Student Branch at Vivekananda Global University focuses on
          innovation, collaboration, and shaping future technology leaders.
        </motion.p>

        {/* ================= CARDS ================= */}
        <div className="grid md:grid-cols-2 gap-10 text-left">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="
                p-8 rounded-2xl transition-all duration-300 shadow-lg

                /* LIGHT MODE CARD */
                bg-white
                border border-blue-200
                hover:border-blue-400
                hover:shadow-xl

                /* DARK MODE CARD */
                dark:bg-white/5
                dark:backdrop-blur-xl
                dark:border dark:border-white/10
                dark:hover:border-blue-500/50
              "
            >
              <h3
                className="
                  text-2xl font-semibold mb-4
                  text-blue-700 dark:text-blue-400
                "
              >
                {card.title}
              </h3>

              <p
                className="
                  leading-relaxed
                  text-blue-700/80 dark:text-gray-300
                "
              >
                {card.content}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

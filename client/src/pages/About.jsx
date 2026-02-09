import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <div
        className="
          mt-10 min-h-screen px-6 md:px-10
          bg-white text-gray-900
          dark:bg-[#020617] dark:text-white
          transition-colors duration-300
        "
      >
        {/* ================= HERO ================= */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            text-4xl md:text-5xl font-bold text-center mb-6
            text-blue-800 dark:text-white
          "
        >
          About IEEE VGU
        </motion.h1>

        <p
          className="
            text-center max-w-3xl mx-auto mb-16
            text-blue-700/80 dark:text-gray-400
          "
        >
          IEEE Student Branch at Vivekananda Global University fosters innovation,
          leadership, technical excellence and professional growth among students.
        </p>

        {/* ================= MISSION / VISION / VALUES ================= */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
          {[
            {
              title: "Mission",
              text: "To empower students with cutting-edge technical knowledge, innovation and leadership skills.",
              color: "from-blue-500 to-indigo-500",
              icon: "🎯",
            },
            {
              title: "Vision",
              text: "To build a globally connected student community driving impactful technological solutions.",
              color: "from-purple-500 to-pink-500",
              icon: "👁️",
            },
            {
              title: "Values",
              text: "Innovation, collaboration, inclusivity, professionalism and ethical responsibility.",
              color: "from-green-500 to-emerald-500",
              icon: "💡",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="
                group p-8 rounded-2xl text-center
                bg-white border border-blue-100
                dark:bg-white/5 dark:border-white/10
                transition-all duration-300
                hover:shadow-[0_25px_60px_rgba(59,130,246,0.25)]
                dark:hover:shadow-[0_25px_60px_rgba(99,102,241,0.35)]
              "
            >
              <div
                className={`
                  h-16 w-16 mx-auto mb-4 rounded-full
                  bg-gradient-to-tr ${item.color}
                  flex items-center justify-center text-2xl
                  transition-transform duration-300
                  group-hover:rotate-6
                `}
              >
                {item.icon}
              </div>

              <h2 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-400">
                {item.title}
              </h2>

              <p className="text-sm leading-relaxed text-blue-700/70 dark:text-gray-400">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ================= WHY IEEE @ VGU ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            max-w-5xl mx-auto mb-24 rounded-2xl p-10 text-center
            bg-blue-50 border border-blue-100
            dark:bg-white/5 dark:border-white/10
          "
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-indigo-400">
            Why IEEE @ VGU?
          </h2>

          <p className="leading-relaxed text-blue-700/80 dark:text-gray-400">
            IEEE VGU provides students with exposure to global IEEE resources,
            hands-on workshops, hackathons, expert talks, leadership opportunities
            and real-world technical experience — preparing them for industry and research careers.
          </p>
        </motion.div>

        {/* ================= GOOGLE MAP SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-24"
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-800 dark:text-white">
            Locate Us
          </h2>

          <p className="text-center mb-8 text-blue-700/80 dark:text-gray-400">
            Vivekananda Global University, Jaipur, Rajasthan
          </p>

          {/* Clickable Map Card */}
          <a
            href="https://www.google.com/maps?q=Vivekananda+Global+University+Jaipur"
            target="_blank"
            rel="noopener noreferrer"
            className="
              block group relative overflow-hidden rounded-2xl
              border border-blue-100 dark:border-white/10
              hover:shadow-[0_25px_60px_rgba(59,130,246,0.25)]
              dark:hover:shadow-[0_25px_60px_rgba(34,197,94,0.35)]
              transition-all duration-300
            "
          >
            <iframe
              title="VGU Location"
              src="https://www.google.com/maps?q=Vivekananda+Global+University+Jaipur&output=embed"
              className="w-full h-[350px] grayscale group-hover:grayscale-0 transition duration-500"
              loading="lazy"
            ></iframe>

            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />

            <div className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Open in Google Maps
            </div>
          </a>
        </motion.div>
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

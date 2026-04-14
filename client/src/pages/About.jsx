import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { FiTarget, FiEye, FiHeart, FiMapPin, FiAward } from "react-icons/fi";

export default function About() {
  return (
    <>
      {/* 🔥 FIX: pt-20 को हटाकर pt-8 lg:pt-12 कर दिया है */}
      <div className="relative min-h-screen bg-slate-50 text-slate-900 dark:bg-[#020617] dark:text-white transition-colors duration-500 overflow-hidden pt-8 lg:pt-12">
        
        {/* ================= BACKGROUND GLOWS ================= */}
        <div className="absolute top-0 left-[-10%] w-[50%] h-[50%] bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-400/20 dark:bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          
          {/* ================= HERO SECTION ================= */}
          {/* 🔥 FIX: pt-10 हटा दिया और गैप कम कर दिया */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-5 py-2 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-400 text-sm font-bold tracking-widest uppercase mb-6 shadow-sm"
            >
              Discover Our Roots
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700 dark:from-white dark:to-blue-400"
            >
              About IEEE VGU
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg md:text-xl leading-relaxed text-slate-600 dark:text-gray-400"
            >
              The IEEE Student Branch at Vivekananda Global University fosters a culture of innovation, leadership, technical excellence, and professional growth. We are a community of creators, thinkers, and tech enthusiasts.
            </motion.p>
          </div>

          {/* ================= MISSION / VISION / VALUES ================= */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {[
              {
                title: "Our Mission",
                text: "To empower students with cutting-edge technical knowledge, foster innovation, and build strong leadership skills for the future.",
                color: "from-blue-500 to-cyan-500",
                icon: <FiTarget />,
                shadow: "hover:shadow-blue-500/25",
              },
              {
                title: "Our Vision",
                text: "To build a globally connected student community driving impactful technological solutions that benefit humanity and society.",
                color: "from-purple-500 to-pink-500",
                icon: <FiEye />,
                shadow: "hover:shadow-purple-500/25",
              },
              {
                title: "Core Values",
                text: "Innovation, collaboration, inclusivity, professionalism, and unwavering ethical responsibility in everything we do.",
                color: "from-green-500 to-emerald-500",
                icon: <FiHeart />,
                shadow: "hover:shadow-green-500/25",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className={`group p-8 rounded-[2rem] text-center bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-xl transition-all duration-300 hover:shadow-2xl ${item.shadow}`}
              >
                <div className={`h-20 w-20 mx-auto mb-6 rounded-2xl bg-gradient-to-tr ${item.color} text-white flex items-center justify-center text-3xl shadow-lg transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110`}>
                  {item.icon}
                </div>
                <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">{item.title}</h2>
                <p className="text-slate-600 dark:text-gray-400 leading-relaxed font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* ================= WHY IEEE @ VGU ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto mb-24 rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 shadow-2xl shadow-blue-900/20"
          >
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[150%] bg-white/10 rotate-12 pointer-events-none"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[150%] bg-black/10 -rotate-12 pointer-events-none"></div>
            <div className="relative z-10">
              <div className="mx-auto w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-3xl text-white mb-6 border border-white/30">
                <FiAward />
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-6 text-white drop-shadow-md">Why IEEE @ VGU?</h2>
              <p className="text-lg md:text-xl leading-relaxed text-blue-100 max-w-4xl mx-auto font-medium">
                IEEE VGU provides students with exposure to global resources, hands-on workshops, hackathons, expert talks, and real-world technical experience. We don't just teach technology; we prepare you for industry and research leadership.
              </p>
            </div>
          </motion.div>

          {/* ================= GOOGLE MAP SECTION ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto mb-24"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-800 dark:text-white flex items-center justify-center gap-3">
                <FiMapPin className="text-blue-600 dark:text-blue-500" /> Locate Us
              </h2>
              <p className="text-slate-600 dark:text-gray-400 font-medium">
                Vivekananda Global University, Sector 36, NRI Road, Jagatpura, Jaipur, Rajasthan
              </p>
            </div>

            <div className="relative p-2 md:p-4 bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-[2rem] backdrop-blur-md shadow-xl group">
              <a href="https://maps.app.goo.gl/YourActualVGUMapLink" target="_blank" rel="noopener noreferrer" className="block relative overflow-hidden rounded-[1.5rem]">
                <iframe
                  title="VGU Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.877283914118!2d75.8638481150434!3d26.822818983166133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc83c65c58a5f%3A0x6b107e335b2e53!2sVivekananda%20Global%20University%2C%20Jaipur!5e0!3m2!1sen!2sin!4v1689000000000!5m2!1sen!2sin"
                  className="w-full h-[350px] md:h-[450px] grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg shadow-blue-600/30 transition-transform hover:scale-105 flex items-center gap-2">
                  <FiMapPin /> Open in Maps
                </div>
              </a>
            </div>
          </motion.div>
          
        </div>
      </div>
      <Footer />
    </>
  );
}
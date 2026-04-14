import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiLinkedin, FiMail, FiPhone, FiUsers } from "react-icons/fi";
import API from "../api";
import Footer from "../components/Footer";

export default function Team() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const { data } = await API.get("/team");
        setTeam(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching team:", err);
        setLoading(false);
      }
    };
    fetchTeam();
  }, []);

  const advisors = team.filter((m) => m.category === "advisor");
  const coreTeam = team.filter((m) => m.category === "core");
  const supportive = team.filter((m) => m.category === "supportive");

  // ================= REUSABLE MEMBER CARD =================
  const MemberCard = ({ m, index }) => {
    const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(m.name)}&background=eff6ff&color=1d4ed8&size=150&bold=true`;

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        whileHover={{ y: -10 }}
        className="relative group p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden text-center shadow-lg shadow-gray-200/50 dark:shadow-none"
      >
        {/* Hover Glow Effect */}
        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/0 via-blue-500/5 dark:via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center">
          
          {/* LinkedIn Icon (Top Right) */}
          {m.linkedin && (
            <a 
              href={m.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="absolute -top-2 -right-2 bg-blue-50 dark:bg-white/10 p-2.5 rounded-full shadow-sm hover:scale-110 hover:-translate-y-1 transition-all duration-300 hover:bg-blue-600 hover:text-white text-blue-600 dark:text-blue-400 group-hover:shadow-blue-500/30"
              title="LinkedIn Profile"
            >
              <FiLinkedin className="text-lg" />
            </a>
          )}

          {/* Member Image with Animated Ring */}
          <div className="relative w-32 h-32 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-blue-500/50 dark:group-hover:border-blue-400/50 transition-colors duration-500 scale-105"></div>
            <div className="w-full h-full rounded-full overflow-hidden ring-4 ring-slate-50 dark:ring-[#020617] shadow-inner bg-slate-100 dark:bg-white/5">
              <img 
                src={m.image && m.image.startsWith("http") ? m.image : avatarUrl} 
                alt={m.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
              />
            </div>
          </div>

          {/* Name & Role */}
          <h3 className="text-xl font-black text-slate-800 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {m.name}
          </h3>
          <p className="text-sm font-bold text-blue-600 dark:text-indigo-400 mb-6 uppercase tracking-wider">
            {m.role}
          </p>

          {/* Contact Info */}
          <div className="w-full space-y-3 pt-5 border-t border-gray-100 dark:border-white/10">
            {m.email && (
              <a href={`mailto:${m.email}`} className="flex items-center justify-center gap-2.5 text-sm font-medium text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link truncate px-2">
                <FiMail className="shrink-0 text-blue-500" />
                <span className="truncate group-hover/link:underline decoration-blue-500/30 underline-offset-4">{m.email}</span>
              </a>
            )}
            {m.phone && (
              <a href={`tel:${m.phone}`} className="flex items-center justify-center gap-2.5 text-sm font-medium text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link">
                <FiPhone className="shrink-0 text-blue-500" />
                <span className="group-hover/link:underline decoration-blue-500/30 underline-offset-4">{m.phone}</span>
              </a>
            )}
          </div>

        </div>
      </motion.div>
    );
  };

  // ================= REUSABLE SECTION COMPONENT =================
  const Section = ({ title, data }) => {
    if (data.length === 0) return null;
    return (
      <div className="mb-24 lg:mb-32">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 dark:text-white tracking-tight mb-4 text-center">
            {title}
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-2">
          {data.map((m, index) => (
            <MemberCard key={m._id} m={m} index={index} />
          ))}
        </div>
      </div>
    );
  };

  // ================= LOADING STATE =================
  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex flex-col items-center justify-center bg-slate-50 dark:bg-[#020617] text-blue-600 dark:text-blue-400 transition-colors duration-500">
        <div className="w-12 h-12 border-4 border-blue-200 dark:border-blue-900 border-t-blue-600 dark:border-t-blue-500 rounded-full animate-spin mb-4"></div>
        <p className="font-bold tracking-widest uppercase text-sm">Loading Team...</p>
      </div>
    );
  }

  return (
    <>
      {/* 🔥 FIX: pt-32 हटाकर pt-10 lg:pt-16 किया ताकि अलाइनमेंट एकदम ऊपर से शुरू हो */}
      <div className="relative min-h-screen pt-10 lg:pt-16 pb-20 px-6 bg-slate-50 dark:bg-[#020617] transition-colors duration-500 overflow-hidden">
        
        {/* BACKGROUND GLOWS (Dark Mode Only) */}
        <div className="hidden dark:block absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
        <div className="hidden dark:block absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          
          {/* ================= HEADER SECTION ================= */}
          <header className="text-center mb-20 lg:mb-28">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-400 text-sm font-bold tracking-widest uppercase mb-6 shadow-sm"
            >
              <FiUsers className="text-lg" /> The People Behind
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700 dark:from-white dark:to-blue-400"
            >
              Meet Our Team
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed"
            >
              The IEEE Student Branch at Vivekananda Global University is driven by a passionate group of students and faculty members dedicated to technological excellence and innovation.
            </motion.p>
          </header>

          {/* ================= TEAM SECTIONS ================= */}
          <Section title="Faculty Advisors" data={advisors} />
          <Section title="Core Team" data={coreTeam} />
          <Section title="Supportive Members" data={supportive} />
          
        </div>
      </div>
      <Footer />
    </>
  );
}
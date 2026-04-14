import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiMonitor, FiStar, FiRadio, FiCalendar, FiInbox } from "react-icons/fi";
import API from "../api"; 
import EventCard from "../components/EventCard";
import Footer from "../components/Footer";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/events")
      .then(res => {
        setEvents(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching global events:", err);
        setLoading(false);
      });
  }, []);

  // Category Configuration (Icon & Color styling)
  const categoryConfig = {
    computer: {
      icon: <FiMonitor />,
      colorClass: "text-blue-600 dark:text-blue-400",
      bgClass: "bg-blue-100 dark:bg-blue-500/10",
    },
    wie: {
      icon: <FiStar />,
      colorClass: "text-rose-500 dark:text-rose-400",
      bgClass: "bg-rose-100 dark:bg-rose-500/10",
    },
    mtt: {
      icon: <FiRadio />,
      colorClass: "text-emerald-600 dark:text-emerald-400",
      bgClass: "bg-emerald-100 dark:bg-emerald-500/10",
    }
  };

  const renderSection = (title, category) => {
    const categoryEvents = events.filter(e => e.category === category);
    if (categoryEvents.length === 0) return null;

    const config = categoryConfig[category];

    return (
      <motion.div 
        key={category}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="mb-24"
      >
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-10 pl-2 md:pl-0 border-l-4 md:border-l-0 border-blue-500 md:justify-center">
          <div className={`hidden md:flex items-center justify-center w-12 h-12 rounded-2xl ${config.bgClass} ${config.colorClass} text-2xl shadow-sm`}>
            {config.icon}
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 dark:text-white tracking-tight">
            {title}
          </h2>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {categoryEvents.map((e, index) => (
            <motion.div
              key={e._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <EventCard e={e} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <>
      <div className="relative min-h-screen pt-10 lg:pt-16 pb-20 overflow-hidden bg-slate-50 dark:bg-[#020617] transition-colors duration-500">
        
        {/* ================= BACKGROUND GLOWS ================= */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-400/20 dark:bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          
          {/* ================= HEADER SECTION ================= */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-400 text-sm font-bold tracking-widest uppercase mb-6 shadow-sm"
            >
              <FiCalendar className="text-lg" /> Experience & Learn
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700 dark:from-white dark:to-blue-400"
            >
              Our Events
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl leading-relaxed text-slate-600 dark:text-gray-400"
            >
              Discover the latest workshops, seminars, hackathons, and activities organized by our Student Branch and various technical chapters.
            </motion.p>
          </div>

          {/* ================= CONTENT SECTION ================= */}
          {loading ? (
            // Loading State
            <div className="flex flex-col items-center justify-center py-20 text-blue-600 dark:text-blue-400">
              <div className="w-12 h-12 border-4 border-blue-200 dark:border-blue-900 border-t-blue-600 dark:border-t-blue-500 rounded-full animate-spin mb-4"></div>
              <p className="font-bold tracking-widest uppercase text-sm">Loading Events...</p>
            </div>
          ) : events.length > 0 ? (
            // Render Categories
            <>
              {renderSection("Computer Society Events", "computer")}
              {renderSection("WIE Events", "wie")}
              {renderSection("MTT-S Events", "mtt")}
            </>
          ) : (
            // Empty State (No Events Found)
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-[3rem] shadow-xl backdrop-blur-sm max-w-2xl mx-auto"
            >
              <FiInbox className="text-6xl text-slate-300 dark:text-slate-600 mx-auto mb-6" />
              <h2 className="text-2xl font-black text-slate-800 dark:text-white mb-3">No Events Scheduled Yet</h2>
              <p className="text-slate-500 dark:text-gray-400 font-medium">We are planning something exciting. Please check back later!</p>
            </motion.div>
          )}

        </div>
      </div>
      
      <Footer />
    </>
  );
}
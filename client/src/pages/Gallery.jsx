import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiImage, FiCameraOff, FiCamera } from "react-icons/fi";
import api from "../api";
import Footer from "../components/Footer";

export default function Gallery() {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await api.get("/gallery");
        const data = Array.isArray(res.data) ? res.data : [];
        setGallery(data);
      } catch (error) {
        console.log("❌ Gallery fetch error:", error.response?.data || error.message);
        setGallery([]);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  return (
    <>
      <div className="relative min-h-screen pt-10 lg:pt-16 pb-20 overflow-hidden bg-slate-50 dark:bg-[#020617] transition-colors duration-500">
        
        {/* ================= BACKGROUND GLOWS ================= */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-400/20 dark:bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          {/* ================= HEADER SECTION ================= */}
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-400 text-sm font-bold tracking-widest uppercase mb-6 shadow-sm"
            >
              <FiCamera className="text-lg" /> Moments & Memories
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700 dark:from-white dark:to-blue-400"
            >
              Photo Gallery
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl leading-relaxed text-slate-600 dark:text-gray-400"
            >
              A glimpse into the vibrant life, events, and achievements of the IEEE VGU Student Branch.
            </motion.p>
          </div>

          {/* ================= CONTENT SECTION ================= */}
          {loading ? (
            // Loading State
            <div className="flex flex-col items-center justify-center py-20 text-blue-600 dark:text-blue-400">
              <div className="w-12 h-12 border-4 border-blue-200 dark:border-blue-900 border-t-blue-600 dark:border-t-blue-500 rounded-full animate-spin mb-4"></div>
              <p className="font-bold tracking-widest uppercase text-sm">Loading Gallery...</p>
            </div>
          ) : gallery.length > 0 ? (
            // Photo Grid
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {gallery.map((g, index) => (
                <motion.div
                  key={g._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group relative overflow-hidden rounded-[2rem] bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 cursor-pointer"
                >
                  {/* Image Container */}
                  <div className="relative h-72 w-full overflow-hidden">
                    <img
                      src={g.image}
                      alt={g.title || "Gallery Event"}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                  </div>

                  {/* Gradient Overlay & Title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
                    <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      <div className="flex items-center gap-2 mb-2 text-blue-400">
                        <FiImage />
                      </div>
                      <p className="text-xl font-bold text-white leading-snug">
                        {g.title || "IEEE VGU Event"}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            // Empty State (No Photos)
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-24 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-[3rem] shadow-xl backdrop-blur-sm max-w-2xl mx-auto"
            >
              <FiCameraOff className="text-6xl text-slate-300 dark:text-slate-600 mx-auto mb-6" />
              <h2 className="text-2xl font-black text-slate-800 dark:text-white mb-3">No Photos Uploaded Yet</h2>
              <p className="text-slate-500 dark:text-gray-400 font-medium">Memories are being curated. Please check back later!</p>
            </motion.div>
          )}

        </div>
      </div>
      
      <Footer />
    </>
  );
}
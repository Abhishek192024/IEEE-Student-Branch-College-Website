import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft, FiDownload, FiImage, FiTag } from "react-icons/fi";
import API from "../api";
import Footer from "../components/Footer";

export default function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const { data } = await API.get(`/events/${id}`);
        setEvent(data);
      } catch (err) {
        console.error("Error fetching event:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, [id]);

  // ================= LOADING STATE =================
  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex flex-col items-center justify-center bg-slate-50 dark:bg-[#020617] text-blue-600 dark:text-blue-400 transition-colors duration-500">
        <div className="w-12 h-12 border-4 border-blue-200 dark:border-blue-900 border-t-blue-600 dark:border-t-blue-500 rounded-full animate-spin mb-4"></div>
        <p className="font-bold tracking-widest uppercase text-sm">Loading Event...</p>
      </div>
    );
  }

  // ================= NOT FOUND STATE =================
  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-[#020617] text-slate-800 dark:text-white transition-colors duration-500">
        <h1 className="text-4xl font-black mb-4">Event Not Found</h1>
        <button onClick={() => navigate("/events")} className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 transition">
          <FiArrowLeft /> Back to Events
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="relative min-h-screen pt-8 lg:pt-12 pb-20 px-6 md:px-10 bg-slate-50 text-slate-900 dark:bg-[#020617] dark:text-white transition-colors duration-500 overflow-hidden">
        
        {/* ================= BACKGROUND GLOWS ================= */}
        <div className="hidden dark:block absolute top-[-5%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
        <div className="hidden dark:block absolute bottom-[-5%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          
          {/* ================= BACK BUTTON ================= */}
          <div className="flex justify-start mb-8 lg:mb-10">
            <button 
              onClick={() => navigate(-1)} 
              className="group flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            >
              <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" /> 
              Back to Events
            </button>
          </div>

          {/* ================= EVENT POSTER ================= */}
          {event.poster && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full mb-12 lg:mb-16 rounded-[2rem] p-3 md:p-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-xl backdrop-blur-md"
            >
              <div className="relative w-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-black/20">
                <img 
                  src={event.poster} 
                  alt={event.title} 
                  className="w-full max-h-[60vh] object-contain mx-auto rounded-2xl"
                />
              </div>
            </motion.div>
          )}

          {/* ================= TITLE & DESCRIPTION ================= */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16 lg:mb-24 text-center"
          >
            <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 rounded-full text-xs font-black tracking-widest uppercase shadow-sm">
              <FiTag /> {event.tag}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-indigo-600 dark:from-white dark:to-blue-400">
              {event.title}
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-slate-600 dark:text-gray-300 whitespace-pre-line max-w-4xl mx-auto font-medium">
              {event.desc || event.description}
            </p>
          </motion.div>

          {/* ================= PDF REPORT DOWNLOAD CTA ================= */}
          {event.pdfReport && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] p-10 md:p-14 text-center shadow-2xl shadow-blue-900/20 mb-20 md:mb-28 text-white group"
            >
              {/* Abstract decorative circles inside the CTA */}
              <div className="absolute top-[-50%] left-[-10%] w-[50%] h-[200%] bg-white/10 rotate-12 pointer-events-none transition-transform duration-700 group-hover:rotate-45"></div>
              <div className="absolute bottom-[-50%] right-[-10%] w-[40%] h-[200%] bg-black/10 -rotate-12 pointer-events-none transition-transform duration-700 group-hover:-rotate-45"></div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-3xl mb-6 border border-white/30 shadow-lg">
                  <FiDownload />
                </div>
                <h3 className="text-3xl md:text-4xl font-black mb-4 drop-shadow-md">Event Report</h3>
                <p className="text-blue-100 font-medium max-w-lg mx-auto mb-8 text-base md:text-lg">
                  Dive deeper into the insights! Download the detailed summary and outcomes of this event for your reference.
                </p>
                <a
                  href={event.pdfReport} 
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-blue-700 hover:bg-slate-50 font-black uppercase tracking-wide text-sm rounded-2xl transition-all shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] flex items-center gap-3 active:scale-95"
                >
                  <FiDownload className="text-xl" /> Download PDF Report
                </a>
              </div>
            </motion.div>
          )}

          {/* ================= EVENT GALLERY HIGHLIGHTS ================= */}
          {event.images && event.images.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col items-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black text-slate-800 dark:text-white tracking-tight mb-4 text-center">
                  Event Highlights
                </h2>
                <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {event.images.map((imgUrl, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="relative overflow-hidden rounded-[2rem] shadow-md hover:shadow-2xl transition-all duration-500 group border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 cursor-pointer"
                  >
                    <img 
                      src={imgUrl} 
                      alt={`Highlight ${index + 1}`} 
                      className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Dark gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                      <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white font-bold text-sm flex items-center gap-2 border border-white/30 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <FiImage /> View Image
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

        </div>
      </div>
      <Footer />
    </>
  );
}
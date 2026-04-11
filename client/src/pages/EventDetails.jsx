import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API, { BASE_URL } from "../api"; 
import Footer from "../components/Footer";
import { FaFilePdf, FaArrowLeft } from "react-icons/fa"; 

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
        setLoading(false);
      } catch (err) {
        console.error("Error fetching event:", err);
        setLoading(false);
      }
    };
    fetchEvent();
  }, [id]);

  if (loading) return <div className="min-h-screen flex items-center justify-center dark:bg-[#020617] dark:text-white">Loading...</div>;
  if (!event) return <div className="min-h-screen flex items-center justify-center dark:bg-[#020617] dark:text-white">Event not found!</div>;

  return (
    <>
      <div className="min-h-screen pt-24 px-6 md:px-10 bg-white text-gray-900 dark:bg-[#020617] dark:text-white transition-colors duration-300 pb-20">
        <div className="max-w-5xl mx-auto">
          
          {/* Back Button remains aligned to start for usability, or centered if you prefer */}
          <div className="flex justify-start mb-8">
            <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline">
              <FaArrowLeft /> Back to Events
            </button>
          </div>

          {/* 1. EVENT POSTER */}
          {event.poster && (
            <div className="w-full mb-10 overflow-hidden rounded-2xl shadow-xl bg-gray-100 dark:bg-white/5 flex justify-center">
              <img 
                src={`${BASE_URL}${event.poster}`} 
                alt={event.title} 
                className="w-full max-h-[550px] object-contain mx-auto"
              />
            </div>
          )}

          {/* TITLE & DESC - CENTERED */}
          <div className="mb-12 text-center">
            <span className="inline-block mb-4 px-3 py-1 bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 rounded-full text-sm font-semibold tracking-wide">
              {event.tag}
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-blue-800 dark:text-white">
              {event.title}
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line max-w-4xl mx-auto">
              {event.desc || event.description}
            </p>
          </div>

          {/* 2. PDF REPORT DOWNLOAD ROW - CENTERED */}
          {event.pdfReport && (
            <div className="bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/10 p-8 rounded-3xl flex flex-col items-center text-center justify-center mb-16 shadow-sm hover:shadow-md transition">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-300 mb-2">Event Report</h3>
                <p className="text-sm text-blue-700/70 dark:text-gray-400 max-w-md mx-auto">
                  Download the detailed summary and outcomes of this event for your reference.
                </p>
              </div>
              
              <a
                href={`${BASE_URL}${event.pdfReport}`} 
                download
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-md hover:shadow-lg flex items-center gap-3 whitespace-nowrap active:scale-95"
              >
                <FaFilePdf className="text-2xl" /> Download PDF Report
              </a>
            </div>
          )}

          {/* 3. EVENT GALLERY IMAGES - CENTERED TITLE */}
          {event.images && event.images.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold mb-10 text-blue-800 dark:text-white text-center">
                Event Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {event.images.map((imgUrl, index) => (
                  <div key={index} className="overflow-hidden rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 group border border-gray-200 dark:border-white/10 cursor-pointer bg-gray-50">
                    <img 
                      src={`${BASE_URL}${imgUrl}`} 
                      alt={`Highlight ${index + 1}`} 
                      className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
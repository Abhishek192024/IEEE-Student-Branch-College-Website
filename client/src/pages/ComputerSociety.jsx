import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

// Images
import image01 from "../assets/image001.png"; // Baldev Singh
import image0 from "../assets/image003.png";  // Prashant Sharma
import image03 from "../assets/image2.png";   // Lakshya Sharma
import image5 from "../assets/image11.png";   // Shreeansh Ayush

export default function ComputerSociety() {

  // ✅ EVENTS STATE (API se aayega)
  const [events, setEvents] = useState([]);

  // ✅ Fetch events from backend (Auto update every 5 sec)
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/events");
        setEvents(res.data);
      } catch (error) {
        console.log("Events fetch error:", error);
      }
    };

    fetchEvents(); // first time load

    // 🔁 auto update every 5 sec
    const interval = setInterval(fetchEvents, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pt-10 px-6 bg-white text-gray-900 dark:bg-[#020617] dark:text-white transition-colors duration-300">

      {/* ================= HEADER ================= */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 dark:text-white mb-4">
          IEEE – Computer Society
        </h1>
        <p className="max-w-3xl mx-auto text-blue-700/80 dark:text-gray-400">
          Empowering students through innovation, leadership, research and
          industry-ready technical excellence.
        </p>
      </div>

      {/* ================= OBJECTIVE ================= */}
      <h2 className="text-3xl font-bold text-center mb-14 text-blue-800 dark:text-white">
        Objective of Chapter
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto mb-28">
        {[
          { text: "Enhance knowledge through Conferences, Seminars, Tutorials & Workshops.", icon: "🎓" },
          { text: "Provide a forum for Paper Presentations, Quiz, Competitions & Exhibitions.", icon: "📝" },
          { text: "Enable interaction with academicians, researchers & experts.", icon: "🤝" },
          { text: "Connect students with industry professionals & career paths.", icon: "🚀" },
        ].map((obj, i) => (
          <div
            key={i}
            className="group bg-blue-50 dark:bg-white/5 border dark:border-white/10 p-6 rounded-2xl flex gap-4 items-start hover:-translate-y-2 transition-all shadow-sm hover:shadow-xl"
          >
            <div className="text-3xl">{obj.icon}</div>
            <p className="text-blue-700/80 dark:text-gray-300 group-hover:text-blue-800 dark:group-hover:text-white transition">
              {obj.text}
            </p>
          </div>
        ))}
      </div>

      {/* ================= FACULTY ADVISORS ================= */}
      <h2 className="text-3xl font-bold text-center mb-14 text-blue-800 dark:text-white">
        Faculty Advisors
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto mb-28">
        {[
          {
            name: "Prof. (Dr.) Baldev Singh",
            role: "Faculty Advisor",
            img: image01,
            email: "baldev_singh@vgu.ac.in",
            phone: "9785643441",
            linkedin: "https://www.linkedin.com/in/dr-baldev-singh-77406b1a9/",
          },
          {
            name: "Dr. Prashant Sharma",
            role: "Faculty Advisor",
            img: image0,
            email: "prashant.sharma@vgu.ac.in",
            phone: "9784025875",
            linkedin: "https://www.linkedin.com/in/dr-prashant-sharma-b9783618",
          },
        ].map((m, i) => (
          <div
            key={i}
            className="relative group bg-blue-50 dark:bg-white/5 border dark:border-white/10 rounded-2xl p-8 text-center hover:-translate-y-3 transition-all shadow-sm hover:shadow-xl"
          >
            <a
              href={m.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:scale-110 transition"
            >
              <FaLinkedin className="text-[#0A66C2] text-xl" />
            </a>

            <div className="h-28 w-28 mx-auto rounded-full overflow-hidden mb-5 ring-4 ring-indigo-500/40 shadow-lg">
              <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
            </div>

            <h3 className="text-xl font-semibold">{m.name}</h3>
            <p className="text-blue-600 dark:text-gray-400 mb-3">{m.role}</p>

            <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <p className="flex items-center justify-center gap-2">
                <FaEnvelope /> {m.email}
              </p>
              <p className="flex items-center justify-center gap-2">
                <FaPhoneAlt /> {m.phone}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ================= STUDENT COORDINATORS ================= */}
      <h2 className="text-3xl font-bold text-center mb-14 text-blue-800 dark:text-white">
        Student Coordinators
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto mb-28">
        {[
          {
            name: "Lakshya Sharma",
            role: "Student Coordinator",
            img: image03,
            email: "lakshyasharma1316@gmail.com",
            phone: "8949411277",
            linkedin: "https://www.linkedin.com/in/lakshyasharma1316",
          },
          {
            name: "Shreeansh Ayush",
            role: "Student Coordinator",
            img: image5,
            email: "shreeanshayush@gmail.com",
            phone: "8809076286",
            linkedin: "https://www.linkedin.com/in/shreeansh-ayush-429452281",
          },
        ].map((m, i) => (
          <div
            key={i}
            className="relative group bg-blue-50 dark:bg-white/5 border dark:border-white/10 rounded-2xl p-8 text-center hover:-translate-y-3 transition-all shadow-sm hover:shadow-xl"
          >
            <a
              href={m.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:scale-110 transition"
            >
              <FaLinkedin className="text-[#0A66C2] text-xl" />
            </a>

            <div className="h-28 w-28 mx-auto rounded-full overflow-hidden mb-5 ring-4 ring-indigo-500/40 shadow-lg">
              <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
            </div>

            <h3 className="text-xl font-semibold">{m.name}</h3>
            <p className="text-blue-600 dark:text-gray-400 mb-3">{m.role}</p>

            <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <p className="flex items-center justify-center gap-2">
                <FaEnvelope /> {m.email}
              </p>
              <p className="flex items-center justify-center gap-2">
                <FaPhoneAlt /> {m.phone}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ================= COMPUTER SOCIETY EVENTS ================= */}
      <h2 className="text-3xl font-bold text-center mb-14 text-blue-800 dark:text-white">
        Computer Society Events
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-28">
        {events
          .filter((e) => e.category === "computer")
          .map((e) => (
            <div
              key={e._id}
              className="group rounded-xl p-6 cursor-pointer bg-blue-50 border border-blue-100 dark:bg-white/5 dark:border-white/10 transition-all duration-300 hover:-translate-y-3 hover:scale-[1.03]"
            >
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400">
                {e.title}
              </h3>

              <p className="mt-2 text-blue-700/70 dark:text-gray-400">
                {e.description}
              </p>

              <span className="inline-block mt-4 px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
                {e.tag}
              </span>
            </div>
          ))}
      </div>

    </div>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

// Images
import image004 from "../assets/image004.png";   // Mayuri Katara
import image4 from "../assets/image4.png";        // Manyata Sharma
import image3 from "../assets/image3.png";        // Prasanta Pandey

export default function WIE() {

  // ✅ EVENTS STATE (API se aayega)
  const [events, setEvents] = useState([]);

  // ✅ Fetch events from backend (Auto update every 5 sec)
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get("https://vgu-ieee-student-branch.onrender.com/api/events");
        setEvents(res.data);
      } catch (error) {
        console.log("Events fetch error:", error);
      }
    };

    fetchEvents(); // first load

    // 🔁 auto refresh
    const interval = setInterval(fetchEvents, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen mt-10 pt-0 px-6 bg-white text-gray-900 dark:bg-[#020617] dark:text-white transition-colors duration-300">

      {/* ================= HEADER ================= */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 dark:text-white mb-4">
          IEEE – Women in Engineering (WIE)
        </h1>
        <p className="max-w-3xl mx-auto text-blue-700/80 dark:text-gray-400">
          Empowering women engineers through leadership, innovation and
          professional excellence.
        </p>
      </div>

      {/* ================= OBJECTIVE ================= */}
      <h2 className="text-3xl font-bold text-center mb-14 text-blue-800 dark:text-white">
        Objective of Chapter
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto mb-28">
        {[
          { text: "Encourage women participation in engineering and technology.", icon: "🌸" },
          { text: "Provide leadership and professional growth opportunities.", icon: "👩‍💼" },
          { text: "Create awareness about women-centric technical initiatives.", icon: "📢" },
          { text: "Build a strong network of women engineers and mentors.", icon: "🤝" },
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

<div className="grid grid-cols-1 gap-10 max-w-5xl mx-auto mb-28 place-items-center">
  {[
    {
      name: "Mayuri Katara",
      role: "Faculty Advisor",
      img: image004,
      email: "mayuree.katara@vgu.ac.in",
      phone: "9587087442",
      linkedin: "https://www.linkedin.com/in/mayuri-katara-6850a0192/",
    },
  ].map((m, i) => (
    <div
      key={i}
      className="relative w-full max-w-md group bg-blue-50 dark:bg-white/5 border dark:border-white/10 rounded-2xl p-8 text-center hover:-translate-y-3 transition-all shadow-sm hover:shadow-xl"
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
            name: "Manyata Sharma",
            role: "Student Coordinator",
            img: image4,
            email: "manyatasharma576@gmail.com",
            phone: "9407281351",
            linkedin: "https://www.linkedin.com/in/manyata-sharma-318754286",
          },
          {
            name: "Prasanta Pandey",
            role: "Student Coordinator",
            img: image3,
            email: "prasantapandey1607@gmail.com",
            phone: "7790922616",
            linkedin: "https://www.linkedin.com/in/prasantapandey16",
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

      {/* ================= WIE EVENTS ================= */}
      {/* ================= WIE EVENTS ================= */}
    <h2 className="text-3xl font-bold text-center mb-14 text-blue-800 dark:text-white">
      WIE Events
    </h2>

    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-28">
      {events
        .filter((e) => e.category === "wie")
        .map((e) => {
          const styles = {
            blue: {
              card: "bg-blue-50 border-blue-100 dark:bg-white/5 dark:border-white/10",
              title: "text-blue-700 dark:text-blue-400 group-hover:text-blue-500",
              desc: "text-blue-700/70 dark:text-gray-400 group-hover:text-blue-700 dark:group-hover:text-gray-300",
              tag: "bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 group-hover:bg-blue-500 group-hover:text-white",
              shadow: "hover:shadow-[0_20px_50px_rgba(59,130,246,0.25)]",
            },
            purple: {
              card: "bg-purple-50 border-purple-100 dark:bg-white/5 dark:border-white/10",
              title: "text-purple-700 dark:text-purple-400 group-hover:text-purple-500",
              desc: "text-purple-700/70 dark:text-gray-400 group-hover:text-purple-700 dark:group-hover:text-gray-300",
              tag: "bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400 group-hover:bg-purple-500 group-hover:text-white",
              shadow: "hover:shadow-[0_20px_50px_rgba(168,85,247,0.25)]",
            },
            green: {
              card: "bg-green-50 border-green-100 dark:bg-white/5 dark:border-white/10",
              title: "text-green-700 dark:text-green-400 group-hover:text-green-500",
              desc: "text-green-700/70 dark:text-gray-400 group-hover:text-green-700 dark:group-hover:text-gray-300",
              tag: "bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-400 group-hover:bg-green-500 group-hover:text-white",
              shadow: "hover:shadow-[0_20px_50px_rgba(34,197,94,0.25)]",
            },
            rose: {
              card: "bg-rose-50 border-rose-100 dark:bg-white/5 dark:border-white/10",
              title: "text-rose-700 dark:text-rose-400 group-hover:text-rose-500",
              desc: "text-rose-700/70 dark:text-gray-400 group-hover:text-rose-700 dark:group-hover:text-gray-300",
              tag: "bg-rose-100 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400 group-hover:bg-rose-500 group-hover:text-white",
              shadow: "hover:shadow-[0_20px_50px_rgba(244,63,94,0.25)]",
            },
            emerald: {
              card: "bg-emerald-50 border-emerald-100 dark:bg-white/5 dark:border-white/10",
              title: "text-emerald-700 dark:text-emerald-400 group-hover:text-emerald-500",
              desc: "text-emerald-700/70 dark:text-gray-400 group-hover:text-emerald-700 dark:group-hover:text-gray-300",
              tag: "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white",
              shadow: "hover:shadow-[0_20px_50px_rgba(16,185,129,0.25)]",
            },
          };

          // ✅ default blue
          const c = styles[e.color] || styles.blue;

          return (
            <div
              key={e._id}
              className={`
                group rounded-xl p-6 cursor-pointer border
                transition-all duration-300 ease-out
                hover:-translate-y-3 hover:scale-[1.03]
                ${c.card}
                ${c.shadow}
              `}
            >
              <h3 className={`text-xl font-semibold transition-all duration-300 ${c.title}`}>
                {e.title}
              </h3>

              <p className={`mt-2 transition-all duration-300 ${c.desc}`}>
                {e.description}
              </p>

              <span
                className={`
                  inline-block mt-4 px-3 py-1 text-xs font-semibold rounded-full
                  transition-all duration-300
                  ${c.tag}
                `}
              >
                {e.tag}
              </span>
            </div>
          );
        })}
    </div>


    </div>
  );
}

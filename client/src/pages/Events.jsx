import React, { useEffect, useState } from "react";
import API from "../api"; // 🔥 Localhost/Live URL ko handle karne ke liye apna API instance
import EventCard from "../components/EventCard";
import Footer from "../components/Footer";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // 🔥 Purane onrender link ki jagah ab seedha API.get use kar rahe hain
    API.get("/events")
      .then(res => setEvents(res.data))
      .catch(err => console.error("Error fetching global events:", err));
  }, []);

  const renderSection = (title, category) => {
    // Agar is category mein koi event nahi hai, toh section render mat karo
    const categoryEvents = events.filter(e => e.category === category);
    if (categoryEvents.length === 0) return null;

    return (
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-800 dark:text-white">
          {title}
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {categoryEvents.map(e => <EventCard key={e._id} e={e} />)}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="min-h-screen pt-24 bg-white text-gray-900 dark:bg-[#020617] dark:text-white transition-colors duration-300 pb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-blue-800 dark:text-white">
          Our Events
        </h1>
        <p className="text-center max-w-2xl mx-auto mb-16 text-blue-700/80 dark:text-gray-400 px-4">
          Discover the latest workshops, seminars, and activities organized by our Student Branch and various chapters.
        </p>

        {renderSection("Computer Society Events", "computer")}
        {renderSection("WIE Events", "wie")}
        {renderSection("MTT Events", "mtt")}
      </div>
      <Footer />
    </>
  );
}
import React from "react";
import { eventsData } from "../data/eventsData";
import EventCard from "../components/EventCard";

export default function Events() {
  const renderSection = (title, category) => (
    <>
      <h2 className="text-3xl font-bold mt-20 mb-8 text-center text-blue-800 dark:text-white">
        {title}
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {eventsData
          .filter((e) => e.category === category)
          .map((e, i) => (
            <EventCard key={i} e={e} />
          ))}
      </div>
    </>
  );

  return (
    <div className="min-h-screen pt-0 px-6 bg-white text-gray-900 dark:bg-[#020617] dark:text-white">
      <h1 className="text-4xl font-bold text-center text-blue-800 dark:text-white">
        Events
      </h1>

      <p className="mb-12 text-center max-w-2xl mx-auto text-blue-700/80 dark:text-gray-300">
        Explore workshops, hackathons, seminars and chapter-wise activities.
      </p>

      {renderSection("Computer Society Events", "computer")}
      {renderSection("WIE Events", "wie")}
      {renderSection("MTT Events", "mtt")}
    </div>
  );
}


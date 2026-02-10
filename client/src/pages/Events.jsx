import React, { useEffect, useState } from "react";
import axios from "axios";
import EventCard from "../components/EventCard";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("https://vgu-ieee-student-branch.onrender.com/api/events")
      .then(res => setEvents(res.data));
  }, []);

  const renderSection = (title, category) => (
    <>
      <h2 className="text-3xl font-bold mt-20 mb-8 text-center">
        {title}
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {events
          .filter(e => e.category === category)
          .map(e => <EventCard key={e._id} e={e} />)}
      </div>
    </>
  );

  return (
    <>
      {renderSection("Computer Society Events", "computer")}
      {renderSection("WIE Events", "wie")}
      {renderSection("MTT Events", "mtt")}
    </>
  );
}

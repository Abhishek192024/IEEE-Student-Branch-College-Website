import React from "react";

export default function EventCard({ e }) {
  const colorMap = {
    blue: "blue",
    purple: "purple",
    green: "green",
    rose: "rose",
    emerald: "emerald",
  };

  const c = colorMap[e.color];

  return (
    <div
      className={`
        group rounded-xl p-6 cursor-pointer
        bg-${c}-50 border border-${c}-100
        dark:bg-white/5 dark:border-white/10
        transition-all duration-300 ease-out
        hover:-translate-y-3 hover:scale-[1.03]
        hover:shadow-[0_20px_50px_rgba(59,130,246,0.25)]
      `}
    >
      <h3
        className={`
          text-xl font-semibold
          text-${c}-700 dark:text-blue-400
          transition-all duration-300
          group-hover:text-${c}-500
        `}
      >
        {e.title}
      </h3>

      <p
        className={`
          mt-2 text-${c}-700/70 dark:text-gray-400
          group-hover:text-${c}-700 dark:group-hover:text-gray-300
        `}
      >
        {e.desc}
      </p>

      <span
        className={`
          inline-block mt-4 px-3 py-1 text-xs font-semibold rounded-full
          bg-${c}-100 text-${c}-600
          dark:bg-${c}-500/20 dark:text-${c}-400
          group-hover:bg-${c}-500 group-hover:text-white
          transition
        `}
      >
        {e.tag}
      </span>
    </div>
  );
}

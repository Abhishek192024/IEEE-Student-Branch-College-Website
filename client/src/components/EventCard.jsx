import React from "react";

export default function EventCard({ e }) {
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

  const c = styles[e.color] || styles.blue; // default blue

  return (
    <div
      className={`
        group rounded-xl p-6 cursor-pointer
        border
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
        {e.desc}
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
}

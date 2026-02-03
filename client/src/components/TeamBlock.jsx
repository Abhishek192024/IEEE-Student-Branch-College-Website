import React from "react";

const team = [
  { name: "Abhishek Kumar", role: "Tecnical Head – IEEE CS MUJ" },
  { name: "Kashish Kumar", role: "Chair – IEEE WIE MUJ" },
  { name: "Aditya Rajawat", role: "Chair – IEEE SB MUJ" },
];

export default function TeamBlock() {
  return (
    <section className="py-16 bg-white dark:bg-slate-900 text-black dark:text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Core Team</h2>
      <div className="grid md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {team.map((t, i) => (
          <div key={i} className="bg-slate-100 dark:bg-slate-800 p-6 rounded-xl shadow text-center">
            <h4 className="font-semibold text-lg">{t.name}</h4>
            <p className="text-gray-600 dark:text-gray-300">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

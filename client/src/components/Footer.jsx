import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const quickLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Chapters", link: "/chapters" },
    { name: "Events", link: "/events" },
    { name: "Gallery", link: "/gallery" },
  ];

  const ieeeLinks = [
    { name: "IEEE Global", link: "https://www.ieee.org" },
    { name: "IEEE Xplore", link: "https://ieeexplore.ieee.org" },
    { name: "IEEE Student Membership", link: "https://www.ieee.org/membership/students" },
    { name: "IEEE India Council", link: "https://ieeeindiacouncil.org" },
    { name: "IEEE Region 10", link: "https://r10.ieee.org" },
    { name: "IEEE Standards", link: "https://standards.ieee.org" },
  ];

  return (
    <footer
      className="
        mt-24 border-t transition-colors duration-300

        /* LIGHT MODE */
        bg-white
        border-blue-200
        text-blue-900

        /* DARK MODE */
        dark:bg-[#020617]
        dark:border-white/10
        dark:text-white
      "
    >
      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-8 py-14 grid md:grid-cols-4 gap-12">

        {/* ABOUT VGU */}
        <div className="group">
          <h2 className="text-xl font-bold mb-4 text-blue-800 dark:text-white group-hover:text-indigo-500 transition">
            Vivekananda Global University
          </h2>

          <p className="text-sm text-blue-700/70 dark:text-gray-400 leading-relaxed">
            Vivekananda Global University (VGU), Jaipur is a NAAC A+ accredited
            private university focused on innovation, research, and global
            education excellence.
          </p>

          <p className="mt-4 text-sm text-blue-700 dark:text-gray-300 flex items-center gap-2">
            📍 Jaipur, Rajasthan, India
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-blue-800 dark:text-white">
            Quick Links
          </h2>
          <ul className="space-y-3">
            {quickLinks.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.link}
                  className="
                    relative transition
                    text-blue-700 dark:text-gray-300
                    hover:text-indigo-500

                    after:absolute after:left-0 after:-bottom-1
                    after:h-[2px] after:w-0 after:bg-indigo-500
                    after:transition-all after:duration-300
                    hover:after:w-full
                  "
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* IEEE LINKS */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-blue-800 dark:text-white">
            IEEE Links
          </h2>
          <ul className="space-y-3">
            {ieeeLinks.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex items-center gap-2 transition
                    text-blue-700 dark:text-gray-300
                    hover:text-blue-500 hover:translate-x-1
                  "
                >
                  <span className="text-blue-500">›</span> {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-blue-800 dark:text-white">
            Contact
          </h2>

          <p className="text-sm text-blue-700/80 dark:text-gray-400 flex items-center gap-2">
            📞 +91 141 285 1000
          </p>

          <p className="text-sm text-blue-700/80 dark:text-gray-400 flex items-center gap-2 mt-2">
            ✉️ info@vgu.ac.in
          </p>

          <a
            href="https://www.vgu.ac.in/"
            target="_blank"
            rel="noreferrer"
            className="
              inline-block mt-5 font-medium transition
              text-indigo-600 dark:text-indigo-400
              hover:translate-x-1
            "
          >
            Visit Official Website →
          </a>
        </div>
      </div>

      {/* ================= COPYRIGHT + ADMIN ================= */}
      <div
        className="
          flex flex-col md:flex-row items-center justify-between gap-3
          text-sm px-6 py-5 border-t transition-colors

          /* LIGHT */
          border-blue-200
          text-blue-700

          /* DARK */
          dark:border-white/10
          dark:text-gray-400
        "
      >
        <p>
          © {new Date().getFullYear()} IEEE VGU CSE Branch. All rights reserved.
        </p>

        
      </div>
    </footer>
  );
}

import React from "react";
import { FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import logo from "../assets/vgu-logo.png";
import image001 from "../assets/image001.png";
import image002 from "../assets/image002.png";
import image003 from "../assets/image003.png";
import image004 from "../assets/image004.png";
import image005 from "../assets/image005.png";
import image006 from "../assets/image006.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image03 from "../assets/image.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";
import image9 from "../assets/image9.png";
import image10 from "../assets/image10.png";
import image11 from "../assets/image11.png";

export default function Team() {
  return (
    <div className="min-h-screen mt-10 pt-0 px-6 bg-white text-gray-900 dark:bg-[#020617] dark:text-white transition-colors duration-300">

      {/* ================= FACULTY ADVISORS ================= */}
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-800 dark:text-white">
        Faculty Advisors
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-28">
        {[
          {
            name: "Prof. (Dr.) Baldev Singh",
            img: image001,
            email: "baldev_singh@vgu.ac.in",
            phone: "9785643441",
            linkedin: "https://www.linkedin.com/in/dr-baldev-singh-77406b1a9/?originalSubdomain=in",
          },
          {
            name: "Prof.(Dr.) Surendra Yadav",
            img: image002,
            email: "surendra.yadav@vgu.ac.in",
            phone: "9982317251",
            linkedin: "https://www.linkedin.com/in/prof-dr-surendra-yadav-944319a0/",
          },
          {
            name: "Dr. Prashant Sharma",
            img: image003,
            email: "prashant.sharma@vgu.ac.in",
            phone: "9784025875",
            linkedin: "https://www.linkedin.com/in/dr-prashant-sharma-b9783618",
          },
          {
            name: "Mayuri Katara (Assistant Professor)",
            img: image004,
            email: "mayuree.katara@vgu.ac.in",
            phone: "9587087442",
            linkedin: "https://www.linkedin.com/in/mayuri-katara-6850a0192/?originalSubdomain=in",
          },
          {
            name: "Dr. Muquaddar Ali (Assistant Professor)",
            img: image005,
            email: "muquaddar.ali@vgu.ac.in",
            phone: "99024238334",
            linkedin: "https://www.linkedin.com/in/dr-muquaddar-ali/?originalSubdomain=in",
          },
          {
            name: "Narayan Vyas (Assistant Professor)",
            img: image006,
            email: "narayan.vyas@vgu.ac.in",
            phone: "8560014421",
            linkedin: "https://www.linkedin.com/in/narayanvyas87/?originalSubdomain=in",
          },
        ].map((m, i) => (
          <div key={i} className="relative bg-blue-50 dark:bg-white/5 border dark:border-white/10 rounded-2xl p-6 text-center hover:-translate-y-3 transition-all shadow-sm hover:shadow-xl">

            <a href={m.linkedin} target="_blank" rel="noopener noreferrer"
              className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:scale-110 transition">
              <FaLinkedin className="text-[#0A66C2] text-xl" />
            </a>

            <div className="h-24 w-24 mx-auto rounded-full overflow-hidden mb-4 ring-4 ring-indigo-500/30">
              <img src={m.img} className="w-full h-full object-cover" />
            </div>

            <h3 className="text-lg font-semibold">{m.name}</h3>
            <p className="text-blue-600 dark:text-gray-400 mb-2">Advisor</p>

            <div className="space-y-1 text-sm">
              <div className="flex items-center justify-center gap-2">
                <FaEnvelope className="text-blue-600 shrink-0" />
                <a href={`mailto:${m.email}`} className="hover:underline">
                  {m.email}
                </a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <FaPhoneAlt className="text-blue-600 shrink-0" />
                <a href={`tel:${m.phone}`} className="hover:underline">
                  {m.phone}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= OUR TEAM ================= */}
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-800 dark:text-white">
        Our Team
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          { name: "Hemant Modi", role: "Chair", img: image1, email: "hemantmodi152003@gmail.com", phone: "9460500295", linkedin: "https://www.linkedin.com/in/hemant-modi24" },
          { name: "Lakshya Sharma", role: "Vice Chair", img: image2, email: "lakshyasharma1316@gmail.com", phone: "8949411277", linkedin: "https://www.linkedin.com/in/lakshyasharma1316" },
          { name: "Prasanta Pandey", role: "Treasurer", img: image3, email: "prasantapandey1607@gmail.com", phone: "7790922616", linkedin: "https://www.linkedin.com/in/prasantapandey16" },
          { name: "Abhishek Kumar", role: "Technical Head", img: image03, email: "chaurasiyaabhi684@gmail.com", phone: "6200590137", linkedin: "https://www.linkedin.com/in/abhishek-chaurasiya-363883384" },
          { name: "Manyata Sharma", role: "Secretary", img: image4, email: "manyatasharma576@gmail.com", phone: "9407281351", linkedin: "https://www.linkedin.com/in/manyata-sharma-318754286" },
        ].map((m, i) => (
          <div key={i} className="relative bg-blue-50 dark:bg-white/5 border dark:border-white/10 rounded-2xl p-6 text-center hover:-translate-y-3 transition shadow-sm hover:shadow-xl">

            <a href={m.linkedin} className="absolute top-4 right-4 bg-white p-2 rounded-full shadow">
              <FaLinkedin className="text-[#0A66C2]" />
            </a>

            <div className="h-24 w-24 mx-auto rounded-full overflow-hidden mb-4 ring-4 ring-indigo-500/30">
              <img src={m.img} className="w-full h-full object-cover" />
            </div>

            <h3 className="font-semibold">{m.name}</h3>
            <p className="text-blue-600 dark:text-gray-400 mb-2">{m.role}</p>

            <div className="space-y-1 text-sm">
              <div className="flex items-center justify-center gap-2">
                <FaEnvelope className="text-blue-600 shrink-0" />
                <a href={`mailto:${m.email}`} className="hover:underline">
                  {m.email}
                </a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <FaPhoneAlt className="text-blue-600 shrink-0" />
                <a href={`tel:${m.phone}`} className="hover:underline">
                  {m.phone}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= SUPPORTIVE MEMBERS ================= */}
      <h2 className="text-3xl font-bold text-center mt-32 mb-12 text-blue-800 dark:text-white">
        Supportive Members
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto pb-24">
        {[
          { name: "Abhishek Prasad", img: image5, email: "abhishekprasad82528@gmail.com", phone: "7292846975", linkedin: "https://www.linkedin.com/in/abhishek-prasad-b8435b363" },
          { name: "Anushka Thakur", img: image6, email: "anushkaaathakur@gmail.com", phone: "7277251151", linkedin: "https://www.linkedin.com/in/anushka-thakur-013781286" },
          { name: "Jijo Vinod", img: image7, email: "vinodjijo12@gmail.com", phone: "8306202833", linkedin: "https://www.linkedin.com/in/jijov" },
          { name: "Arman Hussain", img: image8, email: "armanhussain681@gmail.com", phone: "9057212878", linkedin: "https://www.linkedin.com/in/arman-husain-cse" },
          { name: "Dishant Choudhary", img: image9, email: "dishantchoudhary1218@gmail.com ", phone: "8306443235", linkedin: "https://www.linkedin.com/in/dishant-choudhary" },
          { name: "Ghanshyam Suthar", img: image10, email: "ghanshyamsuthar1289@gmail.com", phone: "9166270003", linkedin: "https://www.linkedin.com/in/ghanshyam-suthar-952ab0373" },
          { name: "Shreeansh Ayush", img: image11, email: "@gmail.com", phone: "8809076286", linkedin: "https://www.linkedin.com/in/shreeansh-ayush-429452281" },
        ].map((m, i) => (
          <div key={i} className="relative bg-blue-50 dark:bg-white/5 border dark:border-white/10 rounded-2xl p-6 text-center hover:-translate-y-2 transition shadow-sm hover:shadow-xl">

            <a href={m.linkedin} className="absolute top-4 right-4 bg-white p-2 rounded-full shadow">
              <FaLinkedin className="text-[#0A66C2]" />
            </a>

            <div className="h-24 w-24 mx-auto rounded-full overflow-hidden mb-4 ring-4 ring-indigo-500/30">
              <img src={m.img} className="w-full h-full object-cover" />
            </div>

            <h3 className="font-semibold">{m.name}</h3>

            <div className="space-y-1 text-sm mt-2">
              <div className="flex items-center justify-center gap-2">
                <FaEnvelope className="text-blue-600 shrink-0" />
                <a href={`mailto:${m.email}`} className="hover:underline">
                  {m.email}
                </a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <FaPhoneAlt className="text-blue-600 shrink-0" />
                <a href={`tel:${m.phone}`} className="hover:underline">
                  {m.phone}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

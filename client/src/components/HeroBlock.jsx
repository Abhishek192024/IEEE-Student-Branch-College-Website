import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

import hero1 from "../assets/hero/hero1.png";
import hero2 from "../assets/hero/hero2.png";
import hero3 from "../assets/hero/hero3.png";
import hero4 from "../assets/hero/hero4.png";

const images = [hero1, hero2, hero3, hero4];

export default function HeroBlock() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative mt-2 mb-16 px-3 sm:px-6">
      <div className="relative max-w-7xl mx-auto h-[70vh] sm:h-[80vh] lg:h-[85vh] rounded-2xl overflow-hidden shadow-2xl text-white">

        {/* SLIDER */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[index]})` }}
            initial={{ x: direction === 1 ? "100%" : "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: direction === 1 ? "-100%" : "100%" }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 shadow-[inset_0_0_140px_rgba(0,0,0,0.7)]" />

        {/* CONTENT (BOTTOM) */}
        <div className="relative z-10 h-full flex flex-col items-center justify-end text-center px-4 pb-10 sm:pb-16">

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold mb-4">
            <span className="text-blue-400">IEEE</span>{" "}
            <span className="text-red-500">VGU</span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4">
            <NavLink
              to="/events"
              className="px-6 py-3 sm:px-8 rounded-xl font-semibold bg-blue-600 hover:bg-blue-700 transition shadow-xl"
            >
              Explore Events
            </NavLink>

            <a
              href="https://www.ieee.org/membership/join/index.html"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 sm:px-8 rounded-xl font-semibold border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-black transition"
            >
              Join IEEE
            </a>
          </div>
        </div>

        {/* ARROWS */}
        <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
          <button
            onClick={prevSlide}
            className="w-11 h-11 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-xl"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="w-11 h-11 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-xl"
          >
            ›
          </button>
        </div>

      </div>
    </section>
  );
}

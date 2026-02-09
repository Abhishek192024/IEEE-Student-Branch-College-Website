import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const API = "http://localhost:5000";

export default function HeroBlock() {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // FETCH HERO IMAGES
  useEffect(() => {
    axios.get(`${API}/api/hero`).then((res) => {
      setImages(res.data);
    });
  }, []);

  // AUTO SLIDE
  useEffect(() => {
    if (!images.length) return;

    const timer = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images]);

  if (!images.length) return null;

  return (
    <section className="relative mt-2 mb-16 px-4">
      <div className="relative h-[80vh] max-w-7xl mx-auto rounded-2xl overflow-hidden">

        <AnimatePresence custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ x: direction > 0 ? "100%" : "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: direction > 0 ? "-100%" : "100%" }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${API}${images[index].image})`
            }}
          />
        </AnimatePresence>

        {/* overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* content */}
        <div className="absolute bottom-20 w-full text-center z-10">
          <h1 className="text-6xl font-extrabold">
            <span className="text-blue-400">IEEE</span>{" "}
            <span className="text-red-500">VGU</span>
          </h1>
        </div>

        {/* arrows */}
        <div className="absolute right-5 top-1/2 z-20 flex flex-col gap-3">
          <button onClick={() => {
            setDirection(-1);
            setIndex(index === 0 ? images.length - 1 : index - 1);
          }} className="btn">‹</button>

          <button onClick={() => {
            setDirection(1);
            setIndex((index + 1) % images.length);
          }} className="btn">›</button>
        </div>

        {/* dots / thumbnails */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-blue-500" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

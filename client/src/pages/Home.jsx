import React from "react";
import HeroBlock from "../components/HeroBlock";
import AboutBlock from "../components/AboutBlock";
import EventsBlock from "../components/EventsBlock";
import Chapters from "../pages/chapters";
import GalleryBlock from "../components/GalleryBlock";
import Footer from "../components/Footer";
import CSInfoBlock from "../components/CSInfoBlock";

export default function Home() {
  return (
    <div className="bg-white dark:bg-[#020617] text-gray-900 dark:text-white transition-colors duration-300">

      {/* HERO */}
      <section className="min-h-[80vh]">
        <HeroBlock />
      </section>

      {/* CS + IEEE INFO */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CSInfoBlock />
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 sm:py-24 bg-gray-50 dark:bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AboutBlock />
        </div>
      </section>

      

      <Footer />
    </div>
  );
}

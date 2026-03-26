'use client'

import { motion } from "motion/react";
import { transition } from "../../../../../transition";
import Link from "next/link";
export default function Home() {
    return (
    
      <motion.section
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={transition}
        className="relative px-4 py-6 sm:p-16 h-[70vh] md:h-[100vh] flex flex-col justify-center">
        
        
            <motion.div
              className="flex flex-col items-center  w-full justify-center gap-5"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={transition}>
            <div className="title text-center relative">
  <h1
    className="text-2xl md:text-6xl font-extrabold mb-4 
    bg-gradient-to-r from-primary-600 to-blue-500
    dark:from-primary-400 dark:to-blue-400
    bg-clip-text text-transparent"
  >
    Mohamed Abdelwahab
  </h1>

  <h2 className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto">
    Passionate{" "}
    <span className="text-primary-600 dark:text-primary-400 font-semibold">
      MERN Stack Developer
    </span>{" "}
    Building{" "}
    <span className="text-blue-600 dark:text-blue-400 font-semibold">
      Modern Web Apps
    </span>{" "}
    with{" "}
    <span className="text-primary-600 dark:text-primary-400 font-semibold">
      React & Next.js
    </span>{" "}
    ⚡
  </h2>
</div>

<div className="btns flex flex-col sm:flex-row  items-center justify-center gap-4 mt-8">
  {/* Primary Button */}
  <button
    className="min-w-40 px-6 py-3 rounded-xl font-semibold 
    bg-gradient-to-r from-primary-600 to-blue-600 
    hover:from-blue-600 hover:to-primary-600 
    text-white shadow-lg shadow-primary-500/25 transition-all duration-300"
  >
    <Link href={'/projects'}>View My Work</Link>
  </button>

  {/* Secondary Button */}
  <a
    target="_blank"
    href="https://drive.google.com/file/d/1ykhRD1rkcDx7rFeg204a3EB06J4W2pJa/view?usp=sharing"
    className="min-w-40 px-6 py-3 rounded-xl font-semibold 
    border border-primary-500/30 
    text-primary-600 dark:text-primary-400 
    hover:bg-primary-50 dark:hover:bg-primary-500/10 
    transition-all duration-300 text-center"
  >
    Download CV
  </a>
</div>

            </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-text-secondary"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.section>
        
  );
}
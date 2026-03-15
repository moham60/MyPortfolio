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
    <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
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
          </motion.section>
        
  );
}
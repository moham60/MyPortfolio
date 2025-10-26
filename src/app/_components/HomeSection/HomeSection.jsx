'use client'
import Image from "next/image";
import img1 from "@images/shape1.webp";
import { motion } from "motion/react";
import { transition } from "../../../../transition";
import { LinkTransition } from "../LinkTransition/LinkTransition";
import Link from "next/link";
export default function Home() {
    return (
    
      <section className="relative  py-24 h-[88vh]  flex flex-col justify-center ">
        
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={transition}
              className="absolute w-[50%]   top-0 left-[50%] translate-x-[-50%] pointer-events-none z-40">
              <Image src={img1} className="w-full" alt="img1" />
            </motion.div>
            <motion.div
              className="flex flex-col items-center justify-center gap-5"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={transition}>
            <div className="title text-center relative">
  <h1
    className="text-4xl md:text-6xl font-extrabold mb-4 
    bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500
    dark:from-purple-300 dark:via-fuchsia-400 dark:to-pink-300
    bg-clip-text text-transparent"
  >
    Mohamed Abdelwahab
  </h1>

  <h2 className="text-lg md:text-2xl text-gray-800 dark:text-gray-200 max-w-3xl mx-auto">
    Passionate{" "}
    <span className="text-fuchsia-600 dark:text-fuchsia-400 font-semibold">
      MERN Stack Developer
    </span>{" "}
    Building{" "}
    <span className="text-purple-700 dark:text-purple-400 font-semibold">
      Modern Web Apps
    </span>{" "}
    with{" "}
    <span className="text-pink-600 dark:text-pink-300 font-semibold">
      React & Next.js
    </span>{" "}
    ⚡
  </h2>
</div>

<div className="btns flex items-center justify-center gap-4 mt-8">
  {/* Primary Button */}
  <button
    className="min-w-40 px-6 py-3 rounded-xl font-semibold 
    bg-gradient-to-r from-purple-600 to-pink-600 
    hover:from-pink-600 hover:to-purple-600 
    text-white shadow-lg shadow-pink-500/20 transition-all duration-300"
  >
    <Link href={'/projects'}>View My Work</Link>
  </button>

  {/* Secondary Button */}
  <a
    target="_blank"
    href="https://drive.google.com/file/d/1gM01EvZUhY6NPFRRfUxhQlnhRQNkWNul/view?usp=sharing"
    className="min-w-40 px-6 py-3 rounded-xl font-semibold 
    border border-purple-500/40 
    text-purple-600 dark:text-purple-300 
    hover:bg-purple-600 hover:text-white 
    transition-all duration-300 shadow-lg shadow-purple-500/10 text-center"
  >
    Download CV
  </a>
</div>

            </motion.div>
          </section>
        
  );
}
'use client'
import Image from "next/image";
import img1 from "@images/shape1.webp";
import { motion } from "motion/react";
import Link from "next/link";
import { transition } from "../../../../transition";
export default function Home() {
    return (
    
      <section className="relative py-20 min-h-screen flex flex-col justify-center ">
        
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={transition}
              className="absolute w-[50%]   top-0 left-[50%] translate-x-[-50%] pointer-events-none z-40">
              <Image src={img1} className="w-full" alt="img1" />
            </motion.div>
            <motion.div
              className="flex flex-col items-center justify-center gap-10"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={transition}>
              <div
                className="title text-center relative">
                <h1
                  className="text-4xl md:text-6xl font-extrabold mb-6 
               bg-gradient-to-r from-violet-700 via-cyan-600 to-pink-500 dark:from-violet-500 dark:via-cyan-500 dark:to-pink-200 
               bg-clip-text text-transparent">
                  Mohamed Abdelwahab
                </h1>

                <h2 className="text-lg md:text-2xl text-foreground dark:text-gray-100 max-w-3xl mx-auto">
                  Crafting{" "}
                  <span className="text-cyan-500">Stunning Front-End</span>{" "}
                  Experiences with{" "}
                  <span className="text-violet-700 dark:text-violet-500">
                    React
                  </span>{" "}
                  &{" "}
                  <span className=" text-pink-400 dark:text-pink-200">
                    Next.js
                  </span>{" "}
                  ⚡
                </h2>
              </div>
              <div className="btns flex items-center gap-4 ">
                {/* Primary Button */}
                <button className="min-w-40 p-4 border border-gray-700 rounded bg-gray-800 hover:bg-gray-700 cursor-pointer">
                  <Link href={"/projects"}>View My Work</Link>
                </button>
                {/* Secondary Button */}
                <a  target="_blank" href="https://drive.google.com/file/d/1gM01EvZUhY6NPFRRfUxhQlnhRQNkWNul/view?usp=sharing" className="min-w-40 p-4 text-foreground dark:text-gray-200 hover:text-white border border-gray-700 rounded bg-transparent hover:bg-gray-800 text-center cursor-pointer">
                  Download Cv
                </a>
              </div>
            </motion.div>
          </section>
        
  );
}
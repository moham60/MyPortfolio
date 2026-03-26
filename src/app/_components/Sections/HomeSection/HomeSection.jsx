'use client'

import { motion } from "motion/react";
import { transition } from "../../../../../transition";
import Link from "next/link";
import Image from "next/image";
import myPhoto from "@images/myPhoto.jpg";

export default function Home() {
    return (
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={transition}
        className="relative px-4 py-6 sm:px-16 sm:py-0 min-h-screen flex items-center">

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 w-full">

          {/* Left: Info */}
          <motion.div
            className="flex-1 flex flex-col gap-6 text-center md:text-left"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={transition}>

            <h1
              className="text-3xl md:text-6xl font-extrabold
              bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--primary-600)]
              bg-clip-text text-transparent leading-tight">
              Mohamed Abdelwahab
            </h1>

            <h2 className="text-lg md:text-2xl" style={{ color: "var(--color-text-secondary)" }}>
              Passionate{" "}
              <span className="font-semibold" style={{ color: "var(--color-neon-blue)" }}>
                MERN Stack Developer
              </span>{" "}
              Building{" "}
              <span className="font-semibold" style={{ color: "var(--color-neon-pink)" }}>
                Modern Web Apps
              </span>{" "}
              with{" "}
              <span className="font-semibold" style={{ color: "var(--color-neon-green)" }}>
                React &amp; Next.js
              </span>{" "}
              ⚡
            </h2>

            <p className="text-base leading-relaxed max-w-lg mx-auto md:mx-0" style={{ color: "var(--color-text-secondary)" }}>
              I&apos;m a passionate <strong>Front-End Developer</strong> specializing in{" "}
              <span style={{ color: "var(--color-neon-blue)" }}>React, Next.js, and TailwindCSS</span>.
              I love building responsive, modern, and user-friendly web applications.
            </p>

            <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">
              <Link
                href="/projects"
                className="min-w-40 px-6 py-3 rounded-xl font-semibold text-center text-white
                  shadow-lg transition-all duration-300 hover:scale-105"
                style={{ background: "linear-gradient(to right, var(--color-neon-blue), var(--primary-600))" }}>
                View My Work
              </Link>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1ykhRD1rkcDx7rFeg204a3EB06J4W2pJa/view?usp=sharing"
                className="min-w-40 px-6 py-3 rounded-xl font-semibold text-center
                  border transition-all duration-300 hover:scale-105"
                style={{
                  borderColor: "var(--color-neon-blue)",
                  color: "var(--color-neon-blue)",
                }}>
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={transition}>
            <div
              className="rounded-full p-1 shadow-2xl"
              style={{ background: "linear-gradient(135deg, var(--color-neon-blue), var(--color-neon-pink))" }}>
              <Image
                src={myPhoto}
                alt="Mohamed Abdelwahab"
                width={280}
                height={280}
                className="rounded-full object-cover w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72"
                priority
              />
            </div>
          </motion.div>

        </div>
      </motion.section>
    );
}
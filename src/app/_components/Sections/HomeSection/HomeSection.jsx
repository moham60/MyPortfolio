'use client'

import { motion } from "motion/react";
import { transition } from "../../../../../transition";
import Link from "next/link";

const floatTransition = { duration: 3, repeat: Infinity, ease: "easeInOut" };

export default function Home() {
    return (
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={transition}
        className="relative px-4 pt-24 pb-6 sm:px-16 sm:pt-0 sm:py-0 min-h-screen flex items-center">

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 w-full">

          {/* Left: Info */}
          <motion.div
            className="flex-1 flex flex-col gap-6 text-center md:text-left"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={transition}>

            <h1
              className="text-3xl md:text-6xl font-extrabold leading-tight"
              style={{ color: "var(--color-text-primary)" }}>
              Mohamed{" "}
              <span style={{ color: "var(--color-primary)" }}>Abdelwahab</span>
            </h1>

            <h2 className="text-lg md:text-2xl" style={{ color: "var(--color-text-secondary)" }}>
              Passionate{" "}
              <span className="font-semibold" style={{ color: "var(--color-primary)" }}>
                MERN Stack Developer
              </span>{" "}
              building modern web apps with{" "}
              <span className="font-semibold" style={{ color: "var(--color-primary)" }}>
                React &amp; Next.js
              </span>{" "}
              ⚡
            </h2>

            <p className="text-base leading-relaxed max-w-lg mx-auto md:mx-0" style={{ color: "var(--color-text-secondary)" }}>
              I&apos;m a passionate <strong style={{ color: "var(--color-text-primary)" }}>Front-End Developer</strong> specializing in{" "}
              <span style={{ color: "var(--color-primary)" }}>React, Next.js, and TailwindCSS</span>.
              I love building responsive, modern, and user-friendly web applications.
            </p>

            <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">
              <Link
                href="/projects"
                className="min-w-40 px-6 py-3 rounded-xl font-semibold text-center text-white
                  shadow-lg transition-all duration-300 hover:scale-105 hover:opacity-90"
                style={{ background: "var(--color-primary)" }}>
                View My Work
              </Link>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1ykhRD1rkcDx7rFeg204a3EB06J4W2pJa/view?usp=sharing"
                className="min-w-40 px-6 py-3 rounded-xl font-semibold text-center
                  border-2 transition-all duration-300 hover:scale-105"
                style={{
                  borderColor: "var(--color-primary)",
                  color: "var(--color-primary)",
                }}>
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Right: Decorative floating element */}
          <motion.div
            className="flex-shrink-0 flex items-center justify-center"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={transition}>

            <div className="relative w-64 h-64 md:w-80 md:h-80">

              {/* Glowing background blur */}
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-20"
                style={{ background: "radial-gradient(circle, var(--primary-500), transparent 70%)" }}
              />

              {/* Center initials circle */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  w-36 h-36 md:w-44 md:h-44 rounded-full flex items-center justify-center shadow-2xl"
                style={{ background: "linear-gradient(135deg, var(--primary-600), var(--primary-300))" }}>
                <span className="text-white text-4xl md:text-5xl font-extrabold select-none">MA</span>
              </div>

              {/* Floating card — top right: Years */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ ...floatTransition, duration: 3 }}
                className="absolute top-0 right-0 rounded-2xl px-4 py-3 shadow-lg border"
                style={{ background: "var(--card)", borderColor: "var(--border-custom)" }}>
                <div className="text-2xl font-extrabold" style={{ color: "var(--color-primary)" }}>2+</div>
                <div className="text-xs font-medium" style={{ color: "var(--color-text-secondary)" }}>Years Exp.</div>
              </motion.div>

              {/* Floating card — bottom left: Projects */}
              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ ...floatTransition, duration: 3.5 }}
                className="absolute bottom-0 left-0 rounded-2xl px-4 py-3 shadow-lg border"
                style={{ background: "var(--card)", borderColor: "var(--border-custom)" }}>
                <div className="text-2xl font-extrabold" style={{ color: "var(--color-primary)" }}>20+</div>
                <div className="text-xs font-medium" style={{ color: "var(--color-text-secondary)" }}>Projects</div>
              </motion.div>

              {/* Floating badge — top left: Stack */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ ...floatTransition, duration: 4 }}
                className="absolute top-4 left-0 rounded-2xl px-4 py-3 shadow-lg border"
                style={{ background: "var(--card)", borderColor: "var(--border-custom)" }}>
                <div className="text-2xl text-center">⚡</div>
                <div className="text-xs font-medium text-center" style={{ color: "var(--color-text-secondary)" }}>MERN Stack</div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </motion.section>
    );
}

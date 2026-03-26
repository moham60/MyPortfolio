"use client"
import { motion } from "framer-motion";
import { transition } from "../../../../transition";
export default function Title({ title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={transition}
      className="flex flex-col items-center mt-22 mb-4 md:mt-10 p-2">
      <h2
        className="text-3xl sm:text-4xl text-center font-bold"
        style={{ color: "var(--color-primary)" }}>
        {title}
      </h2>
      <div
        className="mt-2 h-1 w-16 rounded-full"
        style={{ background: "linear-gradient(90deg, var(--primary-600), var(--primary-300), var(--color-primary))" }}
      />
    </motion.div>
  );
}

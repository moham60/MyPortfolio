"use client"
import { motion } from "framer-motion";
import { transition } from "../../../../transition";
export default function Title({title}) {
    return (
      <div className="flex flex-col items-center gap-3 mt-16 md:mt-10 mb-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="text-3xl sm:text-4xl font-bold text-center text-text-primary"
        >
          {title}
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.8 }}
          className="h-1 w-16 rounded-full bg-gradient-to-r from-primary-600 to-blue-500 origin-center"
        />
      </div>
  );
}
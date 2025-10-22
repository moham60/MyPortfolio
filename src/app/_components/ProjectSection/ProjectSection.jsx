"use client"
import { motion } from "motion/react";
import ProjectType from "../ProjectTabs/Tabs";
import { transition } from "../../../../transition";
export default function ProjectSection() {
    return (
        
 <motion.section
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      className=" py-10 px-4  "
      transition={transition}>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-5  text-foreground dark:text-white ">
       My Projects
      </motion.h2>
      <ProjectType />
    </motion.section>
  
  );
}
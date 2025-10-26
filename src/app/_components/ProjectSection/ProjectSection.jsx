"use client"
import { motion } from "motion/react";
import ProjectType from "../ProjectTabs/Tabs";
import { transition } from "../../../../transition";
import { Title } from "../SectionTiitle/Title";
export default function ProjectSection() {
    return (
        
 <motion.section
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      className="p-16"
      transition={transition}>
        <Title title={"My Projects"}/>
      <ProjectType />
    </motion.section>
  
  );
}
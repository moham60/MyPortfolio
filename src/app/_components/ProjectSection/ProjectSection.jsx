"use client"
import { motion } from "motion/react";
import ProjectType from "./Projects/Projects";
import { transition } from "../../../../transition";
const Title = dynamic(()=>import("../SectionTiitle/Title"));
import dynamic from "next/dynamic";
import Projects from "./Projects/Projects";


export default function ProjectSection() {
    return (
        
 <motion.section
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={transition}
      className="px-4 py-16  sm:p-16"
     >
        <Title title={"My Projects"}/>
        <div className="Projects">
          <Projects/>
        </div>
    </motion.section>
  
  );
}
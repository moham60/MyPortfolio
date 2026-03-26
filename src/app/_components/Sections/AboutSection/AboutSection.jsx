"use client"
import Image from "next/image";
import myPhoto from "@images/myPhoto.jpg"
import { motion } from "framer-motion";
import { transition } from "../../../../../transition";
import { FaReact, FaNodeJs, FaGithub, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";
import { RiDatabaseLine } from "react-icons/ri";
import Title from "../../SectionTiitle/Title";
const skills = [
  { Icon: FaHtml5, name: "HTML5", style: { color: "#E34F26" } },
  { Icon: FaCss3Alt, name: "CSS3", style: { color: "#1572B6" } },
  { Icon: FaJs, name: "JavaScript", style: { color: "#F7DF1E" } },
  { Icon: FaReact, name: "React", style: { color: "#61DAFB" } },
  { Icon: SiNextdotjs, name: "Next.js", className: "text-gray-900 dark:text-white" },
  { Icon: SiTailwindcss, name: "Tailwind", style: { color: "#06B6D4" } },
  { Icon: FaNodeJs, name: "Node.js", style: { color: "#68A063" } },
  { Icon: SiMongodb, name: "MongoDB", style: { color: "#47A248" } },
  { Icon: FaGithub, name: "GitHub", className: "text-gray-900 dark:text-white" },
  { Icon: RiDatabaseLine, name: "SQL", style: { color: "#4B5563" } },
  { Icon: SiExpress, name: "Express", className: "text-gray-700 dark:text-gray-300" },
];
export default function AboutSection() {
    return (    
  <motion.section
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={transition}
      className="p-4  sm:p-16">
      <Title title={"About Me"}/>

      <motion.div initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={transition} className="flex   justify-center gap-4  flex-col  sm:flex-row items-center">
        {/* صورة شخصية */}
          <div className="w-[80%]  sm:w-[30%]">
             <Image
            src={myPhoto}
            alt="My Photo"
            width={250}
            height={250}
            className="rounded-2xl mx-auto  shadow-lg"
          />
       </div>
         
     

        {/* محتوى التعريف */}
        <div className="right flex-1">
          <h2 className="text-4xl text-text-primary font-semibold mb-4">
            👋 Hi, I'm Mohamed
          </h2>
          <p className="text-text-secondary leading-relaxed mb-1">
            I’m a passionate{" "}
            <span className="font-semibold">Front-End Developer </span>
            specializing in{" "}
            <span className=" text-primary-600 dark:text-primary-400">
              React, Next.js, and TailwindCSS
            </span>
            . I love building responsive, modern, and user-friendly web
            applications.
          </p>

          <p className="text-text-secondary leading-relaxed ">
            Beyond coding, I’m interested in UI/UX design, open-source
            contributions, and always learning new technologies to improve my
            skills.
            </p>
        
        </div>
      </motion.div>
          <motion.div initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={transition}  className="skills   text-center">
       <Title title={"Skills"}/>
        <ul className="flex justify-center flex-wrap gap-4">
          {skills.map(({ Icon, name, style, className: iconClass }, idx) => (
            <li key={idx} className="flex flex-col items-center gap-1.5 w-16">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-card border border-border-custom shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <Icon size={32} style={style} className={iconClass} />
              </div>
              <span className="text-xs font-medium text-text-secondary">{name}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.section>
   
     
  );
}
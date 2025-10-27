"use client"
import Image from "next/image";
import dynamic from "next/dynamic";
import myPhoto from "@images/myPhoto.jpg"
import { motion } from "framer-motion";
import { transition } from "../../../../transition";
import { FaReact, FaNodeJs, FaGithub, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb } from "react-icons/si";
import { RiDatabase2Line, RiDatabaseLine } from "react-icons/ri";
const Title = dynamic(()=>import("../SectionTiitle/Title"));

const skills = [
  <FaHtml5 size={40} color="#E34F26" />,
  <FaCss3Alt color="#1572B6" size={40} />,
  <FaJs color="#F7DF1E" size={40} />,
  <FaReact size={40} color="#61DAFB" />,
  <SiNextdotjs size={40} color="#000000" />,
  <SiTailwindcss size={40} color="#06B6D4" />,
  <FaNodeJs size={40} color="#68A063" />,
  <SiMongodb size={40} color="#47A248" />,
  <FaGithub size={40} color="#181717" />,
  <RiDatabaseLine size={40} color="#4B5563" />,
  <RiDatabase2Line size={40} color="#2563EB" />,
];
export default function AboutSection() {
    return (    
  <motion.section
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={transition}
      className=" px-4 py-16  sm:p-16">
      <Title title={"About Me"}/>

      <motion.div initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={transition} className="flex  gap-2 flex-col sm:flex-row items-center">
        {/* صورة شخصية */}
        <div className="flex w-full sm:w-[29%] md:w-[39%]  justify-center">
          <Image
            src={myPhoto}
            alt="My Photo"
            width={300}
            height={300}
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* محتوى التعريف */}
        <div className="w-full sm:w-[70%] md:w-[60%]">
          <h2 className="text-4xl text-gray-800 dark:text-white font-semibold mb-4">
            👋 Hi, I'm Mohamed
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-1">
            I’m a passionate{" "}
            <span className="font-semibold">Front-End Developer</span>
            specializing in{" "}
            <span className=" text-purple-700 dark:text-purple-500">
              React, Next.js, and TailwindCSS
            </span>
            . I love building responsive, modern, and user-friendly web
            applications.
          </p>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
            Beyond coding, I’m interested in UI/UX design, open-source
            contributions, and always learning new technologies to improve my
            skills.
            </p>
        
        </div>
      </motion.div>
          <motion.div initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={transition}  className="skills my-6 text-center">
       <Title title={"Skills"}/>
        <ul className="flex justify-center flex-wrap gap-3">
          {skills.map((skill, idx) => (
            <li key={idx} className="font-medium">
              {skill}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.section>
   
     
  );
}
"use client"
import { motion } from "framer-motion";
import { transition } from "../../../../../transition";
import { FaReact, FaNodeJs, FaGithub, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb } from "react-icons/si";
import { RiDatabase2Line } from "react-icons/ri";
import { TbBrandExpress } from "react-icons/tb";
import Title from "../../SectionTiitle/Title";

const skills = [
  { icon: <FaHtml5 size={32} color="#E34F26" />, name: "HTML5" },
  { icon: <FaCss3Alt size={32} color="#1572B6" />, name: "CSS3" },
  { icon: <FaJs size={32} color="#F7DF1E" />, name: "JavaScript" },
  { icon: <FaReact size={32} color="#61DAFB" />, name: "React" },
  { icon: <SiNextdotjs size={32} />, name: "Next.js" },
  { icon: <SiTailwindcss size={32} color="#06B6D4" />, name: "Tailwind" },
  { icon: <FaNodeJs size={32} color="#68A063" />, name: "Node.js" },
  { icon: <TbBrandExpress size={32} />, name: "Express" },
  { icon: <SiMongodb size={32} color="#47A248" />, name: "MongoDB" },
  { icon: <FaGithub size={32} />, name: "GitHub" },
  { icon: <RiDatabase2Line size={32} color="#2563EB" />, name: "SQL" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.4, ease: "easeOut" },
  }),
};

export default function AboutSection() {
  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={transition}
      className="p-4 sm:p-16">
      <Title title={"About Me"} />

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={transition}
        className="max-w-2xl mx-auto text-center md:text-left">
        <h2 className="text-3xl font-semibold mb-4" style={{ color: "var(--color-text-primary)" }}>
          👋 Hi, I&apos;m Mohamed
        </h2>
        <p className="leading-relaxed mb-3" style={{ color: "var(--color-text-secondary)" }}>
          I&apos;m a passionate{" "}
          <span className="font-semibold" style={{ color: "var(--color-text-primary)" }}>
            Front-End Developer
          </span>{" "}
          specializing in{" "}
          <span className="font-semibold" style={{ color: "var(--color-neon-blue)" }}>
            React, Next.js, and TailwindCSS
          </span>
          . I love building responsive, modern, and user-friendly web applications.
        </p>
        <p className="leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
          Beyond coding, I&apos;m interested in UI/UX design, open-source contributions,
          and always learning new technologies to improve my skills.
        </p>
      </motion.div>

      {/* Skills Mini Cards */}
      <div className="skills mt-12 text-center">
        <Title title={"Skills"} />
        <ul className="flex justify-center flex-wrap gap-4 mt-4">
          {skills.map((skill, idx) => (
            <motion.li
              key={idx}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.1, y: -4 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-2 px-4 py-3 rounded-xl cursor-pointer
                border transition-all duration-300 min-w-[80px]"
              style={{
                background: "var(--color-surface)",
                borderColor: "var(--color-border)",
                color: "var(--color-text-secondary)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--color-neon-blue)";
                e.currentTarget.style.boxShadow = "0 0 12px var(--color-neon-blue)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)";
              }}
            >
              {skill.icon}
              <span className="text-xs font-medium">{skill.name}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}

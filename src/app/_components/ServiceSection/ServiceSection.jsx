"use client"
import { 
  Code, 
  Monitor, 
  Server, 
  Database, 
  Plug, 
  Palette, 
  Cloud, 
  Shield, 
  Zap 
} from "lucide-react";
import { Card } from "../ServiceCard/ServiceCard";
import { Title } from "../SectionTiitle/Title";
import { motion } from "framer-motion";
import { transition } from "../../../../transition";
export const services = [
  {
    icon: Code,
    title: "Full-Stack Web Development",
    description:
      "Build complete, responsive, and scalable web applications using the MERN stack — MongoDB, Express, React, and Node.js."
  },
  {
    icon: Monitor,
    title: "Front-End Development",
    description:
      "Create modern, dynamic, and user-friendly interfaces using React, Tailwind CSS, and TypeScript for a seamless user experience."
  },
  {
    icon: Server,
    title: "Back-End Development",
    description:
      "Develop powerful RESTful APIs with Node.js and Express, managing databases efficiently and ensuring secure server-side logic."
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "Design and optimize NoSQL databases with MongoDB to ensure high performance, scalability, and data integrity."
  },
  {
    icon: Plug,
    title: "API Integration",
    description:
      "Integrate third-party APIs like payment gateways, social authentication, or geolocation services for feature-rich applications."
  },
  {
    icon: Palette,
    title: "UI/UX Implementation",
    description:
      "Translate Figma or design mockups into pixel-perfect, interactive interfaces using React, Tailwind, and Framer Motion."
  },
  {
    icon: Cloud,
    title: "Deployment & Hosting",
    description:
      "Deploy and manage MERN applications on platforms like Vercel, Render, or Netlify with continuous integration and version control."
  },
  {
    icon: Shield,
    title: "Authentication & Security",
    description:
      "Implement secure user authentication and authorization with JWT, bcrypt, and best security practices."
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Optimize application speed, reduce bundle sizes, and enhance overall performance for smooth user experiences."
  }
];


export function ServiceSection() {

    return (
        <motion.section
            initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={transition}
            className=" mx-auto p-16">

            <Title title={"My Services"} />
            <motion.div      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={transition} className="Services my-4 grid md:grid-cols-2 lg:grid-cols-3  gap-7 items-center">
                {services.map((service,idx) => (
                    <Card key={idx} title={service.title} icon={<service.icon size={40}  className="dark:bg-purple-500 bg-purple-700 shadow-purple-500 w-10 h-10 rounded-full p-2 shadow-lg  dark:shadow-purple-600  "/>} desc={service.description}/>
                ))}
            </motion.div>
        </motion.section>
      
           
  );
}
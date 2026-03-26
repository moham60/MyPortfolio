"use client";
import * as motion from "motion/react-client";
import project1 from "@images/projectsScreens/ecommerce.png";
import project2 from "@images/projectsScreens/Quran.png";
import template2 from "@images/projectsScreens/template2.png";
import template3 from "@images/projectsScreens/template3.png";
import skate from "@images/projectsScreens/skate.png";
import template4 from "@images/projectsScreens/dashboardHtmlCss.png";
import gameApi from "@images/projectsScreens/gameApi.png";
import weatherApp from "@images/projectsScreens/weatherApp.png"
import { transition } from "../../../../../../transition";
import { useState } from "react";
import Image from "next/image";






const projects = [
  {
    image: project1,
    title: "E-Commerce React App",
    languages: ["React", "TailwindCSS", "Fake Store API"],
    desc: "A comprehensive e-commerce app to display products with filtering, searching, and shopping cart management.",
    demo: "https://moham60.github.io/ecommerceweb/",
    repo: "https://github.com/moham60/ecommerceweb",
  },
  {
    image: project2,
    title: "Quran Website",
    languages: ["React", "TailwindCSS", "Quran API"],
    desc: "A Quranic website featuring a list of Surahs, Tafsir, and prayer times with a countdown to the next prayer.",
    demo: "https://moham60.github.io/QuranApp/",
    repo: "https://github.com/moham60/QuranApp",
  },
  {
    image: template2,
    title: "Portfolio Template",
    languages: ["HTML", "CSS", "JavaScript"],
    desc: "A simple personal portfolio template to showcase projects and personal information in an attractive and responsive way.",
    demo: "https://moham60.github.io/template2/",
    repo: "https://github.com/moham60/template2",
  },
  {
    image: template3,
    title: "Landing Page Template",
    languages: ["HTML", "CSS", "Bootstrap"],
    desc: "An elegant landing page designed with Bootstrap, tailored for showcasing a single product or service.",
    demo: "https://moham60.github.io/template3",
    repo: "https://github.com/moham60/template3",
  },
  {
    image: template4,
    title: "Admin Dashboard",
    languages: ["HTML", "CSS", "JavaScript"],
    desc: "An interactive admin dashboard template designed to display data and charts in a user-friendly manner.",
    demo: "https://moham60.github.io/template4",
    repo: "https://github.com/moham60/template4",
  },
  {
    image: skate,
    title: "Skate Store Template",
    languages: ["HTML", "CSS", "JavaScript"],
    desc: "A skate store template featuring a modern interface and a fully responsive design.",
    demo: "https://moham60.github.io/skate-simple/",
    repo: "https://github.com/moham60/skate-simple",
  },
  {
    image: gameApi,
    title: "Games API Project",
    languages: ["HTML", "Bootstrap", "JavaScript"],
    desc: "A website to display the latest games using a public API, presenting details and images attractively.",
    demo: "https://moham60.github.io/gamesApi/",
    repo: "https://github.com/moham60/gamesApi",
  },
  {
    image: weatherApp,
    title: "Weather App",
    languages: ["HTML", "Bootstrap", "JavaScript"],
    desc: "A real-time weather application built using the OpenWeather API to display accurate current weather conditions.",
    demo: "https://moham60.github.io/weatherPrediction2/",
    repo: "https://github.com/moham60/weatherPrediction2",
  },
];



export default function Projects() {
  const [show, setShow] = useState(false);
  const visibleProjects = show ? projects : projects.slice(0, 3);

  return (
    <section className="flex flex-col items-center gap-12 w-full max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
     

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-8">
        {visibleProjects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </div>

      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-blue-600 dark:hover:bg-blue-500 flex items-center gap-2" 
        onClick={() => setShow(!show)}
      >
        {show ? "Show Less" : "View All Projects"}
        <svg 
          className={`w-5 h-5 transition-transform duration-300 ${show ? 'rotate-180' : ''}`} 
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.button>
    </section>
  );
}

function Project({ project }) {
  return (
    <motion.div
      className="group flex flex-col h-full bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-border-custom transition-all duration-500"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={transition}
    >
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-background">
        <Image 
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out" 
          src={project.image} 
          alt={project.title} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
      </div>
      
      <div className="flex flex-col flex-grow p-6 gap-5">
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-text-primary group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed line-clamp-3" dir="auto">
            {project.desc}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {project.languages.map((language, idx) => (
            <span 
              key={idx} 
              className="text-xs font-semibold px-3 py-1 bg-primary-50 text-primary-700 dark:bg-primary-500/10 dark:text-primary-400 rounded-full border border-primary-100 dark:border-primary-500/20"
            >
              {language}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-5 border-t border-border-custom mt-2">
          <a 
            className="flex items-center justify-center flex-1 py-2.5 px-4 bg-primary-600 hover:bg-primary-500 text-white rounded-xl text-sm font-bold transition-all duration-300 shadow-sm hover:shadow-md" 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            Live Demo
          </a>
          <a 
            className="flex items-center justify-center flex-1 py-2.5 px-4 bg-card hover:bg-border-custom text-text-primary border-2 border-border-custom rounded-xl text-sm font-bold transition-all duration-300" 
            href={project.repo} 
            target="_blank" 
            rel="noopener noreferrer"
          >
           <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

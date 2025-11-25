"use client";
import {  FaGithub, FaGlobe } from "react-icons/fa";
import * as motion from "motion/react-client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {  A11y,Autoplay } from 'swiper/modules';
import project1 from "@images/projectsScreens/ecommerce.png";
import project2 from "@images/projectsScreens/Quran.png";
import template2 from "@images/projectsScreens/template2.png";
import template3 from "@images/projectsScreens/template3.png";
import skate from "@images/projectsScreens/skate.png";
import template4 from "@images/projectsScreens/dashboardHtmlCss.png";
import gameApi from "@images/projectsScreens/gameApi.png";
import weatherApp from "@images/projectsScreens/weatherApp.png"
import { transition } from "../../../../../../transition";






const projects = [
  {
    image: project1,
    title: "E-Commerce React App",
    languages: ["React", "TailwindCSS", "Fake Store API"],
    desc: "تطبيق متجر إلكتروني متكامل لعرض المنتجات مع إمكانية التصفية، البحث، وإدارة سلة المشتريات.",
    demo: "https://moham60.github.io/ecommerceweb/",
    repo: "https://github.com/moham60/ecommerceweb",
  },
  {
    image: project2,
    title: "Quran Website",
    languages: ["React", "TailwindCSS", "Quran API"],
    desc: "موقع قرآني يحتوي على قائمة السور، التفسير، وأوقات الصلاة مع عداد تنازلي للوقت المتبقي للصلاة القادمة.",
    demo: "https://moham60.github.io/QuranApp/",
    repo: "https://github.com/moham60/QuranApp",
  },
  {
    image: template2,
    title: "Portfolio Template",
    languages: ["HTML", "CSS", "JavaScript"],
    desc: "قالب شخصي بسيط لعرض المشاريع والمعلومات الشخصية بشكل جذاب ومتجاوب.",
    demo: "https://moham60.github.io/template2/",
    repo: "https://github.com/moham60/template2",
  },
  {
    image: template3,
    title: "Landing Page Template",
    languages: ["HTML", "CSS", "Bootstrap"],
    desc: "صفحة هبوط أنيقة مصممة باستخدام Bootstrap وموجهة لعرض منتج أو خدمة واحدة.",
    demo: "https://moham60.github.io/template3",
    repo: "https://github.com/moham60/template3",
  },
  {
    image: template4,
    title: "Admin Dashboard",
    languages: ["HTML", "CSS", "JavaScript"],
    desc: "لوحة تحكم تفاعلية مصممة لعرض البيانات والمخططات بطريقة سهلة الاستخدام.",
    demo: "https://moham60.github.io/template4",
    repo: "https://github.com/moham60/template4",
  },
  {
    image: skate,
    title: "Skate Store Template",
    languages: ["HTML", "CSS", "JavaScript"],
    desc: "قالب متجر منتجات التزلج بواجهة عصرية وتصميم متجاوب.",
    demo: "https://moham60.github.io/skate-simple/",
    repo: "https://github.com/moham60/skate-simple",
  },
  {
    image: gameApi,
    title: "Games API Project",
    languages: ["HTML", "Bootstrap", "JavaScript"],
    desc: "موقع لعرض أحدث الألعاب باستخدام API مع عرض التفاصيل والصور بشكل جذاب.",
    demo: "https://moham60.github.io/gamesApi/",
    repo: "https://github.com/moham60/gamesApi",
  },
  {
    image: weatherApp,
    title: "Weather App",
    languages: ["HTML", "Bootstrap", "JavaScript"],
    desc: "تطبيق لعرض حالة الطقس في الوقت الفعلي باستخدام OpenWeather API.",
    demo: "https://moham60.github.io/weatherPrediction2/",
    repo: "https://github.com/moham60/weatherPrediction2",
  },
];



export default function Projects() {


  return (
    <>
      <motion.div
        className="w-full"
          initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={transition}
      >   
            <Swiper
          modules={[ A11y, Autoplay]}
          
          spaceBetween={25}
          allowTouchMove={true}
         
          pagination={{ clickable: true }}
          autoplay={{
            delay: 100,
            disableOnInteraction: false,
            pauseOnMouseEnter:true,
          }}
          speed={2000}//smoother transition speed
       
          

      breakpoints={{
        640:{ slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
            }}
             className="mySwiper "
      
            >
              
          {projects.map(project => (
            <SwiperSlide key={project.title}>
              <div className="card group cursor-pointer bg-white shadow p-4 rounded-md hover:scale-105 transition-all duration-300 dark:bg-gray-800">
                <div className="image relative ">
                  <Image src={project.image} alt={project.title} className="h-[200px] w-full object-cover object-center rounded" />
                  <div className="absolute opacity-0 transition-all duration-300
                   group-hover:opacity-100 inset-0 flex justify-center items-center gap-2 bg-[#00000086]">
                    <a href={project.repo} target="_blank"><FaGithub size={25} className="text-gray-700 hover:text-gray-950 dark:text-white dark:hover:text-gray-400" /></a>
                    <a href={project.demo} target="_blank"><FaGlobe size={25} className="text-gray-700 hover:text-gray-950 dark:text-white dark:hover:text-gray-400"/></a>
                  </div>
                </div>
               
                <div className="text p-2 text-center dark:text-white  my-3">
                  <h3 className=" text-xl md:text-2xl font-extrabold">{project.title}</h3>
                  <div className="flex my-3 items-center justify-evenly">
                    {project.languages.map((lang,idx) => (
                      <span   className="font-bold "
                        key={idx} >
                          {lang}
                       </span>
                     ))}
                    </div>
                    <p className="text-gray-400 dark:text-gray-600">{project.desc}</p>
                  </div>
                </div>
            </SwiperSlide>
          ))}
            </Swiper> 
   
    </motion.div>
     
    </>
    
  );
}




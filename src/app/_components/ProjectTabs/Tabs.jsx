"use client";
import { FaCss3Alt, FaGithub, FaGlobe } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import * as motion from "motion/react-client";
import project1 from "@images/projectsScreens/ecommerce.png";
import project2 from "@images/projectsScreens/Quran.png";
import template2 from "@images/projectsScreens/template2.png";
import template3 from "@images/projectsScreens/template3.png";
import skate from "@images/projectsScreens/skate.png";
import template4 from "@images/projectsScreens/dashboardHtmlCss.png";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaX } from "react-icons/fa6";




const underline = {
  position: "absolute",
  bottom: -2,
  left: 0,
  right: 0,
  height: 2,
  background: "var(--accent)",
};

const iconContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  
};

const icon = {
  fontSize: 128,
};

/**
 * ==============   Data   ================
 */

const alltabs = [
  {
    icon: <FaCss3Alt size={30} color="#1572B6" />,
    label: "HTML CSS",
    projects: [
      {
        screen: template2,
        name: "template2",
        demo: "https://moham60.github.io/template2/",
        repo: "https://github.com/moham60/template2",
        desc: "A modern, multipurpose HTML/CSS template featuring sections like Home, Services, Portfolio, About, Pricing, and Contact. Clean, responsive layout with gallery filters, testimonial cards, stats counter, and well-structured design.",
      },
      {
        screen: template3,
        name: "template3",
        demo: "https://moham60.github.io/template3/",
        repo: "https://github.com/moham60/template3",
        desc: "A modern, multipurpose HTML/CSS template featuring sections like Home, Services, Portfolio, About, Pricing, and Contact. Clean, responsive layout with gallery filters, testimonial cards, stats counter, and well-structured design.",
      },
      {
        screen: template4,
        name: "dashboard",
        demo: "https://moham60.github.io/template4/",
        repo: "https://github.com/moham60/template4",
        desc: "A modern, multipurpose HTML/CSS template featuring sections like Home, Services, Portfolio, About, Pricing, and Contact. Clean, responsive layout with gallery filters, testimonial cards, stats counter, and well-structured design..",
      },
      {
        screen: skate,
        name: "Skate",
        demo: "https://moham60.github.io/skate-simple/",
        repo: "https://github.com/moham60/skate-simple",
        desc: "A modern, multipurpose HTML/CSS template featuring sections like Home, Services, Portfolio, About, Pricing, and Contact. Clean, responsive layout with gallery filters, testimonial cards, stats counter, and well-structured design.",
      },
    ],
  },
  {
    icon: <SiJavascript size={30} className="text-yellow-400" />,
    label: "HTML CSS JS",
  },
  {
    icon: <SiReact size={30} className="text-sky-400" />,
    label: "React",
    projects: [
      {
        screen: project1,
        name: "Ecommerce",
        demo: "https://moham60.github.io/ecommerceweb/",
        repo: "https://github.com/moham60/ecommerceweb",
        desc: "A responsive e-commerce web app built with React, Vite, and Tailwind CSS, showcasing modern UI design and clean project structure.",
      },
      {
        screen: project2,
        name: "Quran",
        demo: "https://moham60.github.io/QuranApp/#/",
        repo: "https://github.com/moham60/QuranApp",
        desc: "A clean and responsive Quran application built with modern web technologies, featuring intuitive navigation, verse-by-verse.",
      },
    ],
  },
  { icon: <SiNextdotjs size={30} className="text-foreground" />, label: "Next JS" },
];

const [htmlCss, js, react,nextJs] = alltabs;
const tabs = [htmlCss, js, react, nextJs];
export default function ProjectType() {
  /*========== State ============== */
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
   const [projectModel,setOpenModel]=useState(false);
   const [modelInfo,setModelInfo]=useState({
    name:"",
    desc:"",
    screen:"",
    demo:"",
    repo:"",
    
   })
     /*========== Handlers ============== */
   const changeModelInfo=(project)=> {
    const newModelInfo={...modelInfo};
        newModelInfo.name=project.name;
        newModelInfo.desc=project.desc;
        newModelInfo.screen=project.screen;
        newModelInfo.demo = project.demo;
     newModelInfo.repo = project.repo;
     setModelInfo(newModelInfo);
     setOpenModel(true);
   }

 
  
  return (
    <>
      <motion.div
      className="w-full "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}>
      <div >
        <nav>
          <ul className="flex gap-5 flex-col items-center  justify-center md:flex-row md:justify-between   p-4">
            {tabs.map((item) => (
              <motion.li
                key={item.label}
                initial={false}
                className={`
                  ${
                    selectedTab == item
                      ? "text-foreground bg-white  shadow-lg  shadow-gray-400 dark:text-white dark:bg-[#0B1421] dark:shadow-gray-950"
                      : ""
                  }
                 w-full 
                 md:w-[33%] hover:bg-white   cursor-pointer text-foreground dark:text-white  hover:shadow dark:hover:shadow-gray-950 dark:hover:bg-[#0B1421] rounded
                  transition-all duration-200 p-3
                `}
                onClick={() => setSelectedTab(item)}>
                <div className="flex items-center gap-2  ">
                  <span>{item.icon}</span> <span>{item.label}</span>
                </div>
              </motion.li>
            ))}
          </ul>
        </nav>
        <main style={iconContainer} className="p-20 ">
            
            <Swiper
                modules={[Pagination]}
      spaceBetween={25}
      pagination={{ clickable: true }}
      breakpoints={{
        640:{ slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
            }}
             className="mySwiper "
      
            >
    {selectedTab.projects?.length>0 ? (
                selectedTab.projects?.map((project) => (
                  <SwiperSlide onClick={() => {
                    changeModelInfo(project);
                }}  key={project.name} className="card group cursor-pointer   border  p-4
                  border-gray-200
                   bg-gradient-to-b relative dark:from-gray-800 dark:to-gray-950 dark:border-gray-800 rounded-md flex flex-col bg-white
                  
                   "
                    
                  >
                     <motion.div
                  initial={{ x: 40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1,type:"spring" }}
                  style={icon}
              
                
                 
                 >
                  <div className="image h-[250px] object-cover object-center group-hover:scale-105 transition-all duration-700 my-2  relative">
                    <Image
                      src={project.screen}
                      className=" w-full h-full  object-cover  "
                      alt={project.name}
                    />
        
                    <div className=" hidden  group-hover:flex absolute bg-[#0b142191]  inset-0 justify-center items-center  gap-4 ">
                      
                    </div>
                  </div>

                
                </motion.div>
                </SwiperSlide>
               
              ))
            ) : (
              <p className="text-black dark:text-gray-600">No Projects yet</p>
            )}
            </Swiper>
        
         
        </main>
        
      </div>
     
    </motion.div>
      {projectModel && <div className=" min-h-screen absolute z-50 inset-0 bg-[#0000008f]">
            <div className=" w-[95%]  bg-white  sm:w-[80%]  md:w-[60%] lg:w-[50%]  z-50 absolute top-[50%] left-[50%] 
          translate-x-[-50%] translate-y-[-50%] rounded-md p-4 dark:bg-gray-800">
             
                <button onClick={()=>setOpenModel(false)} className="closeModel absolute right-1  cursor-pointer text-gray-900  hover:bg-gray-200 dark:text-gray-600 flex items-center justify-center dark:hover:bg-gray-100 p-2 rounded-md  top-2">
                  <FaX size={15} />
                </button>
              
              <Image src={modelInfo.screen} className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] mx-auto" alt={modelInfo.name} />
            <div className="text">
              <h3 className="text-xl my-2 font-bold">{modelInfo.name}</h3>
              <p className="text-gray-300 dark:text-gray-500">{ modelInfo.desc}</p>
              </div>
              <div className=" my-2 ">
                <span className="flex my-4 items-center gap-2">repo : <a href={modelInfo.repo} target="_blank">
                  <FaGithub size={25}/>
                </a> </span>
                 <span className="flex items-center gap-2">demo : <a href={modelInfo.demo} target="_blank">
                  <FaGlobe size={25}/>
                </a> </span>
              </div>
            </div>
           
             </div>
          }
    </>
    
  );
}




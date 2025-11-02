'use client'
import Loading from "_/app/loading";
import dynamic from "next/dynamic";
const Home=dynamic(()=>import("../HomeSection/HomeSection"),{
    ssr: false,
    loading:()=><Loading/>
})
const About=dynamic(()=>import("../AboutSection/AboutSection"),{
    ssr: false,
    loading:()=><Loading/>
})
const Services=dynamic(()=>import("../ServiceSection/ServiceSection"),{
    ssr: false,
    loading:()=><Loading/>
})
const Projects=dynamic(()=>import("../ProjectSection/ProjectSection"),{
    ssr: false,
    loading:()=><Loading/>
})
const Education=dynamic(()=>import("../EducationSection/EducationSection"),{
    ssr: false,
    loading:()=><Loading/>
})
const Contact=dynamic(()=>import("../ContactSection/ContactSection"),{
    ssr: false,
    loading:()=><Loading/>
})
export function HeroSection() {
    return (
       <>  
            <Home/>
            <About />
            <Services/>
            <Education />
            <Projects />
            <Contact/>
             
           
            </>
  );
}
"use client"
import { useEffect, useState } from "react";
import Home from "./_components/HomeSection/HomeSection";
import About from "./about/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Loading from "./loading";
import { ServiceSection } from "./_components/ServiceSection/ServiceSection";
import { EducationSection } from "./_components/EducationSection/EducationSection";

export default function Hero() {
  const [loading, setloading] = useState(true);
 
  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false)
    }, 2000);
    return () => clearTimeout(timer);
  },[])
  return (
    <div className="dark:text-white">
      {loading ? (
        <Loading />
      ) : (
          <>
              <Home/>
              <About />
            <ServiceSection />
                  <EducationSection/>
            
               <Projects />
             <Contact />
          </>
          
              
      )}
        
     
     
      </div>
      
  );
}

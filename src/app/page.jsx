"use client"
import dynamic from "next/dynamic";
import Loading from "./loading";
import { useEffect, useState } from "react";
const Home = dynamic(() => import("./_components/HomeSection/HomeSection"), 
);
const About=dynamic (()=>import ( "./about/page"));

const Projects=dynamic ( ()=> import ( "./projects/page"));
const Contact=dynamic ( ()=> import ( "./contact/page"));
const ServiceSection=dynamic ( ()=> import ( "./_components/ServiceSection/ServiceSection"));
const EducationSection=dynamic ( ()=> import ( "./_components/EducationSection/EducationSection"));
export default function Hero() {
  const [loading, setloading] = useState(true);
 
  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false)
    }, 500);
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

"use client"
import { useEffect, useState } from "react";
import Home from "./_components/HomeSection/HomeSection";
import About from "./about/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Loading from "./loading";

export default function Hero() {
  const [loading, setloading] = useState(true);
 
  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false)
    }, 2000);
    return () => clearTimeout(timer);
  },[])
  return (
    <div className=" bg-transparent   dark:text-white">
      {loading ? (
        <Loading />
      ) : (
          <>
              <Home/>
              <About />
               <Projects />
             <Contact />
          </>
          
              
      )}
        
     
     
      </div>
      
  );
}

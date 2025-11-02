'use client'
import dynamic from "next/dynamic";
import Loading from "../loading";

const AboutSection = dynamic(()=>import("../_components/AboutSection/AboutSection"), {
  ssr: false,
  loading:()=><Loading/>
}); 

export default function About() {
    return (
      <AboutSection/>
  );
}
import dynamic from "next/dynamic";
import Loading from "../loading";

export const metadata = {
  title: "About Me",
  description:
    "Learn more about Mohamed Abdelwahab — a passionate MERN Stack Developer specializing in React, Next.js, and TailwindCSS.",
};

const AboutSection = dynamic(()=>import("../_components/Sections/AboutSection/AboutSection"), {
  loading:()=><Loading/>
}); 

export default function About() {
    return (
      <AboutSection/>
  );
}
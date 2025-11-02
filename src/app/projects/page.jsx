'use client'
import dynamic from "next/dynamic";
import Loading from "../loading";
const ProjectSection = dynamic(()=>import("../_components/Sections/ProjectSection/ProjectSection"), {
  ssr: false,
  loading:()=><Loading/>
});
export default function Projects() {
  return (
   <ProjectSection/>
  );
}

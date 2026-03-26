import dynamic from "next/dynamic";
import Loading from "../loading";

export const metadata = {
  title: "Projects",
  description:
    "Explore Mohamed Abdelwahab's portfolio of projects — from e-commerce apps and Quran websites to full-stack MERN applications.",
};

const ProjectSection = dynamic(()=>import("../_components/Sections/ProjectSection/ProjectSection"), {
  loading:()=><Loading/>
});

export default function Projects() {
  return (
   <ProjectSection/>
  );
}

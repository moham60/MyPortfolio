import dynamic from "next/dynamic";
const ProjectSection = dynamic(()=>import("../_components/ProjectSection/ProjectSection"));
export default function Projects() {
  return (
   <ProjectSection/>
  );
}

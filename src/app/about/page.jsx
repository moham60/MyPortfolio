
import dynamic from "next/dynamic";
const AboutSection = dynamic(()=>import("../_components/AboutSection/AboutSection")); 

export default function about() {
    return (
      <AboutSection/>
  );
}
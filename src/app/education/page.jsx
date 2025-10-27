
import dynamic from "next/dynamic";
const EducationSection = dynamic(()=>import("../_components/EducationSection/EducationSection"));
export default function education() {
    return (
      <EducationSection/>
  );
}
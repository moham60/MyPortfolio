'use client'
import dynamic from "next/dynamic";
import Loading from "../loading";
const EducationSection = dynamic(() => import("../_components/Sections/EducationSection/EducationSection"), {
  ssr: false,
  loading:()=><Loading/>
});
export default function Education() {
    return (
      <EducationSection/>
  );
}
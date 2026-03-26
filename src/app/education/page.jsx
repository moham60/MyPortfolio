import dynamic from "next/dynamic";
import Loading from "../loading";

export const metadata = {
  title: "Education",
  description:
    "Mohamed Abdelwahab's educational background — Front-End diploma from Route Academy, MERN internship at MAIM Company, and a Computer Science degree at Alexandria University.",
};

const EducationSection = dynamic(() => import("../_components/Sections/EducationSection/EducationSection"), {
  loading:()=><Loading/>
});

export default function Education() {
    return (
      <EducationSection/>
  );
}
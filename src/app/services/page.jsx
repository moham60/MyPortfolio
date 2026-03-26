import dynamic from "next/dynamic";
import Loading from "../loading";

export const metadata = {
  title: "Services",
  description:
    "Discover the web development services offered by Mohamed Abdelwahab — full-stack development, UI/UX implementation, API integration, and more.",
};

const ServiceSection = dynamic(()=>import("../_components/Sections/ServiceSection/ServiceSection"), {
  loading:()=><Loading/>
});

export default function Services() {
    return (
      <ServiceSection/>
  );
}
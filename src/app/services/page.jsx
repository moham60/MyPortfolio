import dynamic from "next/dynamic";
const ServiceSection = dynamic(()=>import("../_components/ServiceSection/ServiceSection"));
export default function services() {
    return (
      <ServiceSection/>
  );
}
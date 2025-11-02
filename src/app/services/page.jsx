'use client'
import dynamic from "next/dynamic";
import Loading from "../loading";
const ServiceSection = dynamic(()=>import("../_components/ServiceSection/ServiceSection"), {
  ssr: false,
  loading:()=><Loading/>
});
export default function Services() {
    return (
      <ServiceSection/>
  );
}
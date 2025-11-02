'use client'
import dynamic from "next/dynamic";
import Loading from "../loading";
const ContactSection = dynamic(()=>import("../_components/ContactSection/ContactSection"), {
  ssr: false,
  loading:()=><Loading/>
});
export default function Contact() {
  return (
    <ContactSection/>
  );
}


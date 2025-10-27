import dynamic from "next/dynamic";
const ContactSection = dynamic(()=>import("../_components/ContactSection/ContactSection"));
export default function Contact() {
  return (
    <ContactSection/>
  );
}


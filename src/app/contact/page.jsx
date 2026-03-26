import dynamic from "next/dynamic";
import Loading from "../loading";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Mohamed Abdelwahab — send a message, connect on LinkedIn, GitHub, or WhatsApp.",
};

const ContactSection = dynamic(()=>import("../_components/Sections/ContactSection/ContactSection"), {
  loading:()=><Loading/>
});

export default function Contact() {
  return (
    <ContactSection/>
  );
}

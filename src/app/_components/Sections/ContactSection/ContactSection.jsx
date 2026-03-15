'use client'
import { motion } from "framer-motion";
import { transition } from "../../../../../transition";
import ContactForm from "./ContactForm";
import Title from "../../SectionTiitle/Title";

export default function ContactSection() {
    return (
    
 <motion.section
       initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={transition}
      className="p-4  sm:py-16">
     
   
         <Title title={"Contact Me"}/>

        <ContactForm/>
      
       
    </motion.section>
  
  );
}
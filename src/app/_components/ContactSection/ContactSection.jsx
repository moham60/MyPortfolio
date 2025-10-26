'use client'
import { ChevronDownIcon } from "flowbite-react";
import { motion } from "framer-motion";
import 'flowbite'
import { transition } from "../../../../transition";
import ContactForm from "./ContactForm";
import { Title } from "../SectionTiitle/Title";
export default function ContactSection() {
    return (
    
 <motion.section
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}

      transition={transition}
      className="p-16  min-h-screen  ">
     
   
         <Title title={"Contact Me"}/>

        <ContactForm/>
      
       
    </motion.section>
  
  );
}
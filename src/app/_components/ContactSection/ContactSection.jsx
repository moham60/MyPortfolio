'use client'
import { ChevronDownIcon } from "flowbite-react";
import { motion } from "framer-motion";
import 'flowbite'
import { transition } from "../../../../transition";
export default function ContactSection() {
    return (
    
 <motion.section
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}

      transition={transition}
      className="py-20 min-h-screen  ">
     
      <div>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl text-center font-semibold tracking-tight text-balance text-foreground dark:text-white sm:text-5xl">
          Contact Me
        </motion.h2>

        
     
        </div>
       
    </motion.section>
  
  );
}
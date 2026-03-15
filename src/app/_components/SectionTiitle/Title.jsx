"use client"
import { motion } from "framer-motion";
import { transition } from "../../../../transition";
export default function Title({title}) {
    return (
       <motion.h2
        initial={{ opacity: 0,y:40 }}
        whileInView={{ opacity: 1,y:0 }}
        viewport={{ once: true }}
        transition={transition}
        className=" text-3xl p-2   sm:text-4xl  text-center  mt-22 mb-4  md:mt-10
      text-gray-700 dark:text-gray-200
 ">
       
           {title}
      </motion.h2>
  );
}
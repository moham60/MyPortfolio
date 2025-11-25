"use client"
import { motion } from "framer-motion";
import { transition } from "../../../../transition";
export default function Title({title}) {
    return (
       <motion.h2
        initial={{ opacity: 0,y:40 }}
        whileInView={{ opacity: 1,y:0 }}
        transition={transition}
        className=" text-3xl  sm:text-4xl  text-center  mt-12 mb-6
      text-gray-700 dark:text-gray-200
 ">
           {title}
      </motion.h2>
  );
}
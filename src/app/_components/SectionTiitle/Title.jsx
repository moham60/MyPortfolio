"use client"
import { motion } from "framer-motion";
export function Title({title}) {
    return (
       <motion.h2
        initial={{ opacity: 0,y:40 }}
        animate={{ opacity: 1,y:0 }}
        transition={{ duration: 0.6 }}
        className=" text-3xl  sm:text-4xl font-bold text-center mb-10 mt-8
   bg-gradient-to-r from-fuchsia-600 via-purple-600 to-blue-600 dark:from-fuchsia-400 dark:via-purple-400 dark:to-blue-400
    text-transparent bg-clip-text
 ">
           {title}
      </motion.h2>
  );
}
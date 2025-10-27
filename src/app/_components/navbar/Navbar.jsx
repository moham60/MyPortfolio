'use client'
import React, { useState } from 'react'
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { motion} from "motion/react";
import { transition } from '../../../../transition';
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
const ToggoleTheme=dynamic(()=>import ( '../ToggoleTheme'));

const LinkTransition= dynamic(()=> import('../LinkTransition/LinkTransition'))

export default function Navbar() {
   const pathname = usePathname();
const [openMobileNav, setopenMobileNav] = useState(false)
   const LinkTransitions = [
     { href: "/", label: "Home" },
     { href: "/about", label: "About" },
     { href: "/services", label: "Services" },
       { href: "/education", label: "Education" },
     { href: "/projects", label: "Projects" },
     { href: "/contact", label: "Contact" },
    
   ];
  return (
    <motion.nav
      initial={{ y: "-100%" }}
      transition={transition}
      animate={{ y: 0 }}
      className=" bg-white shadow-2xl dark:bg-gradient-to-r  dark:from-gray-800 dark:to-gray-950  fixed w-full z-20 top-0 left-0 right-0 start-0 border-b dark:border-gray-800  border-gray-100  ">
      <div className=" flex max-w-7xl    items-center justify-between mx-auto p-4">
        <LinkTransition
          href={"/"}
          className="flex items-center space-x-3 rtl:space-x-reverse">
          <span
            className="self-center text-2xl font-extrabold bg-gradient-to-r
          
          from-violet-800 to-pink-700  bg-clip-text text-transparent">
            Mohamed
          </span>
        </LinkTransition>
       
        <div className="flex    md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            onClick={() => {
              setopenMobileNav(!openMobileNav);
            }}
            className="inline-flex  cursor-pointer items-center p-2 w-10 h-10 justify-center text-sm text-gray-700 dark:text-gray-500 rounded-lg md:hidden "
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            {openMobileNav ? (
              <AiOutlineClose size={30} />
            ) : (
              <CiMenuFries size={30} />
            )}
          </button>
        </div>
        <div className="hidden md:flex md:w-[75%] md:justify-end md:items-center  space-x-5">
          {LinkTransitions.map((Link) => (
            <LinkTransition
              key={Link.href}
              href={Link.href}
              className={`px-3 py-2 rounded transition-colors duration-300
                ${
                  pathname === Link.href
                    ? "bg-gradient-to-r from-violet-700 to-violet-900 text-white"
                    : "dark:text-gray-300 text-black hover:text-white hover:bg-violet-700 "
                }`}>
              {Link.label}
            </LinkTransition>
          ))}

          <div className="flex  md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              onClick={() => {
                setopenMobileNav(!openMobileNav);
              }}
              className="inline-flex  cursor-pointer items-center p-2 w-10 h-10 justify-center text-sm text-gray-700 dark:text-gray-500 rounded-lg md:hidden "
              aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              
               
             
                <CiMenuFries size={30} />
              
            </button>
          </div>
          <div className="toggoleTheme">
            <ToggoleTheme />
          </div>
        </div>
      </div>

      <div
        className={ `fixed inset-0 min-h-screen    transition-all duration-700  py-10 px-6  ${
          openMobileNav ? "translate-x-0" : "translate-x-[100%]"
        }    

        dark:bg-gray-800 bg-white 
        
          `}>
        <button onClick={()=>setopenMobileNav(false)} className="close p-2 flex justify-center items-center bg-gray-700 rounded cursor-pointer hover:bg-gray-500 absolute right-2 top-2">
           <AiOutlineClose size={20} className='text-white dark:text-gray-400' />
        </button>
        <div className="links mt-10 flex flex-col">
    {LinkTransitions.map((Link) => (
          <LinkTransition
            key={Link.href}
        href={Link.href}
        onClick={()=>setopenMobileNav(false)}
            className={`px-3 py-2 w-full my-3 rounded transition-colors duration-300
                ${
                  pathname === Link.href
                    ? "bg-gradient-to-r text-white from-violet-700 to-violet-900  "
                    : "dark:text-gray-300 hover:text-white text-black  hover:bg-violet-700 "
                }`}>
            {Link.label}
          </LinkTransition>
    ))}
          <div className="toggoleTheme mt-4">
 <ToggoleTheme/>
          </div>
         
        </div>
        
      </div>
    </motion.nav>
  );
}

'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion} from "motion/react";
import { transition } from '../../../../transition';
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import ToggoleTheme from '../ToggoleTheme';


export default function Navbar() {
   const pathname = usePathname();
const [openMobileNav, setopenMobileNav] = useState(false)
   const links = [
     { href: "/", label: "Home" },
     { href: "/about", label: "About" },
     { href: "/projects", label: "Projects" },
     { href: "/contact", label: "Contact" },
   ];
  return (
    <motion.nav
      initial={{ y: "-100%" }}
      transition={transition}
      animate={{ y: 0 }}
      className=" bg-white shadow-2xl dark:bg-gradient-to-r  dark:from-gray-800 dark:to-gray-950  fixed w-full z-20 top-0  start-0 border-b dark:border-gray-800  border-gray-400 ">
      <div className="max-w-screen-xl flex  items-center justify-between mx-auto p-4">
        <Link
          href={"/"}
          className="flex items-center space-x-3 rtl:space-x-reverse">
          <span
            className="self-center text-2xl font-extrabold bg-gradient-to-r
          from-violet-700 via-cyan-600 to-pink-500
           dark:from-violet-500 dark:via-cyan-500 dark:to-pink-200 bg-clip-text text-transparent">
            Mohamed
          </span>
        </Link>
        <div></div>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
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
        <div className="hidden md:flex md:items-center  space-x-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded transition-colors duration-300
                ${
                  pathname === link.href
                    ? "bg-gradient-to-r from-violet-700 to-violet-900 text-white"
                    : "dark:text-gray-300 text-black hover:text-white hover:bg-violet-700 "
                }`}>
              {link.label}
            </Link>
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
              {openMobileNav ? (
                <AiOutlineClose size={30} />
              ) : (
                <CiMenuFries size={30} />
              )}
            </button>
          </div>
          <div className="toggoleTheme">
            <ToggoleTheme />
          </div>
        </div>
      </div>

      <div
        className={ `fixed right-0 top-18 min-h-screen   transition-all duration-700 w-[250px] py-10 ${
          openMobileNav ? "translate-x-0" : "translate-x-[100%]"
        }  flex flex-col items-center gap-5 

          bg-white dark:bg-gray-800`}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-3 py-2 rounded transition-colors duration-300
                ${
                  pathname === link.href
                    ? "bg-gradient-to-r text-white from-violet-700 to-violet-900  "
                    : "dark:text-gray-300 hover:text-white text-black  hover:bg-violet-700 "
                }`}>
            {link.label}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}

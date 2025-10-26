import Link from 'next/link';
import React from 'react'

export default function Footer() {
  return (
    <footer className=" bg-white shadow-2xl dark:bg-gradient-to-r  dark:from-gray-800 dark:to-gray-950  ">
      <div className="p-6 md:py-10 max-w-screen-xl mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="text-2xl font-extrabold bg-gradient-to-r 
             from-violet-800 to-pink-700
             bg-clip-text text-transparent">
              Mohamed
            </span>
          </Link>

          {/* Links */}
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium
          text-gray-700 dark:text-gray-400 sm:mb-0">
            <li>
              <Link
                href="/about"
                className=" me-4 md:me-6 transition">
                About
              </Link>
            </li>
           
            <li>
              <a
                href="#"
                className="hover:text-violet-400 me-4 md:me-6 transition">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-violet-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="border border-gray-100 dark:border-gray-700 my-5"></div>
        {/* Copyright */}
        <span className="block text-sm text-gray-700 dark:text-gray-500 sm:text-center">
          © 2025{" "}
          <Link href="/" className="hover:text-cyan-400 transition font-medium">
            Mohamed™
          </Link>{" "}
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

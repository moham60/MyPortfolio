 "use client"

import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { motion } from "framer-motion";
export default function SocialContact() {
    const [open, setOpen] = useState(false);
      const socials = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/algn01",
      // facebook SVG
        svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M22.675 0h-21.35C.597 0 0 .597 0 
        1.326v21.348C0 23.403.597 24 1.326 
        24h11.497v-9.294H9.691v-3.622h3.132V8.413c0-3.1 
        1.894-4.788 4.66-4.788 1.325 0 
        2.463.099 2.794.143v3.24h-1.918c-1.505 
        0-1.796.716-1.796 1.765v2.315h3.587l-.467 
        3.622h-3.12V24h6.116C23.403 24 24 
        23.403 24 22.674V1.326C24 .597 23.403 0 
        22.675 0z" />
      </svg>
    ),
    },
    {
 name: "Whatsapp",
      href: "https://wa.me/2001556586046",
      // whatsapp SVG
        svg: (
       <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-5 h-5"
  >
    <path d="M20.52 3.48A11.81 11.81 0 0012 0a11.85 11.85 0 00-10 18.43L0 24l5.77-1.52A11.87 11.87 0 0012 24h.01A11.82 11.82 0 0024 12a11.8 11.8 0 00-3.48-8.52zM12 22a9.8 9.8 0 01-5-1.37l-.36-.21-3.43.9.92-3.35-.23-.38a9.83 9.83 0 011.44-12.1A9.73 9.73 0 0112 2a9.86 9.86 0 019.92 9.94A9.87 9.87 0 0112 22zm5.46-7.43c-.3-.15-1.77-.87-2.04-.97s-.47-.15-.67.15-.77.97-.94 1.17-.35.22-.65.07a7.89 7.89 0 01-2.31-1.43 8.57 8.57 0 01-1.58-1.95c-.17-.3 0-.46.13-.6s.3-.35.45-.52a2 2 0 00.3-.5.54.54 0 00-.03-.52c-.07-.15-.67-1.62-.92-2.22s-.49-.5-.67-.51h-.57a1.09 1.09 0 00-.77.36 3.26 3.26 0 00-1 2.42 5.65 5.65 0 001.19 2.93 13.25 13.25 0 005.09 4.72 11.56 11.56 0 001.15.43 2.75 2.75 0 001.26.08 2.16 2.16 0 001.41-1.02 1.79 1.79 0 00.12-1.02c-.05-.08-.26-.15-.56-.3z" />
  </svg>
    ),
    },
    {
      name: "GitHub",
      href: "https://github.com/moham60",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.14-1.11-1.45-1.11-1.45-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.54 2.36 1.1 2.94.84.09-.66.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.115 2.51.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.68 0 3.85-2.35 4.7-4.59 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.72 0 .27.18.58.69.48A10 10 0 0012 2z"/>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "linkedin.com/in/mohamed-abdelwahab-aa7b01387",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M4.98 3.5a2.5 2.5 0 11-.001 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3zM9 9h3.8v1.6h.1c.5-.9 1.7-1.8 3.5-1.8 3.7 0 4.4 2.4 4.4 5.6V21H17v-5.2c0-1.2 0-2.8-1.7-2.8-1.7 0-2 1.3-2 2.7V21H9z" />
        </svg>
      ),
    },
   
  ];
    return (
        <div className="fixed right-6 bottom-6 z-50">
              {/* social items */}
      <div className="flex flex-col items-end gap-3 mb-3">
        <AnimatePresence>
          {open &&
            socials.map((s, idx) => (
              <motion.a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                transition={{ duration: 0.18, delay: idx * 0.04 }}
                className="group flex items-center gap-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3 py-2 rounded-full shadow-sm hover:scale-105 transform transition"
                aria-label={s.name}
                title={s.name}
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-50 dark:bg-purple-900 text-purple-600 dark:text-purple-300">
                  {s.svg}
                </span>
                <span className="text-sm text-gray-700 dark:text-gray-200 pr-2">
                  {s.name}
                </span>
              </motion.a>
            ))}
        </AnimatePresence>
      </div>
              <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label={open ? "Close contacts" : "Open contacts"}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg flex items-center justify-center text-white focus:outline-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-600"
        title="Contact"
      >
        {/* Animated plus -> x */}
        <motion.span
          initial={false}
          animate={{ rotate: open ? 45 : 0, scale: open ? 0.95 : 1 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
            <motion.path
              d="M12 5v14M5 12h14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              // use opacity to soften when rotated into X
              initial={false}
              animate={{ opacity: open ? 0.9 : 1 }}
            />
          </svg>
        </motion.span>
      </button>
        </div>
            
  );
}
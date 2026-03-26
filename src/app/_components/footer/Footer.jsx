import Link from 'next/link';
import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background border-t border-border-custom mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse transition-transform hover:scale-105 duration-300">
            <span className="text-2xl font-extrabold" style={{ color: "var(--color-primary)" }}>
              Mohamed
            </span>
          </Link>

          {/* Links */}
          <ul className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-text-secondary">
            <li>
              <Link
                href="/about"
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="h-px w-full bg-border-custom my-6 md:my-8 bg-gradient-to-r from-transparent via-border-custom to-transparent"></div>
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-secondary">
          <span className="text-center md:text-left">
            © {currentYear}{" "}
            <Link href="/" className="font-semibold text-text-primary hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">
              Mohamed Abdelwahab
            </Link>
            . All Rights Reserved.
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            Built with <span className="text-red-500 hover:scale-125 transition-transform duration-300 cursor-default">❤</span> using Next.js & Tailwind
          </span>
        </div>
      </div>
    </footer>
  );
}

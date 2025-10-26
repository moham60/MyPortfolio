"use client";
import React, { useEffect, useState } from 'react'
import { Moon, Sun } from "lucide-react";
import { useTheme } from 'next-themes';
import { Button } from 'flowbite-react';
export default function ToggoleTheme() {
  
  const { theme, setTheme } = useTheme();
    
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
    if (!mounted) return null; // يمنع Hydration mismatch

    return (
      <Button
        className="cursor-pointer outline-0 "
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
        size="icon">
        {theme == "light" ? (
        <Moon className="w-5 h-5  text-gray-800" />
        ) : (
        <Sun className="w-5 h-5 text-yellow-300" />
        )}

        <span className="sr-only">Toggle theme</span>
      </Button>
    );
}

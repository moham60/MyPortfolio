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
        className="cursor-pointer"
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
        size="icon">
        {theme == "light" ? (
          <Moon className="h-[1.2rem] text-black w-[1.2rem] " />
        ) : (
          <Sun className="h-[1.2rem]    w-[1.2rem]  " />
        )}

        <span className="sr-only">Toggle theme</span>
      </Button>
    );
}

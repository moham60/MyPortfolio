"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function BackgroundShapes() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
      {/* Top Left Blob */}
      <div 
        className={`absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full opacity-60 blur-[80px] animate-blob ${
          theme === 'dark' ? 'bg-primary-600/30' : 'bg-primary-300/60'
        }`}
      ></div>

      {/* Top Right Blob */}
      <div 
        className={`absolute top-[0%] -right-[10%] w-[40%] h-[40%] rounded-full opacity-60 blur-[80px] animate-blob animation-delay-2000 ${
          theme === 'dark' ? 'bg-blue-600/30' : 'bg-blue-300/60'
        }`}
      ></div>

      {/* Bottom Left Blob */}
      <div 
        className={`absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full opacity-50 blur-[100px] animate-blob animation-delay-4000 ${
          theme === 'dark' ? 'bg-primary-600/30' : 'bg-primary-300/60'
        }`}
      ></div>
    </div>
  );
}

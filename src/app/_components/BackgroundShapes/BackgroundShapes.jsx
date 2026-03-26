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
        className={`absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full opacity-40 blur-[80px] animate-blob ${
          theme === "dark" ? "bg-primary-600/40" : "bg-primary-300/50"
        }`}
      />
      {/* Top Right Blob */}
      <div
        className={`absolute top-[0%] -right-[10%] w-[40%] h-[40%] rounded-full opacity-30 blur-[80px] animate-blob animation-delay-2000 ${
          theme === "dark" ? "bg-primary-300/20" : "bg-primary-100/60"
        }`}
      />
      {/* Bottom Blob */}
      <div
        className={`absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full opacity-30 blur-[100px] animate-blob animation-delay-4000 ${
          theme === "dark" ? "bg-primary-600/20" : "bg-primary-200/40"
        }`}
      />
    </div>
  );
}

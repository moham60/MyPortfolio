"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Show custom cursor only on devices with a precise pointer (laptop/desktop)
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);

    const mouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  if (isTouch) return null;

  return (
    <>
      {/* الدائرة الصغيرة (النقطة الأساسية) */}
      <motion.div
        className="cursor-dot"
        animate={{ x: mousePos.x - 6, y: mousePos.y - 6 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />

      {/* الدائرة الكبيرة (الهالة) */}
      <motion.div
        className="cursor-ring"
        animate={{ x: mousePos.x - 20, y: mousePos.y - 20 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      />
    </>
  );
}

"use client";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";

export default function ParticleBackground() {
  const [init, setInit] = useState(false);
    const { theme } = useTheme();
  
  const particleColor = theme == "dark" ? "#ffffff" : "#5555";

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // أو loadFull لو عايز كل الفيتشرز
    }).then(() => {
      setInit(true);
    });
  }, []);
  
    if (!init) return null;


 

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: {
          enable: true,
          zIndex: 0,
        },
        background: {
         color:  "transparent"
        },
        particles: {
          number: { value: 80 },
          size: { value: 3 },
          move: { enable:true,speed: 2 },
          color: { value: particleColor },
          links: { enable: true, color: particleColor  },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse", // ← تأثير الابتعاد
            },
            onClick: {
              enable: true,
              mode: "push", // ← تضيف Particles عند الضغط
            },
          },
          modes: {
            repulse: {
              distance: 100,
            },
            push: {
              quantity: 4,
            },
          },
        }
      }}
    />
  );
}

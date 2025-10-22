"use client";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground() {
  const [init, setInit] = useState(false);

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
          zIndex: -1,
        },
        background: {
          color: "red",
        },
        particles: {
          number: { value: 80 },
          size: { value: 3 },
          move: { speed: 2 },
          links: { enable: true, color: "#fff" },
        },
      }}
    />
  );
}

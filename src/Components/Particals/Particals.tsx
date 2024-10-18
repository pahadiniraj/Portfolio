"use client";

import dynamic from "next/dynamic";
import React, { useEffect, useState, useMemo } from "react";
import { loadSlim } from "@tsparticles/slim";
import { initParticlesEngine } from "@tsparticles/react";
import type { RecursivePartial, IOptions } from "@tsparticles/engine";

// Dynamically import the Particles component to avoid SSR issues
const Particles = dynamic(() => import("@tsparticles/react"), { ssr: false });

const ParticlesComponent = (props: any) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    // Initialize the particles engine
    if (!init) {
      initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      }).then(() => {
        setInit(true);
      });
    }
  }, [init]);

  // Define the particles options
  const options: RecursivePartial<IOptions> = useMemo(
    () => ({
      background: {
        color: {
          value: "#ffffff", // Background color
        },
      },
      fpsLimit: 120, // Limit frames per second
      interactivity: {
        detectsOn: "canvas", // Detect interactions on canvas
        events: {
          onClick: {
            enable: true,
            mode: "repulse", // Interaction on click
          },
          onHover: {
            enable: true,
            mode: "grab", // Interaction on hover
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 400,
          },
        },
      },
      animation: {
        enable: true,
        speed: 100,
        minimumValue: 0,
        startValue: "random",
        sync: false,
      },
      particles: {
        color: {
          value: "#242424", // Particle color
        },
        links: {
          color: "#000000",
          distance: 140,
          enable: true,
          opacity: 0.6,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce", // Bounce particles off the canvas edges
          },
          random: true,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 250, // Number of particles
        },
        shape: {
          type: "circle", // Shape of the particles
        },
        opacity: {
          value: { min: 0, max: 1 },
          animation: {
            enable: true,
            speed: 5,
            sync: false,
          },
        },
        size: {
          value: { min: 5, max: 10 }, // Particle size range
        },
      },
      detectRetina: true, // Enable retina display support
    }),
    []
  );

  // Ensure the component renders only on the client side
  if (!init) return null;

  return <Particles id={props.id} options={options} />;
};

export default ParticlesComponent;

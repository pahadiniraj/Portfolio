"use client";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#ffffff",
        },
      },
      fpsLimit: 120,
      interactivity: {
        detectsOn: "canvas",
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "grab",
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
          value: "#242424",
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
            default: "bounce",
          },
          random: true,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 250,
        },

        shape: {
          type: "circle",
        },

        // Blinking effect through opacity animation
        opacity: {
          value: { min: 0, max: 1 }, // Opacity range for blinking
          animation: {
            enable: true,
            speed: 5, // Speed of the blink (adjust as needed)
            sync: false, // Independent blinking for each particle
          },
        },

        size: {
          value: { min: 5, max: 10 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticlesComponent;

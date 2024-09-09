import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const Particle: React.FC = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeParticles = async () => {
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });
      setIsInitialized(true);
    };

    initializeParticles();
  }, []);

  const handleParticlesLoaded = async (
    container?: Container
  ): Promise<void> => {
    console.log(container);
    return Promise.resolve();
  };

  const particleOptions: ISourceOptions = useMemo(
    () => ({
      particles: {
        number: {
          value: 160,
          density: {
            enable: true,
            area: 1800,
          },
        },
        links: {
          enable: false,
          opacity: 0.04,
        },
        move: {
          direction: MoveDirection.right,
          speed: 0.02, // Slower speed for particles
        },
        size: {
          value: 1,
        },
        opacity: {
          value: 1,
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.05,
          },
        },
      },
      interactivity: {
        detectsOn: "canvas", // Detects interactivity on the canvas element
        events: {
          onClick: {
            enable: true,
            mode: "push", // Adds particles on click
          },
          onHover: {
            enable: true,
            mode: "repulse", // Repulse particles away from the mouse on hover
          },
        },
        modes: {
          push: {
            quantity: 1,
          },
          repulse: {
            distance: 100, // Distance of repulsion
            duration: 0.4, // Duration of the repulsion effect
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!isInitialized) return null;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={handleParticlesLoaded}
      options={particleOptions}
      className="absolute inset-0" // Tailwind class to position the particles container
    />
  );
};

export default Particle;

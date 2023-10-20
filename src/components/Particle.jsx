import React from "react";
import Particles from "react-tsparticles";

const Particle = () => {
  const particlesParams = {
    particles: {
      number: {
        value: 160,
        density: {
          enable: true,
          value_area: 1800,
        },
      },
      links: {
        enable: false,
        opacity: 0.04,
      },
      move: {
        direction: "right",
        speed: 0.05,
      },
      size: {
        value: 1,
      },
      opacity: {
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.05,
        },
      },
    },
    interactivity: {
      detectsOn: "window",
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        push: {
          particles_nb: 1,
        },
      },
    },
    retina_detect: true,
  };

  return <Particles id="tsparticles" options={particlesParams} />;
};

export default Particle;

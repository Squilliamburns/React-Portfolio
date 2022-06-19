import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "grab",
              parallax: {
                enable: true,
                force: 60,
                smooth: 10
              }
            },
            resize: true,
          },
          modes: {
            connect: {
              distance: 80,
              links: {
                opacity: 0.5
              },
              radius: 60
            },
            grab: {
              distance: 300,
              links: {
                blink: false,
                consent: false,
                opacity: 1
              }
            },
          },
        },
        particles: {
          color: {
            value: "#243a47",
          },
          links: {
            color: "#243a47",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 0.5,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 0.2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 0.1, max: 1 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default Particle;

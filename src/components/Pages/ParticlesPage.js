import { motion, AnimatePresence } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesPage = ({ stop }) => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const options = {
    background: {
      color: {
        value: "rgb(17,24,39)",
      },
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover",
    },
    fullScreen: {
      zIndex: 1,
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: ["repulse"],
        },
      },
      modes: {
        repulse: {
          distance: 120,
          divs: {
            distance: 200,
            duration: 0.4,
            factor: 100,
            speed: 1,
            maxSpeed: 50,
            easing: "ease-out-quad",
            selectors: [],
          },
        },
      },
    },
    particles: {
      links: {
        color: {
          value: "#ffffff",
        },
        distance: 500,
        opacity: 0.4,
        width: 2,
      },
      move: {
        attract: {
          rotate: {
            x: 600,
            y: 1200,
          },
        },
        direction: "bottom",
        enable: true,
        path: {},
        outModes: {
          bottom: "out",
          left: "out",
          right: "out",
          top: "out",
        },
        speed: 20,
        spin: {},
      },
      number: {
        density: {
          enable: true,
        },
        value: 150,
      },
      opacity: {
        random: {
          enable: true,
        },
        value: {
          min: 0.1,
          max: 0.5,
        },
        animation: {
          speed: 1,
          minimumValue: 0.1,
        },
      },
      size: {
        random: {
          enable: true,
        },
        value: {
          min: 1,
          max: 10,
        },
        animation: {
          speed: 40,
          minimumValue: 0.1,
        },
      },
    },
  };

  return (
    <AnimatePresence>
      {!stop && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3 }}
        >
          <Particles
            className="w-full h-full"
            id="tsparticles-page"
            init={particlesInit}
            options={options}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ParticlesPage;

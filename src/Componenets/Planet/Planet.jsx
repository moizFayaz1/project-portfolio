import {useEffect} from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import StarsCanvas from "../Stars";
import LogoCanvas from "../PlanetLogo";
import "./Planet.css";


const Planet = () => {

  const AnimateSkills = ({ children }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.6,
    });

    const controls = useAnimation();

    useEffect(() => {
      if (inView) {
        controls.start({ opacity: 1, x: 0 });
      }
    }, [inView, controls]);

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 150 }}
        animate={controls}
        transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
      >
        {children}
      </motion.div>
    );
  };


  return (
    <div className="planet">
      <StarsCanvas />
      <div className="planet-logo">
      <AnimateSkills>
      <LogoCanvas />
      </AnimateSkills>
      </div>
    </div>
  );
};

export default Planet;

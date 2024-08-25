import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Introduction.css";


const Introduction = () => {
  useEffect(() => {
    const containers = document.querySelectorAll(".skill-container");
    const handleMouseMove = (e) => {
      const element = e.currentTarget;
      rotateElement(e, element);
    };
    const handleMouseOut = (e) => {
      const element = e.currentTarget;
      element.style.setProperty("--rotateX", "0deg");
      element.style.setProperty("--rotateY", "0deg");
    };
    containers.forEach((element) => {
      element.addEventListener("mousemove", handleMouseMove);
      element.addEventListener("mouseout", handleMouseOut);
    });
    return () => {
      containers.forEach((element) => {
        element.removeEventListener("mousemove", handleMouseMove);
        element.removeEventListener("mouseout", handleMouseOut);
      });
    };
  }, []);

  const rotateElement = (event, element) => {
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const offsetX = (x / rect.width - 0.5) * 2 * 45;
    const offsetY = (y / rect.height - 0.5) * 2 * 45;

    requestAnimationFrame(() => {
      element.style.setProperty("--rotateX", -offsetY + "deg");
      element.style.setProperty("--rotateY", offsetX + "deg");
    });
  };

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           const { intersectionRatio, boundingClientRect } = entry;
  //           const visibleHeight = intersectionRatio * boundingClientRect.height;
  //           if (visibleHeight > 435) {
  //             document.querySelector(".intruduction-skills").style.transform =
  //               "translateX(0%)";
  //           }
  //         }
  //       });
  //     },
  //     {
  //       threshold: Array.from({ length: 101 }, (_, i) => i / 100),
  //     }
  //   );

  //   const target = document.querySelector(".introduction");
  //   observer.observe(target);
  // }, []);

  const AnimatedText = ({ text }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 1,
    });

    const controls = useAnimation();

    useEffect(() => {
      if (inView) {
        controls.start({ opacity: 1, y: 0 });
      }
    }, [inView, controls]);

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -40 }}
        animate={controls}
        transition={{ duration: 0.2, type: "spring", stiffness: 100 }}
      >
        {text}
      </motion.div>
    );
  };

  const AnimateSkills = ({ children }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.4,
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
        initial={{ opacity: 0, x: -250 }}
        animate={controls}
        transition={{ duration: 0.4, type: "spring", stiffness: 150 }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div className="introduction">
      <p className="introduction-mini-title">
        <AnimatedText text="Introduction" />
      </p>
      <p className="introduction-title">
        <div>
          <AnimatedText text="Overview" />
        </div>
        {/* Overview. */}
      </p>
      <p className="introduction-desc">
        I'm a skilled website developer with experience in React Js and
        Javascript, and expertise in frameworks like Node.js, and
        React.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </p>

      <AnimateSkills>
        <div className="intruduction-skills">
          <div className="skill-container">
            <img src="https://musaddiq.com/assets/web-08ko_qNY.png" alt="" />
            <p className="skill-title">
              Web <br /> Developer
            </p>
          </div>

          <div className="skill-container">
            <img src="https://musaddiq.com/assets/mobile-DOyYxxYf.png" alt="" />
            <p className="skill-title">
              React Native <br /> Developer
            </p>
          </div>

          <div className="skill-container">
            <img
              src="https://musaddiq.com/assets/backend-hTXvHAtb.png"
              alt=""
            />
            <p className="skill-title">
              Backend <br /> Developer
            </p>
          </div>

          <div className="skill-container">
            <img
              src="https://musaddiq.com/assets/creator-B3dXWOt8.png"
              alt=""
            />
            <p className="skill-title">
              Figma <br /> Enthusiast
            </p>
          </div>
        </div>
      </AnimateSkills>
    </div>
  );
};

export default Introduction;

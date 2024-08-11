import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Testimonials.css";

const Testimonials = () => {
  
  const AnimatedText = ({ children }) => {
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
        {children}
      </motion.div>
    );
  };

  return (
    <div className="testimonials">
      <AnimatedText>
        <p className="testimonials-title"> What others say</p>
        <p className="testimonials-heading">Testimonials.</p>
      </AnimatedText>
      <div className="testimonies-container">
        <div className="testimonies">
          <p className="tistimony-title">"</p>
          <p className="testimony">
            Muhammad done an excellent job, he was very quick and he is very
            friendly, I recommend u hire him.
          </p>
          <p className="testimonial-name">
            <span className="sign">@</span> Mohammad Azam
          </p>
        </div>

        <div className="testimonies">
          <p className="tistimony-title">"</p>
          <p className="testimony">
            I've never met a web developer who truly cares about their clients'
            success like Rick does.
          </p>
          <p className="testimonial-name">
            <span className="sign">@</span> Areeb ALi
          </p>
        </div>

        <div className="testimonies">
          <p className="tistimony-title">"</p>
          <p className="testimony">
            After Rick optimized our website, our traffic increased by 50%. We
            can't thank them enough!
          </p>
          <p className="testimonial-name">
            <span className="sign">@</span> Hafiz Azan
          </p>
        </div>
      </div>
      <div className="testimonials-background-one"></div>
      <div className="testimonials-background-two"></div>
    </div>

  );
};

export default Testimonials;

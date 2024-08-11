import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import StarsCanvas from "../Stars";
import "./Contact.css";

const Contact = () => {

  const AnimateContact = ({ children }) => {
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
        initial={{ opacity: 0, x: -100 }}
        animate={controls}
        transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div className="contact">
      <StarsCanvas />
      <div className="contact-overlay-container">
        <AnimateContact>
          <div className="contact-overlay">
            <p className="contact-title">Get in touch</p>
            <p className="contact-heading">Contact.</p>
            <form action="#">
              <label htmlFor="Name">Your Name*</label>
              <input type="text" placeholder="John Doe" />
              <label htmlFor="Name">Your Email*</label>
              <input type="text" placeholder="johndoe@gmail.com" />
              <label htmlFor="Name">Your Message*</label>
              <textarea
                name="message"
                placeholder="Hello there!"
                rows="8"
              ></textarea>
              <button type="button">Send</button>
            </form>
          </div>
        </AnimateContact>
      </div>
    </div>
  );
};

export default Contact;

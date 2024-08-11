import React from 'react';
import { motion } from 'framer-motion';

const animations = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
  jiggle: { rotate: [0, -10, 10, -10, 0] },
};

const AnimatedSection = ({ logoSrc, children, delay }) => (
  <motion.div
    initial="hidden"
    animate="visible"
    transition={{ duration: 1, delay }}
    variants={animations}
    className="section"
  >
    <img src={logoSrc} alt="logo" className="logo" />
    <div className="content">{children}</div>
  </motion.div>
);

const App = () => (
  <div className="container">
    <div className="line" />
    <AnimatedSection logoSrc="/path/to/logo1.png" delay={0}>
      <h2>Section 1</h2>
    </AnimatedSection>
    <AnimatedSection logoSrc="/path/to/logo2.png" delay={1}>
      <h2>Section 2</h2>
    </AnimatedSection>
    <AnimatedSection logoSrc="/path/to/logo3.png" delay={2}>
      <h2>Section 3</h2>
    </AnimatedSection>
  </div>
);

export default App;

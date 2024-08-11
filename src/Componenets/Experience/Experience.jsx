import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Experience.css";

const Experience = () => {

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

  const LogoImageAnimation = ({ children }) => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.7,
    });

    useEffect(() => {
      if (inView) {
        controls.start({
          opacity: 1,
          scale: [0.5, 1.05, 1],
          transition: { duration: 1.2},
        });
      }
    }, [inView, controls]);

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={controls}
        style={{ position: "absolute", top: "0%", left: "-69px" }}
      >
        {children}
      </motion.div>
    );
  };

  const AnimatedExperiences = ({ children }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.3,
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
        initial={{ opacity: 0, x: 100 }}
        animate={controls}
        transition={{ duration: 0.2, type: "spring", stiffness: 200 }}
      >
        {children}
      </motion.div>
    );
  };



  return (

    <div className="experience">
      <AnimatedText>
        <p className="experience-heading">What I have done so far</p>
        <p className="experience-heading-sub">Work Experience. </p>
      </AnimatedText>

      <AnimatedExperiences>
      <div className="experiences">
        <p className="experience-title">Software Engineer</p>
        <p className="experience-tag">AQMS Tech</p>
        <ul className="experience-desc">
          <li>
            WordPress Development: Designing and developing custom themes and
            plugins, ensuring responsive and user-friendly interfaces, and
            integrating various third-party tools and APIs.
          </li>
          <li>
            PHP Development: Building dynamic web applications, writing clean
            and efficient code, and debugging and resolving issues to improve
            performance and functionality.
          </li>
          <li>
            Project Management: Managing multiple projects simultaneously,
            collaborating with clients to understand their requirements, and
            delivering solutions that meet their expectations.
          </li>
        </ul>
        <p className="experience-date">Jan 2018 - Apr 2021</p>
        <div className="vertical-line one"></div>

        <LogoImageAnimation>
          <div className="company-logo">
            <img
              src="https://musaddiq.com/assets/starbucks-BjHQSWZu.png"
              alt=""
              className=""
            />
          </div>
        </LogoImageAnimation>
      </div>
      </AnimatedExperiences>

      <AnimatedExperiences>
      <div className="experiences">
        <p className="experience-title">Software Engineer</p>
        <p className="experience-tag">KoderLabs</p>
        <ul className="experience-desc">
          <li>
            React.js: Successfully built and maintained several high-traffic web
            applications, implementing state management and optimizing
            performance for improved user engagement.
          </li>
          <li>
            Next.js: Delivered SEO-optimized websites with server-side
            rendering, improving search engine visibility and site performance.
          </li>
          <li>
            Shopify: Designed and deployed e-commerce stores with custom
            features and seamless integrations, resulting in enhanced user
            experience and increased sales.
          </li>
          <li>
            WordPress: Customized themes and plugins to meet client
            requirements, improving site functionality and user interface,
            leading to positive client feedback.
          </li>
          <li>
            PHP: Developed robust backend solutions, including custom APIs and
            database integrations, streamlining site operations and improving
            data management.
          </li>
        </ul>
        <p className="experience-date">Apr 2021 - Jul 2023</p>
        <div className="vertical-line"></div>

        <LogoImageAnimation>
          <div className="company-logo">
            <img
              src="data:image/png;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/4QAuRXhpZgAATU0AKgAAAAgAAkAAAAMAAAABAAAAAEABAAEAAAABAAAAAAAAAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/2wBDAQsLCw8NDx0QEB09KSMpPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wAARCADIAMgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDyyiiivRNAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKK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"
              alt=""
              className=""
            />
          </div>
        </LogoImageAnimation>
      </div>  
      </AnimatedExperiences>

      <AnimatedExperiences>
      <div className="experiences">
        <p className="experience-title">Software Engineer</p>
        <p className="experience-tag">SIPLI FLEET</p>
        <ul className="experience-desc">
          <li>
            Software Engineer Specializing in React Development: As a skilled
            software engineer with a specialization in React, I excel in
            designing and developing dynamic web applications. My expertise lies
            in crafting responsive, user-centric websites with a strong emphasis
            on content management and customization. With a focus on delivering
            high-quality, scalable solutions, I leverage modern technologies to
            enhance user experience and drive business goals.
          </li>
        </ul>
        <p className="experience-date">Present</p>
        <div className="vertical-line"></div>

        <LogoImageAnimation>
          <div className="company-logo">
            <img
              src="https://musaddiq.com/assets/shopify-B5OEn7A-.png"
              alt=""
              className=""
            />
          </div>
        </LogoImageAnimation>
      </div>
      </AnimatedExperiences>

    </div>
  );
};

export default Experience;

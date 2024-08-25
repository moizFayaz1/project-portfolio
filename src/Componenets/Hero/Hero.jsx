import { useEffect } from "react";
import Computer from "../Computer";
import "./Hero.css";

const Hero = () => {
  useEffect(() => {
    const overlayDescBr = document.getElementById("overlay-desc-br");
    if (window.innerWidth < 660) {
      overlayDescBr.style.display = "none";
    }
  }, []);

  return (
    <div className="hero">
      <div className="hero-overlay">
        <div className="dotted-line">
          <div className="dot"></div>
          <div className="line"></div>
        </div>

        <div className="overlay-text">
          <p className="overlay-title">
            {`Hi, I'm`}
            <span className="overlay-title-color">Moiz</span>
          </p>
          <p className="overlay-desc">
            Software Engineer and Web Develope delivering
            <br id="overlay-desc-br" /> immersive digital solution with
            creativity and experties.
          </p>
        </div>
      </div>

      <div className="hero-canvas">
        <div style={{ width: "100%", height: "550px" }}>
          <Computer />
        </div>
      </div>

      <div className="mouse-icon">
        <span></span>
      </div>
    </div>
  );
};

export default Hero;

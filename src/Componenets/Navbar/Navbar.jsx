import "./Navbar.css";

import MenuIcon from "../../assets/menu-icon.svg";
import CloseIcon from "../../assets/close-icon.svg";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuBarToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const CloseMenuBar = () => {
    setIsOpen(false);
  };

  return (
    <div className="navbar">
      <div className="logo-heading">
        <span>
          <img
            src="https://musaddiq.com/assets/logo-DPWD56j-.svg"
            alt="Logo"
            width="30px"
          />
        </span>
        <span className="name">
          Moiz Fayaz <span className="name-sm">| Developer</span>
        </span>
      </div>

      <div className="nav-links">
        <ul className={isOpen ? "open" : "close"}>
          <Link
            to="introduction"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            <li>About</li>
          </Link>
          <Link
            to="experience"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            <li>Work</li>
          </Link>
          <Link
            to="testimonies"
            spy={true}
            smooth={true}
            offset={-200}
            duration={1000}
          >
            <li>Reviews</li>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            <li>Contacts</li>
          </Link>
        </ul>
        <img
          src={MenuIcon}
          alt="Menu"
          width="28px"
          className="menu-icon"
          onClick={menuBarToggle}
        />
        <img
          src={CloseIcon}
          alt="close-icon"
          width="28px"
          className="close-icon"
          onClick={CloseMenuBar}
        />
      </div>
    </div>
  );
};

export default Navbar;

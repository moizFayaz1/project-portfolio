import "./Navbar.css";

import MenuIcon from "../../assets/menu-icon.svg";
import CloseIcon from "../../assets/close-icon.svg";
import { useState } from "react";

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
          Musaddiq <span className="name-sm">| Developer</span>
        </span>
      </div>

      <div className="nav-links">
        <ul className={isOpen ? "open" : "close"}>
          <li>About</li>
          <li>Work</li>
          <li>Projects</li>
          <li>Contacts</li>
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

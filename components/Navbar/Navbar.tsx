"use client";
import { useState } from "react";
import classes from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={classes.nav}>
      <div className={classes.navContainer}>
        <p className={classes.navTitle}>Shehzain Hassan</p>

        <div className={classes.navLinks}>
          <a href="#about" className={classes.navLink}>
            About
          </a>
          <a href="#projects" className={classes.navLink}>
            Projects
          </a>
          <a href="#contact" className={classes.navLink}>
            Contact
          </a>
        </div>

        <button className={classes.hamburger} onClick={toggleMenu}>
          <span className={classes.bar}></span>
          <span className={classes.bar}></span>
          <span className={classes.bar}></span>
        </button>
      </div>

      <div
        className={`${classes.sidebar} ${isOpen ? classes.showSidebar : ""}`}>
        <button className={classes.closeBtn} onClick={toggleMenu}>
          ✕
        </button>
        <a href="#about" className={classes.navLink} onClick={toggleMenu}>
          About
        </a>
        <a href="#projects" className={classes.navLink} onClick={toggleMenu}>
          Projects
        </a>
        <a href="#contact" className={classes.navLink} onClick={toggleMenu}>
          Contact
        </a>
      </div>
    </nav>
  );
}

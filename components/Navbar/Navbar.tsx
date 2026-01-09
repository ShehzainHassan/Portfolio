"use client";
import { useEffect, useState } from "react";
import classes from "./Navbar.module.css";
import Button from "../Button/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${classes.nav} ${scrolled ? classes.scrolled : ""}`}>
      <div className={classes.navContainer}>
        <p className={classes.navTitle}>Shehzain Hassan</p>

        <div className={classes.navLinks}>
          <a href="#home" className={classes.navLink}>
            Home
          </a>
          <a href="#about" className={classes.navLink}>
            About
          </a>
          <a href="#skills" className={classes.navLink}>
            Skills
          </a>
          <a href="#projects" className={classes.navLink}>
            Projects
          </a>
          <a href="#contact" className={classes.navLink}>
            Contact
          </a>
        </div>

        <Button>Download CV</Button>

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
        <a href="#home" className={classes.navLink} onClick={toggleMenu}>
          Home
        </a>
        <a href="#about" className={classes.navLink} onClick={toggleMenu}>
          About
        </a>
        <a href="#skills" className={classes.navLink} onClick={toggleMenu}>
          Skills
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

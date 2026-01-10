"use client";
import { useEffect, useState } from "react";
import classes from "./Navbar.module.css";
import { Button } from "@/components/ui";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
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

        <div className={classes.desktopOnly}>
          <Button>Download CV</Button>
        </div>

        <button
          className={`${classes.hamburger} ${isOpen ? classes.open : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu">
          <span className={classes.bar}></span>
          <span className={classes.bar}></span>
          <span className={classes.bar}></span>
        </button>
      </div>

      <div
        className={`${classes.sidebar} ${isOpen ? classes.showSidebar : ""}`}>
        <button
          className={classes.closeBtn}
          onClick={toggleMenu}
          aria-label="Close navigation menu">
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

        <div className={classes.mobileOnly}>
          <Button>Download CV</Button>
        </div>
      </div>
    </nav>
  );
}

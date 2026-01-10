import { FaArrowUp } from "react-icons/fa";
import classes from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={classes.footer}>
      <p className={classes.footerText}>Shehzain Hassan - Portfolio Website</p>
      <div className={classes.backToTop}>
        <a href="#home">
          <FaArrowUp />
        </a>
      </div>
    </footer>
  );
}

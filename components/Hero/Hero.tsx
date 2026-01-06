import Button from "../Button/Button";
import classes from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={classes.hero}>
      <h1 className={classes.heroTitle}>
        <span>Building digital</span>
        <span className={classes.experience}>experiences</span>
      </h1>
      <p className={classes.heroSubtitle}>
        I&apos;m a creative developer who combines design and technology to
        build brands and websites that stand out.
      </p>
      <div className={classes.buttons}>
        <Button>View work</Button>
        <Button variant="secondary">Contact me</Button>
      </div>
    </div>
  );
}

import Button from "../Button/Button";
import ParticleBackground from "../ParticleBackground/ParticleBackground";
import classes from "./Hero.module.css";

export default function Hero() {
  return (
    <div id="home" className={classes.hero}>
      <ParticleBackground />
      <h1 className={classes.heroTitle}>
        <span>Building digital</span>
        <span className={classes.experience}>experiences</span>
      </h1>
      <p className={classes.heroSubtitle}>
        I&apos;m a creative developer who combines design and technology to
        build brands and websites that stand out.
      </p>
      <div className={classes.buttons}>
        <a href="#projects">
          <Button>View work</Button>
        </a>
        <a href="#contact">
          <Button variant="secondary">Contact me</Button>
        </a>
      </div>
    </div>
  );
}

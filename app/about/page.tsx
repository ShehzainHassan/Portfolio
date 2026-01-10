import classes from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <section id="about" className={classes.aboutMe}>
      <div className={classes.aboutMeContent}>
        <h1 className={classes.aboutMeTitle}>About Me</h1>
        <p className={classes.paragraph}>
          <span>
            Hello! I&apos;m a passionate developer with a keen eye for design. I
            believe that a website should not only work well but also look
            amazing and provide a delightful experience for the user.
          </span>
          <span>
            With 5 years of experience in the industry, I&apos;ve had the
            privilege of working with a diverse range of clients, from startups
            to established brands. My approach is collaborative and transparent,
            ensuring that we bring your vision to life exactly as you imagined
            it.
          </span>
          <span>
            When I&apos;m not coding, you can find me exploring new design
            trends, contributing to open source, or enjoying a good cup of
            coffee.
          </span>
        </p>
      </div>

      <div className={classes.timeline}>
        <ul className={classes.timelineList}>
          <li className={classes.timelineItem}>
            <div className={classes.timelineContent}>
              <div className={classes.timelineHeader}>
                <h3 className={classes.timelineHeading}>
                  Management Associate
                </h3>
                <p className={classes.timelineDate}>Nov 2025 - Present</p>
              </div>
              <p className={classes.timelineDescription}>
                Learned the fundamentals of frontend development, collaborated
                with senior developers, and contributed to small projects.
              </p>
            </div>
          </li>
          <li className={classes.timelineItem}>
            <div className={classes.timelineContent}>
              <div className={classes.timelineHeader}>
                <h3 className={classes.timelineHeading}>Freelancing</h3>
                <p className={classes.timelineDate}>Sep 2024 - Present</p>
              </div>
              <p className={classes.timelineDescription}>
                Learned the fundamentals of frontend development, collaborated
                with senior developers, and contributed to small projects.
              </p>
            </div>
          </li>
          <li className={classes.timelineItem}>
            <div className={classes.timelineContent}>
              <div className={classes.timelineHeader}>
                <h3 className={classes.timelineHeading}>
                  Software Engineer Intern
                </h3>
                <p className={classes.timelineDate}>Nov 2024 - Jan 2025</p>
              </div>
              <p className={classes.timelineDescription}>
                Learned the fundamentals of frontend development, collaborated
                with senior developers, and contributed to small projects.
              </p>
            </div>
          </li>
          <li className={classes.timelineItem}>
            <div className={classes.timelineContent}>
              <div className={classes.timelineHeader}>
                <h3 className={classes.timelineHeading}>Front Desk Officer</h3>
                <p className={classes.timelineDate}>Jun 2023 - Aug 2023</p>
              </div>
              <p className={classes.timelineDescription}>
                Learned the fundamentals of frontend development, collaborated
                with senior developers, and contributed to small projects.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

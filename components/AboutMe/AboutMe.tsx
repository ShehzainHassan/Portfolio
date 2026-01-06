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
              <h3 className={classes.timelineHeading}>Internship 1</h3>
              <p className={classes.timelineDescription}>
                Learned the fundamentals of frontend development, collaborated
                with senior developers, and contributed to small projects.
              </p>
            </div>
          </li>
          <li className={classes.timelineItem}>
            <div className={classes.timelineContent}>
              <h3 className={classes.timelineHeading}>Internship 2</h3>
              <p className={classes.timelineDescription}>
                Focused on backend technologies, gained experience with APIs,
                databases, and improved problem-solving skills.
              </p>
            </div>
          </li>
          <li className={classes.timelineItem}>
            <div className={classes.timelineContent}>
              <h3 className={classes.timelineHeading}>Freelancing</h3>
              <p className={classes.timelineDescription}>
                Worked with diverse clients, built websites and applications,
                and learned how to manage projects independently.
              </p>
            </div>
          </li>
          <li className={classes.timelineItem}>
            <div className={classes.timelineContent}>
              <h3 className={classes.timelineHeading}>Full-time Developer</h3>
              <p className={classes.timelineDescription}>
                Currently working as a creative developer, combining design and
                technology to deliver impactful digital experiences.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

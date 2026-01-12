import classes from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <section id="about" className={classes.aboutMe}>
      <div className={classes.aboutMeContent}>
        <h1 className={classes.aboutMeTitle}>About Me</h1>
        <p className={classes.paragraph}>
          <span>
            I&apos;m a <strong>Full Stack Web Developer</strong> and Computer
            Science graduate from <strong>FAST NUCES Lahore</strong>, with a{" "}
            <strong>CGPA of 3.29</strong>. My academic journey gave me a strong
            foundation in computer science principles and practical exposure to
            modern software development practices.
          </span>
          <span>
            I have worked as a Software Engineer Intern at Systems Limited,
            where I developed B2C web applications using React (Next.js) and
            contributed to team-based code reviews to improve code quality. In
            addition, my freelancing projects includes <strong>BoxCars</strong>,
            a real-time SaaS platform for car auctions and financing, and{" "}
            <strong>BFM</strong>, a financial dashboard web app built with
            React, TypeScript, Styled Components, and Recharts.
          </span>
          <span>
            I also built <strong>Rendera</strong>, a responsive web app for
            browsing jewelry collections, and contributed backend services using
            C# (.NET Core) and FastAPI microservices for BoxCars. In BoxCars, I
            implemented real-time notification system with SignalR and
            integrated machine learning-based recommendation system to
            personalize for vehicle recommendations.
          </span>
          <span>
            I am comfortable working with React, Next.js, JavaScript,
            TypeScript, React Native, Styled Components, Tailwind CSS, MongoDB,
            Express, .NET, and Git. I am passionate about performance
            optimization, regularly improving Lighthouse scores across my
            projects, and ensuring all dependencies remain up to date for
            maintainability and security.
          </span>
        </p>
      </div>

      <div className={classes.timeline}>
        <ul className={classes.timelineList}>
          <li className={classes.timelineItem}>
            <div className={classes.timelineContent}>
              <div className={classes.timelineHeader}>
                <h3 className={classes.timelineHeading}>
                  Tech MTO - The Bank of Punjab
                </h3>
                <p className={classes.timelineDate}>Nov 2025 – Present</p>
              </div>
              <p className={classes.timelineDescription}>
                Currently working as a Management Trainee Officer in Technology,
                developing web-based projects using Java. Contributing to
                enterprise applications, enhancing internal workflows, and
                collaborating with cross-functional teams to deliver scalable
                solutions.
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
                Delivered multiple freelance projects including BoxCars (car
                auction & finance platform), BFM (financial dashboard), and
                Rendera (responsive jewelry browsing app). Focused on building
                scalable frontends with React/TypeScript and robust backends
                with .NET and FastAPI microservices.
              </p>
            </div>
          </li>

          <li className={classes.timelineItem}>
            <div className={classes.timelineContent}>
              <div className={classes.timelineHeader}>
                <h3 className={classes.timelineHeading}>
                  Software Engineer Intern - Systems Limited
                </h3>
                <p className={classes.timelineDate}>Nov 2024 - Jan 2025</p>
              </div>
              <p className={classes.timelineDescription}>
                Developed B2C web applications using React (Next.js).
                Participated in team-based code reviews, improved code quality,
                and aligned implementation with client requirements using Git
                and best practices.
              </p>
            </div>
          </li>

          <li className={classes.timelineItem}>
            <div className={classes.timelineContent}>
              <div className={classes.timelineHeader}>
                <h3 className={classes.timelineHeading}>
                  Front Desk Officer - FAST NUCES
                </h3>
                <p className={classes.timelineDate}>Jun 2023 - Aug 2023</p>
              </div>
              <p className={classes.timelineDescription}>
                Streamlined office and admission workflows by coordinating with
                5+ departments, improving inter-team communication and
                efficiency. Also served as an invigilator during examinations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

import { Timeline } from "@/components";
import classes from "./AboutMe.module.css";

const aboutMeContent = [
  <>
    I&apos;m a <strong>Full Stack Web Developer</strong> and Computer Science
    graduate from <strong>FAST NUCES Lahore</strong>, with a{" "}
    <strong>CGPA of 3.29</strong>. My academic journey gave me a strong
    foundation in computer science principles and practical exposure to modern
    software development practices.
  </>,
  <>
    I have worked as a Software Engineer Intern at Systems Limited, where I
    developed B2C web applications using React (Next.js) and contributed to
    team-based code reviews to improve code quality. In addition, my freelancing
    projects includes <strong>BoxCars</strong>, a real-time SaaS platform for
    car auctions and financing, and <strong>BFM</strong>, a financial dashboard
    web app built with React, TypeScript, Styled Components, and Recharts.
  </>,
  <>
    I also built <strong>Rendera</strong>, a responsive web app for browsing
    jewelry collections, and contributed backend services using C# (.NET Core)
    and FastAPI microservices for BoxCars. In BoxCars, I implemented real-time
    notification system with SignalR and integrated machine learning-based
    recommendation system to personalize for vehicle recommendations.
  </>,
  <>
    I am comfortable working with React, Next.js, JavaScript, TypeScript, React
    Native, Styled Components, Tailwind CSS, MongoDB, Express, .NET, and Git. I
    am passionate about performance optimization, regularly improving Lighthouse
    scores across my projects, and ensuring all dependencies remain up to date
    for maintainability and security.
  </>,
];

export default function AboutMe() {
  return (
    <section id="about" className={classes.aboutMe}>
      <div className={classes.aboutMeContent}>
        <h1 className={classes.aboutMeTitle}>About Me</h1>

        <p className={classes.paragraph}>
          {aboutMeContent.map((content, index) => (
            <span key={index}>{content}</span>
          ))}
        </p>
      </div>

      <Timeline />
    </section>
  );
}

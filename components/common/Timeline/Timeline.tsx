import classes from "./Timeline.module.css";
import TimelineItem from "./TimelineItem";

const timelineData = [
  {
    heading: "Tech MTO - The Bank of Punjab",
    date: "Nov 2025 - Present",
    description:
      "Currently working as a Management Trainee Officer in Technology, developing web-based projects using Java. Contributing to enterprise applications, enhancing internal workflows, and collaborating with cross-functional teams to deliver scalable solutions.",
  },
  {
    heading: "Freelancing",
    date: "Sep 2024 - Present",
    description:
      "Delivered multiple freelance projects including BoxCars (car auction & finance platform), BFM (financial dashboard), and Rendera (responsive jewelry browsing app). Focused on building scalable frontends with React/TypeScript and robust backends with .NET and FastAPI microservices.",
  },
  {
    heading: "Software Engineer Intern - Systems Limited",
    date: "Nov 2024 - Jan 2025",
    description:
      "Developed B2C web applications using React (Next.js). Participated in team-based code reviews, improved code quality, and aligned implementation with client requirements using Git and best practices.",
  },
  {
    heading: "Front Desk Officer - FAST NUCES",
    date: "Jun 2023 - Aug 2023",
    description:
      "Streamlined office and admission workflows by coordinating with 5+ departments, improving inter-team communication and efficiency. Also served as an invigilator during examinations.",
  },
];

export default function Timeline() {
  return (
    <div className={classes.timeline}>
      <ul className={classes.timelineList}>
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            heading={item.heading}
            date={item.date}
            description={item.description}
          />
        ))}
      </ul>
    </div>
  );
}

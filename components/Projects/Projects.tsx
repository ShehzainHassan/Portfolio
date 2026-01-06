import ProjectCard from "../ProjectCard/ProjectCard";
import classes from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={classes.projects}>
      <div className={classes.titleContainer}>
        <h1 className={classes.title}>Selected Work</h1>
        <p className={classes.description}>
          Here are a few projects I&apos;ve worked on recently.
        </p>
      </div>
      <div className={classes.projectCards}>
        <ProjectCard
          title="BoxCars"
          description="A car rental platform with modern UI and booking features."
          imageUrl="/images/boxcars.png"
          tags={["React", "Next.js", "Tailwind"]}
        />
        <ProjectCard
          title="BFM"
          description="Business finance management dashboard with analytics."
          imageUrl="/images/boxcars.png"
          tags={["Node.js", "MongoDB", "Express"]}
        />
        <ProjectCard
          title="Rendera"
          description="Creative portfolio builder for designers and developers."
          imageUrl="/images/boxcars.png"
          tags={["Figma", "Vercel", "TypeScript"]}
        />
      </div>
    </section>
  );
}

import Image from "next/image";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import classes from "./ProjectCard.module.css";
import { ProjectCardProps } from "./ProjectCard.types";

export default function ProjectCard({
  title,
  description,
  imageUrl,
  tags,
  siteUrl,
  codeUrl,
}: ProjectCardProps) {
  return (
    <div className={classes.projectCard}>
      <div className={classes.projectImage}>
        <Image src={imageUrl} alt={title} className={classes.image} fill />
        <div className={classes.overlay}>
          <div className={classes.iconWrapper}>
            <a href={siteUrl} target="_blank" className={classes.circleButton}>
              <FaExternalLinkAlt />
              <span className={classes.tooltip}>View Live</span>
            </a>
          </div>
          <div className={classes.iconWrapper}>
            <a href={codeUrl} target="_blank" className={classes.circleButton}>
              <FaCode />
              <span className={classes.tooltip}>View Code</span>
            </a>
          </div>
        </div>
      </div>
      <div className={classes.projectInfo}>
        <h1 className={classes.projectTitle}>{title}</h1>
        <p className={classes.projectDescription}>{description}</p>
        <div className={classes.tags}>
          {tags?.map((tag) => (
            <span key={tag} className={classes.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

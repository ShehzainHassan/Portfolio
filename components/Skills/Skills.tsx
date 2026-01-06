import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiDotnet,
  SiFigma,
  SiVercel,
} from "react-icons/si";
import classes from "./Skills.module.css";

const skillsData = [
  { name: "React", icon: <FaReact color="#61DBFB" /> },
  { name: "Next.js", icon: <SiNextdotjs color="currentColor" /> },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
  { name: "Node.js", icon: <FaNodeJs color="#68A063" /> },
  { name: "Express", icon: <SiExpress color="currentColor" /> },
  { name: "MongoDB", icon: <SiMongodb color="#4DB33D" /> },
  { name: ".NET", icon: <SiDotnet color="#512BD4" /> },
  { name: "Git", icon: <FaGitAlt color="#F1502F" /> },
  { name: "Figma", icon: <SiFigma color="#F24E1E" /> },
  { name: "Vercel", icon: <SiVercel color="currentColor" /> },
];

export default function Skills() {
  return (
    <section id="skills" className={classes.skills}>
      <h1 className={classes.skillsTitle}>My Skills</h1>
      <div className={classes.skillsRow}>
        {skillsData.map((skill) => (
          <div key={skill.name} className={classes.skillCard}>
            <div className={classes.icon}>{skill.icon}</div>
            <span className={classes.skillName}>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

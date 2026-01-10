import IconCard from "../IconCard";
import classes from "./SkillCard.module.css";
import PlaceIcon from "@mui/icons-material/Place";
export default function SkillCard() {
  return (
    <div className={classes.skillCard}>
      <div className={classes.titleContainer}>
        <IconCard icon={<PlaceIcon />} />
        <h1 className={classes.title}>UI/UX Design</h1>
      </div>
      <p className={classes.description}>
        Creating intuitive and beautiful user interfaces with a focus on user
        experience and accessibility.
      </p>
    </div>
  );
}

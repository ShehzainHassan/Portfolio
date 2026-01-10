import classes from "./IconCard.module.css";
import { IconCardProps } from "./IconCard.types";
export default function IconCard({ icon }: IconCardProps) {
  return <div className={classes.iconCard}>{icon}</div>;
}

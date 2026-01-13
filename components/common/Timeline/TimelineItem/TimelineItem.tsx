import classes from "./TimelineItem.module.css";
import { TimelineItemProps } from "./TimelineItem.types";

export default function TimelineItem({
  heading,
  date,
  description,
}: TimelineItemProps) {
  return (
    <li className={classes.timelineItem}>
      <div className={classes.timelineContent}>
        <div className={classes.timelineHeader}>
          <h3 className={classes.timelineHeading}>{heading}</h3>
          <p className={classes.timelineDate}>{date}</p>
        </div>
        <p className={classes.timelineDescription}>{description}</p>
      </div>
    </li>
  );
}

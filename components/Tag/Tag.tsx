import classes from "./Tag.module.css";
import { TagProps } from "./Tag.types";
export default function Tag({ tag }: TagProps) {
  return <div className={classes.tag}>{tag}</div>;
}

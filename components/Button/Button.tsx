import classes from "./Button.module.css";
import { ButtonProps } from "./Button.types";
export default function Button({ children, variant = "primary" }: ButtonProps) {
  return (
    <button className={`${classes.button} ${classes[variant]}`}>
      {children}
    </button>
  );
}

import classes from "./Button.module.css";
import { ButtonProps } from "./Button.types";
export default function Button({
  children,
  variant = "primary",
  type = "button",
  disabled = false,
}: ButtonProps) {
  return (
    <button
      className={`${classes.button} ${classes[variant]} ${
        disabled ? classes.disabled : ""
      }`}
      type={type}
      disabled={disabled}>
      {children}
    </button>
  );
}

import classes from "./LoadingSpinner.module.css";

export default function LoadingSpinner() {
  return (
    <div className={classes.spinnerOverlay}>
      <div className={classes.spinner}></div>
    </div>
  );
}

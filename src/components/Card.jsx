import "./Card.css";

export function Card({ children, className }) {
  const classes = `card ${className || ""}`;

  return <div className={classes}>{children}</div>;
}

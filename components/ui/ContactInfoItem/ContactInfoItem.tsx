"use client";

import { IconCard } from "@/components/common";
import classes from "./ContactInfoItem.module.css";
import { ContactInfoItemProps } from "./ContactInfoItem.types";
export default function ContactInfoItem({
  icon,
  label,
  value,
  href,
}: ContactInfoItemProps) {
  return (
    <div className={classes.contactInfoItem}>
      <IconCard icon={icon} />
      <div className={classes.textContainer}>
        <p className={classes.label}>{label}</p>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.value}>
            {value}
          </a>
        ) : (
          <p className={classes.value}>{value}</p>
        )}
      </div>
    </div>
  );
}

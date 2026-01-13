import { ReactNode } from "react";

export interface ContactInfoItemProps {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
}

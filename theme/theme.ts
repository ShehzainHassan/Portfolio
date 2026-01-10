import { colors } from "./colors";
import { typography } from "./typography";

export const theme = {
  colors,
  typography: {
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize,
  },
} as const;

export type Theme = typeof theme;

"use client";
import { createContext, useContext, ReactNode } from "react";
import { theme } from "@/theme/theme";

type ThemeType = typeof theme;

interface ThemeContextProps {
  theme: ThemeType;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const colors = theme.colors;

  const styleVars: Record<string, string> = {
    "--color-primary-main": colors.primary.main,
    "--color-primary-dark": colors.primary.dark,
    "--color-primary-deep": colors.primary.deep,

    "--color-text-primary": colors.text.primary,
    "--color-text-secondary": colors.text.secondary,
    "--color-text-muted": colors.text.muted,

    "--color-background-base": colors.background.base,
    "--color-background-surface": colors.background.surface,
    "--color-background-dark": colors.background.dark,

    "--color-border-default": colors.border.default,
    "--color-border-light": colors.border.light,
  };

  return (
    <ThemeContext.Provider value={{ theme }}>
      <div style={{ ...styleVars, minHeight: "100vh" }}>{children}</div>
    </ThemeContext.Provider>
  );
};

"use client";
import { theme, Theme } from "@/theme";
import { createContext, useContext, useEffect } from "react";

interface ThemeContextValue {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const root = document.documentElement;

    Object.entries(theme.colors).forEach(([group, values]) => {
      Object.entries(values).forEach(([key, value]) => {
        root.style.setProperty(`--color-${group}-${key}`, value);
      });
    });

    Object.entries(theme.typography.fontSize).forEach(([key, value]) => {
      root.style.setProperty(`--typography-fontSize-${key}`, value);
    });

    Object.entries(theme.typography.fontFamily).forEach(([key, value]) => {
      root.style.setProperty(`--typography-fontFamily-${key}`, value);
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
}

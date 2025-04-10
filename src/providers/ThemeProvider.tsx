"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({
  theme: "light",
  toggleTheme: () => { },
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // Check localStorage first
    const storedTheme = localStorage.getItem("theme") as Theme;
    // Check system preference
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Determine initial theme
    const initialTheme = storedTheme || (systemPreference ? "dark" : "light");

    // Set initial theme
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");

    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    // Update state and localStorage
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    // Update class on document element
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(newTheme);
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
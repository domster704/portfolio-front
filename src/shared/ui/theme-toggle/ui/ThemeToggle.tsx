"use client";

import { useTheme } from "@app/providers/ThemeProvider";

const ThemeToggle = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <button type="button" aria-label="Toggle theme" onClick={toggleTheme}>
      {theme === "light" ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeToggle;

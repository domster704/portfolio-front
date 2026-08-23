"use client";

import { useTheme } from "next-themes";
import styles from "./ThemeToggle.module.scss";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  const toggleTheme = () => {
    const isDark = document.documentElement.dataset.theme === "dark";

    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      className={styles.toggle}
      type="button"
      aria-label="Toggle theme"
      onClick={toggleTheme}
    >
      <span className={styles.lightIcon}>☀️</span>
      <span className={styles.darkIcon}>🌙</span>
    </button>
  );
}

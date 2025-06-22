"use client";

import { useState, useEffect } from "react";

export function SimpleThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check initial theme
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    alert("Simple toggle clicked!"); // Debug
    const newIsDark = !isDark;
    setIsDark(newIsDark);

    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) {
    return <button className="p-2 border rounded">Loading...</button>;
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 border rounded bg-white dark:bg-gray-800 text-black dark:text-white"
    >
      {isDark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}

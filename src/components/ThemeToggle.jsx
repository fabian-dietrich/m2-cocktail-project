import { useState, useEffect } from "react";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateMetaThemeColor(savedTheme);
  }, []);

  const updateMetaThemeColor = (currentTheme) => {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      if (currentTheme === "dark") {
        metaThemeColor.setAttribute("content", "#8b5cf6"); // Purple for dark mode
      } else {
        metaThemeColor.setAttribute("content", "rgb(229, 100, 19)"); // Orange for light mode
      }
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateMetaThemeColor(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Toggle dark mode"
    >
      {theme === "light"
        ? "😎 Activate Josh Mode"
        : "👻 Too Spooky, Lights On!"}
    </button>
  );
};

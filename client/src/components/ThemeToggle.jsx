import React, { useState, useEffect } from "react";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-secondary text-white shadow-md hover:bg-primary transition"
    >
      {isDarkMode ? <MdOutlineLightMode size={24} /> : <MdDarkMode size={24} />}
    </button>
  );
};

export default ThemeToggle;

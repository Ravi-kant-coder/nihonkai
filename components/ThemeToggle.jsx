"use client";
import { CloudRainWind, Sun } from "lucide-react";
import { useState, useEffect } from "react";
const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="flex flex-col lg:flex-row lg:w-[140px] bg-black dark:bg-white text-white rounded-md lg:h-8 items-center justify-center cursor-pointer dark:text-black"
      onClick={() => setDarkMode(!darkMode)}
    >
      <span className="flex flex-col  lg:pt-0 lg:flex-row items-center px-2 justify-center lg:justify-between">
        {darkMode ? <Sun /> : <CloudRainWind />}
        {darkMode ? (
          <span className="ml-2 lg:text-md text-sm">Sun Mode</span>
        ) : (
          <span className="ml-2 lg:text-md text-sm">Rain Mode</span>
        )}
      </span>
    </div>
  );
};
export default ThemeToggle;

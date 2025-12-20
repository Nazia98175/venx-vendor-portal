"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full absolute top-6 right-5 text-lightgrey dark:text-white mr-1"
    >
      <Sun className="rounded-full absolute top-1 right-0 text-lightgrey h-[1.8rem] w-[1.8rem] rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
      <Moon className="rounded-full absolute top-1 right-0 text-lightgrey h-[1.8rem] w-[1.8rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};

export default ThemeToggle;

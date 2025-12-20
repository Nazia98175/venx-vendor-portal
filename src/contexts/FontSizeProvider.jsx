"use client";
import { createContext, useContext, useState, useEffect } from "react";

// Create Font Size Context
const FontSizeContext = createContext();

// Custom Hook to Use Font Size
export const useFontSize = () => useContext(FontSizeContext);

// Provider Component
export const FontSizeProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState(16); // Default font size

  // Load saved font size from localStorage when the component mounts
  useEffect(() => {
    const savedSize = localStorage.getItem("fontSize");
    if (savedSize) {
      setFontSize(parseInt(savedSize, 10));
    }
  }, []);

  // Function to Increase Font Size
  const increaseFontSize = () => {
    setFontSize((prevSize) => {
      const newSize = prevSize + 1;
      localStorage.setItem("fontSize", newSize);
      return newSize;
    });
  };

  // Function to Decrease Font Size
  const decreaseFontSize = () => {
    setFontSize((prevSize) => {
      const newSize = prevSize > 9 ? prevSize - 1 : prevSize; // Minimum font size of 12px
      localStorage.setItem("fontSize", newSize);
      return newSize;
    });
  };

  return (
    <FontSizeContext.Provider
      value={{ fontSize, increaseFontSize, decreaseFontSize }}
    >
      {/* Apply font size globally to the entire website */}
      <style jsx global>{`
        html,
        body {
          font-size: ${fontSize}px !important;
        }
      `}</style>
      {children}
    </FontSizeContext.Provider>
  );
};

"use client";
import { Minus, Plus } from "lucide-react";
import { Input } from "../ui/input";
import { useFontSize } from "src/contexts/FontSizeProvider";

const FontSizeToggle = () => {
  const { increaseFontSize, decreaseFontSize, fontSize } = useFontSize();

  return (
    <div className="flex items-center gap-2">
      {/* Font Size Input Box */}
      <Input
        type="text"
        value={fontSize}
        readOnly
        className="w-9 h-[35px] px-1 py-1 text-center border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-800 dark:text-white"
      />

      {/* Increase / Decrease Buttons */}
      <button
        onClick={decreaseFontSize}
        className="flex items-center justify-center w-6 h-6 border rounded-md text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        <Minus size={16} />
      </button>
      <button
        onClick={increaseFontSize}
        className="flex items-center justify-center w-6 h-6 border rounded-md text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        <Plus size={16} />
      </button>
    </div>
  );
};

export default FontSizeToggle;

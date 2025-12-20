import { useState } from "react";

const CustomCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      {/* Example 1: Simple Custom Checkbox using Tailwind only */}
      <div className="flex items-center space-x-[6px]">
        <div
          className={`w-5 h-5 flex items-center justify-center border rounded cursor-pointer ${
            isChecked
              ? "bg-tangerine border-tangerine"
              : "bg-white border-gray-300"
          }`}
          onClick={toggleCheckbox}
        >
          {isChecked && (
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          )}
        </div>
        <label
          className="text-sm lg:text-base font-normal text-commodore  dark:text-white cursor-pointer font-inter"
          onClick={toggleCheckbox}
        >
          Remember me
        </label>
      </div>
    </>
  );
};

export default CustomCheckbox;

"use client";

import { useState } from "react";
import { SearchSvg } from "../icons/CommonDashboardSvg";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
const FilterPopup = ({ open, setOpen, options = [], onFilterSelect }) => {
  const [search, setSearch] = useState("");

  // Map option keys to display names - Define this before using it
  const getDisplayName = (option) => {
    const displayNames = {
      productview: "By Product",
      invoiceview: "By Invoice",
      ageslabview: "By Age Slab",
      priceslabview: "By Price Slab",
      groupview: "By Group",
    };
    return displayNames[option] || option;
  };

  // Filter options based on search - Move this after getDisplayName is defined
  const filteredOptions = options.filter((option) =>
    getDisplayName(option).toLowerCase().includes(search.toLowerCase())
  );

  // Handle filter selection
  const handleFilterSelect = (filterType) => {
    if (onFilterSelect) {
      onFilterSelect(filterType);
    }
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen} className="z-[9999] ">
      <DialogContent
        className="w-[167px] p-0 lg:p-0 m-0 h-auto gap-0
       lg:h-auto bg-white dark:bg-darkblue rounded-lg shadow-lg"
      >
        <DialogHeader>
          <DialogTitle
            className="text-dead dark:text-white border-b
           border-moderate/20 dark:border-white/20 text-sm lg:text-base
            text-left lg:text-left px-[14px] py-2 mt-2 "
          >
            Divide By:
          </DialogTitle>
        </DialogHeader>

        <div className="text-dead/70 dark:text-white/70">
          <div
            className="relative w-full border-b border-moderate/20
           dark:border-white/20 px-2 py-1"
          >
            <div
              className="flex absolute top-3 translate-x-1 left-0
             items-center pl-2 pointer-events-none"
            >
              <SearchSvg />
            </div>
            <input
              type="text"
              className="filter-popup-input-style"
              placeholder="Search here"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {/* Options */}
          {filteredOptions.map((option) => (
            <button
              key={option}
              className="w-full text-left px-[14px] py-2 text-sm lg:text-base
               hover:bg-gray-100 dark:hover:bg-sharp border-b dark:border-white/20 border-moderate/20"
              onClick={() => handleFilterSelect(option)}
            >
              {getDisplayName(option)}
            </button>
          ))}

          {/* Search input */}

          {/* Show "No options" if filtered list is empty */}
          {filteredOptions.length === 0 && (
            <div className="px-4 py-2 text-gray-500 dark:text-gray-400 italic">
              No options available
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FilterPopup;

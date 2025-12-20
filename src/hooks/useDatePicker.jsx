import React from "react";
export default function useDatePicker() {
  const [date, setDate] = React.useState(null);
  const [otherDate, setOtherDate] = React.useState(null);
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);
  const [filters, setFilters] = React.useState(null);

  const [isStartOpen, setIsStartOpen] = React.useState(false);
  const [isEndOpen, setIsEndOpen] = React.useState(false);

  const handleApplyFilters = (newFilters) => {
    setFilters(newFilters);
    console.log("Applied Filters:", newFilters);
  };
  return {
    date,
    setDate,
    otherDate,
    setOtherDate,
    isFilterOpen,
    setIsFilterOpen,
    isStartOpen,
    setIsStartOpen,
    isEndOpen,
    setIsEndOpen,
    handleApplyFilters,
  };
}

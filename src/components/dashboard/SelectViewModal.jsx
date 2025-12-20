"use client";
import { useMemo, useState } from "react";
import { SearchSvg, VoiceOption } from "../icons/CommonDashboardSvg";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import FilterPopup from "./FilterPopup";
const SelectViewModal = ({
  isOpen,
  onClose,
  title,
  tableHeaders,
  tableData,
  filterOptions = [],
  onRowClick,
  onGoBack,
  onFilterSelect,
}) => {
  const [search, setSearch] = useState("");
  const [showFilterPopup, setShowFilterPopup] = useState(false);

  // Calculate totals and add total row
  const processedData = useMemo(() => {
    if (!tableData || tableData.length === 0) return [];

    // Create a copy of the original data
    const data = [...tableData];

    // Check if the last row is already a total row
    const lastRow = data[data.length - 1];
    if (lastRow[0] === "") {
      // Already has a total row, return as is
      return data;
    }
    // Determine which columns contain quantity and value
    // For most views: Quantity is column 1, Value is column 2
    // For invoice view: Quantity is column 2, Value is column 3
    const quantityIndex = title.includes("Invoice") ? 2 : 1;
    const valueIndex = title.includes("Invoice") ? 3 : 2;

    // Calculate totals
    let totalQuantity = 0;
    let totalValue = 0;

    data.forEach((row) => {
      // Handle quantity - remove commas if present
      const quantityStr = row[quantityIndex]
        ? row[quantityIndex].toString()
        : "0";
      const quantity = parseInt(quantityStr.replace(/,/g, ""), 10);
      totalQuantity += isNaN(quantity) ? 0 : quantity;

      // Handle value - remove commas if present
      const valueStr = row[valueIndex] ? row[valueIndex].toString() : "0";
      const value = parseInt(valueStr.replace(/,/g, ""), 10);
      totalValue += isNaN(value) ? 0 : value;
    });

    // Create total row
    const totalRow = Array(tableHeaders.length).fill("");
    totalRow[quantityIndex] = totalQuantity.toString();
    totalRow[valueIndex] = totalValue.toLocaleString();

    // Add total row to data
    data.push(totalRow);

    return data;
  }, [tableData, title, tableHeaders]);

  // Filter the data based on search term
  const filteredData = useMemo(() => {
    if (!processedData || processedData.length === 0) return [];

    return processedData.filter((row) => {
      // Don't filter the total row (last row)
      if (row[0] === "") return true;

      // Check if any cell in the row contains the search term
      return row.some((cell) =>
        cell.toString().toLowerCase().includes(search.toLowerCase())
      );
    });
  }, [processedData, search]);

  // Handle row click to show filter popup
  const handleRowClick = (row, rowIndex) => {
    if (rowIndex === filteredData.length - 1) return; // Don't handle click on total row

    if (onRowClick) {
      onRowClick(row, rowIndex);
      setShowFilterPopup(true);
    }
  };

  // Handle filter selection
  const handleFilterSelect = (filterType) => {
    setShowFilterPopup(false);
    if (onFilterSelect) {
      onFilterSelect(filterType);
    }
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <DialogContent className="bg-white dark:bg-war dark:border-edgar/20 border h-fit p-6 rounded-lg w-[90%] max-w-lg z-50">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold dark:text-white">
              {title}
            </DialogTitle>
          </DialogHeader>

          {/* Search Input */}
          <div className="relative w-full z-10 rounded-full">
            <div className="flex absolute translate-y-2 translate-x-1 left-0 items-center pl-2 pointer-events-none">
              <SearchSvg />
            </div>
            <input
              type="text"
              id="search-input"
              className="w-full px-10 py-2 rounded-full text-lavender border border-edgar/20 dark:bg-darkblue dark:text-white"
              placeholder="Search here"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="flex absolute -translate-y-8 translate-x-1 right-0 items-center pr-3 cursor-pointer hover:opacity-70">
              <VoiceOption />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-auto max-h-[60vh]">
            <Table className="w-full border border-dead/20 dark:border-edgar/70 rounded-xl dark:bg-white/10">
              <TableHeader>
                <TableRow className="bg-commodore ">
                  {tableHeaders &&
                    tableHeaders.map((header, index) => (
                      <TableHead
                        key={index}
                        className="px-3 py-2 text-left border border-[white]/20 dark:border-edgar/20 text-white dark:text-white"
                      >
                        {header}
                      </TableHead>
                    ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((row, rowIndex) => (
                  <TableRow
                    key={rowIndex}
                    className={`border border-moderate/20 dark:border-edgar/20 dark:text-white 
                    ${
                      rowIndex === filteredData.length - 1
                        ? "font-bold"
                        : "hover:bg-gray-50 dark:hover:bg-darkblue/50 cursor-pointer"
                    }`}
                    onClick={() => handleRowClick(row, rowIndex)}
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="border border-moderate/20 dark:border-edgar/20 p-2"
                      >
                        {cell}
                      </td>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Back Button */}
          <div className="flex w-full justify-end items-end">
            <Button
              onClick={onGoBack}
              className="bg-orange-500 text-white w-fit mt-5 rounded-md py-2 px-4 text-sm lg:text-base"
            >
              Back
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Filter Popup */}
      <FilterPopup
        open={showFilterPopup}
        setOpen={setShowFilterPopup}
        options={filterOptions}
        onFilterSelect={handleFilterSelect}
      />
    </>
  );
};

export default SelectViewModal;

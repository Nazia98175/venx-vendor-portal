"use client";
import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Switch } from "../ui/switch";
import { CalendarIcon } from "../icons/CommonPurchaseOrderSvg";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";

const PurchaseOrderFilterModal = ({ isOpen, onClose, onApply }) => {
  const [filters, setFilters] = useState({
    inputNumber: "",
    logisticNumber: "",
    invoiceNumber: "",
    startDate: "",
    endDate: "",
    agency: "",
    items: "",
    minQuantity: "",
    maxQuantity: "",
    minPending: "",
    maxPending: "",
    minReceived: "",
    maxReceived: "",
    delivered: false,
    fulfilled: "",
  });
  const [anotherFilters, setAnotherFilters] = useState({
    inputNumber: "",
    startDate: "",
    endDate: "",
    agency: "",
    items: "",
    minQuantity: "", // For >= input
    maxQuantity: "", // For the main input
    minReceived: "",
    maxReceived: "",
    minPending: "",
    maxPending: "",
    received: "",
    delivered: false,
    fulfilled: "",
  });

  const [date, setDate] = useState(null);
  const [otherDate, setOtherDate] = useState(null);
  const [isStartOpen, setIsStartOpen] = useState(false);
  const [isEndOpen, setIsEndOpen] = useState(false);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[23rem] md:max-w-sm lg:max-w-md h-full px-4 lg:px-6 rounded-none lg:rounded-lg dark:bg-war dark:border-edgar/20">
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>
        <div className="grid gap-1 lg:gap-3 max-h-[495px] overflow-auto lg:overflow-visible p-2">
          <div className="flex flex-col lg:flex-row items-start whitespace-nowrap lg:items-center justify-between max-w-full w-full ">
            <label htmlFor="number" className="text-sm lg:text-base">
              PO Number:
            </label>
            <input
              name="inputNumber"
              value={filters.inputNumber}
              onChange={handleChange}
              className="max-w-full lg:max-w-[17rem] w-full px-4 py-2 border border-quatanery rounded-md focus:outline-none focus:ring-2 focus:ring-commodore  dark:bg-commodore  dark:border-whitefade/20 dark:focus:ring-white/20"
            />
          </div>
          {/* PO Date */}
          {/* <div className="flex flex-col lg:flex-row whitespace-nowrap items-start justify-between max-w-full w-full ">
            <label htmlFor="date" className="text-sm lg:text-base">
              PO Date:
            </label>
            <div className="flex flex-col gap-2 items-center max-w-full lg:max-w-[17rem] w-full">
              <Popover open={isStartOpen} onOpenChange={setIsStartOpen}>
                <PopoverTrigger asChild>
                  <button
                    variant="outline"
                    className="flex w-full px-4 py-2 border gap-1 text-sm lg:text-base items-center border-quatanery rounded-md focus:outline-none focus:ring-2 focus:ring-commodore  dark:bg-commodore  dark:border-whitefade/20 dark:focus:ring-white/20"
                    onClick={() => setIsStartOpen(true)}
                  >
                    <CalendarIcon className="mr-2" />
                    {date ? format(date, "dd/MM/yy") : "01/01/25"}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(selectedDate) => {
                      setDate(selectedDate);
                      console.log("Start Date Selected:", selectedDate);
                      setIsStartOpen(false);
                    }}
                  />
                </PopoverContent>
              </Popover>

              <Popover open={isEndOpen} onOpenChange={setIsEndOpen}>
                <PopoverTrigger asChild>
                  <button
                    variant="outline"
                    className="flex w-full px-4 py-2 gap-1 text-sm lg:text-base items-center border border-quatanery rounded-md focus:outline-none focus:ring-2 focus:ring-commodore  dark:bg-commodore  dark:border-whitefade/20 dark:focus:ring-white/20"
                    onClick={() => setIsEndOpen(true)}
                  >
                    <CalendarIcon className="mr-2" />
                    {otherDate ? format(otherDate, "dd/MM/yy") : "01/01/25"}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={otherDate}
                    onSelect={(selectedDate) => {
                      setOtherDate(selectedDate);
                      console.log("End Date Selected:", selectedDate);
                      setIsEndOpen(false);
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div> */}
          <div className="flex flex-col lg:flex-row whitespace-nowrap items-start lg:items-center justify-between max-w-full w-full ">
            <label htmlFor="number" className="text-sm lg:text-base">
              Agency:
            </label>
            <input
              name="agency"
              value={filters.agency}
              onChange={handleChange}
              className="max-w-full lg:max-w-[17rem] w-full px-4 py-2 border border-quatanery rounded-md focus:outline-none focus:ring-2 focus:ring-commodore  dark:bg-commodore  dark:border-whitefade/20 dark:focus:ring-white/20"
            />
          </div>
          <div className="flex flex-col lg:flex-row whitespace-nowrap items-start lg:items-center justify-between max-w-full w-full ">
            <label htmlFor="number" className="text-sm lg:text-base">
              Items:
            </label>
            <input
              name="items"
              value={filters.items}
              onChange={handleChange}
              className="max-w-full lg:max-w-[17rem] w-full px-4 py-2 border border-quatanery rounded-md focus:outline-none focus:ring-2 focus:ring-commodore  dark:bg-commodore  dark:border-whitefade/20 dark:focus:ring-white/20"
            />
          </div>
          {/* Quantity, Pending, Received */}
          <div className="grid grid-cols-1 gap-2">
            <div className="flex flex-col lg:flex-row whitespace-nowrap items-start lg:items-center justify-between max-w-full w-full ">
              <label htmlFor="number" className="text-sm lg:text-base">
                Quantity:
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  name="minQuantity"
                  value={filters.minQuantity}
                  onChange={handleChange}
                  placeholder=">="
                  min="0"
                  className="appearance-none max-w-[3.5rem] w-full text-center px-2 py-2 border border-quatanery rounded-md focus:outline-none focus:ring-2 focus:ring-commodore  dark:bg-commodore  dark:border-whitefade/20 dark:focus:ring-white/20 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
                <input
                  type="number"
                  name="maxQuantity"
                  value={filters.maxQuantity}
                  onChange={handleChange}
                  placeholder="9"
                  min="0"
                  className="appearance-none max-w-full lg:max-w-[13rem] w-full text-center px-4 py-2 border border-quatanery rounded-md focus:outline-none focus:ring-2 focus:ring-commodore  dark:bg-commodore  dark:border-whitefade/20 dark:focus:ring-white/20 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2">
              <div className="flex flex-col lg:flex-row whitespace-nowrap items-start lg:items-center justify-between max-w-full w-full ">
                <label htmlFor="number" className="text-sm lg:text-base">
                  Pending:
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    name="minPending"
                    value={filters.minPending}
                    onChange={handleChange}
                    placeholder=""
                    min="0"
                    className="appearance-none max-w-[3.5rem] w-full text-center px-2 py-2 border border-quatanery rounded-md focus:outline-none focus:ring-2 focus:ring-commodore  dark:bg-commodore  dark:border-whitefade/20 dark:focus:ring-white/20 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  />
                  <input
                    type="number"
                    name="maxPending"
                    value={filters.maxPending}
                    onChange={handleChange}
                    placeholder="0"
                    min="0"
                    className="appearance-none max-w-full lg:max-w-[13rem] w-full text-center px-4 py-2 border border-quatanery rounded-md focus:outline-none focus:ring-2 focus:ring-commodore  dark:bg-commodore  dark:border-whitefade/20 dark:focus:ring-white/20 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2">
              <div className="flex flex-col lg:flex-row whitespace-nowrap items-start lg:items-center justify-between max-w-full w-full ">
                <label htmlFor="number" className="text-sm lg:text-base">
                  Received:
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    name="minReceived"
                    value={filters.minReceived}
                    onChange={handleChange}
                    placeholder="= "
                    min="0"
                    className="appearance-none max-w-[3.5rem] w-full text-center px-2 py-2 border border-quatanery rounded-md focus:outline-none focus:ring-2 focus:ring-commodore  dark:bg-commodore  dark:border-whitefade/20 dark:focus:ring-white/20 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  />
                  <input
                    type="number"
                    name="maxReceived"
                    value={filters.maxReceived}
                    onChange={handleChange}
                    placeholder="0"
                    min="0"
                    className="appearance-none max-w-full lg:max-w-[13rem] w-full text-center px-4 py-2 border border-quatanery rounded-md focus:outline-none focus:ring-2 focus:ring-commodore  dark:bg-commodore  dark:border-whitefade/20 dark:focus:ring-white/20 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Delivered Switch */}
          <div className="grid grid-cols-1 gap-2">
            <div className="flex flex-col lg:flex-row whitespace-nowrap items-start lg:items-center gap-2 lg:gap-8 max-w-full w-full ">
              <label htmlFor="number" className="text-sm lg:text-base">
                Delivered:
              </label>
              <div className="flex gap-3 ">
                <Switch
                  name="delivered"
                  className="data-[state=checked]:bg-alienated"
                  checked={filters.delivered}
                  onCheckedChange={(val) =>
                    setFilters({ ...filters, delivered: val })
                  }
                />
                <Switch
                  name="delivered"
                  className="data-[state=checked]:bg-scarlet"
                  checked={anotherFilters.delivered}
                  onCheckedChange={(val) =>
                    setAnotherFilters({ ...filters, delivered: val })
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row whitespace-nowrap items-start lg:items-center justify-between max-w-full w-full ">
            <label htmlFor="number" className="text-sm lg:text-base">
              Fulfilled:
            </label>
            <Select
              className="max-w-full lg:max-w-[17rem] w-full px-4 py-2 border border-quatanery rounded-md focus:outline-none focus:ring-2 focus:ring-commodore  dark:bg-commodore  dark:border-whitefade/20 dark:focus:ring-white/20"
              onValueChange={(value) =>
                setFilters({ ...filters, fulfilled: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* Fulfilled Select */}
        </div>
        <div className="flex w-full justify-end mt-4 items-end">
          <Button
            type="submit"
            className="bg-orange-500 text-white w-fit mt-0 lg:mt-5 rounded-md py-2 px-4 text-base justify-end flex"
            onClick={() => {
              onApply(filters);
              onClose();
            }}
          >
            Apply
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default PurchaseOrderFilterModal;

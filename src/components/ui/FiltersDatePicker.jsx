"use client";
import useDatePicker from "src/hooks/useDatePicker";
import { format } from "date-fns";
import { usePathname } from "next/navigation";
import InvoicesFilterModal from "../dashboard/InvoicesFilterModal";
import LogisticsFilterModal from "../dashboard/LogisticsFilterModal";
import PurchaseOrderFilterModal from "../dashboard/PurchaseOrderFilterModal";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { CalendarIcon, FilterSvg } from "../icons/CommonPurchaseOrderSvg";

const FiltersDatePicker = () => {
  const {
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
  } = useDatePicker();

  const pathname = usePathname();
  return (
    <div className="date-picker-container">
      {/* Start Date Picker */}
      <div className="flex items-center gap-[10px] ">
        <Popover open={isStartOpen} onOpenChange={setIsStartOpen}>
          <PopoverTrigger asChild>
            <button variant="outline" className="date-picker-button-style">
              <CalendarIcon className=" mr-2" />
              {date ? format(date, "dd/MM/yy") : "01/01/25"}
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 ">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(selectedDate) => {
                setDate(selectedDate);
                setIsStartOpen(false); // Close calendar after selection
              }}
            />
          </PopoverContent>
        </Popover>

        <span className="text-lavender dark:text-violet">To</span>

        {/* End Date Picker */}
        <Popover open={isEndOpen} onOpenChange={setIsEndOpen}>
          <PopoverTrigger asChild>
            <button variant="outline" className="date-picker-button-style">
              <CalendarIcon className="w-auto h-auto mr-2" />
              {otherDate ? format(otherDate, "dd/MM/yy") : "13/02/25"}
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 rounded-xl">
            <Calendar
              mode="single"
              selected={otherDate}
              onSelect={(selectedDate) => {
                setOtherDate(selectedDate);
                setIsEndOpen(false); // Close calendar after selection
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex items-center gap-[14px] ">
        <button
          variant="outline"
          onClick={() => setIsFilterOpen(true)}
          className="flex items-center  gap-2 flex-wrap"
        >
          <FilterSvg />
        </button>
        {/* Filter Modal */}
        {pathname === "/purchase-orders" && (
          <PurchaseOrderFilterModal
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
            onApply={handleApplyFilters}
          />
        )}
        {pathname === "/logistics" && (
          <LogisticsFilterModal
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
            onApply={handleApplyFilters}
          />
        )}
        {pathname === "/invoices-list" && (
          <InvoicesFilterModal
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
            onApply={handleApplyFilters}
          />
        )}

        <Button className="w-fit text-sm lg:text-base rounded-lg py-2 px-6">
          Show
        </Button>
      </div>
    </div>
  );
};
export default FiltersDatePicker;

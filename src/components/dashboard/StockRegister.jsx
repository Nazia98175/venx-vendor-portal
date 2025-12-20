"use client";
import { format } from "date-fns";
import SelectViewModal from "./SelectViewModal";
import { CalendarIcon } from "../icons/CommonPurchaseOrderSvg";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Form, FormField, FormItem, FormLabel } from "../ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import useStockRegisterForm from "src/hooks/useStockRegisterForm";
import useCalendar from "src/hooks/useCalendar";
import useModalManager from "src/hooks/useModalManager";

const StockRegister = () => {
  const { form, onSubmit } = useStockRegisterForm();
  const {
    activeModal,
    setActiveModal,
    openModal,
    setModalStack,
    handleGoBack,
    handleRowClick,
    handleFilterSelect,
    selectedItem,
  } = useModalManager();
  const { date, setDate, isCalendarOpen, setIsCalendarOpen } = useCalendar();

  // Handle view selection from the form
  const handleViewChange = (value) => {
    if (!value) return;

    // Open a new modal with the selected view
    openModal(value);
  };

  return (
    <>
      <div className="max-w-full">
        <div className="dashboard-main-heading-container">
          <h1 className="dashboard-main-heading-style">Stock Register</h1>
        </div>
        <div className="table-container-style">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="max-w-md lg:max-w-lg m-auto px-3 lg:px-6 py-6 flex flex-col gap-2"
            >
              <FormField
                control={form.control}
                name="product"
                render={({ field }) => (
                  <FormItem
                    className="flex flex-col lg:flex-row justify-between 
                    items-start lg:items-center whitespace-nowrap flex-wrap"
                    required={true}
                  >
                    <FormLabel>Product:</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger
                        className="max-w-full lg:max-w-[22rem] 
                      w-full flex items-center justify-between px-4 py-2
                       border border-quatanery rounded-md focus:outline-none 
                       focus:ring-2 focus:ring-primary  dark:border-[white]/20
                        dark:focus:ring-white/20"
                      >
                        <SelectValue placeholder="Sarees" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sarees">Sarees</SelectItem>
                        <SelectItem value="shirts">Shirts</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="invoiceDate"
                render={({ field }) => (
                  <FormItem
                    className="flex flex-col lg:flex-row justify-between 
                  items-start lg:items-center flex-nowrap whitespace-nowrap"
                  >
                    <FormLabel>Invoice Date:</FormLabel>
                    <Popover
                      open={isCalendarOpen}
                      onOpenChange={setIsCalendarOpen}
                    >
                      <PopoverTrigger asChild>
                        <button
                          type="button"
                          className="max-w-full flex-row-reverse justify-between 
                          lg:max-w-[22rem] w-full flex items-center px-4 py-2 border 
                          border-quatanery dark:bg-commodore rounded-md focus:outline-none
                           focus:ring-2 focus:ring-primary  dark:border-[white]/20 dark:focus:ring-white/20
                            ring-offset-background focus:ring-offset-2"
                        >
                          <CalendarIcon className="mr-2" />
                          {date ? format(date, "MM/dd/yyyy") : ""}
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={(selectedDate) => {
                            if (selectedDate) {
                              setDate(selectedDate);
                              field.onChange(selectedDate);
                            }
                            setIsCalendarOpen(false);
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="poNo"
                render={({ field }) => (
                  <FormItem
                    className="flex flex-col lg:flex-row justify-between 
                  items-start lg:items-center whitespace-nowrap flex-nowrap"
                  >
                    <FormLabel>PO No:</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger
                        className="max-w-full lg:max-w-[22rem] w-full flex items-center 
                      justify-between px-4 py-2 border border-quatanery rounded-md focus:outline-none
                       focus:ring-2 focus:ring-primary  dark:border-[white]/20 dark:focus:ring-white/20"
                      >
                        <SelectValue placeholder="L24" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="l24">L24</SelectItem>
                        <SelectItem value="l25">L25</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="invoiceNo"
                render={({ field }) => (
                  <FormItem
                    className="flex flex-col lg:flex-row justify-between items-start
                   lg:items-center whitespace-nowrap flex-nowrap"
                  >
                    <FormLabel>Invoice No:</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger
                        className="max-w-full lg:max-w-[22rem] w-full flex items-center 
                      justify-between px-4 py-2 border border-quatanery rounded-md focus:outline-none
                       focus:ring-2 focus:ring-primary  dark:border-[white]/20 dark:focus:ring-white/20"
                      >
                        <SelectValue placeholder="Select Invoice" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0123">0123</SelectItem>
                        <SelectItem value="0456">0456</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="ageSlab"
                render={({ field }) => (
                  <FormItem
                    className="flex flex-col lg:flex-row justify-between items-start
                   lg:items-center whitespace-nowrap flex-nowrap"
                  >
                    <FormLabel>Age Slab:</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger
                        className="max-w-full lg:max-w-[22rem] w-full flex items-center
                       justify-between px-4 py-2 border border-quatanery rounded-md focus:outline-none
                        focus:ring-2 focus:ring-primary  dark:border-[white]/20 dark:focus:ring-white/20"
                      >
                        <SelectValue placeholder="Fresh Stock" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="freshstock">Fresh Stock</SelectItem>
                        <SelectItem value="oldstock">Old Stock</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="priceSlab"
                render={({ field }) => (
                  <FormItem
                    className="flex flex-col lg:flex-row justify-between items-start
                   lg:items-center whitespace-nowrap flex-nowrap"
                  >
                    <FormLabel>Price Slab:</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger
                        className="max-w-full lg:max-w-[22rem] w-full flex items-center 
                      justify-between px-4 py-2 border border-quatanery rounded-md focus:outline-none 
                      focus:ring-2 focus:ring-primary  dark:border-[white]/20 dark:focus:ring-white/20"
                      >
                        <SelectValue placeholder="Select Price Range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="viewBy"
                render={({ field }) => (
                  <FormItem
                    className="flex flex-col lg:flex-row justify-between items-start 
                  lg:items-center whitespace-nowrap flex-nowrap"
                  >
                    <FormLabel>View By:</FormLabel>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        handleViewChange(value);
                      }}
                      value={field.value}
                    >
                      <SelectTrigger
                        className="max-w-full lg:max-w-[22rem] w-full flex items-center 
                      justify-between px-4 py-2 border border-quatanery rounded-md focus:outline-none
                       focus:ring-2 focus:ring-primary dark:border-[white]/20 dark:focus:ring-white/20"
                      >
                        <SelectValue placeholder="Select View" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="productview">
                          Product View
                        </SelectItem>
                        <SelectItem value="invoiceview">
                          Invoice View
                        </SelectItem>
                        <SelectItem value="ageslabview">
                          Age Slab View
                        </SelectItem>
                        <SelectItem value="priceslabview">
                          Price Slab View
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <div className="flex w-full justify-end">
                <Button
                  type="submit"
                  className="w-fit mt-5 rounded-md py-2 px-4 text-sm lg:text-base justify-end flex"
                >
                  Show
                </Button>
              </div>
            </form>
          </Form>
        </div>

        {/* Render the SelectViewModal if active */}
        {activeModal && (
          <SelectViewModal
            isOpen={Boolean(activeModal)}
            onClose={() => {
              setActiveModal(null);
              setModalStack([]);
            }}
            title={activeModal?.data?.title}
            tableHeaders={activeModal.data.tableHeaders}
            tableData={activeModal.data.tableData}
            filterOptions={activeModal.data.filterOptions || []}
            onRowClick={(row, rowIndex) =>
              handleRowClick(row, rowIndex, activeModal.data.tableData)
            }
            onGoBack={handleGoBack}
            onFilterSelect={handleFilterSelect}
            selectedItem={selectedItem}
          />
        )}

        {/* Background effects */}
        <div className="right-bottom-style"></div>
        <div className="left-bottom-style"></div>
      </div>
    </>
  );
};

export default StockRegister;

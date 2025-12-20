"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LeftArrowSvg } from "../icons/CommonLogistics";
import { CalendarIcon } from "../icons/CommonPurchaseOrderSvg";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const formSchema = z.object({
  logisticNo: z.string().min(1, ""),
  logisticDate: z.date(),
  poNo: z.string().min(1, ""),
  transporter: z.string().min(1, ""),
  lrNumber: z.string().min(1, ""),
  parcels: z.string().min(1, ""),
  quantity: z.string().min(1, ""),
  items: z.string().min(1, ""),
  wayBillNo: z.string().min(1, ""),
  note: z.string().min(1, ""),
});

export const AddLogisticsForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      logisticNo: "",
      logisticDate: new Date(),
      poNo: "",
      transporter: "",
      lrNumber: "",
      parcels: "",
      quantity: "",
      items: "",
      wayBillNo: "",
      note: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const [otherDate, setOtherDate] = React.useState(null);
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="max-w-full">
      <Link
        href="/logistics"
        className="flex items-center text-dead/70 dark:text-violet mb-2 z-10 relative"
      >
        <LeftArrowSvg />
        <span>Back</span>
      </Link>

      <h1 className="dashboard-main-heading-style mb-2">Add Logistics</h1>
      <div className="table-container-style">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="max-w-lg m-auto px-2 lg:px-6 py-6 flex  flex-col gap-2"
          >
            <FormField
              control={form.control}
              name="logisticNo"
              render={({ field }) => (
                <FormItem className="settings-input-label-form-container-style">
                  <FormLabel>Logistic No:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="LOG/L7"
                      className="max-w-full lg:max-w-[22rem] w-full px-4 py-2 border border-quatanery rounded-md focus:outline-none focus:ring-2 focus:ring-commodore  dark:bg-commodore  dark:border-whitefade/20 dark:focus:ring-white/20"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="logisticDate"
              render={({ field }) => (
                <FormItem className="settings-input-label-form-container-style">
                  <FormLabel>Logistic Date:</FormLabel>
                  <Popover open={isOpen} onOpenChange={setIsOpen}>
                    <PopoverTrigger asChild>
                      <button
                        variant="outline"
                        className="max-w-full lg:max-w-[22rem] w-full text-dead/70 dark:text-violet flex items-center flex-row-reverse justify-between px-4 py-2 border border-quatanery rounded-md focus:outline-none focus:ring-2 focus:ring-commodore  dark:bg-commodore  dark:border-whitefade/20 dark:focus:ring-white/20"
                      >
                        <CalendarIcon className=" mr-2" />
                        {otherDate ? format(otherDate, "dd/MM/yy") : "01/02/25"}
                      </button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto p-0 z-[1000]"
                      align="center"
                      side="bottom"
                      sideOffset={8}
                    >
                      <Calendar
                        mode="single"
                        selected={otherDate}
                        onSelect={(selectedDate) => {
                          setOtherDate(selectedDate);
                          setIsOpen(false); // Close calendar after selection
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
                <FormItem className="settings-input-label-form-container-style">
                  <FormLabel>PO No:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="L24"
                      className="addlogistics-input-style"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="transporter"
              render={({ field }) => (
                <FormItem className="settings-input-label-form-container-style">
                  <FormLabel>Transporter:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="DTDC"
                      className="addlogistics-input-style"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lrNumber"
              render={({ field }) => (
                <FormItem className="settings-input-label-form-container-style">
                  <FormLabel>LR Number:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="H4433K443322"
                      className="addlogistics-input-style"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="parcels"
              render={({ field }) => (
                <FormItem className="settings-input-label-form-container-style">
                  <FormLabel>Parcels:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="3"
                      min="0"
                      type="number"
                      className=" addlogistics-input-style "
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem className="settings-input-label-form-container-style">
                  <FormLabel>Quantity:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="500"
                      min="0"
                      type="number"
                      className=" addlogistics-input-style"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="items"
              render={({ field }) => (
                <FormItem className="settings-input-label-form-container-style">
                  <FormLabel>Items:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Sarees"
                      className="addlogistics-input-style"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="wayBillNo"
              render={({ field }) => (
                <FormItem className="settings-input-label-form-container-style">
                  <FormLabel>Way Bill No:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="WB2488980"
                      className="addlogistics-input-style"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="note"
              render={({ field }) => (
                <FormItem className="settings-input-label-form-container-style">
                  <FormLabel>Note:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Handle With care. Sensitive items"
                      className="addlogistics-input-style "
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex w-full justify-end">
              <Button
                type="submit"
                className="w-fit mt-5 rounded-md py-2 px-4 text-base justify-end flex"
              >
                Save
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AddLogisticsForm;

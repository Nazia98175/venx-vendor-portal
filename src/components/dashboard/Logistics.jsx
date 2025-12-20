"use client";

import useLogistics from "src/hooks/useLogistics";
import PaginationList from "../common/PaginationList";
import { Button } from "../ui/button";
import FiltersDatePicker from "../ui/FiltersDatePicker";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import LogisticsListItem from "./LogisticsListItem";

const Logistics = () => {
  const { data, handleSubmit } = useLogistics();

  return (
    <div className="max-w-full">
      <div className="dashboard-main-heading-container">
        <h1 className="dashboard-main-heading-style">Logistics List</h1>
        <Button
          variant="default"
          className="w-fit relative z-10 text-sm lg:text-base py-2 rounded-md"
          onClick={handleSubmit}
        >
          + Add Logistics
        </Button>
      </div>
      <div className="table-container-style">
        <div className="date-picker-container-style">
          <FiltersDatePicker />
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Logistic No.</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Transporter</TableHead>
              <TableHead>Parcels</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>PO No</TableHead>
              <TableHead>Delivered</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Delivered</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {data.map((row) => (
              <LogisticsListItem row={row} key={row.id} />
            ))}
          </TableBody>
        </Table>
        <div className="mb-8 mt-5">
          <PaginationList />
        </div>
      </div>
      <div className="right-bottom-style"></div>
      <div className="left-bottom-style"></div>
    </div>
  );
};

export default Logistics;

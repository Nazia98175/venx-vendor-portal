"use client";

import { invoices } from "../common/Helper";
import PaginationList from "../common/PaginationList";
import PurchaseOrderListItem from "./PurchaseOrderListItem";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import FiltersDatePicker from "../ui/FiltersDatePicker";

const PurchaseOrder = () => {
  return (
    <div className="max-w-full ">
      <div className="dashboard-main-heading-container">
        <h1 className="dashboard-main-heading-style">Purchase Orders</h1>
      </div>
      <div className="table-container-style">
        <div className="date-picker-container-style">
          <FiltersDatePicker />
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>PO No.</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Agent</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Qty</TableHead>
              <TableHead>Rcvd</TableHead>
              <TableHead>Pend</TableHead>
              <TableHead>Amt</TableHead>
              <TableHead>Delivd</TableHead>
              <TableHead>Sent</TableHead>
              <TableHead>Download</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoices) => (
              <PurchaseOrderListItem invoices={invoices} key={invoices.id} />
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

export default PurchaseOrder;

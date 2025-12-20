"use client";
import useInvoices from "src/hooks/useInvoices";
import { data } from "../common/Helper";
import PaginationList from "../common/PaginationList";
import FiltersDatePicker from "../ui/FiltersDatePicker";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import InvoicesListItem from "./InvoicesListItem";

const Invoices = () => {
  const { totalStock, stockLeft, stockPercentage, getStockColor } =
    useInvoices();
  return (
    <div className="max-w-full">
      <div className="dashboard-main-heading-container">
        <h1 className="dashboard-main-heading-style">Invoices List</h1>
      </div>
      <div className="table-container-style">
        <div className="date-picker-container-style">
          <FiltersDatePicker />
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Inv MNo</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Invoice</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>PO NO</TableHead>
              <TableHead>Qty</TableHead>
              <TableHead>Ret/Sh</TableHead>
              <TableHead>Net</TableHead>
              <TableHead>Inv Amt</TableHead>
              <TableHead>Paid</TableHead>
              <TableHead>Stock</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <InvoicesListItem key={index} item={item} />
            ))}
          </TableBody>
        </Table>

        {/* Footer Section */}
        <div className="total-stock-container ">
          <p className="stock-info-style">
            Inv Stock <br /> {totalStock}
          </p>
          <p className="stock-info-style">
            Stock Left <br /> {stockLeft}
          </p>
          <p
            className={`total-percentage-instock-style ${getStockColor(
              stockPercentage
            )}`}
          >
            {stockPercentage}%
          </p>
        </div>
        <div className="mb-8 mt-5">
          <PaginationList />
        </div>
      </div>
      <div className="right-bottom-style"></div>
      <div className="left-bottom-style"></div>
    </div>
  );
};

export default Invoices;

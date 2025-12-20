"use client";
import { mcqdata } from "../common/Helper";
import MBQListItem from "./MBQListItem";
import ShowSwitch from "./ShowSwitch";
import { XLSSvg } from "../icons/CommonLogo";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const MBQ = () => {
  return (
    <div className="max-w-full">
      <div className="dashboard-main-heading-container">
        <h1 className="dashboard-main-heading-style">MBQ</h1>
        <div className="flex gap-4">
          <div className="flex gap-1 cursor-pointer">
            <XLSSvg />
            <span>Import</span>
          </div>
          <div className="flex gap-1 cursor-pointer">
            <XLSSvg />
            <span>Template</span>
          </div>
        </div>
      </div>
      <div className="table-container-style px-3">
        <div className="max-w-full flex justify-end mb-4 mt-2">
          <ShowSwitch />
        </div>
        <div className="flex items-center mb-5">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Brand</TableHead>
                <TableHead>Price Slab</TableHead>
                <TableHead>Color</TableHead>
                <TableHead>Design</TableHead>
                <TableHead>In Stock</TableHead>
                <TableHead>Min</TableHead>
                <TableHead>Max</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mcqdata.map((item, index) => (
                <MBQListItem item={item} key={index} />
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="right-bottom-style"></div>
      <div className="left-bottom-style"></div>
    </div>
  );
};

export default MBQ;

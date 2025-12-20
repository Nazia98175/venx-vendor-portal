import { generatePurchaseOrderPDF } from "src/pdf/pdfUtils";
import { PDFFileSvg } from "../icons/CommonPurchaseOrderSvg";
import { TableCell, TableRow } from "../ui/table";

const PurchaseOrderListItem = ({ invoices }) => {
  const handlePDFClick = () => {
    // Open the PDF in a new tab
    generatePurchaseOrderPDF(invoices);
  };

  console.log(invoices, "invoices");
  return (
    <>
      <TableRow>
        <TableCell>{invoices.po}</TableCell>
        <TableCell>{invoices.date}</TableCell>
        <TableCell>{invoices.agent}</TableCell>
        <TableCell>{invoices.items}</TableCell>
        <TableCell>{invoices.quantity}</TableCell>
        <TableCell>{invoices.rcvd}</TableCell>
        <TableCell>{invoices.pend}</TableCell>
        <TableCell>{invoices.amount}</TableCell>
        <TableCell>{invoices.delivered}</TableCell>
        <TableCell>{invoices.sent}</TableCell>
        <TableCell>
          <button onClick={handlePDFClick} aria-label="View Purchase Order PDF">
            <PDFFileSvg />
          </button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default PurchaseOrderListItem;

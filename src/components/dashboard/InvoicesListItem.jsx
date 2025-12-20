import { TableCell, TableRow } from "../ui/table";
const InvoicesListItem = ({ item }) => {
  const totalStock = 1000;
  const getStockColor = (percentage) => {
    if (percentage >= 75) return "text-alienated";
    if (percentage >= 50) return "text-tangerine";
    return "text-scarlet";
  };
  return (
    <TableRow>
      <TableCell>{item.invNo}</TableCell>
      <TableCell>{item.date}</TableCell>
      <TableCell>{item.invoice}</TableCell>
      <TableCell>{item.poDate}</TableCell>
      <TableCell>{item.poNo}</TableCell>
      <TableCell>{item.qty}</TableCell>
      <TableCell>{item.retSh}</TableCell>
      <TableCell>{item.net}</TableCell>
      <TableCell>{item.invAmt}</TableCell>
      <TableCell>{item.paid}</TableCell>
      <TableCell
        className={`font-bold ${getStockColor(
          (item.stock / totalStock) * 100
        )}`}
      >
        {item.stock} <br />{" "}
        <span className="text-sm">
          {((item.stock / totalStock) * 100).toFixed(0)}%
        </span>
      </TableCell>
    </TableRow>
  );
};

export default InvoicesListItem;

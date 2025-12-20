import { TableCell, TableRow } from "../ui/table";

const MBQListItem = ({ item }) => {
  return (
    <TableRow
      className={
        item.status === "-15"
          ? "bg-peach/30 dark:bg-tangerine/50 cursor-pointer"
          : ""
      }
    >
      <TableCell>{item.product}</TableCell>
      <TableCell>{item.brand}</TableCell>
      <TableCell>{item.priceSlab}</TableCell>
      <TableCell>{item.color}</TableCell>
      <TableCell>{item.design}</TableCell>
      <TableCell>{item.inStock}</TableCell>
      <TableCell>{item.min}</TableCell>
      <TableCell>{item.max}</TableCell>
      <TableCell className={item.status === "-15" ? "font-medium" : ""}>
        {item.status}
      </TableCell>
    </TableRow>
  );
};

export default MBQListItem;

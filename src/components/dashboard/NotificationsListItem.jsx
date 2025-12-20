import { TableCell, TableRow } from "../ui/table";

const NotificationsListItem = ({ notification }) => {
  return (
    <TableRow>
      <TableCell
        className={notification.isBold ? "notification-bold-style" : ""}
      >
        {notification.message}
      </TableCell>
      <TableCell
        className={`${
          notification.isBold ? "notification-bold-style" : ""
        } text-right`}
      >
        {notification.date}
      </TableCell>
    </TableRow>
  );
};

export default NotificationsListItem;

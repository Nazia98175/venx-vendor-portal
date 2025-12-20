"use client";
import { notifications } from "../common/Helper";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import NotificationsListItem from "./NotificationsListItem";

const Notifications = () => {
  return (
    <>
      <div className="dashboard-main-heading-container">
        <h1 className="dashboard-main-heading-style">Notifications</h1>
      </div>
      <div className="table-container-style p-0">
        <Table className="mb-40">
          <TableHeader>
            <TableRow>
              <TableHead className="text-dead text-lg lg:text-[20px] ">
                Notification Alert
              </TableHead>
              <TableHead className="text-dead text-right text-lg lg:text-[20px] ">
                Date
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {notifications.map((notification) => (
              <NotificationsListItem
                notification={notification}
                key={notification.id}
              />
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="right-bottom-style"></div>
      <div className="left-bottom-style"></div>
    </>
  );
};

export default Notifications;

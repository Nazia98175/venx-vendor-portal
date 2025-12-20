import useLogisticsActions from "src/hooks/useLogisticsActions";
import { TableCell, TableRow } from "../ui/table";
import { DeleteSvg, EditSvg } from "../icons/CommonLogistics";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useRouter } from "next/navigation";

const LogisticsListItem = ({ row }) => {
  const {
    isDeleteDialogOpen,
    setIsDeleteDialogOpen,
    isEditing,
    setIsEditing,
    editingRow,
    setEditingRow,
    handleSave,
    handleConfirmDelete,
    setDeleteRowId,
  } = useLogisticsActions();
  const router = useRouter();
  const handleSubmit = (e) => {
    router.push("/logistics/add");
  };

  return (
    <TableRow>
      <TableCell>{row.logisticNo}</TableCell>
      <TableCell>{row.date}</TableCell>
      <TableCell>{row.transporter}</TableCell>
      <TableCell>{row.parcels}</TableCell>
      <TableCell>{row.quantity}</TableCell>
      <TableCell>{row.poNo}</TableCell>
      <TableCell>{row.delivered}</TableCell>
      <TableCell>
        <span
          className={`px-2 py-1 text-sm rounded-full ${
            row.status === "Completed"
              ? "bg-green-100 text-green-700"
              : row.status === "In Progress"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {row.status}
        </span>
      </TableCell>
      <TableCell className="p-3 flex space-x-2">
        {/* Edit Button */}
        <Dialog
          open={isEditing && editingRow?.id === row.id}
          onOpenChange={setIsEditing}
        >
          <DialogTrigger asChild>
            {/* <button
              variant="outline"
              size="icon"
              className="border border-wisteria p-2 rounded-md"
              onClick={handleSubmit}
            >
              <EditSvg />
            </button> */}
            <button
              variant="outline"
              size="icon"
              className="border border-wisteria p-2 rounded-md"
              onClick={() => {
                setEditingRow(row);
                setIsEditing(true);
              }}
            >
              <EditSvg />
            </button>
          </DialogTrigger>
          <DialogContent className="dark:bg-war  dark:border-whitefade/20 h-fit">
            <DialogHeader>
              <DialogTitle>Edit Entry</DialogTitle>
            </DialogHeader>
            <input
              type="text"
              className="border p-2 w-full rounded-md"
              value={editingRow?.logisticNo || ""}
              onChange={(e) =>
                setEditingRow({
                  ...editingRow,
                  logisticNo: e.target.value,
                })
              }
            />
            <DialogFooter>
              <Button onClick={handleSave}>Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Delete Button */}
        <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
          <DialogTrigger asChild>
            <button
              variant="outline"
              size="icon"
              className="border border-wisteria p-2 rounded-md"
              onClick={() => {
                setDeleteRowId(row.id);
                setIsDeleteDialogOpen(true);
              }}
            >
              <DeleteSvg />
            </button>
          </DialogTrigger>
          <DialogContent className="dark:bg-war  dark:border-whitefade/20 h-fit">
            <DialogHeader>
              <DialogTitle className="font-normal text-center">
                Are you sure?
              </DialogTitle>
            </DialogHeader>

            <p className="text-lavender dark:text-violet">
              Do you really want to delete this record? This action cannot be
              undone.
            </p>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setIsDeleteDialogOpen(false)}
              >
                No, Cancel
              </Button>
              <Button variant="destructive" onClick={handleConfirmDelete}>
                Yes, Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </TableCell>
    </TableRow>
  );
};

export default LogisticsListItem;

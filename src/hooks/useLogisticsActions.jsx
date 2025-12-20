import { useState } from "react";
import { initialData } from "src/components/common/Helper";

const useLogisticsActions = () => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingRow, setEditingRow] = useState(null);
  const [deleteRowId, setDeleteRowId] = useState(null);
  const [data, setData] = useState(initialData);

  // Open Edit Dialog
  const openEditDialog = (row) => {
    setEditingRow(row);
    setIsEditing(true);
  };

  // Save Edited Data
  const handleSave = () => {
    if (!editingRow) return;
    setData((prevData) =>
      prevData.map((item) => (item.id === editingRow.id ? editingRow : item))
    );
    setIsEditing(false);
    setEditingRow(null);
  };

  // Open Delete Dialog
  const openDeleteDialog = (rowId) => {
    setDeleteRowId(rowId);
    setIsDeleteDialogOpen(true);
  };

  // Confirm Delete
  const handleConfirmDelete = () => {
    if (deleteRowId === null) return;

    setData((prevData) => {
      const updatedData = prevData.filter((item) => item.id !== deleteRowId);
      return [...updatedData]; // Trigger re-render
    });

    setIsDeleteDialogOpen(false);
    setDeleteRowId(null);
  };

  return {
    isDeleteDialogOpen,
    setIsDeleteDialogOpen,
    isEditing,
    setIsEditing,
    editingRow,
    setEditingRow,
    handleSave,
    handleConfirmDelete,
    setDeleteRowId,
  };
};

export default useLogisticsActions;

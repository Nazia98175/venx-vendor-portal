import { useState } from "react";
import { viewsData } from "src/components/common/Helper";

const useModalManager = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [modalStack, setModalStack] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (viewType, item = null) => {
    const viewKey = item ? `${viewType}_${item}` : viewType;
    const viewToUse = viewsData[viewKey] || viewsData[viewType];

    if (!viewToUse) {
      console.error("View data not found:", viewKey);
      return;
    }

    setActiveModal({ type: viewType, item, data: viewToUse });
    setModalStack((prev) => [...prev, { type: viewType, item }]);
  };

  const handleGoBack = () => {
    if (modalStack.length <= 1) {
      setActiveModal(null);
      setModalStack([]);
      return;
    }

    const newStack = [...modalStack];
    newStack.pop();
    const prevModal = newStack[newStack.length - 1];
    const viewKey = prevModal.item
      ? `${prevModal.type}_${prevModal.item}`
      : prevModal.type;

    setActiveModal({
      type: prevModal.type,
      item: prevModal.item,
      data: viewsData[viewKey] || viewsData[prevModal.type],
    });

    setModalStack(newStack);
  };

  const handleRowClick = (row, rowIndex, tableData) => {
    if (rowIndex === tableData.length - 1) return;
    setSelectedItem(row[0]);
  };

  const handleFilterSelect = (filterType) => {
    if (!filterType) return;
    if (selectedItem) {
      openModal(filterType, selectedItem);
      setSelectedItem(null);
    } else {
      openModal(filterType);
    }
  };

  return {
    activeModal,
    setActiveModal,
    setModalStack,
    openModal,
    handleGoBack,
    handleRowClick,
    handleFilterSelect,
    selectedItem,
  };
};

export default useModalManager;

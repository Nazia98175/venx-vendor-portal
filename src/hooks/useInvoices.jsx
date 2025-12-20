import { data } from "src/components/common/Helper";

export default function useInvoices() {
  const totalStock = 1000;
  const stockLeft = data.reduce((acc, item) => acc + item.stock, 0);
  const stockPercentage = ((stockLeft / totalStock) * 100).toFixed(0);

  // Function to dynamically change stock color
  const getStockColor = (percentage) => {
    if (percentage >= 75) return "text-alienated";
    if (percentage >= 50) return "text-tangerine";
    return "text-scarlet";
  };
  return {
    totalStock,
    stockLeft,
    stockPercentage,
    getStockColor,
  };
}

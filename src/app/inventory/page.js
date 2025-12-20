import Layout from "src/components/common/Layout";
import StockRegister from "src/components/dashboard/StockRegister";

export const metadata = {
  title: "Venx - Inventory",
  description: "Welcome to your Inventory",
};

const InventoryPage = () => {
  return (
    <Layout>
      <StockRegister />
    </Layout>
  );
};

export default InventoryPage;

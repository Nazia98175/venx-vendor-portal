import Layout from "src/components/common/Layout";
import PurchaseOrder from "src/components/dashboard/PurchaseOrder";

export const metadata = {
  title: "Venx - Purchase Orders",
  description: "Welcome to your Purchase Orders",
};

const PurchaseOrderPage = () => {
  return (
    <>
      <Layout>
        <PurchaseOrder />
      </Layout>
    </>
  );
};

export default PurchaseOrderPage;

import Layout from "src/components/common/Layout";
import Invoices from "src/components/dashboard/Invoices";

export const metadata = {
  title: "Venx - Invoices",
  description: "Welcome to your Invoices",
};

const InvoiceListPage = () => {
  return (
    <>
      <Layout>
        <Invoices />
      </Layout>
    </>
  );
};

export default InvoiceListPage;

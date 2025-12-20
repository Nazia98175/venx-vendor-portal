import Layout from "src/components/common/Layout";
import AddLogisticsForm from "src/components/dashboard/AddLogisticsForm";

export const metadata = {
  title: "Venx - Add Logistics",
  description: "Welcome to your Add Logistics",
};

const AddLogisticsPage = () => {
  return (
    <Layout>
      <AddLogisticsForm />
    </Layout>
  );
};

export default AddLogisticsPage;

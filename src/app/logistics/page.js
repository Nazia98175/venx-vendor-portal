import Layout from "src/components/common/Layout";
import Logistics from "src/components/dashboard/Logistics";

export const metadata = {
  title: "Venx - Logistics",
  description: "Welcome to your Logistics",
};

const LogisticsPage = () => {
  return (
    <>
      <Layout>
        <Logistics />
      </Layout>
    </>
  );
};

export default LogisticsPage;

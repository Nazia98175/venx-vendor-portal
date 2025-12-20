import Layout from "src/components/common/Layout";
import Dashboard from "src/components/dashboard/Dashboard";

export const metadata = {
  title: "Venx - Dashboard",
  description: "Welcome to your Dashboard",
};

const DashboardPage = () => {
  return (
    <>
      <Layout>
        <Dashboard />
      </Layout>
    </>
  );
};

export default DashboardPage;

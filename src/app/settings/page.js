import Layout from "src/components/common/Layout";
import Settings from "src/components/dashboard/Settings";

export const metadata = {
  title: "Venx - Settings",
  description: "Welcome to your Settings",
};

const SettingPage = () => {
  return (
    <Layout>
      <Settings />
    </Layout>
  );
};

export default SettingPage;

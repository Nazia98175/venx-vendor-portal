import Layout from "src/components/common/Layout";
import Notifications from "src/components/dashboard/Notifications";

export const metadata = {
  title: "Venx - Notifications",
  description: "Welcome to your Notifications",
};

const NotificationPage = () => {
  return (
    <>
      <Layout>
        <Notifications />
      </Layout>
    </>
  );
};

export default NotificationPage;

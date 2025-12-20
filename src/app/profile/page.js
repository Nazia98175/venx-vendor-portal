import Layout from "src/components/common/Layout";
import Profile from "src/components/dashboard/Profile";

export const metadata = {
  title: "Venx - Profile Details",
  description: "Welcome to your Profile Details",
};

const ProfilePage = () => {
  return (
    <Layout>
      <Profile />
    </Layout>
  );
};

export default ProfilePage;

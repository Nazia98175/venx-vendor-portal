import Layout from "src/components/common/Layout";
import MBQ from "src/components/dashboard/MBQ";

export const metadata = {
  title: "Venx - MCQ",
  description: "Welcome to your MCQ",
};

const MBQPage = () => {
  return (
    <>
      <Layout>
        <MBQ />
      </Layout>
    </>
  );
};

export default MBQPage;

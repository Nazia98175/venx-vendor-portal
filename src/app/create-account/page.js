import CreateAccount from "src/components/auth/CreateAccount";
import ThemeToggle from "src/components/common/ThemeToggle";
import { CreateAccountIllustration } from "src/components/icons/illustrationSvgs";

export const metadata = {
  title: "Venx - Create Account",
  description: "Welcome to your Create Account",
};

const CreateAccountPage = () => {
  return (
    <>
      <div className=" main-page-style">
        <ThemeToggle />
        <div className="illustration-page-style">
          <div className="illustration-dark-bg-left-top-style"></div>
          <CreateAccountIllustration />
          <div className="illustration-dark-bg-left-bottom-style"></div>
        </div>
        <CreateAccount />
      </div>
    </>
  );
};

export default CreateAccountPage;

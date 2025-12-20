import ThemeToggle from "src/components/common/ThemeToggle";
import ForgotPassword from "src/components/auth/ForgotPassword";
import { ForgotPasswordIllustration } from "src/components/icons/illustrationSvgs";

export const metadata = {
  title: "Venx - Forgot Password",
  description: "Welcome to your Forgot Password",
};

const ForgotPasswordPage = () => {
  return (
    <>
      <div className="main-page-style">
        <ThemeToggle />
        <div className="illustration-page-style">
          <div className="illustration-dark-bg-left-top-style"></div>
          <ForgotPasswordIllustration />
          <div className="illustration-dark-bg-left-bottom-style"></div>
        </div>
        <ForgotPassword />
      </div>
    </>
  );
};

export default ForgotPasswordPage;

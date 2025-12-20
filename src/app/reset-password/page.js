import ResetPassword from "src/components/auth/ResetPassword";
import ThemeToggle from "src/components/common/ThemeToggle";
import { ResetPasswordIllustration } from "src/components/icons/illustrationSvgs";

export const metadata = {
  title: "Venx - Reset Password",
  description: "Welcome to your Reset Password",
};
const ResetPasswordPage = () => {
  return (
    <>
      <div className="main-page-style">
        <ThemeToggle />
        <div className="illustration-page-style">
          <div className="illustration-dark-bg-left-top-style"></div>
          <ResetPasswordIllustration />
          <div className="illustration-dark-bg-left-bottom-style"></div>
        </div>
        <ResetPassword />
      </div>
    </>
  );
};

export default ResetPasswordPage;

import OTP from "src/components/auth/OTP";
import ThemeToggle from "src/components/common/ThemeToggle";
import { OTPIllustration } from "src/components/icons/illustrationSvgs";

export const metadata = {
  title: "Venx - OTP",
  description: "Welcome to your OTP",
};
const OTPPage = () => {
  return (
    <>
      <div className="main-page-style">
        <ThemeToggle />
        <div className="illustration-page-style">
          <div className="illustration-dark-bg-left-top-style"></div>
          <OTPIllustration />
          <div className="illustration-dark-bg-left-bottom-style"></div>
        </div>
        <OTP />
      </div>
    </>
  );
};

export default OTPPage;

import Login from "src/components/auth/Login";
import ThemeToggle from "src/components/common/ThemeToggle";
import { LoginIllustration } from "src/components/icons/illustrationSvgs";

const HomePage = () => {
  return (
    <div className=" main-page-style">
      <ThemeToggle />
      <div className="illustration-page-style">
        <div className="illustration-dark-bg-left-top-style"></div>
        <LoginIllustration />
        <div className="illustration-dark-bg-left-bottom-style "></div>
      </div>
      <Login />
    </div>
  );
};

export default HomePage;

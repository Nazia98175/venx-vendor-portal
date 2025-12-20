"use client";
import Link from "next/link";
import useLogin from "src/hooks/useLogin";
import CommonLogo from "../icons/CommonLogo";
import { EyeOffSvg, EyeOnSvg } from "../icons/illustrationSvgs";
import CustomCheckbox from "../ui/CustomCheckbox";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Login = () => {
  const { handleSubmit, handleChange, togglePassword, formData, showPassword } =
    useLogin();

  return (
    <div className="auth-mainpage-style">
      <div className="auth-maincontainer-style">
        {/* Logo */}
        <CommonLogo />
        <div className="w-full max-w-[409px] ">
          <h2 className="main-heading mb-3 lg:mb-7 ">Welcome back!</h2>
          {/* Form */}

          <form
            onSubmit={handleSubmit}
            className="space-y-5 mb-4"
            id="login-form"
          >
            <div className="flex flex-col gap-[6px]">
              <label className="input-label">User Name</label>
              <Input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required={true}
              />
            </div>
            {/* Password field */}
            <div className="relative flex flex-col gap-[6px]">
              <label className="input-label">
                Password
                <Link href="/forgot-password" className="forgot-password-style">
                  Forgot your password?
                </Link>
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required={true}
                />
                <button
                  type="button"
                  onClick={togglePassword}
                  className="eyesvg-icon-style  border-0 focus:ring-0"
                >
                  {showPassword ? <EyeOnSvg /> : <EyeOffSvg />}
                </button>
              </div>
            </div>
          </form>
          {/* Remember Me */}
          <CustomCheckbox />

          {/* Rest of your form */}
          <Button
            variant="default"
            onClick={() =>
              document.getElementById("login-form").requestSubmit()
            }
            size="auth"
          >
            Log in
          </Button>
          <p className="text-center text-secondary text-sm lg:text-base mt-[16px] dark:text-white ">
            Don’t have an account?{" "}
            <Link
              href="/create-account"
              className="text-tangerine font-medium "
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

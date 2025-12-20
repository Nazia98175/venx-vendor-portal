"use client";
import useResetPassword from "src/hooks/useResetPassword";
import CommonLogo from "../icons/CommonLogo";
import { EyeOffSvg, EyeOnSvg } from "../icons/illustrationSvgs";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const ResetPassword = () => {
  const {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    showPassword,
    showConfirmPassword,
    setShowPassword,
    setShowConfirmPassword,
    error,
    handleSubmit,
  } = useResetPassword();
  return (
    <div className="auth-mainpage-style">
      <div className="auth-maincontainer-style">
        {/* Logo */}
        <CommonLogo />
        <div className="w-full max-w-[409px] ">
          <h2 className="main-heading mb-3 lg:mb-7 ">Reset Password</h2>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
            id="resetpassword-form"
          >
            {/* Username */}
            <div className="flex flex-col gap-[6px]">
              <label className="input-label ">Password</label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="eyesvg-icon-style border-0 focus:ring-0"
                >
                  {showPassword ? <EyeOnSvg /> : <EyeOffSvg />}
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-[6px]">
              <label className="input-label">Re-Enter Password</label>
              <div className="relative">
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  name="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="eyesvg-icon-style"
                >
                  {showConfirmPassword ? <EyeOnSvg /> : <EyeOffSvg />}
                </button>
              </div>
            </div>
            {/* Error Message */}
            {error && (
              <p className="text-tangerine text-sm max-w-fit">{error}</p>
            )}
          </form>
          {/* Login Button */}
          <Button
            variant="default"
            size="auth"
            onClick={() =>
              document.getElementById("resetpassword-form").requestSubmit()
            }
          >
            Submit
          </Button>

          {/* Signup Link */}
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

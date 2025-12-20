"use client";
import Link from "next/link";
import CommonLogo from "../icons/CommonLogo";
import { EyeOffSvg, EyeOnSvg } from "../icons/illustrationSvgs";
import useCreateAccount from "src/hooks/useCreateAccount";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const CreateAccount = () => {
  const {
    formData,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    error,
    handleChange,
    handleSubmit,
  } = useCreateAccount();
  return (
    <div className="auth-mainpage-style">
      <div className="auth-maincontainer-style">
        {/* Logo */}
        <CommonLogo />
        <div className="w-full max-w-[409px] ">
          <h2 className="main-heading mb-3 lg:mb-7 ">Create An Account</h2>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
            id="createaccount-form"
          >
            <div className="flex flex-col gap-[6px]">
              <label className="input-label">Vendor Name</label>
              <Input
                type="text"
                name="vendorName"
                value={formData.vendorName}
                onChange={handleChange}
                required={true}
              />
            </div>
            <div className="flex flex-col gap-[6px]">
              <label className="input-label">GST No.</label>
              <Input
                type="text"
                name="gstNo"
                value={formData.gstNo}
                onChange={handleChange}
                required={true}
              />
            </div>
            <div className="flex flex-col gap-[6px]">
              <label className="input-label">Email ID</label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required={true}
              />
            </div>
            <div className="flex flex-col gap-[6px]">
              <label className="input-label">Mobile Number</label>
              <Input
                type="tel"
                name="mobile"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={10}
                value={formData.mobile}
                onChange={handleChange}
                required={true}
                onInput={(e) =>
                  (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
                }
              />
            </div>
            {/* Password Input */}
            <div className="relative">
              <div className="flex flex-col gap-[6px]">
                <label className="input-label">Password</label>
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
                    onClick={() => setShowPassword(!showPassword)}
                    className="eyesvg-icon-style border-0 focus:ring-0"
                  >
                    {showPassword ? <EyeOnSvg /> : <EyeOffSvg />}
                  </button>
                </div>
              </div>
            </div>

            {/* Confirm Password Input */}
            <div className="relative">
              <div className="flex flex-col gap-[6px]">
                <label className="input-label">Re-Enter Password</label>
                <div className="relative">
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required={true}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="eyesvg-icon-style border-0 focus:ring-0"
                  >
                    {showConfirmPassword ? <EyeOnSvg /> : <EyeOffSvg />}
                  </button>
                </div>
              </div>
            </div>

            {/* Error Message */}
            {error && <p className="text-tangerine text-sm">{error}</p>}
          </form>

          {/* Submit Button */}
          <Button
            className="mx-auto"
            size="auth"
            varient="default"
            onClick={() =>
              document.getElementById("createaccount-form").requestSubmit()
            }
          >
            Sign Up
          </Button>

          {/* Login Link */}
          <p className="text-base mt-4 text-center text-secondary dark:text-white">
            Already have an account?{" "}
            <Link href="/" className="text-tangerine font-semibold ">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;

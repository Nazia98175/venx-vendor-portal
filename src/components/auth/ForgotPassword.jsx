"use client";
import useForgotPassword from "src/hooks/useForgotPassword";
import CommonLogo from "../icons/CommonLogo";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const ForgotPassword = () => {
  const { handleChange, handleSubmit, input } = useForgotPassword();

  return (
    <div className="auth-mainpage-style">
      <div className="auth-maincontainer-style">
        {/* Logo */}
        <CommonLogo />
        <div className="w-full max-w-[409px] ">
          <h2 className="main-heading mb-3 lg:mb-7 ">Forgot your password?</h2>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
            id="forgotpassword-form"
          >
            {/* Username */}
            <div className="flex flex-col gap-[6px]">
              <label className="input-label">Email ID / Mobile Number</label>
              <Input
                type="text"
                name="username"
                value={input}
                onChange={handleChange}
                required={true}
              />
            </div>
          </form>
          {/* Signup Link */}

          <Button
            variant="default"
            size="auth"
            onClick={() =>
              document.getElementById("forgotpassword-form").requestSubmit()
            }
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

"use client";
import useOTP from "src/hooks/useOTP";
import CommonLogo from "../icons/CommonLogo";
import { Button } from "../ui/button";

const OTP = () => {
  const {
    otp,
    handleChange,
    handleKeyDown,
    handleSubmit,
    timeLeft,
    resendOtp,
    inputRefs,
  } = useOTP();

  return (
    <div className="auth-mainpage-style">
      <div className="auth-maincontainer-style">
        {/* Logo */}
        <CommonLogo />
        <div className="w-full max-w-[409px] ">
          <h2 className="main-heading mb-3 lg:mb-7 ">Enter OTP Code</h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5" id="otp-form">
            <div className="flex justify-between  items-center max-w-[400px] gap-2 lg:gap-5">
              {otp.map((value, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  name="OTP"
                  value={value}
                  required={true}
                  maxLength={1}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="otp-input-style "
                />
              ))}
            </div>
          </form>

          {/* Verify Button */}

          <Button
            onClick={() => document.getElementById("otp-form").requestSubmit()}
            variant="default"
            size="auth"
          >
            Verify
          </Button>
          <div className="resend-container-style">
            {/* Resend OTP */}
            <p className="para-resend-time">
              Resend OTP in <span className="time-left-style">{timeLeft}s</span>
            </p>
            {timeLeft === 0 && (
              <button onClick={resendOtp} className="resend-otp-style">
                Resend OTP
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTP;

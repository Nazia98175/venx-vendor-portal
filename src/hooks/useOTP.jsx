import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function useOTP() {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(60); // 60-second countdown
  const inputRefs = useRef([]);

  // Handle OTP input
  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return; // Allow only numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next field
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Start countdown on mount
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  // Reset OTP & countdown
  const resendOtp = () => {
    setOtp(["", "", "", "", "", ""]);
    setTimeLeft(60);
    inputRefs.current[0]?.focus();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/reset-password");
  };
  return {
    otp,
    handleChange,
    handleKeyDown,
    handleSubmit,
    timeLeft,
    resendOtp,
    inputRefs,
  };
}

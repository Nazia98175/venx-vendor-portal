import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function useForgotPassword() {
  const router = useRouter();
  const [input, setInput] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // Simulate OTP send
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`OTP sent to XXXXXX${input.slice(-4)}`);
    router.push("/otp");
  };

  return {
    handleChange,
    handleSubmit,
    input,
  };
}

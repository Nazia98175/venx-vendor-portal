import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function useResetPassword() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
    } else {
      setError("");
      toast.success(`Password reset successfully!`);
      router.push("/");
    }
  };
  return {
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
  };
}

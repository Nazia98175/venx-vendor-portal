import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useCreateAccount() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    vendorName: "",
    gstNo: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
    } else {
      setError("");
      alert("Account created successfully!");
      // Here, you can send data to your backend API
    }
    router.push("/dashboard");
  };
  return {
    formData,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    error,
    handleChange,
    handleSubmit,
  };
}

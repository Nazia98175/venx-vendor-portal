import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const passwordSchema = z
  .object({
    oldPassword: z.string().min(6, "Old Password is required"),
    newPassword: z
      .string()
      .min(6, "New Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Re-Enter Password is required"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const useChangePassword = (setOpen) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(passwordSchema),
  });

  const onSubmit = (data) => {
    console.log("Password Change Data:", data);
    setOpen(false); // Close modal after successful submission
    reset(); // Reset form after submission
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};

export default useChangePassword;

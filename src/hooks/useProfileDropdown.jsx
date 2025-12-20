import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useProfileDropdown() {
  const handleLogout = () => {
    localStorage.removeItem("userToken");
    setDropdownOpen(false); // Close profile dropdown
    router.push("/");
  };
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return {
    handleLogout,
    dropdownOpen,
    setDropdownOpen,
    router,
  };
}

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function useNavbar() {
  const router = useRouter();
  const [notificationCount, setNotificationCount] = useState(5);
  const [searchOpen, setSearchOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  return {
    router,
    notificationCount,
    searchOpen,
    setSearchOpen,
    setDropdownOpen,
    pathname,
  };
}

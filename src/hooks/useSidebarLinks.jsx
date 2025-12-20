import { usePathname } from "next/navigation";
import { useState } from "react";

export default function useSidebarLinks() {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname);
  const [notificationCount, setNotificationCount] = useState("5");
  return {
    active,
    setActive,
    notificationCount,
  };
}

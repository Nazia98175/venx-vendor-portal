import Link from "next/link";
import useSidebarLinks from "src/hooks/useSidebarLinks";
import { menuItems } from "../common/Helper";

const SidebarLinks = () => {
  const { active, setActive, notificationCount } = useSidebarLinks();

  return (
    <nav className="sidebar-link-container-style">
      {menuItems.map((item) => (
        <Link key={item.path} href={item.path}>
          <div
            className={`sidebar-link-list-style
            ${
              active === item.path
                ? "bg-white/15 border border-whiteedgar/10"
                : ""
            }  `}
            onClick={() => setActive(item.path)}
          >
            {item.icon}
            <span>{item.name}</span>

            {/* Show notification badge for "Notifications" */}
            {item.name === "Notifications " && notificationCount > 0 && (
              <span className="relative -ml-[3px] bg-orange-500 text-white text-center text-xs font-normal px-[6px] py-0 w-[30px] h-[20px] rounded-[10px] flex items-center justify-center">
                {notificationCount}
              </span>
            )}
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default SidebarLinks;

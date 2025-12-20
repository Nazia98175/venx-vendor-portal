"use client";
import { useEffect } from "react";
import SidebarLinks from "../dashboard/SidebarLinks";
import { useRouter } from "next/navigation";

const SideBar = ({ setSiddebarOpen, isSiddebarOpen }) => {
  useEffect(() => {
    if (isSiddebarOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Enable scrolling
    }
  }, [isSiddebarOpen]);

  const router = useRouter();

  const handleSubmit = (e) => {
    router.push("/dashboard");
  };
  return (
    <>
      {isSiddebarOpen && (
        <div
          onClick={() => setSiddebarOpen(!isSiddebarOpen)}
          className="sidebar-overlay-style"
        ></div>
      )}

      <aside
        className={`sidebar-container-style ${
          isSiddebarOpen ? "left-0" : "-left-full"
        }`}
      >
        <div className="h-screen p-5 overflow-auto">
          <div
            className="sidebar-logo-container-style cursor-pointer"
            onClick={handleSubmit}
          >
            <img
              src="/images/sidebar-main-logo.svg"
              alt="Sidebar Logo"
              className="h-9 lg:h-10"
            />
            <img
              src="/images/sidebar-main-text-logo.svg"
              alt="Sidebar Text Logo"
              className="h-5 lg:h-6 ml-0"
            />
          </div>
          <SidebarLinks />
        </div>
      </aside>
    </>
  );
};

export default SideBar;

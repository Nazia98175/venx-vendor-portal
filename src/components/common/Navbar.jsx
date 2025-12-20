import useNavbar from "src/hooks/useNavbar";
import { Menu } from "lucide-react";
import { NotificationSvg, SearchSvg } from "../icons/CommonDashboardSvg";
import { LogoImg } from "../icons/CommonLogo";
import DialogSearchInput from "./DialogSearchInput";
import NavInputSearch from "./NavInputSearch";
import ProfileDropdown from "./ProfileDropdown";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ setSiddebarOpen, isSiddebarOpen }) => {
  const {
    router,
    notificationCount,
    searchOpen,
    setSearchOpen,
    setDropdownOpen,
    pathname,
  } = useNavbar();
  return (
    <nav className="nav-container-style">
      <div className="left-top-style"></div>
      {pathname === "/dashboard" ? (
        <>
          <div className="dashboard-nav-list-style">
            {/* <button onClick={() => setSiddebarOpen(!isSiddebarOpen)}>
            <Menu className="dashboard-profile-menu-style " />
          </button> */}
            <div className="dashboard-profile-img-style">
              <img
                src="/images/sidebar-main-logo.svg"
                alt="Website Logo"
                className="h-8"
              />
            </div>
            <h1 className="nav-heading-style">Hello, Michael!</h1>
          </div>
          <div className="nav-aside-list-container">
            {/* <button
              onClick={() => {
                setSearchOpen(true);
                setDropdownOpen(false); // Ensure dropdown is closed
              }}
              className="profile-modal-style"
            >
              <SearchSvg className="search-svg-style" />
            </button> */}
            <div className="theme-toggle-style">
              <ThemeToggle />
            </div>
            <div
              onClick={() => router.push("/notifications")}
              className="relative mt-[5px]"
            >
              <button>
                <NotificationSvg />
              </button>
              {notificationCount > 0 && (
                <span className="notification-span-style">
                  {notificationCount}
                </span>
              )}
            </div>
            <ProfileDropdown />
            <button onClick={() => setSiddebarOpen(!isSiddebarOpen)}>
              <Menu className="dashboard-profile-menu-style " />
            </button>
          </div>
        </>
      ) : pathname === "/profile" ? (
        <>
          <div className="profile-nav-list-style">
            {/* <button onClick={() => setSiddebarOpen(!isSiddebarOpen)}>
              <Menu className="dashboard-profile-menu-style " />
            </button> */}
            <div className="dashboard-profile-img-style">
              <LogoImg />
            </div>
          </div>
          <div className="nav-aside-list-container">
            {/* <button
              onClick={() => {
                setSearchOpen(true);
                setDropdownOpen(false); // Ensure dropdown is closed
              }}
              className="profile-modal-style"
            >
              <SearchSvg className="search-svg-style" />
            </button> */}
            <div className="theme-toggle-style">
              <ThemeToggle />
            </div>
            <div
              onClick={() => router.push("/notifications")}
              className="relative mt-[5px]"
            >
              <button>
                <NotificationSvg />
              </button>
              {notificationCount > 0 && (
                <span className="notification-span-style">
                  {notificationCount}
                </span>
              )}
            </div>
            <ProfileDropdown />
            <button onClick={() => setSiddebarOpen(!isSiddebarOpen)}>
              <Menu className="dashboard-profile-menu-style " />
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="nav-list-style ">
            <div className="nav-list-container-style">
              {/* <button onClick={() => setSiddebarOpen(!isSiddebarOpen)}>
                <Menu className="menu-style " />
              </button> */}
              <div className="nav-img-style">
                <LogoImg />
              </div>
            </div>
            <NavInputSearch />
            <div className="flex items-center justify-between gap-2">
              {/* <button onClick={() => setSiddebarOpen(!isSiddebarOpen)}>
                <Menu className="nav-menu-style" />
              </button> */}
              <div className="img-style">
                <LogoImg />
              </div>
              {/* <button
                onClick={() => {
                  setSearchOpen(true);
                  setDropdownOpen(false); // Ensure dropdown is closed
                }}
                className="profile-modal-style"
              >
                <SearchSvg className="search-svg-style" />
              </button> */}
            </div>
          </div>
          <div className="nav-aside-list-container">
            <button
              onClick={() => {
                setSearchOpen(true);
                setDropdownOpen(false); // Ensure dropdown is closed
              }}
              className="profile-modal-style"
            >
              <SearchSvg className="search-svg-style" />
            </button>
            <div className="theme-toggle-style">
              <ThemeToggle />
            </div>
            <div
              onClick={() => router.push("/notifications")}
              className="relative mt-[5px]"
            >
              <button>
                <NotificationSvg />
              </button>
              {notificationCount > 0 && (
                <span className="notification-span-style">
                  {notificationCount}
                </span>
              )}
            </div>
            <ProfileDropdown />
            <button onClick={() => setSiddebarOpen(!isSiddebarOpen)}>
              <Menu className="dashboard-profile-menu-style " />
            </button>
          </div>
        </>
      )}

      <DialogSearchInput
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
      />
      <div className="right-top-style"></div>
    </nav>
  );
};

export default Navbar;

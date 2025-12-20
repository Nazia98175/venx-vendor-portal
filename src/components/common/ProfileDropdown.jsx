import useProfileDropdown from "src/hooks/useProfileDropdown";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const ProfileDropdown = () => {
  const { handleLogout, dropdownOpen, setDropdownOpen, router } =
    useProfileDropdown();
  return (
    <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
      <DropdownMenuTrigger
        className="flex items-center cursor-pointer gap-2"
        onClick={() => {
          setDropdownOpen(!dropdownOpen);
          setSearchOpen(false); // Ensure search modal is closed
        }}
      >
        <img
          src="/images/profile-venx.svg"
          alt="Profile"
          className="nav-profile-img-style"
        />
        <span className="nav-profile-name-style">Girish Singh</span>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="nav-profile-dropdown-style">
        <DropdownMenuItem
          onClick={() => router.push("/profile")}
          className="profile-dropdown-hover-style"
        >
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => router.push("/settings")}
          className="profile-dropdown-hover-style"
        >
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={handleLogout}
          className="profile-dropdown-hover-style"
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;

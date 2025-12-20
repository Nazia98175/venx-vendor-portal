import { useState } from "react";
import { SearchSvg, VoiceOption } from "../icons/CommonDashboardSvg";

const NavInputSearch = () => {
  const [search, setSearch] = useState("");

  return (
    <form className="hidden lg:flex items-center">
      <div className="nav-input-container">
        <div className="absolute inset-y-0 left-3 flex items-center">
          <SearchSvg />
        </div>
        <input
          type="text"
          className="nav-input-style"
          placeholder="Search here"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="voiceoption-svg-style">
          <VoiceOption />
        </div>
      </div>
    </form>
  );
};

export default NavInputSearch;

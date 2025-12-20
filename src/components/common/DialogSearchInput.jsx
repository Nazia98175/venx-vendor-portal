import { useState } from "react";
import { SearchSvg, VoiceOption } from "../icons/CommonDashboardSvg";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

const DialogSearchInput = ({ searchOpen, setSearchOpen }) => {
  const [search, setSearch] = useState("");
  return (
    <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
      <DialogContent
        className="flex flex-col max-w-[23rem] h-[20%] 
      lg:h-auto lg:hidden items-center rounded-lg bg-white dark:bg-war border
       border-gray-300 dark:border-edgar/20 shadow-lg dark:shadow-gray-800 "
      >
        <DialogHeader>
          <DialogTitle className="text-lavender dark:text-white">
            Search
          </DialogTitle>
        </DialogHeader>
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center">
            <SearchSvg className="text-lavender dark:text-violet" />
          </div>
          <input
            type="text"
            className="dialog-search-style"
            placeholder="Search here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="voiceoption-svg-style">
            <VoiceOption />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogSearchInput;

"use client";
import { useState } from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
  const [isSiddebarOpen, setSiddebarOpen] = useState(false);

  return (
    <div className="flex justify-between p-0 lg:p-2 font-inter bg-deutzia overflow-hidden h-screen dark:bg-war relative z-10">
      <SideBar
        setSiddebarOpen={setSiddebarOpen}
        isSiddebarOpen={isSiddebarOpen}
      />
      <div className="max-w-full w-full px-2 lg:px-2 ">
        <Navbar
          setSiddebarOpen={setSiddebarOpen}
          isSiddebarOpen={isSiddebarOpen}
        />
        <main className="px-2 lg:px-4 py-2 overflow-auto max-h-full ">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;

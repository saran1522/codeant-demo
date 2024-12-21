import React from "react";
import Navbar from "./Navbar";
import { useRepo } from "../Context/RepoContext";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { TbLogout, TbPhone } from "react-icons/tb";
import NavLink from "./NavLink";
import User from "./User";

function Sidebar() {
  const { showNavbar, setSignedIn, isDark, setIsDark } = useRepo();
  return (
    <div className="flex flex-col gap-3 p-3 max-sm:p-0 h-full fixed">
      <div className="flex gap-2 items-center max-sm:hidden">
        <img src={isDark ? "/logodark.png" : "/logo.png"} className="h-7" />
        <p>CodeAnt AI</p>
        {isDark ? (
          <IoMoonOutline
            size={24}
            onClick={() => setIsDark(false)}
            className="cursor-pointer flex-grow pl-7"
          />
        ) : (
          <IoSunnyOutline
            size={24}
            onClick={() => setIsDark(true)}
            className="cursor-pointer flex-grow pl-7"
          />
        )}
      </div>
      <div
        className={`bg-white dark:bg-gray-900 max-sm:w-full max-sm:fixed max-sm:top-14 max-sm:px-4 max-sm:py-2 border-gray-300 transition-none max-sm:transition-all duration-400 flex flex-col lg:h-full ${
          showNavbar ? "max-sm:left-0" : "max-sm:left-full"
        }`}
      >
        <User />
        <div className="flex flex-col flex-grow justify-between">
          <Navbar />
          <div className="flex flex-col w-full">
            <NavLink icon={TbPhone} link="/support" title="Support" />
            <button
              className="flex gap-3 p-3 items-center rounded-lg font-semibold"
              onClick={() => setSignedIn(false)}
            >
              <TbLogout size={20} />
              <p>Logout</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

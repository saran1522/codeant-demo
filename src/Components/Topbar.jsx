import React from "react";
import { TbMenu2 } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import { useRepo } from "../Context/RepoContext";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

function Topbar() {
  const { showNavbar, handleShowNavbar, isDark, setIsDark } = useRepo();
  return (
    <div className="w-full flex justify-between items-center px-2 pt-2 pb-5 md:hidden">
      <div className="flex gap-2 items-center">
        <img src={isDark ? "/logodark.png" : "/logo.png"} className="h-5" />
        <p className="text-lg">CodeAnt AI</p>
      </div>
      <div className="flex gap-4 items-center">
        {isDark ? (
          <IoMoonOutline
            size={24}
            onClick={() => setIsDark(false)}
            className="cursor-pointer"
          />
        ) : (
          <IoSunnyOutline
            size={24}
            onClick={() => setIsDark(true)}
            className="cursor-pointer"
          />
        )}
        <FaGithub
          size={24}
          onClick={() =>
            window.open("https://github.com/saran1522/codeant-demo")
          }
          className="cursor-pointer"
        />
        <span onClick={handleShowNavbar}>
          {showNavbar ? <AiOutlineClose size={30} /> : <TbMenu2 size={30} />}
        </span>
      </div>
    </div>
  );
}

export default Topbar;

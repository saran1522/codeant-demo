import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useRepo } from "../Context/RepoContext";

function NavLink({ icon: Icon, link, title }) {
  const curr = useLocation().pathname;
  const { setShowNavbar } = useRepo();
  console.log(curr);
  return (
    <Link
      to={link}
      className={`flex gap-3 px-3 py-2.5 items-center clear-start rounded-lg font-semibold  ${
        curr === link
          ? "bg-blue-500 text-white border-2 border-b-blue-500 border-t-[#4e8cff] border-e-[#4e8cff] border-l-[#4e8cff]"
          : "hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-600"
      }`}
    >
      <span>
        <Icon size={20} />
      </span>
      <p>{title}</p>
    </Link>
  );
}

export default NavLink;

import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavLink({ icon: Icon, link, title }) {
  const curr = useLocation().pathname;
  console.log(curr);
  return (
    <Link
      to={link}
      className={`flex gap-3 p-3 items-center clear-start rounded-lg font-semibold  ${
        curr === link
          ? "bg-blue-500 text-white"
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

import React from "react";
import { navlinks } from "../data";
import NavLink from "./NavLink";

function Navbar() {
  return (
    <nav className="flex flex-col gap-1 pt-4">
      {navlinks.map((nav) => (
        <NavLink
          key={nav.link}
          link={nav.link}
          icon={nav.icon}
          title={nav.title}
        />
      ))}
    </nav>
  );
}

export default Navbar;

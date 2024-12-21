import React from "react";
import { TbDatabase } from "react-icons/tb";

function Repo({ repo }) {
  return (
    <div className="p-4 flex flex-col gap-2">
      <div className="flex gap-2 items-center">
        <p className="text-lg font-semibold">{repo.title}</p>
        <span className="rounded-full text-[.75rem] px-1.5 border text-blue-500 border-blue-400 dark:border-blue-500 bg-blue-50 dark:bg-blue-200">
          {repo.visibility}
        </span>
      </div>
      <div className="flex gap-8 text-sm items-center">
        <p className="flex items-center gap-2">
          {repo.tech}
          <span className="h-2 w-2 rounded-full bg-blue-500"></span>
        </p>
        <p className="flex items-center gap-1">
          <TbDatabase />
          {repo.size}
        </p>
        <p>Updated {repo.updated}</p>
      </div>
    </div>
  );
}

export default Repo;

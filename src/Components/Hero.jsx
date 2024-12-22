import React from "react";
import { repos } from "../data";
import { TbPlus, TbRefresh, TbSearch } from "react-icons/tb";
import HeroButton from "./HeroButton";

function Hero({ query, setQuery }) {
  return (
    <div className="flex flex-col gap-3 p-4 max-md:pt-0">
      <div className="flex justify-between max-sm:flex-col gap-3">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold">Repositories</h2>
          <p className="text-gray-600 text-xs">
            {repos.length} total repositories
          </p>
        </div>
        <div className="flex gap-2">
          <HeroButton icon={TbRefresh} title="Refresh All"></HeroButton>
          <HeroButton icon={TbPlus} title="Add Repository"></HeroButton>
        </div>
      </div>
      <div className="flex w-fit max-sm:w-full items-center rounded-lg border border-gray-200 dark:border-gray-700">
        <TbSearch className="p-2 text-gray-500" size={40} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Repositories..."
          className="py-2 focus:outline-none w-full rounded-lg placeholder:text-gray-500 bg-transparent"
        />
      </div>
    </div>
  );
}

export default Hero;

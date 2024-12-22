import React, { useState } from "react";
import Hero from "../Components/Hero";
import { repos } from "../data";
import Repo from "../Components/Repo";

function Home() {
  const [query, setQuery] = useState("");
  const searchedrepos = repos.filter((repo) =>
    repo.title.includes(query.toLowerCase())
  );
  return (
    <main className="md:border lg:border-gray-200 dark:lg:border-gray-700 rounded-xl">
      <div className="border-b border-gray-200 dark:border-gray-700">
        <Hero query={query} setQuery={setQuery} />
      </div>
      <section className="flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
        {searchedrepos.map((repo, i) => (
          <Repo key={i} repo={repo} />
        ))}
      </section>
    </main>
  );
}

export default Home;

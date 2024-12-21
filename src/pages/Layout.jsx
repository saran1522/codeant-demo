import { Outlet } from "react-router-dom";
import { useRepo } from "../Context/RepoContext";
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";

function Layout() {
  const { showNavbar, isDark } = useRepo();
  return (
    <div
      className={`${
        isDark ? "dark" : ""
      } flex h-full min-h-screen w-full overflow-hidden divide-x dark:divide-gray-700 text-gray-700 dark:text-gray-600 font-IN dark:bg-gray-900`}
    >
      <section className={`max-sm:fixed max-sm:top-0 md:w-1/4 lg:w-1/5`}>
        <Sidebar />
      </section>
      <section className="lg:flex-grow w-full p-4 max-sm:p-0">
        <Topbar />
        <div
          className={`h-full overflow-hidden ${
            showNavbar && "bg-zinc-300 dark:bg-zinc-800"
          }`}
        >
          <Outlet />
        </div>
      </section>
    </div>
  );
}

export default Layout;

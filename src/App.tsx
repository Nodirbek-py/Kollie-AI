import { NavLink, Outlet } from "react-router";

function App() {
  return (
    <section className="min-h-screen grid grid-cols-5">
      <div className="bg-neutral-50 shadow-neutral-300 shadow-lg h-full">
        <div className="border-b border-b-neutral-200 px-4 py-8 h-32 flex items-center max-h-32">
          <h1 className="text-neutral-950 text-5xl font-medium">Kollie AI</h1>
        </div>
        <div className="px-4 py-8">
          <NavLink
            to={"/new-number"}
            className="text-white block text-center bg-neutral-800 hover:bg-neutral-900 focus:outline-none focus:ring-4 focus:ring-neutral-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:ring-neutral-700 dark:border-neutral-700"
          >
            New Number Page
          </NavLink>
        </div>
      </div>
      <div className="col-span-4">
        <Outlet />
      </div>
    </section>
  );
}

export default App;

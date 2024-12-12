import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="shadow-md p-3 items-center">
      <div className="container mx-auto flex justify-between">
        <h3 className="text-xl font-semibold tracking-wider text-blue-600">
          PT.store
        </h3>

        <div className="flex gap-4 md:mx-auto">
          <NavLink className="text-gray-500" to={"/"}>
            Home
          </NavLink>
          <NavLink className="text-gray-500" to={"/about"}>
            About
          </NavLink>
          <NavLink className="text-gray-500" to={"/marketplace"}>
            MarketPlace
          </NavLink>
          <NavLink className="text-gray-500" to={"/dashboard"}>
            Dashboard
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

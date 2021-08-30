import { NavLink, Link } from "react-router-dom";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between text-green-500 flex-wrap font-mono bg-teal-500 p-4 m-0">
      <div className="flex items-center flex-shrink-0  mr-6">
        <Link to="/" className="flex  justify-between items-center">
          <img
            className="fill-current h-30 w-30 mr-10 rounded-full "
            width="80"
            height="80"
            viewBox="0 0 80 80"
            src="https://www.freeiconspng.com/uploads/rick-and-morty-series-folder-2-icon-6.png"
            alt="Wubba Lubba Dub Dub"
          />
          <span className="font-bold text-6xl  tracking-tight ">
            Rick'n'Morty
          </span>
        </Link>
      </div>
      <div>
        <ul className="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-2xl">
          <li>
            <NavLink
              to="/characters"
              className="inline-block border hover:border-green-500 transition-all rounded hover:bg-green-100 py-1 px-3"
            >
              Characters
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/episodes"
              className="inline-block border hover:border-green-500 transition-all rounded hover:bg-green-100 py-1 px-3"
            >
              Episodes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="locations"
              className="inline-block border hover:border-green-500 transition-all rounded hover:bg-green-100 py-1 px-3"
            >
              Locations
            </NavLink>
          </li>
          <li>
            <NavLink
              to="mywatchlist"
              className="inline-block border hover:border-green-500 transition-all rounded hover:bg-green-100  py-1 px-3"
            >
              My watch list
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex bg-gray-800 text-white top-0 py-3 flex-wrap justify-around bg-silver">
      <h1 className="text-lg font-semibold">Todo app</h1>
      <ul className="flex gap-[40px] text-m">
        <li>
          <NavLink to="/" activeClassName="text-green-500">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" activeClassName="text-green-500">
            Sign Up
          </NavLink>
        </li>
        <li>
        </li>
      </ul>
    </div>
  );
}

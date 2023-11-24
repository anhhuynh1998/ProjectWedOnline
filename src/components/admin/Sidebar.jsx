/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="">
        <h2>
          FIN<span>CHECK</span>
        </h2>
      </div>
      <ul className="links">
        <div>
          <li>
            <NavLink to={`/`}>
              <i className="fa-solid fa-house"></i>
              DASHBOARD
            </NavLink>
          </li>
        </div>
        <div>
          <li>
            <NavLink to={`/products`}>
              <i className="fa-solid fa-list"></i>
              PRODUCTS
            </NavLink>
          </li>
        </div>
        <div>
          <li>
            <NavLink to={`/users`}>
              <i className="fa-solid fa-user"></i>
              USERS
            </NavLink>
          </li>
        </div>
      </ul>
    </div>
  );
}

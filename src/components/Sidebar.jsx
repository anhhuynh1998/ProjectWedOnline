import React from "react";
import { SiGoogleanalytics } from "react-icons/si";
import { BiNews, BiRocket } from "react-icons/bi";
import { FaWallet } from "react-icons/fa";
import { AiFillSetting, AiFillAppstore } from "react-icons/ai";
import { BsCashStack } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
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
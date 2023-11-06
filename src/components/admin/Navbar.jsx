import React from "react";
import avatar from "../assets/avatarImage.jpeg";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="avatar">
        <img src={avatar} alt="" />
        <div className="info">
          <h4 className="title">Kishan Sheth</h4>
          <h6 className="status">Online</h6>
        </div>
      </div>
      <div className="quick">
        <button>

          Quick Transactions
        </button>
      </div>
      <div className="navbar__info">


        <div className="search__bar">
          <input type="text" placeholder="Search" />

        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { profileItems } from "./ProfileItems";
import "../../../styles/pages/profile/ProfileNavbar.css";

function ProfileNavbar() {
  return (
    <>
      <nav className="profile-navbar">
        <NavLink to="/" className="profile-navbar-logo">
          <i className="fa-brands fa-connectdevelop fa-2xl"></i>
          ConnectMe
        </NavLink>

        <div className="profile-navbar-links">
          {profileItems.map((item, index) => {
            return (
              <NavLink to={item.path} className={item.cName} key={index}>
                <i className={item.icon} />
                {item.title}
              </NavLink>
            );
          })}
        </div>
        <NavLink to="/profile" className="profile-navbar-account">
          <i className="fa-regular fa-user"></i>
          Profile
        </NavLink>
      </nav>
    </>
  );
}

export default ProfileNavbar;

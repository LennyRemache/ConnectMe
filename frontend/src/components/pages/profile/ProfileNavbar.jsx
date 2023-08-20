import React from "react";
import { NavLink } from "react-router-dom";
import { profileItems } from "./ProfileItems";
import "../../../styles/pages/profile/ProfileNavbar.css";
import Dropdown from "./Dropdown";

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
        <div className="profile-navbar-account">
          <i className="fa-regular fa-circle-user fa-2xl" />
          <Dropdown />
        </div>
      </nav>
    </>
  );
}

export default ProfileNavbar;

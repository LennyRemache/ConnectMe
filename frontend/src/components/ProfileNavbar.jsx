import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { profileItems } from "./ProfileItems";
import "../styles/ProfileNavbar.css";

function ProfileNavbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="profile-navbar">
        <div className="menu-open-icon" onClick={handleClick}>
          <i className="fas fa-bars" />
        </div>

        <NavLink
          to="/"
          className="profile-navbar-logo"
          onClick={() => setClick(false)}
        >
          <i className="fa-brands fa-connectdevelop fa-2xl"></i>
          ConnectMe
        </NavLink>

        <div
          className={
            click ? "profile-navbar-links active" : "profile-navbar-links"
          }
        >
          <div className="menu-close-icon" onClick={handleClick}>
            <i className="fa-solid fa-x"></i>
          </div>
          {profileItems.map((item, index) => {
            return (
              <NavLink
                to={item.path}
                className={item.cName}
                key={index}
                onClick={() => setClick(false)}
              >
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

import React, { useState } from "react";
import "../styles/NavBar.css";
import { NavLink } from "react-router-dom";
import { useAtom } from "jotai";
import { statusAtom } from "../App";
import { navItems } from "./NavItems";

function NavBar() {
  const [loggedIn] = useAtom(statusAtom);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="menu-open-icon" onClick={handleClick}>
          <i className="fas fa-bars" />
        </div>

        <NavLink to="/" className="navbar-logo" onClick={() => setClick(false)}>
          <i className="fa-brands fa-connectdevelop fa-2xl"></i>
          ConnectMe
        </NavLink>

        <div className={click ? "navbar-links active" : "navbar-links"}>
          <div className="menu-close-icon" onClick={handleClick}>
            <i className="fa-solid fa-x"></i>
          </div>
          {navItems.map((item, index) => {
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
        {!loggedIn ? (
          <NavLink to="profile" className="navbar-account">
            <i className="fa-regular fa-user"></i>
            Profile
          </NavLink>
        ) : (
          <NavLink to="form" className="navbar-account">
            <i className="fa-solid fa-right-to-bracket"></i>
            Sign In
          </NavLink>
        )}
      </nav>
    </>
  );
}

export default NavBar;

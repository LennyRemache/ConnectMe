import React, { useState } from "react";
import Dropdown from "./Dropdown";
import "../styles/NavBar.css";
import { NavLink } from "react-router-dom";
import { useAtom } from "jotai";
import { statusAtom } from "../App";

function NavBar() {
  const [loggedIn] = useAtom(statusAtom);
  const [click, setClicked] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClicked(!click);
  const closeMobileMenu = () => setClicked(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <>
      <nav className="mainNav">
        <NavLink to="/" className="navbar-logo">
          ConnectMe
        </NavLink>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <NavLink
              to={loggedIn ? "profile" : "form/login"}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              {loggedIn ? "My Account" : "Sign In"}
            </NavLink>
            {dropdown && loggedIn && <Dropdown />}
          </li>

          <li className="nav-item">
            <NavLink
              to="templates"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Templates
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="pricing"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Pricing
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="help" className="nav-links" onClick={closeMobileMenu}>
              Help
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;

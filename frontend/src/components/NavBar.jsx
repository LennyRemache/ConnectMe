import React from "react";
import "../styles/NavBar.css";
import { NavLink } from "react-router-dom";
import { useAtom } from "jotai";
import { statusAtom } from "../App";

function NavBar() {
  const [loggedIn] = useAtom(statusAtom);

  return (
    <>
      <nav className="navbar">
        <NavLink to="/" className="navbar-logo">
          <i class="fa-brands fa-connectdevelop fa-2xl"></i>
          ConnectMe
        </NavLink>
        <div className="navbar-links">
          <NavLink to="/" className="navbar-link">
            <i class="fa-regular fa-map"></i>
            Templates
          </NavLink>
          <NavLink to="/" className="navbar-link">
            <i class="fa-regular fa-credit-card"></i>
            Pricing
          </NavLink>
          <NavLink to="/" className="navbar-link">
            <i class="fa-regular fa-circle-question"></i>
            Help
          </NavLink>
        </div>
        {loggedIn ? (
          <NavLink to="account" className="navbar-account">
            <i class="fa-regular fa-user"></i>
            Account
          </NavLink>
        ) : (
          <NavLink to="form" className="navbar-account">
            <i class="fa-solid fa-right-to-bracket"></i>
            Sign In
          </NavLink>
        )}
      </nav>
    </>
  );
}

export default NavBar;

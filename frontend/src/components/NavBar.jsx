import React from "react";

import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";
import { useAtom } from "jotai";
import { accountStatus } from "../App";

function NavBar() {
  const [loggedIn] = useAtom(accountStatus);

  return (
    <>
      <nav className="mainNav">
        <div className="leftNav">
          <NavLink to="/" className="navLink">
            ConnectMe
          </NavLink>
          <NavLink to="templates" className="navLink">
            Templates
          </NavLink>
          <NavLink to="pricing" className="navLink">
            Pricing
          </NavLink>
        </div>
        <div className="rightNav">
          {loggedIn ? (
            <NavLink to="account" className="navLink">
              My Account
            </NavLink>
          ) : (
            <NavLink to="form" className="navLink">
              Sign In
            </NavLink>
          )}
          <NavLink to="help" className="navLink">
            Help
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

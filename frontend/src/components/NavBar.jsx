import React from "react";

import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
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
          <NavLink to="form" className="navLink">
            Sign In
          </NavLink>
          <NavLink to="help" className="navLink">
            Help
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

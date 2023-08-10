import React, { useState } from "react";

import { NavLink, Routes, Route, useNavigate } from "react-router-dom";
import "../styles/NavBar.css";
import Form from "../components/AccountForms/Form.jsx";

function NavBar() {
  return (
    <>
      <nav className="mainNav">
        <div className="leftNav">
          <NavLink className="navLink">ConnectMe</NavLink>
          <NavLink className="navLink">Templates</NavLink>
          <NavLink className="navLink">Pricing</NavLink>
        </div>
        <div className="rightNav">
          <NavLink to="form" className="navLink">
            Sign In
          </NavLink>
          <NavLink className="navLink">Help</NavLink>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

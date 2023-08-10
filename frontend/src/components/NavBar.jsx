import React, { useState } from "react";

import { NavLink, Routes, Route, useNavigate } from "react-router-dom";
import "../styles/NavBar.css";
import Form from "../components/AccountForms/Form.jsx";

function NavBar() {
  return (
    <>
      <nav className="mainNav">
        <div className="leftNav">
          <NavLink>ConnectMe</NavLink>
          <NavLink>Templates</NavLink>
          <NavLink>Pricing</NavLink>
        </div>
        <div className="rightNav">
          <NavLink to="form">Sign In</NavLink>
          <NavLink>More</NavLink>
        </div>
      </nav>
      <Routes>
        <Route path="form/*" element={<Form />} />
      </Routes>
    </>
  );
}

export default NavBar;

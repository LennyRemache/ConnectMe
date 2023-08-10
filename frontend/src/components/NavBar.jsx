import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <NavLink>ConnectMe</NavLink>
      <NavLink>Sign In</NavLink>
      <NavLink>Discover</NavLink>
      <NavLink>Help</NavLink>
    </>
  );
}

export default NavBar;

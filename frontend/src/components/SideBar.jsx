import React, { useState } from "react";
import { navItems } from "./NavItems";

function SideBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <NavLink to="/" className="navbar-logo">
        <i class="fa-brands fa-connectdevelop fa-2xl"></i>
        ConnectMe
      </NavLink>
      <div className="sidebar">
        <div className="menu-icon">
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
      </div>
    </>
  );
}

export default SideBar;

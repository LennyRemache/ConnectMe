import React, { useState } from "react";
import { Button } from "./Button";
import Dropdown from "./Dropdown";
import "../styles/NavBar.css";
import { NavLink } from "react-router-dom";
import { useAtom } from "jotai";
import { statusAtom } from "../App";

function NavBar() {
  const [loggedIn] = useAtom(statusAtom);
  const [click, setClicked] = useState(false);

  const handleClick = () => setClicked(!click);

  return (
    <>
      <nav className="mainNav">
        <NavLink to="/" className="navbarLogo">
          ConnectMe
        </NavLink>
        <div className="menuIcon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
      </nav>
    </>
  );
}

export default NavBar;

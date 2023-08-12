import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import "../styles/Dropdown.css";
import { NavLink } from "react-router-dom";
import { useAtom } from "jotai";
import { statusAtom } from "../App";

function Dropdown() {
  const [click, setClicked] = useState(false);
  const [loggedIn, setLoggedIn] = useAtom(statusAtom);

  const handleClick = () => setClicked(!click);
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <NavLink
                to={item.path}
                className={item.cName}
                onClick={() => setClicked(false)}
              >
                {item.title}
              </NavLink>
            </li>
          );
        })}
        <li>
          {" "}
          <NavLink
            to="/"
            className="dropdown-link"
            onClick={() => {
              setClicked(false);
              setLoggedIn(false);
            }}
          >
            Log Out
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default Dropdown;

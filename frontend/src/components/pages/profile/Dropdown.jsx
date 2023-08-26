import React from "react";
import "../../../styles/pages/profile/Dropdown.css";
import { NavLink } from "react-router-dom";
import { useAtom } from "jotai";
import { statusAtom, userAtom } from "../../../App";

function Dropdown(props) {
  // eslint-disable-next-line
  const [loggedIn, setLoggedIn] = useAtom(statusAtom);
  // eslint-disable-next-line
  const [userData, setUserData] = useAtom(userAtom);

  return (
    <>
      <div className={`dropdown-container ${props.class}`}>
        <div className="dropdown-profile-info">
          <div className="dropdown-profile-pic" />
          <div className="dropdown-profile-text">
            <p>Profile Title</p>
            <p>Link</p>
          </div>
        </div>
        <div className="dropdown-account">
          <h1>Account</h1>
          <div className="dropdown-account-items">
            <NavLink to="account" className="dropdown-account-item">
              <i className="fa-regular fa-circle-user"></i>
              My Account
            </NavLink>
            <NavLink to="billing" className="dropdown-account-item">
              <i className="fa-solid fa-dollar-sign"></i>
              Billing
            </NavLink>
          </div>
        </div>
        <div className="dropdown-support">
          <h1>Support</h1>
          <div className="dropdown-support-items">
            <NavLink to="questions" className="dropdown-support-item">
              <i className="fa-regular fa-circle-question"></i>
              Ask a question
            </NavLink>
            <NavLink to="feedback" className="dropdown-support-item">
              <i className="fa-regular fa-comments"></i>
              Submit feedback
            </NavLink>
          </div>
        </div>
        <div className="dropdown-signout">
          <NavLink
            to="/"
            onClick={() => {
              setUserData(null);
              setLoggedIn(false);
            }}
          >
            <i className="fa-solid fa-right-to-bracket signout-icon"></i>
            Sign Out
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Dropdown;

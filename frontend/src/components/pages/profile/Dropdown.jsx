import React from "react";
import "../../../styles/pages/profile/Dropdown.css";
import { NavLink } from "react-router-dom";

function Dropdown() {
  return (
    <>
      <div className="dropdown-container">
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
            <NavLink to="form" className="dropdown-account-item">
              <i className="fa-solid fa-right-to-bracket"></i>
              My Accounts
            </NavLink>
            <NavLink to="form" className="dropdown-account-item">
              <i className="fa-solid fa-right-to-bracket"></i>
              Billing
            </NavLink>
          </div>
        </div>
        <div className="dropdown-support">
          <h1>Support</h1>
          <div className="dropdown-support-items">
            <NavLink to="form" className="dropdown-support-item">
              <i className="fa-solid fa-right-to-bracket"></i>
              Ask a question
            </NavLink>
            <NavLink to="form" className="dropdown-support-item">
              <i className="fa-solid fa-right-to-bracket"></i>
              Submit feedback
            </NavLink>
          </div>
        </div>
        <div className="dropdown-signout">
          <NavLink to="/">
            <i className="fa-solid fa-right-to-bracket"></i>
            Sign Out
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Dropdown;

import React, { useState } from "react";
import "../../styles/AccountForms/Form.css";
import { Routes, Route, Link } from "react-router-dom";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

function Form() {
  const [registered, setRegistered] = useState(false);
  return (
    <>
      <div className="formContainer">
        <form method={!registered ? "post" : "get"} className="form">
          <div className="topContainer">
            <div className="backDrop"></div>
            <div className="formHeader">
              <h2 className="headerText">Create</h2>
              <h2 className="headerText">Account</h2>
            </div>
          </div>
          <div className="infoContainer">
            <Routes>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<LogIn />} />
            </Routes>
          </div>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Log In</Link>
        </form>
      </div>
    </>
  );
}

export default Form;

import React, { useState } from "react";
import "../../styles/AccountForms/Form.css";
import { Routes, Route, Link } from "react-router-dom";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

function Form() {
  const [registered, setRegistered] = useState(true);

  return (
    <>
      <div className="formContainer">
        <div className="form">
          <div className="topContainer">
            <div className="backDrop"></div>
            <div className="formHeader">
              <h2 className="headerText">
                {registered ? "Welcome" : "Create"}
              </h2>
              <h2 className="headerText">{registered ? "Back" : "Account"}</h2>
              <div className="linkToForm">
                <div>
                  {registered
                    ? "Don't have an account?"
                    : "Already have an account?"}
                  &nbsp;
                </div>
                <Link
                  to={registered ? "/register" : "/login"}
                  onClick={() => setRegistered(!registered)}
                >
                  {registered ? "Sign Up" : "Log In"}
                </Link>
              </div>
            </div>
          </div>
          <div className="infoContainer">
            <Routes>
              <Route path="/" element={<LogIn />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/register" element={<SignUp />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;

import React, { useState } from "react";
import "../../styles/AccountForms/Form.css";
import { Routes, Route, Link } from "react-router-dom";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import { delay, motion } from "framer-motion";

function Form() {
  const [registered, setRegistered] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const backDropVariants = {
    expanded: {
      width: "233%",
      height: "1050px",
      borderRadius: "20%",
      transform: "rotate(60deg)",
    },
    collapsed: {
      width: "160%",
      height: "550px",
      borderRadius: "50%",
      transform: "rotate(60deg)",
    },
  };

  const headerVariants = {
    expanded: {
      opacity: 0,
    },
    collapsed: {
      opacity: 1,
    },
  };

  const formVariants = {
    expanded: {
      opacity: 0,
      transition: { delay: -1 },
    },
    collapsed: {
      opacity: 1,
      transition: { delay: -1 },
    },
  };

  return (
    <>
      <div className="formContainer">
        <div className="form">
          <div className="topContainer">
            <motion.div
              className="backDrop"
              initial={false}
              animate={isExpanded ? "expanded" : "collapsed"}
              variants={backDropVariants}
              transition={{ type: "spring", stiffness: 50 }}
            />
            <motion.div
              className="formHeader"
              animate={isExpanded ? "expanded" : "collapsed"}
              variants={headerVariants}
            >
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
                  onClick={() => {
                    setIsExpanded(true);
                    setTimeout(() => setIsExpanded(false), 600);
                    setTimeout(() => setRegistered(!registered), 600);
                  }}
                >
                  {registered ? "Sign Up" : "Log In"}
                </Link>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="infoContainer"
            initial={true}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={formVariants}
          >
            <Routes>
              <Route path="/" element={<LogIn />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/register" element={<SignUp />} />
            </Routes>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Form;

import React, { useState } from "react";
import "../../styles/AccountForms/Form.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import { motion, AnimatePresence } from "framer-motion";

function Form() {
  const [registered, setRegistered] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const location = useLocation();

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

  return (
    <>
      <motion.div
        className="formContainer"
        initial={false}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
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
                  exact="true"
                  to={registered ? "register" : "login"}
                  onClick={() => {
                    setIsExpanded(true);
                    setTimeout(() => {
                      setIsExpanded(false);
                      setRegistered(!registered);
                    }, 600);
                  }}
                >
                  {registered ? "Sign Up" : "Log In"}
                </Link>
              </div>
            </motion.div>
          </div>
          <div className="infoContainer">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route index element={<LogIn />} />
                <Route path="login" element={<LogIn />} />
                <Route path="register" element={<SignUp />} />
              </Routes>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Form;

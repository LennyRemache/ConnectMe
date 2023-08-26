import React from "react";
import { useState } from "react";
import axios from "axios";
import "../../styles/AccountForms/LogIn.css";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { statusAtom, userAtom } from "../../App";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // eslint-disable-next-line
  const [loggedIn, setLoggedIn] = useAtom(statusAtom);
  const navigate = useNavigate();

  // eslint-disable-next-line
  const [userData, setUserData] = useAtom(userAtom);

  const handleLogIn = async (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };

    await axios
      .post("https://connectme-server.onrender.com/auth/login", user)
      .then((response) => {
        console.log("Logged In");
        setUserData(response.data.user);
        setLoggedIn(true);
        navigate("/profile");
      })
      .catch((error) => {
        console.log("Log In Failed", error);
      });
  };

  return (
    <>
      <motion.form
        method="POST"
        onSubmit={handleLogIn}
        className="logInForm"
        initial={false}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
          id="email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
          id="password"
        />

        <input type="submit" value="LOG IN" />
      </motion.form>
    </>
  );
}

export default LogIn;

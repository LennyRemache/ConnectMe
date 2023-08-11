import React, { useState } from "react";
import axios from "axios";
import "../../styles/AccountForms/SignUp.css";
import { motion } from "framer-motion";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      userName,
      email,
      password,
    };

    await axios
      .post("https://connectme-server.onrender.com/auth/register", user)
      .then((response) => {
        console.log("Success!", response.data);
      })
      .catch((error) => {
        console.log(error.response.data.err);
      });
  };

  return (
    <>
      <motion.form
        method="POST"
        onSubmit={handleSignUp}
        className="signUpForm"
        initial={false}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <input
          type="text"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          placeholder="First Name"
          id="firstName"
        />

        <input
          type="text"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          placeholder="Last Name"
          id="lastName"
        />

        <input
          type="text"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          placeholder="Username"
          id="userName"
        />

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

        <input type="submit" value="REGISTER" />
      </motion.form>
    </>
  );
}

export default SignUp;

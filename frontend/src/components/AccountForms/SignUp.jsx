import React, { useState } from "react";
import axios from "axios";
import "../../styles/AccountForms/SignUp.css";

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
      .post("http://localhost:3001/auth/register", user)
      .then((response) => {
        console.log("Success!", response.data);
      })
      .catch((error) => {
        console.log(error.response.data.err);
      });
  };

  return (
    <>
      <form method="POST" onSubmit={handleSignUp} className="signUpForm">
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
      </form>
    </>
  );
}

export default SignUp;

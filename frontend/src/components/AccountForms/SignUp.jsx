import React, { useState } from "react";
import axios from "axios";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      userName,
      email,
      password,
    };

    axios
      .post("http://localhost:3001/auth/register", user)
      .then((response) => {
        console.log("lol", response);
      })
      .catch((error) => {
        console.log("jhklhkl", error);
      });
  };

  return (
    <>
      <form method="POST" onSubmit={handleSignUp}>
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

        <input type="submit" value="Sign Up" />
      </form>
    </>
  );
}

export default SignUp;

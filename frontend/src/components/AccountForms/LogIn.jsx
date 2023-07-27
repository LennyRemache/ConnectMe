import React from "react";
import { useState } from "react";
import axios from "axios";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = async (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };

    await axios
      .post("http://localhost:3001/auth/login", user)
      .then((response) => {
        console.log("Logged In", response);
      })
      .catch((error) => {
        console.log("Log In Failed", error);
      });
  };
  return (
    <>
      <form method="POST" onSubmit={handleLogIn}>
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

        <input type="submit" value="Log In" />
      </form>
    </>
  );
}

export default LogIn;

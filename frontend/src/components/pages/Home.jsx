import React from "react";
import "../../styles/pages/Home.css";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <motion.div
        className="homeContainer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="hero-container">
          <h2 className="hero-header">
            There's a better way to <span>connect with customers</span>
          </h2>

          <h1 className="hero-description">
            Smarter networking solutions and services from ConnectMe
          </h1>
          <button className="hero-register-btn">
            <i className="fa-brands fa-connectdevelop fa-lg"></i>Sign Up
          </button>
          <img
            src={require("../../assets/networking.png")}
            className="hero-img"
            alt="Loading..."
          />
        </div>
      </motion.div>
    </>
  );
}

export default Home;

// friends, family, colleagues

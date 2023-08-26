import React from "react";
import "../../../styles/pages/profile/Profile.css";
import { Routes, Route, useLocation } from "react-router-dom";
import ProfileNavbar from "./ProfileNavbar";
import Links from "./Links";
import Appearance from "./Appearance/Appearance";
import { motion } from "framer-motion";

function Profile() {
  const location = useLocation();

  return (
    <>
      <motion.div
        className="profileContainer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ProfileNavbar />
        <div className="profile-content">
          <div className="profile-route">
            <Routes>
              <Route index element={<div>Links</div>} />
              <Route path="links" element={<Links />} />
              <Route path="appearance" element={<Appearance />} />
              <Route path="analytics" element={<div>Analytics</div>} />
              <Route path="settings" element={<div>Settings</div>} />
            </Routes>
          </div>
          {(location.pathname.slice(8, 14) === "/links" ||
            location.pathname.slice(8, 19) === "/appearance") && (
            <div className="profile-display">Display</div>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default Profile;

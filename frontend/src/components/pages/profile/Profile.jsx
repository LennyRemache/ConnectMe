import React from "react";
import "../../../styles/pages/profile/Profile.css";
import { Routes, Route, useLocation } from "react-router-dom";
import ProfileNavbar from "./ProfileNavbar";
import Links from "./Links";
import Appearance from "./Appearance/Appearance";

function Profile() {
  const location = useLocation();
  console.log(location.pathname.slice(8, 19));
  return (
    <>
      <div className="profileContainer">
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
      </div>
    </>
  );
}

export default Profile;

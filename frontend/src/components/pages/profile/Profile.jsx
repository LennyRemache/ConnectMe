import React from "react";
import "../../../styles/pages/profile/Profile.css";
import { Routes, Route } from "react-router-dom";
import ProfileNavbar from "./ProfileNavbar";

function Profile() {
  return (
    <>
      <div className="profileContainer">
        <ProfileNavbar />
        <div className="profile-route">
          <Routes>
            <Route index element={<div>Links</div>} />
            <Route path="links" element={<div>Links</div>} />
            <Route path="appearance" element={<div>Appearance</div>} />
            <Route path="analytics" element={<div>Analytics</div>} />
            <Route path="settings" element={<div>Settings</div>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Profile;
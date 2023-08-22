import React from "react";
import "../../../../styles/pages/profile/Appearance/Profile.css";

function Profile() {
  return (
    <>
      <div className="appearance-profile-container">
        <h1>Profile</h1>
        <div className="appearance-profile">
          <div className="appearance-pic">
            <div className="appearance-pic-img"></div>
            <div className="appearance-pic-btns">
              <button className="appearance-pic-btn pick">Pick an image</button>
              <button className="appearance-pic-btn remove">Remove</button>
            </div>
          </div>
        </div>
      </div>
      <div className="appearance-buttons">
        <div className="appearance-buttons-content"></div>
      </div>
    </>
  );
}

export default Profile;

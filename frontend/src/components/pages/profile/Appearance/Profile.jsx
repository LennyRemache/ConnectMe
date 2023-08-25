import React, { useState } from "react";
import "../../../../styles/pages/profile/Appearance/Profile.css";

function Profile() {
  const [bio, setBio] = useState("");

  return (
    <>
      <div className="appearance-profile-container">
        <h1>Profile</h1>
        <div className="appearance-profile">
          <div className="appearance-pic">
            <div>
              <div className="appearance-pic-img"></div>
            </div>
            <div className="appearance-pic-btns">
              <button className="appearance-pic-btn pick">Pick an image</button>
              <button className="appearance-pic-btn remove">Remove</button>
            </div>
          </div>
          <div className="appearance-title">
            <input type="text" />
            <label>Profile Title</label>
          </div>
          <div className="appearance-bio">
            <textarea
              rows="4"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
            <label className="appearance-bio-label">Bio</label>
            <label className="appearance-bio-count">{bio.length} / 80</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;

import React, { useEffect, useRef, useState } from "react";
import "../../../../styles/pages/profile/Appearance/Profile.css";
import { useAtom } from "jotai";
import { userAtom } from "../../../../App";
import axios from "axios";

function Profile() {
  const [bio, setBio] = useState("");
  const [userData] = useAtom(userAtom);
  const [title, setTitle] = useState("");

  useEffect(() => {
    getTitle();
  }, []);

  const getTitle = async () =>
    await axios
      .get(`https://connectme-server.onrender.com/user/${userData}`)
      .then((response) => {
        console.log(response.data.user.profile.appearance.title);
        setTitle(response.data.user.profile.appearance.title);
      })
      .catch((error) => {
        console.log(error);
      });

  const handleTitleChange = async () => {
    await axios
      .put(`https://connectme-server.onrender.com/user/${userData}`, {
        title: title === "" ? `@${userData}` : title,
      })
      .then((response) => {
        console.log(response.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={handleTitleChange}
            />
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

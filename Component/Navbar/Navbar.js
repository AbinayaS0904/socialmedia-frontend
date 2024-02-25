import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "./navbar.css";

import searchIcon from "../images/search.png";
import Notifications from "../images/bell.jpg";
import Message from "../images/message.png";
import ProfileImage from "../images/profile.jpg";

export default function Navbar() {
  return (
    <div className="mainNavbar">
      <div className="LogoContainer">
        <h1>Socio-Connect</h1>
      </div>
      <div className="searchInputContainer">
        <img src={`${searchIcon}`} className="searchIcon" alt="" />
        <input type="text" className="searchInput" placeholder='search your friends' id="" />
      </div>
      <div className="IconsContainer">
        <img src={`${Notifications}`} className="Icons" alt="" />
        <img src={`${Message}`} className="Icons" alt="" />
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/profile/"> {/* Use Link to navigate to the profile link */}
            <img src={`${ProfileImage}`} className="ProfileImage" alt="" />
            <p style={{ marginLeft: "5px", fontSize: "40px", fontWeight: "bold" }}>
              Abinaya
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

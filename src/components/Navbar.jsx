import React from "react";
import netflixImage from "../assets/netflix.png";
import profileImage from "../assets/profile-image.jpg";
import { IoIosSearch } from "react-icons/io";
import { FiBell } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <div className="header" id="header">
        <div className="navContent">
          <div className="leftNavLinks">
            <div className="netflixNavLogo">
              <img
                src={netflixImage}
                alt="netflix-logo"
                id="headerNetflixLogo"
              />
            </div>
            <h1 className="navLink">Home</h1>
            <h1 className="navLink">TV Shows</h1>
            <h1 className="navLink">Movies</h1>
            <h1 className="navLink">New & Popular</h1>
            <h1 className="navLink">My List</h1>
            <h1 className="navLink">Browse By Languages</h1>
          </div>

          <div className="rightNavLinks">
            <IoIosSearch className="navLink" id="search-icon"/>

            <h1 className="navLink">Kids</h1>

            <FiBell className="navLink" id="bell-icon"/>

            <div className="profileContent navLink">
              <img src={profileImage} alt="profile-img" id="profileimage" />
              <IoMdArrowDropdown id="arrow-icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

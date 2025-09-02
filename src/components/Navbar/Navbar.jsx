import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  // Mobile menu state
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-left">
        <img
          src="https://open.spotifycdn.com/cdn/images/icons/Spotify_256.17e41e58.png"
          alt="Spotify"
          className="logo"
        />
      </div>

      {/* Search and navigation */}
      <div className="navbar-center">
        <div className="search-container">
          <div><i className="fa-solid fa-house"></i></div>
          <div className="search-bar">
            <span className="search-icon"><i className="fa-solid fa-magnifying-glass"></i></span>
            <input type="text" placeholder="What do you want to play?" />
            <span className="box-icon"><i className="fa-brands fa-firefox"></i></span>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <button className="install-btn"><i className="fa-regular fa-circle-down"></i> Install App</button>
        <button className="signup-btn">Sign up</button>
        <button className="login-btn">Log in</button>
      </div>

      {/* Menu icon for mobile */}
      <div className="hamburger" onClick={() => setMenuOpen(true)}>
        <i className="fa-solid fa-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;

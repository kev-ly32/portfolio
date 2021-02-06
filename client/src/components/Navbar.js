import React from "react";
import "../public/Navbar.css";

function Navbar(props) {
  const navLinks = ["Projects", "About", "Resume", "Contact"];

  return (
    <div className="navbar">
      <div className="navbar-container">
        {navLinks.map((link, i) => (
          <a href="/" key={i} className="nav-link">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;

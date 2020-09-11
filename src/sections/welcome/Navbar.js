import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import "./Navbar.css";

function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <nav className="welcome__nav">
      {/* Logo */}
      <img className="welcome__logo" src="images/AppX-Logo.png" alt="Appx20" />
      {/* Nav */}
      <MenuIcon
        className="welcome__links--mobile "
        onClick={() => {
          setOpenNav(!openNav);
        }}
      />
      <div
        className={`welcome__links ${openNav && "welcome__links--mobileOpen"}`}
      >
        <Link className="welcome__link welcome__link--selected" to="/">
          <span className="welcome__linkText">HOME</span>{" "}
        </Link>
        <Link className="welcome__link" to="/about">
          <span className="welcome__linkText">ABOUT</span>{" "}
        </Link>
        <Link className="welcome__link" to="/blog">
          <span className="welcome__linkText">BLOG</span>{" "}
        </Link>
        <Link className="welcome__link" to="/gift-shop">
          <span className="welcome__linkText">GIFT SHOP</span>
        </Link>
        <Link className="welcome__link" to="/contact">
          <span className="welcome__linkText">CONTACT</span>{" "}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

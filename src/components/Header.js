import React, { useState } from "react";
import "./Header.css";
import Logo from "../assets/Logo Vector.svg";
import Favourite from "../assets/Favorites.svg";
import Cart from "../assets/Cart.svg";
import User from "../assets/User.svg";
import Menu from "../assets/Burger.svg";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };
  return (
    <div className={`header ${menuOpen ? "menu-open" : ""}`}>
      <img src={Logo} alt="logo" className="logo" />

      <div className="searchContainer">
        <input className="searchBar" type="search" placeholder="Search" />
      </div>
      <img src={Menu} className="menuBtn" onClick={toggleMenu} alt="icon" />
      <nav className={`navigation ${menuOpen ? "menu-open" : ""}`}>
        <Link to="/" className="navLink">
          Home
        </Link>

        <a className="navLink" href="#footer">
          Contact Us
        </a>
        <Link className="navLink" to="/product">
          Products
        </Link>
        <a className="navLink" href="#">
          About
        </a>
        <div className="headerIcon">
          <span>
            {menuOpen ? "Wishlist" : <img src={Favourite} alt="icon" />}
          </span>
          <Link to="/cart">
            <span>{menuOpen ? "Cart" : <img src={Cart} alt="icon" />}</span>
          </Link>
          <span>{menuOpen ? "Account" : <img src={User} alt="icon" />}</span>
        </div>
      </nav>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import "./Header.css";
import Logo from "../assets/Logo Vector.svg";
import Favourite from "../assets/Favorites.svg";
import Cart from "../assets/Cart.svg";
import User from "../assets/User.svg";
import Menu from "../assets/Burger.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 750);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const count = useSelector((state) => state.cart.cartCount);
  console.log(count);
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
        <Link to="/" className="navLink" onClick={toggleMenu}>
          Home
        </Link>
        <a className="navLink" href="#footer" onClick={toggleMenu}>
          Contact Us
        </a>
        <Link className="navLink" to="/product" onClick={toggleMenu}>
          Products
        </Link>
        <a className="navLink" href="#footer" onClick={toggleMenu}>
          About
        </a>
        <div className="headerIcon">
          <span onClick={toggleMenu}>
            {menuOpen ? "Wishlist" : <img src={Favourite} alt="icon" />}
          </span>
          <Link
            to="/cart"
            style={{ textDecoration: "none" }}
            onClick={toggleMenu}
          >
            <span className="countCart">
              {isSmallScreen ? "Cart" : <img src={Cart} alt="icon" />}
              {count === 0 ? "" : <span className="countIcon">{count}</span>}
            </span>
          </Link>
          <span onClick={toggleMenu}>
            {isSmallScreen ? "Account" : <img src={User} alt="icon" />}
          </span>
        </div>
      </nav>
    </div>
  );
}

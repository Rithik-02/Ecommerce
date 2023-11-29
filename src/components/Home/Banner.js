import React from "react";
import "./Banner.css";
import BannerImg from "../../assets/banner.png";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className="bannerContainer">
      <div className="banner">
        <div className="bannerTextContainer">
          <p className="proText">Pro.Beyond</p>
          <h1 className="BannerHeading">Iphone 14 Pro</h1>
          <p className="subHeading">
            Created to change everything for the better. For everyone
          </p>
          <Link to="/details" className="shopNowBtn">
            Shop Now
          </Link>
        </div>
        <div className="phoneImgContainer">
          <img className="iphoneImg" src={BannerImg} alt="banner" />
        </div>
      </div>
    </div>
  );
}

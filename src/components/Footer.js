import React from "react";
import "./Footer.css";
import LogoFoot from "../assets/LogoFooter.svg";
import Facebook from "../assets/footerIcon/Facebook.png";
import Tiktok from "../assets/footerIcon/Tiktok.png";
import Twitter from "../assets/footerIcon/Twitter.svg";
import Instagram from "../assets/footerIcon/Instagram.png";
export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="siteDetails">
        <div>
          <img src={LogoFoot} alt="logo" className="footerLogo" />
          <p>
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>
        </div>
        <div className="footerIcon">
          <img src={Facebook} className="footerIcn" />
          <img src={Tiktok} className="footerIcn" />
          <img src={Twitter} className="footerIcn" />
          <img src={Instagram} className="footerIcn" />
        </div>
      </div>
      <div className="services">
        <ul className="footerList">
          <li className="listHeading">Services</li>
          <li className="listitems">Bonus program</li>
          <li className="listitems">Gift cards</li>
          <li className="listitems">Credit and payment</li>
          <li className="listitems">Service contracts</li>
          <li className="listitems">Non-cash account</li>
          <li className="listitems">Payment</li>
        </ul>
      </div>
      <div className="assistanceList">
        <ul className="footerList">
          <li className="listHeading">Assistance to the buyer</li>
          <li className="listitems">Find an order</li>
          <li className="listitems">Terms of delivery</li>
          <li className="listitems">Exchange and return of goods</li>
          <li className="listitems">Guarantee</li>
          <li className="listitems">Frequently asked questions</li>
          <li className="listitems">Terms of use of the site</li>
        </ul>
      </div>
    </div>
  );
}

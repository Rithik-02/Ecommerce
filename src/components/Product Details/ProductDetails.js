import React from "react";
import IMG1 from "../../assets/Details/image 57.png";
import IMG2 from "../../assets/Details/image 61.png";
import IMG3 from "../../assets/Details/image 62.png";
import IMG4 from "../../assets/Details/image 63.png";
import MainImg from "../../assets/Details/productImage.png";
import Screensize from "../../assets/Details/Screensize.svg";
import cpu from "../../assets/Details/cpu.png";
import core from "../../assets/Details/core.svg";
import camera from "../../assets/Details/camera.png";
import battery from "../../assets/Details/battery.svg";
import Truck from "../../assets/Details/truck.png";
import Stock from "../../assets/Details/stock.png";
import Gurantee from "../../assets/Details/gurantee.png";
import Specification from "./Specification";
import "./ProductDetails.css";

export default function ProductDetails() {
  return (
    <div>
      <div className="productDetails">
        <div className="productDetailImage">
          <div className="sideImages">
            <img src={IMG1} alt="icon" />
            <img src={IMG2} alt="icon" />
            <img src={IMG3} alt="icon" />
            <img src={IMG4} alt="icon" />
          </div>
          <div className="mainImage">
            <img src={MainImg} alt="icon" />
          </div>
        </div>
        <div className="productDetailsSpec">
          <p className="productDetailName">Apple Iphone 14 Pro Max</p>
          <p className="productDetailPrice">$1399</p>
          <div className="colorSelection">
            <p>Select color:</p>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="gbDetails">
            <span>128GB</span>
            <span>256GB</span>
            <span>512GB</span>
            <span>1TB</span>
          </div>
          <div className="productSpecCardDetails">
            <div className="specCard">
              <img src={Screensize} alt="icon" />
              <div className="specCardDetails">
                <p className="specCardhead">Screen size</p>
                <p className="specCardSubHead">6.7"</p>
              </div>
            </div>
            <div className="specCard">
              <img src={cpu} alt="icon" />
              <div className="specCardDetails">
                <p className="specCardhead">CPU</p>
                <p className="specCardSubHead">Apple A16 Bionic</p>
              </div>
            </div>
            <div className="specCard">
              <img src={core} alt="icon" />
              <div className="specCardDetails">
                <p className="specCardhead">Number of Cores</p>
                <p className="specCardSubHead">6</p>
              </div>
            </div>
            <div className="specCard">
              <img src={camera} alt="icon" />
              <div className="specCardDetails">
                <p className="specCardhead">Main Camera</p>
                <p className="specCardSubHead">48-12-12 MP</p>
              </div>
            </div>
            <div className="specCard">
              <img src={camera} alt="icon" />
              <div className="specCardDetails">
                <p className="specCardhead">Front Camera</p>
                <p className="specCardSubHead">12 MP</p>
              </div>
            </div>
            <div className="specCard">
              <img src={battery} alt="icon" />
              <div className="specCardDetails">
                <p className="specCardhead">Battery Capacity</p>
                <p className="specCardSubHead">4323mAh</p>
              </div>
            </div>
          </div>
          <div className="productSummary">
            <p>
              Enhanced capabilities thanks toan enlarged display of 6.7
              inchesand work without rechargingthroughout the day. Incredible
              photosas in weak, yesand in bright lightusing the new systemwith
              two cameras more...
            </p>
          </div>
          <div className="detailsBtn">
            <button className="addToWish">Add to Wishlist</button>
            <button className="addToCartBtn">Add to Cart</button>
          </div>
          <div className="productDeliveryDetails">
            <div className="deliveryDetails">
              <img src={Truck} className="deliveryImg" alt="icon" />
              <div>
                <p>Free Delivery</p>
                <span>1-2 day</span>
              </div>
            </div>
            <div className="deliveryDetails">
              <img src={Stock} className="deliveryImg" alt="icon" />
              <div>
                <p>In Stock</p>
                <span>Today</span>
              </div>
            </div>
            <div className="deliveryDetails">
              <img src={Gurantee} className="deliveryImg" alt="icon" />
              <div>
                <p>Guaranteed</p>
                <span>1 year</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Specification />
    </div>
  );
}

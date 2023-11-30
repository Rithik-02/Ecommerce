import React, { useState } from "react";
import "./HomeProduct.css";
import { HomeProductData } from "../../data/HomeProductData";
import { Link } from "react-router-dom";

export default function HomeProduct() {
  const [selectedHeading, setSelectedHeading] = useState(0);

  const handleHeadingClick = (index) => {
    setSelectedHeading(index);
  };
  return (
    <div className="homeCardComponent">
      <div className="homeCardHeading">
        <p
          className={`homeCardHeadingText ${
            selectedHeading === 0 ? "underline" : ""
          }`}
          onClick={() => handleHeadingClick(0)}
        >
          New Arrival
        </p>
        <p
          className={`homeCardHeadingText ${
            selectedHeading === 1 ? "underline" : ""
          }`}
          onClick={() => handleHeadingClick(1)}
        >
          Bestseller
        </p>
        <p
          className={`homeCardHeadingText ${
            selectedHeading === 2 ? "underline" : ""
          }`}
          onClick={() => handleHeadingClick(2)}
        >
          Featured Products
        </p>
      </div>{" "}
      <div className="homeCardItems">
        {HomeProductData.map((data, index) => (
          <div className="homeCard" key={index}>
            <img src={data.img} className="homeProdImg" alt="product" />
            <p className="homeProductName">{data.name}</p>
            <p className="homeProductPrice">${data.price}</p>
            <Link to="/product" className="buyNowHomeBtn">
              Go to Product
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

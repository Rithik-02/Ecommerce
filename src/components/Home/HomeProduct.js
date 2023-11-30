import React, { useState, useEffect } from "react";
import "./HomeProduct.css";
import { HomeProductData } from "../../data/HomeProductData";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsSmallScreen, sizeCalulate } from "../../Redux/Slice";

export default function HomeProduct() {
  const dispatch = useDispatch();
  const [selectedHeading, setSelectedHeading] = useState(0);
  const isSmallScreen = useSelector((state) => state.cart.isSmallScreen);

  useEffect(() => {
    const handleResize = () => {
      dispatch(setIsSmallScreen(window.innerWidth <= 460));
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      dispatch(sizeCalulate(isSmallScreen));
    };
  }, [dispatch, isSmallScreen]);

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
      </div>
      <div className="homeCardItems">
        {HomeProductData.map((data, index) => (
          <div className="homeCard" key={index}>
            <img src={data.img} className="homeProdImg" alt="product" />
            <p className="homeProductName">
              {isSmallScreen
                ? data.name.length > 25
                  ? `${data.name.substring(0, 20)}...`
                  : data.name
                : data.name.length > 42
                ? `${data.name.substring(0, 42)}...`
                : data.name}
            </p>
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

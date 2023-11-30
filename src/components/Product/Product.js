import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Product.css";
import { addToCart } from "../../Redux/Slice";
import { ProductData } from "../../data/ProductData";
import { useEffect, useState } from "react";

export default function Product() {
  const dispatch = useDispatch();
  const filteredData = useSelector((state) => state.cart.filterProduct);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 460);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleAddtoCart = (productDetails) => {
    dispatch(addToCart(productDetails));
  };
  return (
    <div className="product">
      {filteredData.length > 0
        ? filteredData.map((data) => (
            <div className="productCard" key={data.id}>
              <img src={data.img} className="homeProdImg" alt="productImg" />
              <p className="productName">
                <p className="homeProductName">
                  {isSmallScreen
                    ? data.name.length > 25
                      ? `${data.name.substring(0, 20)}...`
                      : data.name
                    : data.name.length > 42
                    ? `${data.name.substring(0, 42)}...`
                    : data.name}
                </p>
              </p>

              <p className="productPrice">${data.price}</p>
              <button
                className="productbuyNowHomeBtn"
                onClick={() => handleAddtoCart(data)}
              >
                Add to Cart
              </button>
            </div>
          ))
        : ProductData.map((data) => (
            <div className="productCard" key={data.id}>
              <img src={data.img} className="homeProdImg" alt="productImg" />
              <p className="productName">
                {isSmallScreen
                  ? data.name.length > 25
                    ? `${data.name.substring(0, 20)}...`
                    : data.name
                  : data.name.length > 42
                  ? `${data.name.substring(0, 42)}...`
                  : data.name}
              </p>

              <p className="productPrice">${data.price}</p>
              <button
                className="productbuyNowHomeBtn"
                onClick={() => handleAddtoCart(data)}
              >
                Add to Cart
              </button>
            </div>
          ))}
    </div>
  );
}

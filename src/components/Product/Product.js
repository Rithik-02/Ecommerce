import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Product.css";
import { addToCart } from "../../Redux/Slice";
import { ProductData } from "../../data/ProductData";

export default function Product() {
  const dispatch = useDispatch();
  const filteredData = useSelector((state) => state.cart.filterProduct);
  console.log("product filtered data", filteredData);
  const handleAddtoCart = (productDetails) => {
    dispatch(addToCart(productDetails));
  };
  return (
    <div className="product">
      {filteredData.length > 0
        ? filteredData.map((data) => (
            <div className="productCard" key={data.id}>
              <img src={data.img} className="homeProdImg" />
              <p className="productName">{data.name}</p>
              <p className="productPrice">${data.price}</p>
              <a
                className="productbuyNowHomeBtn"
                onClick={() => handleAddtoCart(data)}
              >
                Add to Cart
              </a>
            </div>
          ))
        : ProductData.map((data) => (
            <div className="productCard" key={data.id}>
              <img src={data.img} className="homeProdImg" />
              <p className="productName">{data.name}</p>
              <p className="productPrice">${data.price}</p>
              <a
                className="productbuyNowHomeBtn"
                onClick={() => handleAddtoCart(data)}
              >
                Add to Cart
              </a>
            </div>
          ))}
    </div>
  );
}

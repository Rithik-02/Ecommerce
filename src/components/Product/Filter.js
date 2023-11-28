import React, { useState } from "react";
import "./Filter.css";
import { ProductData } from "../../data/ProductData";
import Up from "../../assets/Filter/up.png";
import Down from "../../assets/Filter/down.png";
import BrandFilter from "./BrandFilter";
import SizeFilter from "./SizeFilter";
import { useDispatch, useSelector } from "react-redux";
import { allFilteredData } from "../../Redux/Slice";

const PriceFilter = () => {
  const [isPriceDropdownOpen, setIsPriceDropdownOpen] = useState(true);
  const [fromPrice, setFromPrice] = useState(null);
  const [toPrice, setToPrice] = useState(null);
  const dispatch = useDispatch();

  const brandName = useSelector((state) => state.cart.brandData);
  const sizeDetails = useSelector((state) => state.cart.sizeData);

  const togglePriceDropdown = () => {
    setIsPriceDropdownOpen(!isPriceDropdownOpen);
  };

  const handleApplyFilter = () => {
    let filteredData = ProductData;

    if (fromPrice !== null && toPrice !== null) {
      filteredData = filteredData.filter(
        (product) => product.price >= fromPrice && product.price <= toPrice
      );
    }

    if (brandName && brandName.length > 0) {
      const brandFilterCondition = (product) =>
        brandName.some((brand) =>
          product.name.toLowerCase().includes(brand.toLowerCase())
        );

      filteredData = filteredData.filter(brandFilterCondition);
    }

    if (sizeDetails && sizeDetails.length > 0) {
      const sizeFilterCondition = (product) =>
        sizeDetails.some((size) =>
          product.name.toLowerCase().includes(size.toLowerCase())
        );

      filteredData = filteredData.filter(sizeFilterCondition);
    }
    dispatch(allFilteredData(filteredData));
  };

  // const handleApplyFilter = () => {
  //   if (fromPrice !== null && toPrice !== null) {
  //     const filterCondition = (ProductData) =>
  //       ProductData.price >= fromPrice && ProductData.price <= toPrice;
  //     const priceFilteredData = ProductData.filter(filterCondition);
  //     console.log("price fun");
  //     console.log(priceFilteredData);
  //   } else if (brandName && brandName.length > 0) {
  //     const filteredBrandCondition = (ProductData) =>
  //       brandName.some((brand) =>
  //         ProductData.name.toLowerCase().includes(brand.toLowerCase())
  //       );
  //     const filteredBrandProduct = ProductData.filter(filteredBrandCondition);
  //     console.log("brand fun");
  //     console.log(filteredBrandProduct);
  //   } else if (sizeDetails && sizeDetails.length > 0) {
  //     const filteredBrandCondition = (ProductData) =>
  //       sizeDetails.some((size) =>
  //         ProductData.name.toLowerCase().includes(size.toLowerCase())
  //       );
  //     const filteredSizeProduct = ProductData.filter(filteredBrandCondition);
  //     console.log("size fun");
  //     console.log(filteredSizeProduct);
  //   }

  //   console.log(`Filter Applied: From ${brandName}`);
  // };

  return (
    <div className="priceFilter">
      <div className="priceHead">
        <p>Price</p>
        <div className="price-dropdown" onClick={togglePriceDropdown}>
          {isPriceDropdownOpen ? <img src={Up} /> : <img src={Down} />}
        </div>
      </div>

      <hr />
      {isPriceDropdownOpen && (
        <div className="priceRange">
          <div className="priceDropDownContent">
            <div className="fromInput">
              <p>From </p>
              <input
                className="inputPrice"
                type="text"
                value={fromPrice}
                onChange={(e) => setFromPrice(e.target.value)}
              />
            </div>
            <div className="toInput">
              <p>To</p>
              <input
                className="inputPrice"
                type="text"
                value={toPrice}
                onChange={(e) => setToPrice(e.target.value)}
              />{" "}
            </div>
          </div>
        </div>
      )}
      <BrandFilter />
      <SizeFilter />
      <div className="applyBtn">
        <button className="filterApplyBtn" onClick={handleApplyFilter}>
          Apply
        </button>
      </div>
    </div>
  );
};

export default PriceFilter;

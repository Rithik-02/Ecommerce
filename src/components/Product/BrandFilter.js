import React, { useState } from "react";
import Up from "../../assets/Filter/up.png";
import Down from "../../assets/Filter/down.png";
import "./BrandFilter.css";
import { brandFilteredData } from "../../Redux/Slice";
import { useDispatch } from "react-redux";

export default function BrandFilter() {
  const dispatch = useDispatch();
  const [isPriceDropdownOpen, setIsPriceDropdownOpen] = useState(true);
  const [brandName, setBrandName] = useState([]);

  const handleBrandFilter = (e) => {
    const value = e.target.name;

    setBrandName((prevBrand) => {
      const updatedBrand = e.target.checked
        ? [...prevBrand, value]
        : prevBrand.filter((brand) => brand !== value);

      dispatch(brandFilteredData(updatedBrand));
      return updatedBrand;
    });
  };

  const togglePriceDropdown = () => {
    setIsPriceDropdownOpen(!isPriceDropdownOpen);
  };

  return (
    <div className="BrandFilter">
      <div className="brandHead">
        <p>Brand</p>
        <div onClick={togglePriceDropdown}>
          {isPriceDropdownOpen ? (
            <img src={Up} alt="icon" />
          ) : (
            <img src={Down} alt="icon" />
          )}
        </div>
      </div>
      <hr />
      {isPriceDropdownOpen && (
        <div className="brandList">
          <label>
            <input
              className="check"
              type="checkbox"
              name="Apple"
              onChange={(e) => handleBrandFilter(e)}
            />
            Apple
          </label>
          <label>
            <input
              className="check"
              type="checkbox"
              name="SamSung"
              onChange={(e) => handleBrandFilter(e)}
            />
            SamSung
          </label>
          <label>
            <input
              className="check"
              type="checkbox"
              name="Poco"
              onChange={(e) => handleBrandFilter(e)}
            />
            Poco
          </label>
        </div>
      )}
    </div>
  );
}

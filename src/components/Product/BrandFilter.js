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
  dispatch(brandFilteredData(brandName));

  const togglePriceDropdown = () => {
    setIsPriceDropdownOpen(!isPriceDropdownOpen);
  };

  return (
    <div className="BrandFilter">
      <div className="brandHead">
        <p>Brand</p>
        <div onClick={togglePriceDropdown}>
          {isPriceDropdownOpen ? <img src={Up} /> : <img src={Down} />}
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
              onChange={(e) =>
                setBrandName((prevBrandName) =>
                  e.target.checked
                    ? [...prevBrandName, e.target.name]
                    : prevBrandName.filter((brand) => brand !== e.target.name)
                )
              }
            />
            Apple
          </label>
          <label>
            <input
              className="check"
              type="checkbox"
              name="SamSung"
              onChange={(e) =>
                setBrandName((prevBrandName) =>
                  e.target.checked
                    ? [...prevBrandName, e.target.name]
                    : prevBrandName.filter((brand) => brand !== e.target.name)
                )
              }
            />
            SamSung
          </label>
          <label>
            <input
              className="check"
              type="checkbox"
              name="Poco"
              onChange={(e) =>
                setBrandName((prevBrandName) =>
                  e.target.checked
                    ? [...prevBrandName, e.target.name]
                    : prevBrandName.filter((brand) => brand !== e.target.name)
                )
              }
            />
            Poco
          </label>
          <label>
            <input
              className="check"
              type="checkbox"
              name="Oppo"
              onChange={(e) =>
                setBrandName((prevBrandName) =>
                  e.target.checked
                    ? [...prevBrandName, e.target.name]
                    : prevBrandName.filter((brand) => brand !== e.target.name)
                )
              }
            />
            Oppo
          </label>
        </div>
      )}
    </div>
  );
}

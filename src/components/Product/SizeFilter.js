import React, { useState } from "react";
import Up from "../../assets/Filter/up.png";
import Down from "../../assets/Filter/down.png";
import "./SizeFilter.css";
import { sizeFilteredData } from "../../Redux/Slice";
import { useDispatch } from "react-redux";
export default function SizeFilter() {
  const [isMemorydownOpen, setIsMemoryDropdownOpen] = useState(true);
  const [gbSize, setGbSize] = useState([]);
  const dispatch = useDispatch();

  dispatch(sizeFilteredData(gbSize));
  const toggleMemoryDropdown = () => {
    setIsMemoryDropdownOpen(!isMemorydownOpen);
  };
  return (
    <div className="SizeFilter">
      <div className="buildHead">
        <p>Build-in Memory</p>
        <div onClick={toggleMemoryDropdown}>
          {isMemorydownOpen ? <img src={Up} /> : <img src={Down} />}
        </div>
      </div>
      <hr />
      {isMemorydownOpen && (
        <div className="memoryList">
          <label>
            <input
              className="check"
              type="checkbox"
              value="128"
              onChange={(e) =>
                setGbSize((prevBrandName) =>
                  e.target.checked
                    ? [...prevBrandName, e.target.value]
                    : prevBrandName.filter((brand) => brand !== e.target.value)
                )
              }
            />
            128GB
          </label>
          <label>
            <input
              className="check"
              type="checkbox"
              value="256"
              onChange={(e) =>
                setGbSize((prevBrandName) =>
                  e.target.checked
                    ? [...prevBrandName, e.target.value]
                    : prevBrandName.filter((brand) => brand !== e.target.value)
                )
              }
            />
            256GB
          </label>
          <label>
            <input
              className="check"
              type="checkbox"
              value="512"
              onChange={(e) =>
                setGbSize((prevBrandName) =>
                  e.target.checked
                    ? [...prevBrandName, e.target.value]
                    : prevBrandName.filter((brand) => brand !== e.target.value)
                )
              }
            />
            512GB
          </label>
          <label>
            <input
              className="check"
              type="checkbox"
              value="1TB"
              onChange={(e) =>
                setGbSize((prevBrandName) =>
                  e.target.checked
                    ? [...prevBrandName, e.target.value]
                    : prevBrandName.filter((brand) => brand !== e.target.value)
                )
              }
            />
            1TB
          </label>
        </div>
      )}
    </div>
  );
}

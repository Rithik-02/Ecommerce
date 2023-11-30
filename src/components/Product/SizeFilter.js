import React, { useState } from "react";
import Up from "../../assets/Filter/up.png";
import Down from "../../assets/Filter/down.png";
import "./SizeFilter.css";
import { sizeFilteredData } from "../../Redux/Slice";
import { useDispatch } from "react-redux";
export default function SizeFilter() {
  const [isMemorydownOpen, setIsMemoryDropdownOpen] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [gbSize, setGbSize] = useState([]);

  const dispatch = useDispatch();

  const handleGbFilter = (e) => {
    const value = e.target.value;

    setGbSize((prevGbSize) => {
      const updatedGbSize = e.target.checked
        ? [...prevGbSize, value]
        : prevGbSize.filter((size) => size !== value);

      dispatch(sizeFilteredData(updatedGbSize));
      return updatedGbSize;
    });
  };

  const toggleMemoryDropdown = () => {
    setIsMemoryDropdownOpen(!isMemorydownOpen);
  };
  return (
    <div className="SizeFilter">
      <div className="buildHead">
        <p>Build-in Memory</p>
        <div onClick={toggleMemoryDropdown}>
          {isMemorydownOpen ? (
            <img src={Up} alt="arrowImg" />
          ) : (
            <img src={Down} alt="arrowImg" />
          )}
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
              onChange={(e) => handleGbFilter(e)}
            />
            128GB
          </label>
          <label>
            <input
              className="check"
              type="checkbox"
              value="256"
              onChange={(e) => handleGbFilter(e)}
            />
            256GB
          </label>
          <label>
            <input
              className="check"
              type="checkbox"
              value="512"
              onChange={(e) => handleGbFilter(e)}
            />
            512GB
          </label>
          <label>
            <input
              className="check"
              type="checkbox"
              value="1TB"
              onChange={(e) => handleGbFilter(e)}
            />
            1TB
          </label>
        </div>
      )}
    </div>
  );
}

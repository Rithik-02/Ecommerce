import React, { useState } from "react";
import Filter from "./Filter";
import "./ProductPage.css";
import Product from "./Product";
import FilterIcon from "../../assets/Filter/Filters.svg";
export default function ProductPage() {
  const [isFilteropen, setIsFilterOpen] = useState(false);

  const filterHandler = () => {
    setIsFilterOpen(!isFilteropen);
    console.log(isFilteropen);
    if (!isFilteropen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };
  return (
    <div>
      <div className="productPage">
        <div className="filterBtn" onClick={filterHandler}>
          <p>Filters</p>
          <img src={FilterIcon} alt="fitlerIcon" />
        </div>
        <div className={`${isFilteropen ? "open" : "filterComponent "}`}>
          <Filter filterHandler={filterHandler} />
        </div>
        <div className="productComponent">
          <Product />
        </div>
      </div>
    </div>
  );
}

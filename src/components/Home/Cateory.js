import React, { useState } from "react";
import "./Category.css";
import PhoneIcon from "../../assets/Phones.svg";
import { categoryData } from "../../data/categoryData";
import { Link } from "react-router-dom";

export default function () {
  const [data, setData] = useState(categoryData);

  return (
    <div className="category">
      <p className="browse">Browse By Category</p>
      <div className="categoryCard">
        {data.map((item, index) => (
          <div className="categoryItems" key={index}>
            <Link to="/product">
              <img src={item.Img} />
            </Link>
            <p className="catItemName">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

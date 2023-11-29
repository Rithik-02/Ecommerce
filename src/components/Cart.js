import React, { useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import Close from "../assets/Address/Close.svg";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, addTotal } from "../Redux/Slice";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.products);
  const subTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  if (subTotal > 0) {
    dispatch(addTotal(subTotal));
  }

  const quantiyIncrease = (data) => {
    dispatch(addToCart(data));
  };
  const quantiyDecrease = (data) => {
    dispatch(removeFromCart(data));
  };

  return (
    <div>
      <div className="cart">
        {cartItems.length !== 0 ? (
          <div>
            <p className="cartHead">Shopping Cart</p>
            <div className="cartItemCont">
              {cartItems.map((data, index) => (
                <div className="cartItems" key={data.id}>
                  <img src={data.img} />
                  <div className="cartItemDetails">
                    <p>{data.name}</p>
                  </div>
                  <div className="quantity">
                    <button onClick={() => quantiyDecrease(data)}>-</button>
                    <span>{data.quantity}</span>
                    <button onClick={() => quantiyIncrease(data)}>+</button>
                  </div>
                  <p className="cartItemPrice">${data.price * data.quantity}</p>
                  <button>
                    <img src={Close} />
                  </button>
                </div>
              ))}
            </div>{" "}
          </div>
        ) : (
          <p className="cartEmptyText">Cart is Empty</p>
        )}

        {cartItems.length !== 0 ? (
          <div className="orderDetails">
            <p>Order Summary</p>
            <div className="orderCalc">
              <p className="orderBold">Subtotal</p>
              <p className="orderBold">${subTotal}</p>
            </div>
            <div className="orderCalc">
              <p>Estimated Tax</p>
              <p className="orderBold">$50</p>
            </div>
            <div className="orderCalc">
              <p>Estimated shipping & Handling</p>
              <p className="orderBold">$29</p>
            </div>
            <div className="orderCalc">
              <p className="orderBold">Total</p>
              <p className="orderBold">${89 + subTotal}</p>
            </div>
            <Link to="/address" className="checkoutBtn">
              Checkout
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

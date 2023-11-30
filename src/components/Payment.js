import React, { useState, useEffect } from "react";
import "./Payment.css";
import Card from "../assets/Pay/Credit.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Payment() {
  const paymentAddress = useSelector((state) => state.cart.address);
  const payItems = useSelector((state) => state.cart.products);
  const total = useSelector((state) => state.cart.subtotal);

  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  useEffect(() => {
    setIsFormValid(cardholderName && cardNumber && expDate && cvv);
  }, [cardholderName, cardNumber, expDate, cvv]);
  const handleInputChange = (e) => {
    switch (e.target.name) {
      case "cardholderName":
        setCardholderName(e.target.value);
        break;
      case "cardNumber":
        setCardNumber(e.target.value);
        break;
      case "expDate":
        setExpDate(e.target.value);
        break;
      case "cvv":
        setCvv(e.target.value);
        break;
      default:
        break;
    }
  };
  const handlePay = () => {
    setIsOrderPlaced(true);
    setTimeout(() => {
      setIsFormValid(false);
      setIsOrderPlaced(false);
      setCardholderName("");
      setCardNumber("");
      setExpDate("");
      setCvv("");
    }, 3000);
  };
  return (
    <div className="paymentContainer">
      <div className="summary">
        <p>Summary</p>
        <div className="payitems">
          {payItems.map((items, id) => (
            <div className="addedItems" key={id}>
              <img src={items.img} alt="icon" />
              <p>{items.name}</p>
              <p>${items.price}</p>
            </div>
          ))}
        </div>
        <p className="payHead">Address</p>
        <p className="paySubHead">
          {`${paymentAddress.street}, ${paymentAddress.city}, ${paymentAddress.zipCode}`}
        </p>
        <p className="payHead">Shipment method</p>
        <p className="paySubHead">Free</p>
        <div className="payCal">
          <p>Subtotal</p>
          <p>${total}</p>
        </div>
        <div className="payCal">
          <p className="payCalList">Estimated Tax</p>
          <p>$50</p>
        </div>
        <div className="payCal">
          <p className="payCalList">Estimated shipping $ Handling</p>
          <p>$29</p>
        </div>
        <div className="payCal">
          <p>Total</p>
          <p>${89 + total}</p>
        </div>
      </div>
      <div className="payment">
        <p>Payment</p>
        <img src={Card} alt="icon" />

        <input
          type="text"
          name="cardholderName"
          placeholder="Cardholder Name"
          value={cardholderName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={cardNumber}
          onChange={handleInputChange}
        />
        <div className="inputDate">
          <input
            type="date"
            name="expDate"
            placeholder="Exp Date"
            value={expDate}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={cvv}
            onChange={handleInputChange}
          />
        </div>
        <div className="payBtncontainer">
          <Link to="/address" className="backBtn">
            Back
          </Link>
          <button
            className={`payBtn ${isFormValid ? "" : "disabled"}`}
            onClick={isFormValid ? handlePay : null}
          >
            Pay
          </button>
        </div>
        {isOrderPlaced && (
          <div className="popup">
            <p>Your order has been placed successfully!</p>
          </div>
        )}
      </div>
    </div>
  );
}

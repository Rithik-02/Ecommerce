import React, { useState } from "react";
import "./Address.css";
import { selectedAddress } from "../Redux/Slice";
import Close from "../assets/Address/Close.svg";
import { Link } from "react-router-dom";
import AddressPopUp from "./AddressPopUp";
import { useDispatch } from "react-redux";
export default function Address() {
  const dispatch = useDispatch();
  const [showAddressPopUp, setShowAddressPopUp] = useState(false);
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(null);
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      street: "21168 Thornidge",
      city: "Syracuse",
      state: "Connecticut",
      zipCode: "35624",
      phone: "(209) 555-0104",
    },
  ]);

  const [newAddress, setNewAddress] = useState({
    street: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
  });

  const handleAddNewAddress = () => {
    setAddresses([...addresses, { id: newAddress.length + 1, ...newAddress }]);
    setShowAddressPopUp(false);
    setNewAddress("");
  };
  const removeAddress = (index) => {
    const updatedAddress = addresses.filter((_, i) => i !== index);
    setAddresses(updatedAddress);
    setSelectedAddressIndex(null);
  };

  const handleSelectAddress = (index) => {
    setSelectedAddressIndex(index);
    dispatch(selectedAddress(addresses[index]));
  };

  return (
    <div>
      <div className={showAddressPopUp ? "address blurBackground" : "address"}>
        <p>Select Address</p>
        {addresses.map((item, index) => (
          <div className="addressContainer">
            <div className="addressContent">
              <input
                type="radio"
                className="custom-radio"
                checked={index === selectedAddressIndex}
                onChange={() => handleSelectAddress(index)}
              />
              <div className="addressDetails">
                <p>{item.street}</p>
                <p>{`${item.street}, ${item.city}, ${item.state} ${item.zipCode}`}</p>
                <p>{item.phone}</p>
              </div>
            </div>
            <div className="addressBtn">
              <button>
                <img src={Close} onClick={() => removeAddress(index)} />
              </button>
            </div>
          </div>
        ))}

        <div className="addNewBtn">
          <button
            className="button-container"
            onClick={() => setShowAddressPopUp(true)}
          >
            +
          </button>
          <p>Add New Address</p>
        </div>
        <div className="addressBtns">
          <Link to="/cart" className="addbackBtn">
            Back
          </Link>
          <Link
            to={selectedAddressIndex !== null ? "/pay" : ""}
            className={`nextBtn ${
              selectedAddressIndex === null ? "disabled" : ""
            }`}
          >
            Next
          </Link>
        </div>
      </div>
      {showAddressPopUp ? (
        <AddressPopUp
          setNewAddresses={setNewAddress}
          handleAddNewAddress={handleAddNewAddress}
          newAddress={newAddress}
          setShowAddressPopUp={setShowAddressPopUp}
        />
      ) : (
        ""
      )}
    </div>
  );
}

import React from "react";
import "./AddressPopUp.css";
export default function AddressPopUp({
  setNewAddresses,
  handleAddNewAddress,
  newAddress,
  setShowAddressPopUp,
}) {
  return (
    <div className="addressPopup">
      <form>
        <p>Add New Address</p>
        <label>
          Street:
          <input
            type="text"
            value={newAddress.street}
            onChange={(e) =>
              setNewAddresses({ ...newAddress, street: e.target.value })
            }
          />
        </label>
        <label>
          city:
          <input
            type="text"
            value={newAddress.city}
            onChange={(e) =>
              setNewAddresses({ ...newAddress, city: e.target.value })
            }
          />
        </label>
        <label>
          State:
          <input
            type="text"
            value={newAddress.state}
            onChange={(e) =>
              setNewAddresses({ ...newAddress, state: e.target.value })
            }
          />
        </label>
        <label>
          Zip Code:
          <input
            type="text"
            value={newAddress.zipCode}
            onChange={(e) =>
              setNewAddresses({ ...newAddress, zipCode: e.target.value })
            }
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            value={newAddress.phone}
            onChange={(e) =>
              setNewAddresses({ ...newAddress, phone: e.target.value })
            }
          />
        </label>
        <div className="addAdrsBtns">
          <button
            type="button"
            className="AddAdrs"
            onClick={handleAddNewAddress}
          >
            Add
          </button>
          <button
            type="button"
            className="cancelAddrs"
            onClick={() => setShowAddressPopUp(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

import React, { useState } from "react";
import { useNavigate} from 'react-router-dom';

import "./address.css"; 
import Header from "../header/header";
import Footer from "../footer/Footer";

const Address = () => {
  const [showPopup, setShowPopup] = useState(false); // State to toggle the popup
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Mike Ross",
      address: "45, Green Street, Sector 12, New Delhi, 110001, India",
      phoneNumber: "8734637468",
      state: "Delhi",
      pin: "110001",
      city: "New Delhi",
      isDefault: true,
    },
    {
      id: 2,
      name: "Mike Ross",
      address: "Office 704, Tower B, Techno Plaza, Bengaluru, Karnataka, 560100, India",
      phoneNumber: "8937447362",
      state: "Karnataka",
      pin: "560100",
      city: "Bengaluru",
      isDefault: false,
    },
  ]); // Default addresses
  const [newAddress, setNewAddress] = useState({
    state: "",
    city: "",
    pin: "",
    phoneNumber: "",
    address: "",
  }); // State for the new address form

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAddress({ ...newAddress, [name]: value });
  };
  const navigate = useNavigate();

  const handleSaveAddress = () => {
    if (
      newAddress.state &&
      newAddress.city &&
      newAddress.pin &&
      newAddress.phoneNumber &&
      newAddress.address
    ) {
      const updatedAddresses = [
        ...addresses,
        { ...newAddress, id: addresses.length + 1, isDefault: false },
      ];
      setAddresses(updatedAddresses);
      setNewAddress({
        state: "",
        city: "",
        pin: "",
        phoneNumber: "",
        address: "",
      }); // Reset form
      setShowPopup(false); // Close popup
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleRemoveAddress = (id) => {
    setAddresses(addresses.filter((address) => address.id !== id));
  };

  return (
    <div>
      <Header />
      <div className="addresses-page">
        <header className="headers">
        <img src="images/arrow-left.png" alt="arrow-left"  onClick={() => navigate("/checkout")} />

          <h1>Your Addresses</h1>
        </header>
        <div className="addresses-container">
          {/* Add Address Card  */}
          <div className="address-card add-address"  onClick={() => setShowPopup(true)} >
            <div className="add-icon">
              <img src="/images/add 2.png" alt="add" />
            </div>
              <p>Add Address</p>
          </div>

          {/* Display Existing Addresses */}
          {addresses.map((address) => (
            <div className="address-card" key={address.id}>
              <h3 className="address-name">
                {address.name}
                {address.isDefault && (
                  <span className="default-badge">Default</span>
                )}
              </h3>

              <p>{address.address}</p>
              <p>Phone Number: {address.phoneNumber}</p>
              <div className="actions"> 
                <button>Edit</button> |{" "}
                <button onClick={() => handleRemoveAddress(address.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Popup for Adding Address */}
        {showPopup && (
          <div className="popup-overlay" onClick={() => setShowPopup(false)}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
             
              <div className="popup-head">
                <img src="/images/Location.png" alt="location"/>
                <h2>Add Address</h2>
              </div>
             
              <div className="form-row">
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={newAddress.state}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City/District"
                  value={newAddress.city}
                  onChange={handleInputChange}
                />
       
                <input
                  type="text"
                  name="pin"
                  placeholder="Pin Code"
                  value={newAddress.pin}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={newAddress.phoneNumber}
                  onChange={handleInputChange}
                />
              </div>
              <textarea
                name="address"
                placeholder="Enter full address"
                value={newAddress.address}
                onChange={handleInputChange}
              ></textarea>
              <div className="popup-actions">
                <button onClick={handleSaveAddress}>Save</button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Address;



// update the addresses-page css and check why from addresses or payment page when back from navigator then data or order is not showing in checkout page

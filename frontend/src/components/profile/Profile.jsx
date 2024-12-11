import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./profile.css"; // Add styling as needed
import Header from "../header/header";
import Footer from "../footer/Footer";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddingNewCard, setIsAddingNewCard] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [newCard, setNewCard] = useState({
    number: "",
    expiration: "",
    cvc: "",
    cardholder: "",
  });
  const [profileData, setProfileData] = useState({
    fullName: "Mike Ross",
    email: "mikeross@gmail.com",
    gender: "Male",
    country: "India",
  });

  const [cards, setCards] = useState([
    {
      id: 1,
      number: "xxxx xxxx xxxx 1234",
      expiration: "12/23",
      cvc: "123",
      cardholder: "Mike Ross",
    },
    {
      id: 2,
      number: "xxxx xxxx xxxx 6789",
      expiration: "11/24",
      cvc: "456",
      cardholder: "Mike Ross",
    },
    {
      id: 3,
      number: "xxxx xxxx xxxx 3468",
      expiration: "10/25",
      cvc: "789",
      cardholder: "Mike Ross",
    },
  ]);

  const openModal = (card) => {
    setIsAddingNewCard(false);
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const openAddNewCardModal = () => {
    setIsAddingNewCard(true);
    setIsModalOpen(true);
    setNewCard({
      number: "",
      expiration: "",
      cvc: "",
      cardholder: "",
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
    setNewCard({
      number: "",
      expiration: "",
      cvc: "",
      cardholder: "",
    });
  };

  const handleModalChange = (e) => {
    const { id, value } = e.target;
    if (isAddingNewCard) {
      setNewCard((prevCard) => ({
        ...prevCard,
        [id]: value,
      }));
    } else {
      setSelectedCard((prevCard) => ({
        ...prevCard,
        [id]: value,
      }));
    }
  };

  const saveCardDetails = () => {
    if (isAddingNewCard) {
      // Adding a new card
      setCards((prevCards) => [
        ...prevCards,
        { ...newCard, id: prevCards.length + 1 },
      ]);
    } else {
      // Editing an existing card
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.id === selectedCard.id ? selectedCard : card
        )
      );
    }
    closeModal();
  };

  const removeCard = () => {
    setCards((prevCards) =>
      prevCards.filter((card) => card.id !== selectedCard.id)
    );
    closeModal();
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };
  const navigate = useNavigate();

  return (
    <div className="all">
      <Header />

      {/* Main Banner */}
      <section className="profile">
        <div className="profile-header">
        <img src="images/arrow-left.png" alt="arrow-left" onClick={() => navigate("/product")}/>
          <h1>My Profile</h1>
        </div>

        {/* Profile Information Section */}
        <div className="profile-info">
          <div className="profile-pic-container">
            <img
              src="/images/Ellipse 11 (1).png"
              alt="Profile Pic"
              className="profile-pic"
            />
            <h2>{profileData.fullName}</h2>
            <button className="save-button" onClick={handleEditClick}>
              {isEditing ? "Save" : "Edit"}
            </button>
          </div>
          <form className="profile-form">
            <div className="form-group">
              <label htmlFor="full-name">Full Name</label>
              <input
                type="text"
                id="full-name"
                value={profileData.fullName}
                onChange={(e) =>
                  setProfileData({ ...profileData, fullName: e.target.value })
                }
                disabled={!isEditing}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={profileData.email}
                onChange={(e) =>
                  setProfileData({ ...profileData, email: e.target.value })
                }
                disabled={!isEditing}
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <input
                type="text"
                id="gender"
                value={profileData.gender}
                onChange={(e) =>
                  setProfileData({ ...profileData, gender: e.target.value })
                }
                disabled={!isEditing}
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                value={profileData.country}
                onChange={(e) =>
                  setProfileData({ ...profileData, country: e.target.value })
                }
                disabled={!isEditing}
              />
            </div>
          </form>
        </div>

        {/* Payment Methods Section */}
        <div className="payment-methods">
          <h3>Saved Payment Methods</h3>
          <div className="cards">
            {cards.map((card) => (
                <div className="card" key={card.id}>
                    <img src="/images/credit-card.png 2.png" alt="credit card" />
                    <div className="card-details">
                        <span className="card-number">{card.number}</span>
                        <span className="cardholder-name">{card.cardholder}</span> 
                    </div>
                    <button onClick={() => openModal(card)}>
                        <img src="/images/edit.png" alt="edit" />
                    </button>
                </div>
            ))}

            {/* Add New Card Card */}
            <div className="card-add-card" onClick={openAddNewCardModal}>
              <img src="/images/add 2.png" alt="add card" />
              {/* <span>Add New Card</span> */}
              <h4>Add New Card</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Restaurants Section */}
      <section className="restaurants">
        <div className="bc">
          <h8>Similar Restaurants</h8>
          <div className="restaurants-cards">
            {/* Similar restaurant cards */}
          </div>
        </div>
      </section>

      <Footer />


{/* Modal for Editing or Adding Card Details */}
{isModalOpen && (
  <div className="modal">
    <div className="modal-content">
      <h2>{isAddingNewCard ? "Add New Card" : "Edit Payment Method"}</h2>
      <form>
  <div className="forms-group">
    <div className="form-label">Card Number</div>
    <input
      type="text"
      id="number"
      value={isAddingNewCard ? newCard.number : selectedCard.number}
      onChange={handleModalChange}
      placeholder="XXXX XXXX XXXX 1234"
    />
  </div>
  <div className="forms-group">
    <div className="form-label">Expiration</div>
    <input
      type="text"
      id="expiration"
      value={isAddingNewCard ? newCard.expiration : selectedCard.expiration}
      onChange={handleModalChange}
      placeholder="MM/YY"
    />
  </div>
  <div className="forms-group">
    <div className="form-label">CVC</div>
    <input
      type="text"
      id="cvc"
      value={isAddingNewCard ? newCard.cvc : selectedCard.cvc}
      onChange={handleModalChange}
      placeholder="XXX"
    />
  </div>
  <div className="forms-group">
    <div className="form-label">Name on Card</div>
    <input
      type="text"
      id="cardholder"
      value={isAddingNewCard ? newCard.cardholder : selectedCard.cardholder}
      onChange={handleModalChange}
      placeholder="Full Name"
    />
  </div>
</form>

      <div className="bottom-buttons">
        <button className="remove-btn" onClick={removeCard}>
          Remove
        </button>
        <div>
          <button className="cancel-btn" onClick={closeModal}>
            Cancel
          </button>
          <button className="save-btn" onClick={saveCardDetails}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  </div>
)}



    </div>
  );
};

export default ProfilePage;



















































      // {/* Modal for Editing or Adding Card Details */}
      // {isModalOpen && (
      //   <div className="modal">
      //     <div className="modal-content">
      //       <h2>{isAddingNewCard ? "Add New Card" : "Edit Payment Method"}</h2>
      //       <form>
      //         <div className="forms-group">
      //           <label htmlFor="number">Card Number</label>
      //           <input
      //             type="text"
      //             id="number"
      //             value={isAddingNewCard ? newCard.number : selectedCard.number}
      //             onChange={handleModalChange}
      //           />
      //         </div>
      //         <div className="forms-group">
      //           <label htmlFor="expiration">Expiration</label>
      //           <input
      //             type="text"
      //             id="expiration"
      //             value={isAddingNewCard ? newCard.expiration : selectedCard.expiration}
      //             onChange={handleModalChange}
      //           />
      //         </div>
      //         <div className="forms-group">
      //           <label htmlFor="cvc">CVC</label>
      //           <input
      //             type="text"
      //             id="cvc"
      //             value={isAddingNewCard ? newCard.cvc : selectedCard.cvc}
      //             onChange={handleModalChange}
      //           />
      //         </div>
      //         <div className="forms-group">
      //           <label htmlFor="cardholder">Name on Card</label>
      //           <input
      //             type="text"
      //             id="cardholder"
      //             value={isAddingNewCard ? newCard.cardholder : selectedCard.cardholder}
      //             onChange={handleModalChange}
      //           />
      //         </div>
      //       </form>
      //       <div className="bottom-buttons">
      //       {!isAddingNewCard && (
      //         <button onClick={removeCard} style={{ backgroundColor: "#663700", color: "white" }}> Remove  </button> )}
      //         <button onClick={closeModal} style={{ backgroundColor: "#f90", color: "white" }}> Cancel </button>
      //         <button onClick={saveCardDetails}style={{ backgroundColor: "white", color: "black" }}> Save Changes</button>
      //       </div>
      //     </div>
      //   </div>
      // )} 
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import Link for navigation
import "./basket.css";

const Basket = () => {
  const [basketItems, setBasketItems] = useState([
    {
      id: 1,
      name: "Royal Cheese Burger",
      description: "With extra fries",
      price: 120,
      quantity: 1,
    },
    {
      id: 2,
      name: "Potato Veggies",
      description: "No Mushrooms + green peppers",
      price: 70,
      quantity: 1,
    },
    {
      id: 3,
      name: "Coke Coca Cola",
      description: "",
      price: 40,
      quantity: 1,
    },
  ]);

  const subTotal = basketItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const discount = 3;
  const deliveryFee = 3;
  const total = subTotal - discount + deliveryFee;

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  // Function to handle adding items to the basket
  const handleAddToCart = (newItem) => {
    // Check if the item already exists in the basket
    const itemIndex = basketItems.findIndex((item) => item.id === newItem.id);
    
    if (itemIndex >= 0) {
      // If item exists, update its quantity
      const updatedItems = [...basketItems];
      updatedItems[itemIndex].quantity += 1;
      setBasketItems(updatedItems);
    } else {
      // If item doesn't exist, add it to the basket
      setBasketItems([...basketItems, { ...newItem, quantity: 1 }]);
    }
  };


  return (
    <div className="basket-container">
      <header className="basket-header">
        <img src="/images/Full Shopping Basket.png" alt="icon" />
        <span>My Basket</span>
      </header>
      <div className="basket-items">
        {basketItems.map((item) => (
          <div className="basket-item" key={item.id}>
            <div className="item-quantity">{item.quantity}x</div>
            <div className="item-details">
              <span className="item-name">{item.name}</span>
              <span className="item-description">{item.description}</span>
            </div>
            <div className="item-price">₹{item.price}</div>
            <button className="item-remove">🗑️</button>
          </div>
        ))}
      </div>
      <div className="basket-summary">
        <div className="summary-row">
          <span>Sub Total:</span>
          <span>₹{subTotal.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Discounts:</span>
          <span>-₹{discount.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Delivery Fee:</span>
          <span>₹{deliveryFee.toFixed(2)}</span>
        </div>
      </div>
      <div className="basket-total">
        <span>Total to pay</span>
        <span>₹{total.toFixed(2)}</span>
      </div>

      <div className="basket-actions">
        <div id="input_container">
          <div>Choose your free item..</div>
          <img src="/images/Forward Button.png" alt="forward" />
        </div>

        <div id="input_container">
          <div>Apply Coupon Code here</div>
          <img src="/images/Forward Button (1).png" alt="forward" />
        </div>
      </div>

      <div className="basket-delivery">
        <div className="delivery-option">
          <img src="images/Delivery Scooter.png" alt="delivery" />
          <div>
            <span>Delivery</span>
          </div>
          <span>Starts at 17:50</span>
        </div>
        <div className="collection-option">
          <img src="images/New Store.png" alt="delivery" />
          <div>
            <span>Collection</span>
          </div>
          <span>Starts at 16:50</span>
        </div>
      </div>

      <button className="checkouts-button" onClick={handleCheckout}>
        Choose Payment Method
      </button>

      {/* Add products dynamically to the basket */}
      <div className="product-list">
        <h3>Available Products</h3>
        <div className="product-item">
          <span>Cheese Burger</span>
          <button onClick={() => handleAddToCart({ id: 4, name: "Cheese Burger", price: 150 })}>
            Add to Basket
          </button>
        </div>
        <div className="product-item">
          <span>Veggie Pizza</span>
          <button onClick={() => handleAddToCart({ id: 5, name: "Veggie Pizza", price: 200 })}>
            Add to Basket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Basket;




























// import React from "react";
// import { useNavigate} from "react-router-dom"; // Import Link for navigation
// import "./basket.css";

// const Basket = () => {
//   const items = [
//     {
//       id: 1,
//       name: "Royal Cheese Burger",
//       description: "With extra fries",
//       price: 120,
//       quantity: 1,
//     },
//     {
//       id: 2,
//       name: "Potato Veggies",
//       description: "No Mushrooms + green peppers",
//       price: 70,
//       quantity: 1,
//     },
//     {
//       id: 3,
//       name: "Coke Coca Cola",
//       description: "",
//       price: 40,
//       quantity: 1,
//     },
//   ];

//   const subTotal = items.reduce((total, item) => total + item.price, 0);
//   const discount = 3;
//   const deliveryFee = 3;
//   const total = subTotal - discount + deliveryFee;

// const navigate = useNavigate();

// const handleCheckout = () => {
//   navigate('/checkout');
// };
 
//   return (
    
//     <div className="basket-container">
//       <header className="basket-header">
//       <img src="/images/Full Shopping Basket.png" alt="icon"/>
//         {/* <div className="basket-icon">🏠</div> */}
//         <span>My Basket</span>
       
//       </header>
//       <div className="basket-items">
//         {items.map((item) => (
//           <div className="basket-item" key={item.id}>
//             <div className="item-quantity">{item.quantity}x</div>
//             <div className="item-details">
//               <span className="item-name">{item.name}</span>
//               <span className="item-description">{item.description}</span>
//             </div>
//             <div className="item-price">₹{item.price}</div>
//             <button className="item-remove">🗑️</button>
//           </div>
//         ))}
//       </div>
//       <div className="basket-summary">
//         <div className="summary-row">
//           <span>Sub Total:</span>
//           <span>₹{subTotal.toFixed(2)}</span>
//         </div>
//         <div className="summary-row">
//           <span>Discounts:</span>
//           <span>-₹{discount.toFixed(2)}</span>
//         </div>
//         <div className="summary-row">
//           <span>Delivery Fee:</span>
//           <span>₹{deliveryFee.toFixed(2)}</span>
//         </div>
//       </div>
//       <div className="basket-total">
//         <span>Total to pay</span>
//         <span>₹{total.toFixed(2)}</span>
//       </div>


//       <div className="basket-actions">
//         {/* <select className="basket-free-item">
//           <option>Choose your free item..</option>
//         </select> */}
//          <div id="input_container">
//             {/* <div id="choose_container"> */}          {/* this is needed to be used as edit is required */}
//               <div>Choose your free item..</div>
//               <img src="/images/Forward Button.png"  alt="forward" />
//             </div>

//         {/* <div className="apply-coupon">
//           <input
//             type="text"
//             placeholder="Apply Coupon Code here"
//             className="coupon-input"
//           />
//           <button className="apply-button">➔</button>
//         </div> */}

//             <div id="input_container">
//             {/* <div id="coupon_container"> */}          {/* this is needed to be used as edit is required */}
//               <div>Apply Coupon Code here</div>
//               <img src="/images/Forward Button (1).png"  alt="forward" />
//             </div>
//       </div>

      
//       <div className="basket-delivery">
//         <div className="delivery-option">
//         <img src="images/Delivery Scooter.png" alt="delivery"/>
//           <div>
//             <span>Delivery</span>
//             </div>
//           <span>Starts at 17:50</span>
//         </div>
//         <div className="collection-option">
//         <img src="images/New Store.png" alt="delivery"/>
//           <div>
//             <span>Collection</span> 
//             </div>
//           <span>Starts at 16:50</span>
//         </div>
//       </div>
//       {/* Updated checkout button */}
  
//       <button className="checkouts-button" onClick={handleCheckout}>
//         Choose Payment Method
//       </button>
 
//     </div>
//   );
// };

// export default Basket;






// add navigation in this basket with handleAddToCart to add the product in the basket 




























// import React from "react";
// import "./basket.css";

// const Basket = ({ items, handleRemove }) => {
//   const subTotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
//   const discount = 3;
//   const deliveryFee = 3;
//   const total = subTotal - discount + deliveryFee;

//   return (
//     <div className="basket-container">
//       <header className="basket-header">
//         <img src="/images/Full Shopping Basket.png" alt="icon" />
//         <span>My Basket</span>
//       </header>
//       <div className="basket-items">
//         {items.map((item) => (
//           <div className="basket-item" key={item.id}>
//             <div className="item-quantity">{item.quantity}x</div>
//             <div className="item-details">
//               <span className="item-name">{item.name}</span>
//               <span className="item-description">{item.description}</span>
//             </div>
//             <div className="item-price">₹{item.price * item.quantity}</div>
//             <button className="item-remove" onClick={() => handleRemove(item.id)}>🗑️</button>
//           </div>
//         ))}
//       </div>
//       <div className="basket-summary">
//         <div className="summary-row">
//           <span>Sub Total:</span>
//           <span>₹{subTotal.toFixed(2)}</span>
//         </div>
//         <div className="summary-row">
//           <span>Discounts:</span>
//           <span>-₹{discount.toFixed(2)}</span>
//         </div>
//         <div className="summary-row">
//           <span>Delivery Fee:</span>
//           <span>₹{deliveryFee.toFixed(2)}</span>
//         </div>
//       </div>
//       <div className="basket-total">
//         <span>Total to pay</span>
//         <span>₹{total.toFixed(2)}</span>
//       </div>
//     </div>
//   );
// };

// export default Basket;

//this workable code



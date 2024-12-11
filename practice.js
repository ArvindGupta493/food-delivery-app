// remove duplicate element in array

const arr = [1, 2, 2, 3, 4, 4, 5,2,4,5,5,54];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // [1, 2, 3, 4, 5]



const arrs = [1, 2, 2, 3, 4, 4, 5,5,4,2,41,4,5];
const uniqueArrs = arrs.filter((item, index, self) => self.indexOf(item) === index);
console.log(uniqueArrs); // [1, 2, 3, 4, 5]



const Arr = [1, 2, 2, 3, 4, 4, 5,4,7];
const uniqueArrss = Arr.reduce((acc, current) => {
  if (!acc.includes(current)) {
    acc.push(current);
  }
  return acc;
}, []);
console.log(uniqueArrss); // [1, 2, 3, 4, 5]












// this is basket original code



// import React, { useEffect, useState } from "react";
// import { useNavigate,useLocation } from "react-router-dom"; // To get the state passed via Link
// import "./basket.css";

// const Basket = () => {
//   const location = useLocation(); // Get the state from the URL
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     // Check if there are items passed in the URL state
//     if (location.state && location.state.item) {
//       setItems((prevItems) => [...prevItems, location.state.item]);
//     }
//   }, [location.state]);

//   const subTotal = items.reduce((total, item) => total + item.price, 0);
//   const discount = 3;
//   const deliveryFee = 3;
//   const total = subTotal - discount + deliveryFee;

//   const navigate = useNavigate();

//   const handleCheckout = () => {
//     navigate('/checkout');
//   };

//   return (
//     <div className="basket-container">
//       <header className="basket-header">
//         <div className="basket-icon">🏠</div>
//         <span>My Basket</span>
//       </header>
//       <div className="basket-items">
//         {items.map((item) => (
//           <div className="basket-item" key={item.id}>
//             <div className="item-quantity">{item.quantity || 1}x</div>
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
//       <button className="checkout-button" onClick={handleCheckout}>
//         Choose Payment Method
//       </button>
//     </div>
//   );
// };

// export default Basket;






<section>
<div className="deals-container">
  <div className="deal-card"> <img src="/images/main1.png" alt="Chef Burgers London" /> </div>
  <div className="deal-card"> <img src="/images/main2.png" alt="Grand Ai Cafe London" /> </div>
  <div className="deal-card"> <img src="/images/main3.png" alt="Butterbrot Café London" /> </div>
</div>
</section>

















































































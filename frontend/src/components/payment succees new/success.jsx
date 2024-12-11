import React from "react";
import { useNavigate } from "react-router-dom";
import "./success.css";
import Header from "../header/header";
import Footer from "../footer/Footer";

const Success = () => {
  const navigate = useNavigate();

  // Example ordered products
  const orderedProducts = [
    { id: 1, name: "Royal Cheese Burger" },
    { id: 2, name: "Potato Veggies" },
    { id: 3, name: "Coke Coca Cola" },
  ];

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <Header />
      <div className="success-container">
        <div className="success-icon">
          <div className="icon-circle">
          <img src="../images/success.png" alt="location" />
          </div>
        </div>
        <div className="success-message">
          <h2>Order Placed Successfully</h2>
          <p>Your order is confirmed and on its way. Get set to </p>
          <p>savor your chosen delights!</p>
        </div>
        <div className="ordered-products">
          <ul>
            {orderedProducts.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
          <button className="back-to-home" onClick={handleBackToHome}>
            Back to Home
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Success;










// SuccessPage.js
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./success.css";
// import Header from "../header/header";
// import Footer from "../footer/Footer";

// const Success = () => {
//   const navigate = useNavigate();

//   // Example ordered products
//   const orderedProducts = [
//     { id: 1, name: "Product 1" },
//     { id: 2, name: "Product 2" },
//     { id: 3, name: "Product 3" },
//   ];

//   const handleBackToHome = () => {
//     navigate("/");
//   };

//   return (
//     <div>
//       <Header />
//       <div className="success-page">
//         <img src="../images/success.png" alt="location" />
//         <div className="success-message">
//           <h2>Order Placed Successfully</h2>
//           <p>Your order is confirmed and on its way. Get set to savor your chosen delights!</p> 
//         </div>
//       </div>
//           <div className="ordered-products">
//             <ul>
//               {orderedProducts.map((product) => (
//                 <li key={product.id}>{product.name}</li>
//               ))}
//             </ul>
//           <button className="back-to-home" onClick={handleBackToHome}>
//             Back to Home
//           </button>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Success;
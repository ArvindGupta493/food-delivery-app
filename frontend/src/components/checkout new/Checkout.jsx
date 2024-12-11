import React, { useEffect, useState, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/Footer";
import "./Checkout.css";

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [salesTax] = useState(10); 
  const location = useLocation();
  
  // Memoizing basketItems to avoid unnecessary recalculations
  const basketItems = useMemo(() => {
    return location.state?.basketItems || JSON.parse(localStorage.getItem("basketItems")) || [];
  }, [location.state?.basketItems]);

  // Save basketItems to localStorage on initial load
  useEffect(() => {
    if (basketItems.length) {
      localStorage.setItem("basketItems", JSON.stringify(basketItems));
    }
  }, [basketItems]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("/api/cart", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        if (response.ok) {
          setCart(data.items);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCartItems();
  }, []);

  // Combine basketItems (from location) with API cart items and calculate the total
  const combinedItems = [...basketItems, ...cart];

  const combinedTotal = combinedItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const combinedTotalItems = combinedItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const totalWithTax = combinedTotal + salesTax;

  const handleProceedPayment = () => {
    navigate("/payment", { state: { totalWithTax, combinedItems } });  // Passing data for payment
  };

  const handleDeliveryAddressClick = () => {
    navigate("/address", { state: { basketItems: combinedItems } });  // Passing updated items when navigating
  };

  return (
    <div>
      <Header />
      <div className="top">
        <img
          src="images/arrow-left.png"
          alt="arrow-left"
          onClick={() => navigate("/newbasket")}
        />
        <h2>Your Order Details</h2>
      </div>
      <div className="checkout-container">
        <div className="cart-items">
          {combinedItems.length > 0 ? (
            combinedItems.map((item) => (
              <div key={item.id || item.productId} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>{item.quantity} x item</p>
                  <p>Price: ₹{item.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
          <div className="notes">
            <label htmlFor="notes">Notes</label>
            <input id="notes" type="text" placeholder="Add order notes" />
          </div>
        </div>

        <div className="summary-section">
          <div
            className="delivery-address"
            onClick={handleDeliveryAddressClick}
          >
            <img src="images/delivery.png" alt="delivery location icon" />
            <div>
              <span>Delivery Address</span>
              <p>45, Green Street, Sector 12...</p>
            </div>
          </div>

          <div className="bill-summary">
            <div className="checkout-summary">
              <p>Items</p>
              <span> ₹{combinedTotal}</span>
            </div>

            <div className="checkout-summary">
              <p>Sales Tax</p>
              <span>₹{salesTax}</span>
            </div>
              
          <div className="bill-summary">
            <div className="checkout-summary">
              <span>Subtotal ({combinedTotalItems} items)</span>
              <span>₹{totalWithTax}</span>
            </div>
            </div>  
            <button className="checkout-button" onClick={handleProceedPayment}>
              Choose Payment Method
            </button>
          </div>
        </div>
      </div>
     {/* Similar Restaurants */}
     <section className="restaurants">
        <div className="bc">
          <h8>Similar Restaurants</h8>
          <div className="restaurants-cards">
            <div className="Deals">
              <img src="/images/mc logo.png" alt="Burgers & Fast Food" />
            </div>
            <div className="Deals">
              <img src="/images/papa logo.png " alt="Salads" />
            </div>
            <div className="Deals">
              <img src="/images/KFC logo.png" alt="Pasta & Casuals" />
            </div>
            <div className="Deals">
              <img src="/images/texac logo.png" alt="Pizza" />
            </div>
            <div className="Deals">
              <img src="/images/burger king logo.png" alt="Breakfast" />
            </div>
            <div className="Deals">
              <img src="/images/shaurma logo.png" alt="Soups" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Checkout;







































// import React, { useEffect, useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import Header from "../header/header";
// import Footer from "../footer/Footer";
// import "./Checkout.css";

// const Checkout = () => {
//   const [cart, setCart] = useState([]);
//   const [total, setTotal] = useState(0);
//   const [totalItems, setTotalItems] = useState(0);
//   const [salesTax] = useState(10); 
//   const location = useLocation();
//   // const basketItems = location.state?.basketItems || []; // Fallback to empty array if no data is passed
//   const basketItems =  location.state?.basketItems || JSON.parse(localStorage.getItem("basketItems")) || [];

// // Save basketItems to localStorage on initial load
// useEffect(() => {
//   if (basketItems.length) {
//     localStorage.setItem("basketItems", JSON.stringify(basketItems));
//   }
// }, [basketItems]);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCartItems = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await fetch("/api/cart", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         const data = await response.json();
//         if (response.ok) {
//           setCart(data.items);

//           // Calculate totals
//           const totalPrice = data.items.reduce(
//             (acc, item) => acc + item.price * item.quantity,
//             0
//           );
//           const totalItemCount = data.items.reduce((acc, item) => acc + item.quantity, 0);

//           setTotal(totalPrice);
//           setTotalItems(totalItemCount);
//         } else {
//           console.error(data.message);
//         }
//       } catch (error) {
//         console.error("Error fetching cart:", error);
//       }
//     };

//     fetchCartItems();
//   }, []);

//   // Combine basketItems (from location) with API cart items and calculate the total
//   const combinedItems = [...basketItems, ...cart];

//   const combinedTotal = combinedItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );
//   const combinedTotalItems = combinedItems.reduce(
//     (acc, item) => acc + item.quantity,
//     0
//   );

//   const totalWithTax = combinedTotal + salesTax;

//   const handleProceedPayment = () => {
//     navigate("/payment", { state: { totalWithTax, combinedItems } });  // Passing data for payment
//   };

//   const handleDeliveryAddressClick = () => {
//     navigate("/address", { state: { basketItems: combinedItems } });  // Passing updated items when navigating
//   };

  

//   return (
//     <div>
//       <Header />
//       <div className="top">
//         <img
//           src="images/arrow-left.png"
//           alt="arrow-left"
//           onClick={() => navigate("/newbasket")}
//         />
//         <h2>Your Order Details</h2>
//       </div>
//       <div className="checkout-container">
//         <div className="cart-items">
//           {combinedItems.length > 0 ? (
//             combinedItems.map((item) => (
//               <div key={item.id || item.productId} className="cart-item">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="cart-item-image"
//                 />
//                 <div className="cart-item-details">
//                   <h3>{item.name}</h3>
//                   <p>{item.quantity} x item</p>
//                   <p>Price: ₹{item.price}</p>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>Your cart is empty.</p>
//           )}
//           <div className="notes">
//             <label htmlFor="notes">Notes</label>
//             <input id="notes" type="text" placeholder="Add order notes" />
//           </div>
//         </div>

//         <div className="summary-section">
//           <div
//             className="delivery-address"
//             onClick={handleDeliveryAddressClick}
//           >
//             <img src="images/delivery.png" alt="delivery location icon" />
//             <div>
//               <span>Delivery Address</span>
//               <p>45, Green Street, Sector 12...</p>
//             </div>
//           </div>

       
//             {/* Bill Summary */}
//             <div className="bill-summary">
//               <div className="checkout-summary">
//                 <p>Items</p>
//                 <span> ₹{combinedTotal}</span>
//               </div>

//               <div className="checkout-summary">
//                 <p>Sales Tax</p>
//                 <span>₹{salesTax}</span>
//               </div>
              
//               <div className="bill-summary">
//               <div className="checkout-summary">
//                 <span>Subtotal ({combinedTotalItems} items)</span>
//                 <span>₹{totalWithTax}</span>
//               </div>
//             </div>
//             </div>
            
//             <button className="checkout-button" onClick={handleProceedPayment} >
//               Choose Payment Method
//             </button>
//           </div>
//         </div>
//       {/* Similar Restaurants */}
//       <section className="restaurants">
//         <div className="bc">
//           <h8>Similar Restaurants</h8>
//           <div className="restaurants-cards">
//             <div className="Deals">
//               <img src="/images/mc logo.png" alt="Burgers & Fast Food" />
//             </div>
//             <div className="Deals">
//               <img src="/images/papa logo.png " alt="Salads" />
//             </div>
//             <div className="Deals">
//               <img src="/images/KFC logo.png" alt="Pasta & Casuals" />
//             </div>
//             <div className="Deals">
//               <img src="/images/texac logo.png" alt="Pizza" />
//             </div>
//             <div className="Deals">
//               <img src="/images/burger king logo.png" alt="Breakfast" />
//             </div>
//             <div className="Deals">
//               <img src="/images/shaurma logo.png" alt="Soups" />
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Checkout;



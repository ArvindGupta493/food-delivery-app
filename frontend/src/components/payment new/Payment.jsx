import React, { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import "./payment.css";
import Header from "../header/header";
import Footer from "../footer/Footer";

const PaymentPage = () => {
  const { state } = useLocation(); 
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("Wallet");
  const [amount] = useState(state?.totalWithTax || 0); // Use the passed totalWithTax, fallback to 0 if not 
  const walletBalance = 390;
  const navigate = useNavigate();

  const handlePaymentSelection = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handleProceedPayment = () => {
    navigate('/success'); 
  };

  return (
    <div className="payment-page">
    <Header />
    <section className="payment">
      {/* Back Arrow and Title */}
      <div className="payment-header">
        <img src="/images/arrow-left.png" alt="Back" className="back-arrow" onClick={() => navigate("/checkout")} />
        <h2>Choose and Pay</h2>
      </div>

      <div className="payment-layout">
        {/* Payment Options */}
        <div className="payment-container">
          {/* Wallet Option */}
          <div
            className={`payment-option wallet ${
              selectedPaymentMethod === "Wallet" ? "selected" : ""
            }`}
            onClick={() => handlePaymentSelection("Wallet")}
          >
            <div className="payment-details">
              <img
                src="/images/wallet.png"
                alt="Wallet"
                className="payment-icon"
              />
              <div>
                <p>Wallet</p>
                <span>Available balance: ₹{walletBalance}</span>
              </div>
            </div>
            <input
              type="radio"
              name="payment-method"
              value="Wallet"
              checked={selectedPaymentMethod === "Wallet"}
              readOnly
            />
          </div>

          {/* Border between Wallet and MaestroCard */}
          <div className="divider"></div>

          {/* MaestroCard Option */}
          <div
            className={`payment-option maestro ${
              selectedPaymentMethod === "Maestrokard" ? "selected" : ""
            }`}
            onClick={() => handlePaymentSelection("Maestrokard")}
          >
            <div className="payment-details">
              <img
                src="/images/m.png"
                alt="MaestroCard"
                className="payment-icon"
              />
              <p>MaestroCard</p>
            </div>
            <input
              type="radio"
              name="payment-method"
              value="Maestrokard"
              checked={selectedPaymentMethod === "Maestrokard"}
              readOnly
            />
          </div>

          {/* PayPal Option */}
          <div
            className={`payment-option paypal ${
              selectedPaymentMethod === "PayPal" ? "selected" : ""
            }`}
            onClick={() => handlePaymentSelection("PayPal")}
          >
            <div className="payment-details">
              <img
                src="/images/p.png"
                alt="PayPal"
                className="payment-icon"
              />
              <p>PayPal</p>
            </div>
            <input
              type="radio"
              name="payment-method"
              value="PayPal"
              checked={selectedPaymentMethod === "PayPal"}
              readOnly
            />
          </div>

          {/* Stripe Option */}
          <div
            className={`payment-option stripe ${
              selectedPaymentMethod === "Stripe" ? "selected" : ""
            }`}
            onClick={() => handlePaymentSelection("Stripe")}
          >
            <div className="payment-details">
              <img
                src="/images/s.png"
                alt="Stripe"
                className="payment-icon"
              />
              <p>Stripe</p>
            </div>
            <input
              type="radio"
              name="payment-method"
              value="Stripe"
              checked={selectedPaymentMethod === "Stripe"}
              readOnly
            />
          </div>

          {/* Add Debit Card Option */}
          <div className="payment-option add-card">
            <div className="payment-details">
              <div className="add-card-icon">+</div>
              <p>Add Debit Card</p>
            </div>
          </div>
        </div>
          <div className="payment-summary">
            <div className="amount-section">
              <p className="amount-label">Amount to be paid:</p>
              <p className="amount-value">₹{amount}</p>
            </div>
            
            <button
              className="proceed-payment"
              onClick={handleProceedPayment}
              disabled={
                selectedPaymentMethod === "Wallet" && amount > walletBalance
              }
            >
              Proceed Payment
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PaymentPage;




































































































// import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import "./payment.css";
// import Header from "../header/header";
// import Footer from "../footer/Footer";

// const PaymentPage = () => {
//   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("Wallet");
//   const [ amount ] = useState(240); // Default amount
//   const walletBalance = 390;
//   const navigate = useNavigate(); // Hook to navigate to success page

//   // const PaymentMethods = [
//   //   { id: "Wallet", name: "Wallet", icon: "/images/wallet.png" },
//   //   { id: "Maestrokard", name: "MaestroCard", icon: "/images/m.png" },
//   //   { id: "PayPal", name: "PayPal", icon: "/images/p.png" },
//   //   { id: "Stripe", name: "Stripe", icon: "/images/s.png" },
//   // ];

//   const handlePaymentSelection = (method) => {
//     setSelectedPaymentMethod(method);
//   };

//   const handleProceedPayment = () => {

//     // alert(`Proceeding with ${selectedPaymentMethod} for ₹${amount}`);
//     navigate('/success'); // Redirect to the success page
//   };

//   return (
    // <div className="payment-page">
    // <Header />
    // <section className="payment">
    //   {/* Back Arrow and Title */}
    //   <div className="payment-header">
    //     <img src="/images/arrow-left.png" alt="Back" className="back-arrow" />
    //     <h2>Choose and Pay</h2>
    //   </div>

    //   <div className="payment-layout">
    //     {/* Payment Options */}
    //     <div className="payment-container">
    //       {/* Wallet Option */}
    //       <div
    //         className={`payment-option wallet ${
    //           selectedPaymentMethod === "Wallet" ? "selected" : ""
    //         }`}
    //         onClick={() => handlePaymentSelection("Wallet")}
    //       >
    //         <div className="payment-details">
    //           <img
    //             src="/images/wallet.png"
    //             alt="Wallet"
    //             className="payment-icon"
    //           />
    //           <div>
    //             <p>Wallet</p>
    //             <span>Available balance: ₹{walletBalance}</span>
    //           </div>
    //         </div>
    //         <input
    //           type="radio"
    //           name="payment-method"
    //           value="Wallet"
    //           checked={selectedPaymentMethod === "Wallet"}
    //           readOnly
    //         />
    //       </div>

    //       {/* Border between Wallet and MaestroCard */}
    //       <div className="divider"></div>

    //       {/* MaestroCard Option */}
    //       <div
    //         className={`payment-option maestro ${
    //           selectedPaymentMethod === "Maestrokard" ? "selected" : ""
    //         }`}
    //         onClick={() => handlePaymentSelection("Maestrokard")}
    //       >
    //         <div className="payment-details">
    //           <img
    //             src="/images/m.png"
    //             alt="MaestroCard"
    //             className="payment-icon"
    //           />
    //           <p>MaestroCard</p>
    //         </div>
    //         <input
    //           type="radio"
    //           name="payment-method"
    //           value="Maestrokard"
    //           checked={selectedPaymentMethod === "Maestrokard"}
    //           readOnly
    //         />
    //       </div>

    //       {/* PayPal Option */}
    //       <div
    //         className={`payment-option paypal ${
    //           selectedPaymentMethod === "PayPal" ? "selected" : ""
    //         }`}
    //         onClick={() => handlePaymentSelection("PayPal")}
    //       >
    //         <div className="payment-details">
    //           <img
    //             src="/images/p.png"
    //             alt="PayPal"
    //             className="payment-icon"
    //           />
    //           <p>PayPal</p>
    //         </div>
    //         <input
    //           type="radio"
    //           name="payment-method"
    //           value="PayPal"
    //           checked={selectedPaymentMethod === "PayPal"}
    //           readOnly
    //         />
    //       </div>

    //       {/* Stripe Option */}
    //       <div
    //         className={`payment-option stripe ${
    //           selectedPaymentMethod === "Stripe" ? "selected" : ""
    //         }`}
    //         onClick={() => handlePaymentSelection("Stripe")}
    //       >
    //         <div className="payment-details">
    //           <img
    //             src="/images/s.png"
    //             alt="Stripe"
    //             className="payment-icon"
    //           />
    //           <p>Stripe</p>
    //         </div>
    //         <input
    //           type="radio"
    //           name="payment-method"
    //           value="Stripe"
    //           checked={selectedPaymentMethod === "Stripe"}
    //           readOnly
    //         />
    //       </div>

    //       {/* Add Debit Card Option */}
    //       <div className="payment-option add-card">
    //         <div className="payment-details">
    //           <div className="add-card-icon">+</div>
    //           <p>Add Debit Card</p>
    //         </div>
    //       </div>
    //     </div>

//         {/* Payment Summary */}
//         <div className="payment-summary">
//           <div className="amount-section">
//             <p className="amount-label">Amount to be paid:</p>
//             <p className="amount-value">₹{amount}</p>
//           </div>
          
//           <button
//             className="proceed-payment"
//             onClick={handleProceedPayment}
//             disabled={
//               selectedPaymentMethod === "Wallet" && amount > walletBalance
//             }
//           >
//             Proceed Payment
//           </button>
//         </div>
//       </div>
//     </section>
//     <Footer />
//   </div>
//   );
// };

// export default PaymentPage;

























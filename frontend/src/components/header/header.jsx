import React, { useState} from "react";
import "./header.css"; // Add the CSS file for styles
import { useNavigate } from "react-router-dom"; // Import Link for navigation


const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(getActiveTab());
  const [showSummery, setShowSummery] = useState(false)
  // Function to determine which tab should be active based on the current URL
  function getActiveTab() {
    const path = window.location.pathname;
    if (path === "/product") {
      return "Restaurants";
    } else if (path === "/") {
      return "Home";
    }
    // return "Home"; // Default to Home if path is not recognized
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false); // Close menu on mobile when a tab is clicked
  };

  const navigate = useNavigate();

  const HandleBasket = ()=>{
    navigate("/newbasket")
    // alert('working')
    setShowSummery(!showSummery)
  }
  // // Update the active tab whenever the location changes  
  // useEffect(() => {
  //   setActiveTab(getActiveTab());
  // }, [window.location.pathname]);

  return (
    <div>
      <div className="header-top">
        <div className="location">
          <img src="/images/🌟.png" alt="location" />
          Get 5% off your first order,{" "}
          <a href="#location">Promo: ORDERS</a>
        </div>

        <div className="location">
          <img src="../images/Location.png" alt="location" />
          Regent Street, A4, A401, London{" "}
          <a href="#location">Change Location</a>
        </div>

        <div>
        {/* <buttons onClick={ HandleBasket} className="nav-Link" >
          <img src="../images/my cart.png" alt="cart" />
        </buttons> */}
          <a href="/newbasket" onClick={ HandleBasket} className="nav-Link">
            <img src="../images/my cart.png" alt="cart" />
          </a>
        </div>
      </div>

      <nav className="navbar">
        <div className="navbar-logo">
          <img src="../images/order LOGO 1.png" alt="OrderUK Logo" />
        </div>
        <ul className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
          <li className={`nav-item ${activeTab === "Home" ? "active" : ""}`}>
            <a href="/" onClick={() => handleTabClick("Home")} className="nav-link">
              Home
            </a>
          </li>
          <li className={`nav-item ${activeTab === "Special Offers" ? "active" : ""}`}>
            <a href="#contact" onClick={() => handleTabClick("Special Offers")} className="nav-link">
              Special Offers
            </a>
          </li>
          <li className={`nav-item ${activeTab === "Restaurants" ? "active" : ""}`}>
            <a href="/product" onClick={() => handleTabClick("Restaurants")} className="nav-link">
              Restaurants
            </a>
          </li>
          <li className={`nav-item ${activeTab === "Track Orders" ? "active" : ""}`}>
            <a href="#contact" onClick={() => handleTabClick("Track Orders")} className="nav-link">
              Track Orders
            </a>
          </li>
          <li className="nav-item login-item">    
            <a href="/profile" className="login-button">
            <span className="login-icon">
              <img src="../images/Male User.png" alt="location" />
            </span> 
            <span className="login-text">Hey Mike</span>
            </a>
          </li>
        </ul>
        <button
          className="navbar-toggle"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <img alt="menu" src="../images/Menu.svg" />
        </button>
      </nav>
    </div>
  );
};

export default Header;




























// import React, { useState } from "react";
// import "./header.css"; // Add the CSS file for styles

// const Header = () => {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState("Home");

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//     setMobileMenuOpen(false); // Close menu on mobile when a tab is clicked
//   };

//   return (
//     <div>
//       <div class="header-top" style={{}}>
//         {/* <p>Get 5% off your first order, Promo: ORDERS</p> */}

//         <div class="location">
//         <img src="/images/🌟.png" alt="location" />
//         Get 5% off your first order,{" "}
//           <a href="#location">Promo: ORDERS</a>
//         </div>

//         <div class="location">
//         <img src="../images/Location.png" alt="location" />
//           Regent Street, A4, A401, London{" "}
//           <a href="#location">Change Location</a>
//         </div>

//         <div>
//           <a href="/cart" onClick={() => handleTabClick("cart")} className="nav-Link" >
//             <img src="../images/my cart.png" alt="cart" />
//           </a>
//         </div>
//       </div>

// {/* why the home is yellow backgound color even if the product page is opened amke that when in home then it it's yellow and when it is product then restaurants background is yellow color remain  */}

//       <nav className="navbar">
//         <div className="navbar-logo">
//           <img src="../images/order LOGO 1.png" alt="OrderUK Logo" />
//         </div>
//         <ul className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
//           <li className={`nav-item ${activeTab === "Home" ? "active" : ""}`}>
//             <a href="/" onClick={() => handleTabClick("Home")} className="nav-link">
//               Home
//             </a>
//           </li>
//           <li className={`nav-item ${ activeTab === "Special Offers" ? "active" : "" }`}>
//             <a href="#contact" onClick={() => handleTabClick("Special Offers")} className="nav-link" >
//               Special Offers
//             </a>
//           </li>
//           <li className={`nav-item ${activeTab === "Resturents" ? "active" : ""}`} >
//             <a href="/product" onClick={() => handleTabClick("Resturents")} className="nav-link" >
//               Restaurants
//             </a>
//           </li>
//           <li
//             className={`nav-item ${
//               activeTab === "Track Oders" ? "active" : ""
//             }`}
//           >
//             <a href="#contact" onClick={() => handleTabClick("Track Oders")} className="nav-link" >
//               Track Oders
//             </a>
//           </li>
//           <li className="nav-item login-item">
//             <a href="login" className="login-button">
//               <span className="login-icon">👤</span> Hey Mike
//             </a>
//           </li>
//         </ul>
//         {/* <div className="navbar-login">
//         <a href="#login" className="login-button">
//           <span className="login-icon">👤</span> Login/Signup
//         </a>
//       </div> */}
//         <button
//           className="navbar-toggle"
//           onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           <img alt="menu" src="../images/Menu.svg" />
//         </button>
//       </nav>
//     </div>
//   );
// };

// export default Header;

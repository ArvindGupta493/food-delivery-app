// import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
// import Header from "../header/header";
import Footer from "../footer/Footer";
import "./home.css";
import "../header/header"; // Add the CSS file for styles

import { useEffect, useState } from "react";
const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  //  check below const
  const handleCardClick = (productId) => {
    navigate(`/product`); // Redirect to Product page
  };
  const handleProductRedirection = () => {
    navigate("/product");
  };
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false); // Close menu on mobile when a tab is clicked
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/product");
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // const addToCart = async (productId) => {
  //     try {
  //         await api.post("/cart", { productId, quantity: 1 });
  //         alert("Added to cart!");
  //     } catch (error) {
  //         alert(error.response?.data?.msg || "Failed to add to cart.");
  //     }
  // };

  // check the below div
  <div className="deals-container">
    {products.map((product) => (
      <div
        className="deal-card"
        key={product.id}
        onClick={() => handleCardClick(product.id)}
      >
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
      </div>
    ))}
  </div>;

  return (
    <div className="home-main">
      <div>
        <div class="header-top" style={{}}>
          <div class="location">
            <img src="/images/🌟.png" alt="location" />
            Get 5% off your first order,{" "}
            <a href="#location">Promo: ORDERS</a>
          </div>

          <div class="location">
            <img src="../images/Location.png" alt="location" />
            Regent Street, A4, A401, London{" "}
            <a href="#location">Change Location</a> 
          </div>

          <img src="/images/my cart.png" alt="cart" />
        </div>
        <nav className="navbar">
          <div className="navbar-logo">
            <img src="../images/order LOGO 1.png" alt="OrderUK Logo" />
          </div>
          <ul className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
            <li className={`nav-item ${activeTab === "Home" ? "active" : ""}`}>
              <a
                href="/"
                onClick={() => handleTabClick("Home")}
                className="nav-link"
              >
                Home
              </a>
            </li>
            <li
              className={`nav-item ${
                activeTab === "Browse Menu" ? "active" : ""
              }`}
            >
              <a
                href="#menu"
                onClick={() => handleTabClick("Browse Menu")}
                className="nav-link"
              >
                Browse Menu
              </a>
            </li>
            <li
              className={`nav-item ${
                activeTab === "Special Offers" ? "active" : ""
              }`}
            >
              <a
                href="#contact"
                onClick={() => handleTabClick("Special Offers")}
                className="nav-link"
              >
                Special Offers
              </a>
            </li>
            <li
              className={`nav-item ${
                activeTab === "Resturents" ? "active" : ""
              }`}
            >
              <a
                href="/product"
                onClick={() => handleTabClick("Resturents")}
                className="nav-link"
              >
                Restaurants
              </a>
            </li>
            <li
              className={`nav-item ${
                activeTab === "Track Oders" ? "active" : ""
              }`}
            >
              <a
                href="#contact"
                onClick={() => handleTabClick("Track Oders")}
                className="nav-link"
              >
                Track Oders
              </a>
            </li>
            <li className="nav-item login-item">
              <a href="login" className="login-button">
                <span className="login-icon">👤</span> Login/Signup
              </a>
            </li>
          </ul>
          {/* <div className="navbar-login">
        <a href="#login" className="login-button">
          <span className="login-icon">👤</span> Login/Signup
        </a>
      </div> */}
          <button
            className="navbar-toggle"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <img alt="menu" src="../images/Menu.svg" />
          </button>
        </nav>
      </div>

      {/* Main Banner */}
      <section className="banner">
        <div className="banner-content">
          <div className="banner-text">
            <p>Order Restaurant food, takeaway, and groceries.</p>

            {/* Main Headings */}
            <h1>Feast Your Senses,</h1>
            <h2>Fast and Fresh</h2>

            {/* Postcode Input */}
            <p>Enter a postcode to see what we deliver</p>
            <div className="search-bar">
              <input type="text" placeholder="e.g., EC4R 3TE" />
              <button className="search-Button">Search</button>
            </div>
          </div>
          {/* Images */}
          <div className="home-page">
            <img src="/images/home page  front.png" alt="Home Page Main" />
          </div>
          <div className="home-page-side-image">
            <img
              src="/images/hiome page front side .png"
              alt="Home Page Side "
            />
          </div>
          <div className="home-page-background">
            <img
              src="/images/home page background.png"
              alt="Home Page Background"
            />
          </div>

          {/* Notifications */}
          <div className="order order1">
            <img src="/images/order 3.png" alt="Order 1" />
          </div>
          <div className="order order2">
            <img src="/images/order 3.png" alt="Order 2" />
          </div>
          <div className="order order3">
            <img src="/images/order 3.png" alt="Order 3" />
          </div>
        </div>
      </section>

      {/* Exclusive Deals */}
      <section className="exclusive-deals">
        <div className="bar">
          <h8>Up to -40% 🎊 Order.uk exclusive deals</h8>
          <ul className="bar-links">
            <li>
              <a href="#Vegan">Vegan</a>
            </li>
            <li>
              <a href="#Sushi">Sushi</a>
            </li>
            <li>
              <a href="#PizzaFastFood">Pizza & Fast food</a>
            </li>
            <li>
              <a href="#others">Others</a>
            </li>
          </ul>
        </div>
        <div className="deals-container">
          <div className="deal-card">
            <img src="/images/deals 1.png" alt="Chef Burgers London" />
          </div>
          <div className="deal-card">
            <img src="/images/deal 2.png" alt="Grand Ai Cafe London" />
          </div>
          <div className="deal-card">
            <img src="../images/deal 3.png" alt="Butterbrot Café London" />
          </div>
        </div>
      </section>

      {/*  Popular Categories  */}

      <section class="categories">
        <div class="bj">
          <h6 className="h8">Order.uk Popular Categories 🤩</h6>
          <div
            class="category-cards"
            style={{ cursor: "pointer" }}
            onClick={handleProductRedirection}
          >
            <div class="deals-card">
              <img src="/images/categories 1.png" alt="Burgers & Fast Food" />
              <h2>Burgers & Fast Food</h2>
              <p>21 Restaurants</p>
            </div>
            <div class="deals-card">
              <img src="/images/categories 2.png" alt="Salads" />
              <h2>Salads</h2>
              <p>32 Restaurants</p>
            </div>
            <div class="deals-card">
              <img src="/images/categories 3.png" alt="Pasta & Casuals" />
              <h2>Pasta & Casuals</h2>
              <p>4 Restaurants</p>
            </div>
            <div class="deals-card">
              <img src="/images/categories 4.png" alt="Pizza" />
              <h2>Pizza</h2>
              <p>32 Restaurants</p>
            </div>
            <div class="deals-card">
              <img src="/images/categories 5.png" alt="Breakfast" />
              <h2>Breakfast</h2>
              <p>4 Restaurants</p>
            </div>
            <div class="deals-card">
              <img src="/images/categories 6.png" alt="Soups" />
              <h2>Soups</h2>
              <p>32 Restaurants</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Restaurants  */}
      <section class="restaurants">
        <div class="bc">
          <h8>Popular Restaurants</h8>
          <div
            class="restaurants-cards"
            style={{ cursor: "pointer" }}
            onClick={handleProductRedirection}
          >
            <div class="deals-card">
              <img src="/images/mc logo.png" alt="Burgers & Fast Food" />
            </div>
            <div class="deals-card">
              <img src="/images/papa logo.png " alt="Salads" />
            </div>
            <div class="deals-card">
              <img src="/images/KFC logo.png" alt="Pasta & Casuals" />
            </div>
            <div class="deals-card">
              <img src="/images/texac logo.png" alt="Pizza" />
            </div>
            <div class="deals-card">
              <img src="/images/burger king logo.png" alt="Breakfast" />
            </div>
            <div class="deals-card">
              <img src="/images/shaurma logo.png" alt="Soups" />
            </div>
          </div>
        </div>
      </section>

      {/* Partner Program */}
      <section class="partner-program">
        <div class="ordering image">
          <img src="/images/Ordering APP.png" alt="Ordering app" />
        </div>
      </section>

      <section class="partner-program">
        <div class="partner-cards">
          <img src="/images/partner with us.png" alt="partner" />
        </div>
        <div class="ride">
          <img src="/images/ride with us.png" alt="ride" />
        </div>
      </section>

      {/*  FAQs  */}
      <section class="faq">
        <div class="bl">
          <div class="faq-cards">
            <div className="faq-content">
              <h6>Know more about us!</h6>
              <ul>
                <li>
                  <a href="#ques">Frequent Questions</a>
                </li>
                <li>
                  <a href="#who">Who we are?</a>
                </li>
                <li>
                  <a href="#partner">Partner Program</a>
                </li>
                <li>
                  <a href="#support">Help & Support</a>
                </li>
              </ul>
            </div>
          </div>

          <section class="FAQS">
            <div class="faqs-cards">
              <ul>
                <li>
                  <a href="#work">How does Order.UK work?</a>
                </li>
                <li>
                  <a href="#accept">What payment methods are accepted?</a>
                </li>
                <li>
                  <a href="#time">Can I track my order in real-time?</a>
                </li>
                <li>
                  <a href="#discount">
                    Are there any special discounts or promotions available?
                  </a>
                </li>
                <li>
                  <a href="#area">Is Order.UK available in my area?</a>
                </li>
              </ul>
              <div class="fql-all">
                <div className="faqs-cards-img">
                  <div class="faqs-cards-img-1">
                    <h7>Place an order!</h7>
                    <img
                      src="images/order-food 1.png"
                      alt="Place an order through our website or mobile app"
                    />
                    <p>Place your order through our website or mobile app</p>
                  </div>
                  <div class="faqs-cards-img-1">
                    <h7>Track Progress</h7>
                    <img
                      src="/images/food 2.png"
                      alt="Track the status of your order"
                    />
                    <p>
                      You can track your order status with the delivery time
                    </p>
                  </div>
                  <div class="faqs-cards-img-1">
                    <h7>Get your Order!</h7>
                    <img
                      src="/images/order 2.png"
                      alt="Receive your order at lightning-fast speed"
                    />
                    <p>Receive your order at lightning-fast speed!</p>
                  </div>
                </div>
                <div className="fql-allp">
                  <p>
                    Order.UK simplifies the food ordering process. Browse
                    through our diverse menu, select your favorite dishes, and
                    proceed to checkout. Your delicious meal will be on its way
                    to your doorstep in no time!
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const navigate = useNavigate();

//   const deals = [
//     { id: 1, name: "Big Mac", image: "bigmac.png" },
//     { id: 2, name: "Chicken McNuggets", image: "mcnuggets.png" },
//     { id: 3, name: "French Fries", image: "fries.png" },
//   ];

//   const handleCardClick = (productId) => {
//     navigate(`/product/${productId}`);
//   };

//   return (
//     <div>
//       <h1>Deals</h1>
//       <div className="deals-container">
//         {deals.map((deal) => (
//           <div
//             key={deal.id}
//             className="deal-card"
//             onClick={() => handleCardClick(deal.id)}
//           >
//             <img src={deal.image} alt={deal.name} />
//             <p>{deal.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home

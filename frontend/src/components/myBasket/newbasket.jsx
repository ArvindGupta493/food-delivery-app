import React, { useState, useEffect } from "react";
import Header from "../header/header";
import Footer from "../footer/Footer";
import { useNavigate } from "react-router-dom";
import "./basket.css";

const Baskets = () => {
  // Load cart from localStorage or initialize with default items
  const [basketItems, setBasketItems] = useState(() => {
    const savedCart = localStorage.getItem("basketItems");
    return savedCart ? JSON.parse(savedCart) : [
      {
        id: 1,
        name: "Royal Cheese Burger",
        description: "With extra fries",
        price: 120,
        quantity: 1,
        image: "/images/combo 1.png",
      },
      {
        id: 2,
        name: "Royal Cheese Burger with extra Fries",
        price: 70,
        description: "1 burger, 1 Fries large",
        quantity: 1,
        image: "/images/fries1.png",
      },
      {
        id: 3,
        name: "Coke Coca Cola",
        price: 40,
        quantity: 1,
        image: "/images/cooldrink1.png",
      },
    ];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("basketItems", JSON.stringify(basketItems));
  }, [basketItems]);

  const handleAddToCart = (newItem) => {
    const itemIndex = basketItems.findIndex((item) => item.id === newItem.id);

    if (itemIndex >= 0) {
      const updatedItems = [...basketItems];
      updatedItems[itemIndex].quantity += 1;
      setBasketItems(updatedItems);
    } else {
      setBasketItems([...basketItems, { ...newItem, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (itemId) => {
    const updatedItems = basketItems.filter((item) => item.id !== itemId);
    setBasketItems(updatedItems);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText("Your link her");
    alert("Link copied to clipboard!");
  };

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout", { state: { basketItems } });
  };

  const subTotal = basketItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const discount = 3;
  const deliveryFee = 3;
  const total = subTotal - discount + deliveryFee;

  
    return (
      <div>
        <Header />
        {/* Main Banner */}
        <section className="banner1">
          <div className="banner-content1">
            <p>I'm lovin' it!</p>
            <h1>McDonald’s East London</h1>
            <div className="search-bar1">
              <div id="input_container" style={{ padding: "15px" }}>
                <img
                  src="/images/Order Completed.png"
                  id="myIcon"
                  alt="order completed"
                />
                <div>Minimum Order: 12 GBP</div>
              </div>
              <div id="input_container">
                <img src="/images/Motocross.png" id="myIcons" alt="motocross" />
                <div>Delivery in 20-25 Minutes</div>
              </div>
            </div>

            <div className="home page">
              <img src="/images/product rating.png" alt="background" />
            </div>
            <div className="home pageside image">
              <img src="/images/product burgur.png" alt="home page side" />
            </div>
          </div>

          {/*  Open Section */}
          <div className="open">
            <img src="/images/Clock.png" alt="clock 1" />
            <p>Open until 3:00 AM.</p>
          </div>
        </section>

        {/* search section  */}
        <section className="search">
          <div className="extra">
            <h1>All Offers from McDonald's East London</h1>
            <div id="input_container">
              <img src="/images/Search More.png" id="myIcons" alt="search" />
              <input type="text" id="myInputs" placeholder="Search for menu..." />
            </div>
          </div>
        </section>

        {/* Exclusive Deals */}
        <section className="exclusive-deals1">
          <div className="just">
            <div className="bar1">
              <ul className="bar-links1">
                <li className="bar-item"> <a href="#Vegan" className="bar-link"> Offers </a> </li>
                <li className="bar-item"> <a href="#Sushi" className="bar-link"> Burgers </a> </li>
                <li className="bar-item"><a href="#fries" className="bar-link"> Fries  </a> </li>
                <li className="bar-item"><a href="#snacks" className="bar-link">Snacks</a> </li>
                <li className="bar-item"><a href="#fries" className="bar-link">Salads</a> </li>
                <li className="bar-item"><a href="#fries" className="bar-link">Cool drink </a></li>
                <li className="bar-item"><a href="#fries" className="bar-link"> Happy Meal®{" "} </a> </li>
                <li className="bar-item"> <a href="#fries" className="bar-link">Desserts</a> </li>
                <li className="bar-item"> <a href="#fries" className="bar-link"> Hot drinks </a> </li>
                <li className="bar-item"><a href="#fries" className="bar-link"> Souces  </a> </li>
                <li className="bar-item"> <a href="#fries" className="bar-link">  Orbit®  </a> </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Deals */}
        <div style={{ display: "flex", gap: "50px" }}>
          <div style={{ width: "70%" }}>
            <section>
                <div className="Deals-container">
                  <div className="Deals-card"> <img src="/images/main1.png" alt="Chef Burgers London" /> </div>
                  <div className="Deals-card"> <img src="/images/main2.png" alt="Grand Ai Cafe London" /> </div>
                  <div className="Deals-card"> <img src="/images/main3.png" alt="Butterbrot Café London" /> </div>
              </div>
            </section>

            {/* Burgers Section */}
            <section className="burgers">
              <h3>Burgers</h3>
              <div className="category-cards">
                <div className="product-card">
                <div class="content">
                  <h2>Royal Cheese Burger with extra Fries</h2>
                  <p1>1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium</p1>
                  <h2>₹ 120</h2>
                </div>
                <div class="images">
                  <img src="/images/combo 1.png" alt="Burgers & Fast Food" />
                  <img src="/images/plus background.png" alt="background" />
                  <buttons onClick={() =>  handleAddToCart({
                      id: 1, name:"Royal Cheese Burger", price: 120, description: "With extra fries",image: "/images/combo 1.png"   }) }>
                  <img src="/images/Plus.png" alt="plus button" />
                </buttons>
                </div>
                </div>
                <div class="product-card">
                <div class="content">
                  <h2>The classics for 2</h2>
                  <p1>  1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized  French Fries , 3 cold drinks </p1>
                  <h2>₹ 120</h2>
                  </div>
                <div class="images">
                  <img src="/images/combo 2.png" alt="Salads" />
                  <img src="/images/plus background.png" alt="background" />
                  <buttons onClick={() =>  handleAddToCart({
                      id: 4, name: "The classics for 2",  price: 120, description: "  1 McChicken™, 1 Big Mac™,.etc", 
                      image: "/images/combo 2.png" })  } >
                  <img src="/images/Plus.png" alt="plus button" />
                </buttons>
                </div>
                </div>

                <div class="product-card">
                <div class="content">
                  <h2>The classics for 3 </h2>
                  <p1>
                    1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized
                    French Fries , 3 cold drinks
                  </p1>
                  <h2>₹ 120</h2>
                  </div>
                <div class="images">
                  <img src="/images/combo3.png" alt="Pasta & Casuals" />
                  <img src="/images/plus background.png" alt="background" />
                  <buttons  onClick={() =>  handleAddToCart({
                      id: 5, name: "The classics for 3", price: 120, description: "  1 McChicken™, 1 Big Mac™,.etc", image: "/images/combo3.png"}) } >
                  <img src="/images/Plus.png" alt="plus button" />
                </buttons>
                </div>
                </div>

                <div class="product-card">
                <div class="content">
                  <h2>The classics for 4</h2>
                  <p1> 1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks  </p1>
                  <h2>₹ 120</h2>
                  </div>
                <div class="images">
                  <img src="/images/combo 4.png" alt="Pizza" />
                  <img src="/images/plus background.png" alt="background" />
                  <buttons  onClick={() =>  handleAddToCart({
                        id: 6,  name: "The classics for 4",  price: 120,  description: "1 McChicken™, 1 Big Mac™,.etc",image: "/images/combo 4.png"})   } >
                     <img src="/images/Plus.png" alt="plus button" />
                  </buttons>
                  </div>
                </div>
              </div>
            </section>



            {/* Fries Section */}
            <section className="Fries">
              <h3>Fries</h3>
              <div className="category-cards">
              <div class="product-card">
                <div class="content">
                  <h2>Royal Cheese Burger with extra Fries</h2>
                  <p>1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium</p>
                  <h2>₹ 70</h2>
                </div>
                <div class="images">
                  <img src="/images/fries1.png" alt="Burgers & Fast Food" />
                  <img src="/images/plus background.png" alt="background" />
                  <buttons  onClick={() =>  handleAddToCart({
                        id: 2,  name: "Royal Cheese Burger with extra Fries",  price: 70,  description: "1 burger, 1 Fries large, " ,image: "/images/fries1.png"})   } >
                     <img src="/images/Plus.png" alt="plus button" />
                  </buttons>
                </div>
              </div>


                <div class="product-card">
                <div class="content">

                  <h2>The classics for 2</h2>
                  <p1>  1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized  French Fries , 3 cold drinks </p1>
                  <h2>₹ 70</h2>
                  </div>
                  <div class="images">
                    <img src="/images/fries2.png" alt="Salads" />
                    <img src="/images/plus background.png" alt="background" />
                    <buttons  onClick={() =>  handleAddToCart({
                        id: 7,  name: "Fries classics for 2",  price: 70,  description: "1 burger, 1 Fries large" ,image: "/images/fries2.png"}) } >
                     <img src="/images/Plus.png" alt="plus button" />
                  </buttons>
                </div>
                </div>

                <div class="product-card">
                <div class="content">
                  <h2>The classics for 3 </h2>
                  <p1>  1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks </p1>
                  <h2>₹ 70</h2>
                  </div>
                  <div class="images">
                  <img src="/images/fries3.png" alt="Pasta & Casuals" />
                  <img src="/images/plus background.png" alt="background" />
                  <buttons  onClick={() =>  handleAddToCart({ id: 8,  name: "Fries classics for 3",  price: 70,  description: "1 burger, 1 Fries large " ,image: "/images/fries3.png"})   } >
                     <img src="/images/Plus.png" alt="plus button" />
                  </buttons>
                </div>
                </div>

                <div class="product-card">
                <div class="content">
                  <h2>The classics for 4</h2>
                  <p1>  1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized  French Fries , 3 cold drinks </p1>
                  <h2>₹ 70</h2>
                  </div>
                <div class="images">
                  <img src="/images/fries4.png" alt="Pizza" />
                  <img src="/images/plus background.png" alt="background" />
                  <buttons  onClick={() =>  handleAddToCart({  id: 9,  name: "Fries classics for 4",  price: 70,  description: "1 burger, 1 Fries large ", image: "/images/fries4.png"})   } >
                     <img src="/images/Plus.png" alt="plus button" />
                  </buttons>
                </div>
                </div>
              </div>
            </section>

            {/* Cooldrinks Section */}
            <section className="cooldrinks">
              <h3>Cooldrinks</h3>
              <div className="category-cards">
                <div class="product-card">
                <div class="content">
                  <h2>Coke Coca Cola</h2>
                  <p1>1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium</p1>
                  <h2>₹ 40</h2>
                  </div>
                  <div class="images">
                  <img src="/images/cooldrink1.png" alt="Burgers & Fast Food" />
                  <img src="/images/plus background.png" alt="background" />
                  <buttons onClick={() => handleAddToCart({ id:3, name:"Coke Coca Cola", price:40 ,image:"/images/cooldrink1.png"})}>
                     <img src="/images/Plus.png" alt="plus button" />
                  </buttons>
                </div>
                </div>

                <div class="product-card">
                <div class="content">
                  <h2>The classics for 2</h2>
                  <p1>
                    1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized
                    French Fries , 3 cold drinks
                  </p1>
                  <h2>₹ 40</h2>
                  </div>
                <div class="images">
                  <img src="/images/cooldrink 2.png" alt="Salads" />
                  <img src="/images/plus background.png" alt="background" />
                  <buttons  onClick={() => handleAddToCart({id:10, name:"Coke Coca Cola(small)",price: 40,image:"/images/cooldrink 2.png" })} >
                     <img src="/images/Plus.png" alt="plus button" />
                  </buttons>
                </div>
                </div>

                <div class="product-card">
                <div class="content">
                  <h2>The classics for 3 </h2>
                  <p1>
                    1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized
                    French Fries , 3 cold drinks
                  </p1>
                  <h2>₹ 40</h2>
                  </div>
                  <div class="images">
                  <img src="/images/cooldrink 3.png" alt="Pasta & Casuals" />
                  <img src="/images/plus background.png" alt="background" />
                  <buttons  onClick={() =>  handleAddToCart({  id:11,  name: "Coke Coca Cola (Medium)",  price: 40 ,image:"/images/cooldrink 3.png"})   } >
                     <img src="/images/Plus.png" alt="plus button" />
                  </buttons>
                </div>
                </div>

                <div class="product-card">
                <div class="content">
                  <h2>The classics for 4</h2>
                  <p1>
                    1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized
                    French Fries , 3 cold drinks
                  </p1>
                  <h2>₹ 40</h2> 
                  </div>
                  <div class="images">
                  <img src="/images/cooldrink 4.png" alt="Pizza" />
                  <img src="/images/plus background.png" alt="background" />
                  <buttons onClick={() =>  handleAddToCart({  id:12,  name: "Coke Coca Cola (Large)",  price: 40 ,image:"/images/cooldrink 4.png"})} >
                     <img src="/images/Plus.png" alt="plus button" />
                  </buttons>
                </div>
                </div>
              </div>
            </section>
          </div>

          {/* basket and share section  */}

          <div style={{ paddingTop: "20px" }}>
            <div className="share-cart-container">
              <img src="/images/share-2.png" alt="share" />
              <span className="share-cart-text">
                Share this cart with your friends
              </span>
              <button className="share-cart-button" onClick={handleCopyLink}>  Copy Link  </button>
            </div>
            <div style={{ paddingTop: "20px" }}>

            <div className="basket-container">
        <header className="basket-header">
          <img src="/images/Full Shopping Basket.png" alt="icon" />
          <h14>My Basket</h14>
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
              <button  className="item-remove"  onClick={() => handleRemoveFromCart(item.id)}  >
                <img src="/images/Remove.png" alt="remove button" />
              </button>
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
          <div id="input_containers">
            <div>Choose your free item..</div>
            <img src="/images/Forward Button (2).png" alt="forward" />
          </div>

          <div id="input_containers">
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
          {/* <div className="line">  | </div> */}
      
          <div className="collection-option">
            <img src="images/New Store.png" alt="delivery" />
            <div>
              <span>Collection</span>
            </div>
            <span>Starts at 16:50</span>
          </div>
        </div>
        <button className="checkouts-button" onClick={handleCheckout}>
        <img src="images/Forward Button 1.png" alt="checkout" />
          <h14>Checkout!</h14>
        </button>
      </div>
            </div>
          </div>
        </div>

      <section class="container">
          {/* <!-- <div class="container"> --> */}
          <div class="section delivery">
            <div class="deliverys">
              <a href="#track">
                <img src="/images/Tracking.png" alt="tracker" />
              </a>
              <h9>Delivery Information</h9>
            </div>
            <ul>
              <li>  <strong>Monday:</strong> 12:00 AM–3:00 AM, 8:00 AM–3:00 AM  </li>
              <li>  <strong>Tuesday:</strong> 8:00 AM–3:00 AM                   </li>
              <li>  <strong>Wednesday:</strong> 8:00 AM–3:00 AM                 </li>
              <li>  <strong>Thursday:</strong> 8:00 AM–3:00 AM                  </li>
              <li>  <strong>Friday:</strong> 8:00 AM–3:00 AM                    </li>
              <li>  <strong>Saturday:</strong> 8:00 AM–3:00 AM                  </li>
              <li>  <strong>Sunday:</strong> 8:00 AM–12:00 AM                   </li>
            </ul>
            <p> <strong>Estimated time until delivery:</strong> 20 min  </p>
          </div>

          <div class="section contact">
            <div class="deliverys">
              <a href="#contact">  <img src="/images/contact.png" alt="tracker" /> </a>
              <h9> Contact information</h9>
            </div>
            {/* <!-- <h2>📋 Contact information</h2> --> */}
            <h4>
              If you have allergies or other dietary restrictions, please contact
              the restaurant. The restaurant will provide food-specific
              information upon request.
            </h4>
          
            <p>  <strong>Phone number:</strong> +934443-43  </p>
            <p>
              <strong>Website:</strong>{" "}
              <a href="http://mcdonalds.uk/">http://mcdonalds.uk/</a>
            </p>
          </div>

          <div class="section operational">
            <div class="deliverys">
              <img src="/images/Clock 2.png" alt="tracker" />
              <h10>Operational Times</h10>
            </div>
            {/* <!-- <h2>⏰ Operational Times</h2> --> */}
            <ul>
              <li>  <strong>Monday:</strong> 8:00 AM–3:00 AM  </li>
              <li>  <strong>Tuesday:</strong> 8:00 AM–3:00 AM  </li>
              <li>  <strong>Wednesday:</strong> 8:00 AM–3:00 AM  </li>
              <li>  <strong>Thursday:</strong> 8:00 AM–3:00 AM  </li>
              <li>  <strong>Friday:</strong> 8:00 AM–3:00 AM  </li>
              <li>  <strong>Saturday:</strong> 8:00 AM–3:00 AM  </li>
              <li>  <strong>Sunday:</strong> 8:00 AM–3:00 AM  </li>
            </ul>
          </div>
          {/* </div> */}
        </section>

    
  {/* Google Map Section */}
  <section className="google-map">
    <div className="map-container">
      <iframe
        id="map-canvas"
        className="map_part"
        width="800"
        height="450"
        src="https://maps.google.com/maps?width=100%&height=100%&hl=en&q=McDonald's,+Indore,+Madhya+Pradesh&t=&z=12&ie=UTF8&iwloc=B&output=embed"
        title="McDonald's Location in Indore"
      >
        Powered by <a href="https://www.googlemapsgenerator.com/">how to embed google maps generator</a> and <a href="https://getaroundgamstop.com/">how to get around gamstop</a>
      </iframe>
    </div>
  </section>


        {/* Customer Reviews */}
        <section className="customer review">
          <div className="head">
            <div className="title-container">
              <h1>Customer Reviews</h1>
              <img  src="/images/left.png"  alt="left button"  className="nav-btn left"  />
              <img  src="/images/right.png"  alt="right button"  className="nav-btn right"  />
            </div>

            <div className="review">
              <img src="/images/review.png" alt="review 1" class="review-img" />
              <img src="/images/review.png" alt="review 2" class="review-img" />
              <img src="/images/review.png" alt="review 3" class="review-img" />
            </div>
          </div>
        </section>

        {/* Rating Div */}
        <div className="rating">
          <img src="/images/product rating.png" alt="product rating" />
        </div>

        {/* Similar Restaurants */}
        <section className="restaurants">
          <div className="bc">
            <h8>Similar Restaurants</h8>
            <div className="restaurants-cards">
              <div className="Deals">  <img src="/images/mc logo.png" alt="Burgers & Fast Food" />  </div>
              <div class="Deals">  <img src="/images/papa logo.png" alt="Salads" />  </div>
              <div class="Deals">  <img src="/images/KFC logo.png" alt="Pasta & Casuals" />  </div>
              <div class="Deals">  <img src="/images/texac logo.png" alt="Pizza" />  </div>
              <div class="Deals">  <img src="/images/burger king logo.png" alt="Breakfast" />  </div>
              <div class="Deals">  <img src="/images/shaurma logo.png" alt="Soups" />  </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  };

  export default Baskets;  


  // the item is not adding in the basket when the plus button is clicked in product page but only opening the basket page

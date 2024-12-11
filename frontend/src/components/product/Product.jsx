import React, { useState } from "react";
import Header from "../header/header";
import Footer from "../footer/Footer";
import "./Product.css";
// import Basket from "../myBasket/basket";

const Product = () => {
  const [basketItems, setBasketItems] = useState([]);

  const handleAddToCart = (newItem) => {
    const itemIndex = basketItems.findIndex((item) => item.id === newItem.id);
  
    let updatedItems;
    if (itemIndex >= 0) {
      updatedItems = [...basketItems];
      updatedItems[itemIndex].quantity += 1;
    } else {
      updatedItems = [...basketItems, { ...newItem, quantity: 1 }];
    }
  
    // Update the state
    setBasketItems(updatedItems);
  
    // Save updated items to localStorage
    localStorage.setItem("basketItems", JSON.stringify(updatedItems));
  };
  
  

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
        <div style={{ width: "100%" }}>
          <section>
            <div className="bn">
              <div className="deals-container">
                <div className="deal-card"> <img src="/images/main1.png" alt="Chef Burgers London" /> </div>
                <div className="deal-card"> <img src="/images/main2.png" alt="Grand Ai Cafe London" /> </div>
                <div className="deal-card"> <img src="/images/main3.png" alt="Butterbrot Café London" /> </div>
              </div>
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
              <a href="/newbasket" onClick={() => 
                handleAddToCart({          
                id: 1, name:"Royal Cheese Burger", price: 120, description: "With extra fries",image: "/images/combo 1.png" })}>
                  <img src="/images/Plus.png" alt="plus button" />
                </a>
              </div>
              </div>

              <div class="product-card">
              <div class="content">
                <h2>The classics for 2</h2>
                <p1>
                  1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized
                  French Fries , 3 cold drinks
                </p1>
                <h2>₹ 120</h2>
                </div>
              <div class="images">
                <img src="/images/combo 2.png" alt="Salads" />
                <img src="/images/plus background.png" alt="background" />
              <a href="/newbasket" onClick={() => handleAddToCart({
                      id: 4, name: "The classics for 2",  price: 120, description: "  1 McChicken™, 1 Big Mac™,.etc", 
                      image: "/images/combo 2.png" })}>
                  <img src="/images/Plus.png" alt="plus button" />
                </a>
              </div></div>

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
              <a href="/newbasket" onClick={() => handleAddToCart({
                      id: 5, name: "The classics for 3", price: 120, description: "  1 McChicken™, 1 Big Mac™,.etc", image: "/images/combo3.png"})}>
                  <img src="/images/Plus.png" alt="plus button" />
                </a>
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
              <a href="/newbasket" onClick={() => handleAddToCart({
                        id: 6,  name: "The classics for 4",  price: 120,  description: "1 McChicken™, 1 Big Mac™,.etc",image: "/images/combo 4.png"})}>
                  <img src="/images/Plus.png" alt="plus button" />
                </a>
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
                  <a href="/newbasket" onClick={() => handleAddToCart({
                        id: 2,  name: "Royal Cheese Burger with extra Fries",  price: 70,  description: "1 burger, 1 Fries large, " ,image: "/images/fries1.png"})}>
                      <img src="/images/Plus.png" alt="plus button" />
                    </a>
              </div>
             </div>

              <div class="product-card">
              <div class="content">
                <h2>The classics for 2</h2>
                <p1>  1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized  French Fries , 3 cold drinks  </p1>
                <h2>₹ 70</h2>
                </div>
                <div class="images">
                  <img src="/images/fries2.png" alt="Salads" />
                  <img src="/images/plus background.png" alt="background" />
              <a href="/newbasket" onClick={() => handleAddToCart({
                        id: 7,  name: "Fries classics for 2",  price: 70,  description: "1 burger, 1 Fries large" ,image: "/images/fries2.png"})}>
                  <img src="/images/Plus.png" alt="plus button" />
                </a>
               </div>
              </div>

              <div class="product-card">
              <div class="content">
                <h2>The classics for 3 </h2>
                <p1> 1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks </p1>
                <h2>₹ 70</h2>
                </div>
                <div class="images">
                <img src="/images/fries3.png" alt="Pasta & Casuals" />
                <img src="/images/plus background.png" alt="background" />
              <a href="/newbasket" onClick={() => handleAddToCart({ id: 8,  name: "Fries classics for 3",  price: 70,  description: "1 burger, 1 Fries large " ,image: "/images/fries3.png"})}>
                  <img src="/images/Plus.png" alt="plus button" />
                </a>
              </div>
              </div>

              <div class="product-card">
              <div class="content">
                <h2>The classics for 4</h2>
                <p1>
                  1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized
                  French Fries , 3 cold drinks
                </p1>
                <h2>₹ 70</h2>
                </div>
              <div class="images">
                <img src="/images/fries4.png" alt="Pizza" />
                <img src="/images/plus background.png" alt="background" />
                <a href="/newbasket" onClick={() => handleAddToCart({  id: 9,  name: "Fries classics for 4",  price: 70,  description: "1 burger, 1 Fries large ", image: "/images/fries4.png"})}>
                  <img src="/images/Plus.png" alt="plus button" />
                </a>
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
                <h2>Royal Cheese Burger with extra Fries</h2>
                <p1>1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium</p1>
                <h2>₹ 40</h2>
                </div>
                <div class="images">
                <img src="/images/cooldrink1.png" alt="Burgers & Fast Food" />
                <img src="/images/plus background.png" alt="background" />
              <a href="/newbasket" onClick={() => handleAddToCart({ id:3, name:"Coke Coca Cola", price:40 ,image:"/images/cooldrink1.png"})}>
                  <img src="/images/Plus.png" alt="plus button" />
                </a>
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
              <a href="/newbasket" onClick={() => handleAddToCart({id:10, name:"Coke Coca Cola(small)",price: 40,image:"/images/cooldrink 2.png" })}>
                  <img src="/images/Plus.png" alt="plus button" />
                </a>
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
              <a href="/newbasket" onClick={() => handleAddToCart({  id:11,  name: "Coke Coca Cola (Medium)",  price: 40 ,image:"/images/cooldrink 3.png"})}>
                  <img src="/images/Plus.png" alt="plus button" />
                </a>
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
              <a href="/newbasket" onClick={() => handleAddToCart({  id:12,  name: "Coke Coca Cola (Large)",  price: 40 ,image:"/images/cooldrink 4.png"} )}>
                  <img src="/images/Plus.png" alt="plus button" />
                </a>
              </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section class="container">
          {/* <!-- <div class="container"> --> */}
          <div class="section delivery">
            <div class="delivery">
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
            <div class="delivery">
              <a href="#contact">  <img src="/images/contact.png" alt="tracker" /> </a>
              <h9> Contact information</h9>
            </div>
            {/* <!-- <h2>📋 Contact information</h2> --> */}
            <p>
              If you have allergies or other dietary restrictions, please contact
              the restaurant. The restaurant will provide food-specific
              information upon request.
            </p>
          
            <p>  <strong>Phone number:</strong> +934443-43  </p>
            <p>
              <strong>Website:</strong>{" "}
              <a href="http://mcdonalds.uk/">http://mcdonalds.uk/</a>
            </p>
          </div>

          <div class="section operational">
            <div class="delivery">
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

export default Product;



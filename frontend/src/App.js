import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Home from "./components/home/Home";
import Product from "./components/product/Product";
import Footer from "./components/footer/Footer";
import Profile from "./components/profile/Profile"
import Payment from "./components/payment new/Payment"
import Success from "./components/payment succees new/success"
import Checkout from "./components/checkout new/Checkout"
import Address from "./components/Address new/address"
// import Basket  from "./components/myBasket/old basket"
import Baskets  from "./components/myBasket/newbasket"
// import { BasketProvider } from "./components/header/basketContext";



function App() {
    return (
        <Router>
            <Routes>
                {/* <BasketProvider> */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/" element={<Home />} />
                {/* <Route path="/cart" element={<Cart />} /> */}
           
                <Route path="/footer" element={<Footer />} />
                
                <Route path="/product" element={<Product />} />
                <Route path="/profile" element={<Profile />} />

                <Route path="/checkout" element={<Checkout />} />
                <Route path="/address" element={<Address />} />

                <Route path="/payment" element={<Payment />} />
                <Route path="/success" element={<Success />} />
                {/* <Route path="/old basket" element={<Basket />} /> */}
                <Route path="/newbasket" element={<Baskets />} />
                {/* </BasketProvider> */}

            </Routes>
        </Router>
    );
}

export default App;

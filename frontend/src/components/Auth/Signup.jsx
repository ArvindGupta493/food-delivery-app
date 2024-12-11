import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";  // Added useNavigate for navigation after successful signup
import axios from "axios";  // For making API calls

const Signup = () => {
    const [email, setEmail] = useState("");  // Manage state for email
    const [password, setPassword] = useState("");  // Manage state for password
    // const [confirmPassword, setConfirmPassword] = useState("");  // Manage state for confirm password
    const [phone, setphone] = useState("");
    const [name, setName] = useState("");  // Manage state for full name
    const [errorMessage, setErrorMessage] = useState("");  // State for error messages
    const [isSignup, setIsSignup] = useState(true);  // Toggle between login and signup forms
    const navigate = useNavigate();  // To navigate after successful signup

    // Function to toggle between sign-up and sign-in
    const toggleForm = () => {
        setIsSignup(!isSignup);
    };

    // Handle the form submission
    const handleSignUp = async (e) => {
        e.preventDefault();  // Prevent the default form submission behavior

        // Simple validation for password length
        if (password.length < 8) {
            setErrorMessage("Password must be at least 8 characters.");
            return;
        }

        try {
            // Send a POST request to create a new user
            const response = await axios.post("http://localhost:2000/api/signup", {
                name,
                phone,
                email,
                password,
            });

            if (response.data.success) {
                // Redirect to login page after successful signup
                navigate("/login");
            }
        } catch (error) {
            // Show any error that occurs during the signup process
            setErrorMessage(error.response?.data?.message || "Something went wrong. Please try again.");
        }
    };

    return (
        <div className="login-page">
            <div className="main">
                <div className="login-left">
                    <div className="all-feilds">
                        <div className="login-logo">
                            <img src="../images/order LOGO 1.png" alt="OrderUK Logo" />
                        </div>
                        {isSignup ? (
                            <>
                                <h2>Welcome 👋</h2>
                                <p>Create a new account to start ordering your meals.</p>
                                <form onSubmit={handleSignUp}>
                                <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="eg. John A"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </div>    <div className="form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input
                                            type="text"
                                            id="phone"
                                            placeholder="Enter your 10 digit mobile number"
                                            value={phone}
                                            onChange={(e) => setphone(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="Example@email.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            id="password"
                                            placeholder="At least 8 characters"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    {/* <div className="form-group">
                                        <label htmlFor="confirm-password">Confirm Password</label>
                                        <input
                                            type="password"
                                            id="confirm-password"
                                            placeholder="Confirm Password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            required
                                        />
                                    </div> */}

                                    {/* Display error message */}
                                    {errorMessage && <p className="error-message">{errorMessage}</p>}

                                    <button type="submit" className="btn-primary">
                                        Continue
                                    </button>
                                </form>
                                <p>
                                    Already have an account?{" "}
                                    <Link to="/login" onClick={toggleForm}>
                                        Sign In
                                    </Link>
                                </p>
                            </>
                        ) : (
                            <>
                                <h2>Welcome Back 👋</h2>
                                <p>Today is a new day. It's your day. Sign in to start ordering.</p>
                                {/* Add sign-in form here (similar to sign-up form) */}
                            </>
                        )}
                    </div>
                </div>
                <div className="login-right">
                    <img
                        src="../images/Art.png"
                        alt="Delicious Food"
                        className="login-image"
                    />
                </div>
            </div>

            <footer>
                <div className="footer-content">
                    <div className="footer-section">
                        <div className="logos">
                            <img src="../images/order LOGO 2.png" alt="Order logo 2" />
                        </div>
                        <div className="app-links">
                            <img src="../images/app-store-badges-en 1.png" alt="App Store and Google Play" />
                        </div>
                        <p>Company # 490039-445, Registered with House of companies.</p>
                    </div>

                    <div className="footer-section">
                        <p className="newsletter-heading">Get Exclusive Deals in your Inbox</p>

                        <form>
                            <input id="useremail" type="email" placeholder="youremail@gmail.com" required />
                            <input id="submits" type="button" value="Subscription" />
                        </form>

                        <p className="email-policy">
                            We won't spam, read our <a href="email-policy">email policy</a>.
                        </p>
                        <div className="social-links">
                            <a href="/fb"><img src="../images/Facebook.png" alt="Facebook" /></a>
                            <a href="/insta"><img src="../images/Instagram.png" alt="Instagram" /></a>
                            <a href="/tiktok"><img src="../images/TikTok.png" alt="TikTok" /></a>
                            <a href="/snap"><img src="../images/Snapchat.png" alt="Snapchat" /></a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Legal Pages</h4>
                        <ul>
                            <li><a href="/T&C">Terms and conditions</a></li>
                            <li><a href="/privacy">Privacy</a></li>
                            <li><a href="/cookie">Cookies</a></li>
                            <li><a href="/modern">Modern Slavery Statement</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Important Links</h4>
                        <ul>
                            <li><a href="/help">Get help</a></li>
                            <li><a href="/add">Add your restaurant</a></li>
                            <li><a href="/deliver">Sign up to deliver</a></li>
                            <li><a href="/account">Create a business account</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <ul className="footer-bottom-links">
                        <p>Order.uk Copyright 2024, All Rights Reserved.</p>
                        <li><a href="/policy">Privacy Policy</a></li>
                        <li><a href="/terms">Terms</a></li>
                        <li><a href="/pricing">Pricing</a></li>
                        <li><a href="personal">Do not sell or share my personal information</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Signup;








































// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// // import api from "../../services/api";
// // import { Link, useNavigate } from "react-router-dom";


// const Signup = () => {
//     const [isSignup, setIsSignup] = useState(false);
//     // const navigate = useNavigate();
    
//     const toggleForm = () => {
//         setIsSignup(!isSignup);
//     };
//   //   const HandleSignUp= ()=>{
//   //     navigate('/')
//   // }

//     return (
//         <div className="login-page">
//             <div className="main">
//             <div className="login-left">
//                 <div className="all-feilds">
//                 <div className="login-logo">
//                     <img src="../images/order LOGO 1.png" alt="OrderUK Logo" />
//                 </div>
//                 <h2>Welcome Back 👋</h2>
//                 <p>Today is a new day. It's your day. You shape it. Sign in to start ordering.</p>
//                 <form>
//                     <div className="form-group">
//                         <label htmlFor="email">Email</label>
//                         <input type="email" id="email" placeholder="Example@email.com" />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="password">Password</label>
//                         <input type="password" id="password" placeholder="At least 8 characters" />
//                     </div>
//                             <div className="form-group">
//                                 <label htmlFor="name">Full Name</label>
//                                 <input type="text" id="name" placeholder="Your Name" />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="confirm-password">Confirm Password</label>
//                                 <input type="password" id="confirm-password" placeholder="Confirm Password" />
//                             </div>
                  
//                     <button type="submit" className="btn-primary" >
//                       {/* <Link to="/login" onClick={toggleForm}> */}
//                           Continue
//                       {/* </Link> */}
//                     </button>
//                 </form>
//                 <p>
//                     Already have an account? <Link to="/login" onClick={toggleForm}>Sign In</Link>
                
//                 </p>
//                 </div>
//             </div>
//             <div className="login-right">
//                 <img
//                     src="../images/Art.png"
//                     alt="Delicious Food"
//                     className="login-image"
//                 />
//             </div>
//         </div>
           
//       <footer>
//         <div className="footer-content">
//           <div className="footer-section">
//             <div className="logos">
//               <img src="../images/order LOGO 2.png" alt="Order logo 2" />
//             </div>
//             <div className="app-links">
//               <img src="../images/app-store-badges-en 1.png" alt="App Store and Google Play" />
//             </div>
//             <p>Company # 490039-445, Registered with House of companies.</p>
//           </div>

//           <div className="footer-section">
//             <p className="newsletter-heading">Get Exclusive Deals in your Inbox</p>

//             <form>
//               <input id="useremail" type="email" placeholder="youremail@gmail.com" required />
//               <input id="submits" type="button" value="Subscription" />
//             </form>

//             <p className="email-policy">We won't spam, read our <a href="emial policy">email policy</a>.</p>
//             <div className="social-links">
//               <a href="/fb"><img src="../images/Facebook.png" alt="Facebook" /></a>
//               <a href="/insta"><img src="../images/Instagram.png" alt="Instagram" /></a>
//               <a href="/tiktok"><img src="../images/TikTok.png" alt="TikTok" /></a>
//               <a href="/snap"><img src="../images/Snapchat.png" alt="Snapchat" /></a>
//             </div>
//           </div>

//           <div className="footer-section">
//             <h4>Legal Pages</h4>
//             <ul>
//               <li><a href="/T&C">Terms and conditions</a></li>
//               <li><a href="/privacy">Privacy</a></li>
//               <li><a href="/cookie">Cookies</a></li>
//               <li><a href="/modern">Modern Slavery Statement</a></li>
//             </ul>
//           </div>

//           <div className="footer-section">
//             <h4>Important Links</h4>
//             <ul>
//               <li><a href="/help">Get help</a></li>
//               <li><a href="/add">Add your restaurant</a></li>
//               <li><a href="/deliver">Sign up to deliver</a></li>
//               <li><a href="/account">Create a business account</a></li>
//             </ul>
//           </div>
//         </div>
        

//         <div className="footer-bottom">
//           <ul className="footer-bottom-links">
//             <p>Order.uk Copyright 2024, All Rights Reserved.</p>
//             <li><a href="/policy">Privacy Policy</a></li>
//             <li><a href="/terms">Terms</a></li>
//             <li><a href="/pricing">Pricing</a></li>
//             <li><a href="personal">Do not sell or share my personal information</a></li>
//           </ul>
//         </div>
//       </footer>
    
//         </div>
//     );
// };

// export default Signup;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Axios for making HTTP requests
import "./Login.css"; // Link to your CSS file

const Login = () => {
    const [email, setEmail] = useState("");  // State to hold email input
    const [password, setPassword] = useState("");  // State to hold password input
    const [isSignup, setIsSignup] = useState(false);  // State to toggle between login/signup forms
    const navigate = useNavigate();  // React Router's navigate function for redirection

    const toggleForm = () => {
        setIsSignup(!isSignup);
    };

    const handleLogin = async (e) => {
        e.preventDefault();  // Prevent form default submission

        try {      // Send login request to backend API
            const response = await axios.post("http://localhost:2000/api/login", {
                email,
                password,
            });

            // If login is successful
            if (response.data.token) {
                localStorage.setItem("token", response.data.token);  // Store the token in localStorage for future requests
                localStorage.setItem("userID", response.data.userID);  // Store userID for later use (optional)
                navigate("/");      // Redirect user to the homepage after successful login
            }

        } catch (error) {
            // Handle error (wrong credentials, server error, etc.)
            alert(error.response?.data?.message || "Login failed. Please try again.");
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
                        <h2>Welcome Back 👋</h2>
                        <p>Today is a new day. It's your day. You shape it. Sign in to start ordering.</p>
                        <form onSubmit={handleLogin}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Example@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}  // Update email state
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="At least 8 characters"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}  // Update password state
                                />
                            </div>
                            {isSignup && (
                                <>
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name</label>
                                        <input type="text" id="name" placeholder="Your Name" />
                                    </div>
                                </>
                            )}
                            <button type="submit" className="btn-primary">
                                Sign In
                            </button>
                        </form>
                        <p>
                            Don't have an account?{" "}
                            <Link to="/signup" onClick={toggleForm}>
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="login-right">
                    <img src="../images/Art.png" alt="Delicious Food" className="login-image" />
                </div>
            </div>

            {/* Footer */}
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
                            We won't spam, read our <a href="emial policy">email policy</a>.
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

export default Login;


































// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Login.css"; // Link to your CSS file

// const Login = () => {
//     const [isSignup, setIsSignup] = useState(false);
//     const navigate = useNavigate()

//     const toggleForm = () => {
//         setIsSignup(!isSignup);
//     };
//     const HandleSignIn = ()=>{
//         navigate('/')
//     }

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
//                     {isSignup && (
//                         <>
//                             <div className="form-group">
//                                 <label htmlFor="name">Full Name</label>
//                                 <input type="text" id="name" placeholder="Your Name" />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="confirm-password">Confirm Password</label>
//                                 <input type="password" id="confirm-password" placeholder="Confirm Password" />
//                             </div>
//                         </>
//                     )}
//                     <button type="submit" className="btn-primary" onClick={HandleSignIn}>
//                       Sign In
//                     </button>
//                 </form>
//                 <p>
                
//                     Don't have an account? <Link to="/signup" onClick={toggleForm}>Sign up</Link>
                
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
//             </div>
           
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

// export default Login;


  
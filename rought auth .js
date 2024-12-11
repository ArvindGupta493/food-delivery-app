import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./AuthPage.module.css";
import burgerImg from "../../assets/burger.png";
import logoImg from "../../assets/logo1.png";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const validateForm = () => {
    const newErrors = {};

    if (!isLogin && !formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!isLogin && !formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!isLogin && !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const apiEndpoint = isLogin
      ? `${baseUrl}/api/v1/user/login`
      : `${baseUrl}/api/v1/user/signup`;

    try {
      const response = await axios.post(apiEndpoint, formData);
      alert(response.data.message);
      console.log(response.data)

      if (isLogin && response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("name",response.data.name)
        localStorage.setItem("email",response.data.email)
        localStorage.setItem("phone",response.data.phone)
        localStorage.setItem("id",response.data.userID)
        navigate("/home");
      } else if (!isLogin) {
        setIsLogin(true);
        setFormData({ name: "", phone: "", email: "", password: "" }); 
      }
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Something went wrong!");
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ name: "", phone: "", email: "", password: "" }); 
    setErrors({}); 
  };

  return (
    <div className={styles.signupLoginContainer}>
      <div className={styles.formContainer}>
        <div className={styles.logoDiv}>
          <img src={logoImg} alt="Order Up Logo" className={styles.logo} />
        </div>

        <h2>{isLogin ? "Welcome Back 👋" : "Welcome 👋"}</h2>
        <p className={styles.para}>
          Today is a new day. It's your day. You shape it. <br />
          {isLogin ? "Sign in" : "Sign up"} to start ordering.
        </p>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <label className={styles.label}>Name</label>
              <input
                className={`${styles.input} ${
                  errors.name ? styles.inputError : ""
                }`}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
              {errors.name && <p className={styles.error}>{errors.name}</p>}

              <label className={styles.label}>Phone Number</label>
              <input
                className={`${styles.input} ${
                  errors.phone ? styles.inputError : ""
                }`}
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your 10 digit mobile number"
              />
              {errors.phone && <p className={styles.error}>{errors.phone}</p>}
            </>
          )}

          <label className={styles.label}>Email</label>
          <input
            className={`${styles.input} ${
              errors.email ? styles.inputError : ""
            }`}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}

          <label className={styles.label}>Password</label>
          <input
            className={`${styles.input} ${
              errors.password ? styles.inputError : ""
            }`}
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className={styles.error}>{errors.password}</p>
          )}

          <button className={styles.button} type="submit">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className={styles.toggleText}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span className={styles.toggleLink} onClick={toggleForm}>
            {isLogin ? " Sign Up" : " Login"}
          </span>
        </p>
      </div>

      <div className={styles.imageContainer}>
        <img src={burgerImg} alt="Burgers" />
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import axios from 'axios';
import "../styles/LoginSignup.css";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const LoginRegister = () => {
  const [action, setAction] = useState("Register");

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  // Separate state for login
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (action === "Register") {
      setRegisterData({ ...registerData, [name]: value });
    } else {
      setLoginData({ ...loginData, [name]: value });
    }
  };

  const handleAuthAction = async (e) => {
    e.preventDefault();

    try {
      if (action === "Register") {
        // Perform registration action
        const response = await axios.post('http://localhost:5000/api/user', {
          name: registerData.name,
          email: registerData.email,
          password: registerData.password,
          confirmPassword: registerData.confirmPassword
        });
        alert('Registered successfully');
        console.log(response.data); // Handle response accordingly
      } else {
        // Perform login action
        const response = await axios.post('http://localhost:5000/api/user/login', {
          email: loginData.email,
          password: loginData.password
        });
        alert('Logged in successfully');
        console.log(response.data); // Handle response accordingly
      }
    } catch (error) {
      console.error("API request failed", error.message);
      // Handle error (display an error message, redirect, etc.)
    }
  };
   
    const { name, email, password, confirmPassword } = registerData;
   
  return (
    <form className="MainContainer" onSubmit={handleAuthAction}>
      <div className="Login">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Register" ? (
          <div className="input">
            <FaRegUser className='icon' />
            <input
              type="text"
              name='name'
              value={name}
              onChange={handleInputChange}
              className="user"
              placeholder='Name'
            />
          </div>
        ) : null}
        <div className="input EmailId">
          <MdOutlineEmail className='icon' />
          <input
            type="email"
            name='email'
            value={email}
            onChange={handleInputChange}
            className="user"
            placeholder='Email Id'
          />
        </div>
        <div className="input">
          <RiLockPasswordLine className='icon' />
          <input
            type="password"
            name='password'
            value={password}
            onChange={handleInputChange}
            className="user"
            placeholder='Password'
          />
        </div>
        {action === "Register" ? (
          <div className="input">
            <RiLockPasswordLine className='icon' />
            <input
              type="password"
              name='confirmPassword'
              value={confirmPassword}
              onChange={handleInputChange}
              className="user"
              placeholder='Confirm Password'
            />
          </div>
        ) : null}
      </div>
      <div className="button">
        {action === "Register" ? (
          <button className="Registerbutton" type='submit'>{action}</button>
        ) : <button className="Loginbutton" type='submit'>{action}</button>}
      </div>
      <div className="submit-container">
        {action === "Register" ? (
          <div  className={action === "Register" ? "" : ""} onClick={() => { setAction("Login") }}>
            Already have an account? <span className='noAccount'>Login</span>
          </div>
        ) : (
          <div  className={action === "Login" ? "" : ""} onClick={() => { setAction("Register") }}>
            Don't have an account? <span className='noAccount'>Register</span>
          </div>
        )}
      </div>
    </form>
  );
}

export default LoginRegister;

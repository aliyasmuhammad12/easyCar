import React, { useState } from 'react';
import axios from 'axios';
import "../styles/LoginSignup.css";
// import { FaRegUser } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
const Login = () => {
 const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email:"",password:""
    });

    const handleInput = (e) =>{
        const {name,value}= e.target;
        setLoginData({ ...loginData, [name]: value});
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/user/login',loginData);
            alert("user login successfully");
            console.log(response.data);
            navigate("/")
        } catch (error) {
            console.error("login failed", error.message);
        }
    }
    const {email,password} = loginData;
  return (
    <>
     <form className="MainContainer" onSubmit={handleSubmit}>
      <div className="Login">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">

        <div className="input EmailId">
          <MdOutlineEmail className='icon' />
          <input
            type="email"
            name='email'
            value={email}
            onChange={handleInput}
            className="user"
            placeholder='Email Id'
          />
        </div>
        <div className="input EmailId">
          <RiLockPasswordLine className='icon' />
          <input
            type="password"
            name='password'
            value={password}
            onChange={handleInput}
            className="user"
            placeholder='Password'
          />
        </div>

      </div>
      <div className="button">
      <button className="Loginbutton" type='submit'>Login</button>
      </div>
      <div className="submit-container">
          <div>
            Don't have an account? <Link to="/register" className='noAccount'>Register</Link>
          </div>
      </div>
    </form>
    </>
  )
}

export default Login;
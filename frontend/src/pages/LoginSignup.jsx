
// import React, { useState } from 'react';
// import "../styles/LoginSignup.css";
// import { FaRegUser } from "react-icons/fa";
// import { MdOutlineEmail } from "react-icons/md";
// // import "../index.css"
// import { RiLockPasswordLine } from "react-icons/ri";

// const LoginSignup = () => {

// const [action, setAction] = useState("Login");

//   return (
//    <>
//    <div className="MainContainer">
//     <div className="Login">
//         <div className="text">{action}</div>
//         <div className="underline"></div>
//     </div>
//     <div className="inputs">
//     {action==="Login"?<div></div>: <div className="input">
//         <FaRegUser className='icon'/>
//             <input type="text" className="user" placeholder='User Name' />
//         </div>}
//         <div className="input EmailId">
//         <MdOutlineEmail  className='icon'/>
//             <input type="email" className="user" placeholder='Email Id' />
//         </div>
//         <div className="input">
//             <RiLockPasswordLine className='icon'/>
//             <input type="password" className="user" placeholder='password'/>
//         </div>
//         {action==="Login"?<div></div>:<div className="input">
//             <RiLockPasswordLine className='icon'/>
//             <input type="password" className="user" placeholder='conform password'/>
//         </div>}   
//     </div>
//     {action==="Register"?<div></div>:<div className="forget-password">Forgetten password? <span>click here</span></div>}
//         <div className="buttons">
//             <div className="button">{action}</div>
//         </div>

//         <div className="submit-container">
//             {action==="Login"?<div className={action==="Login"?"":""} onClick={()=>{setAction("Register")}}>Don't have an account?<span className='noAccount'>Register</span></div>:<div className={action==="Register"?"":""} onClick={()=>{setAction("Login")}} >Already had an account? <span className='noAccount'>Login</span> </div>}
        
//         </div>
//    </div>
//    </>
//   )
// }

// export default LoginSignup

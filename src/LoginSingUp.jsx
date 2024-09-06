import React, { useState } from 'react';
import './LoginSingUp.css'
import user_icon from '../src/assets/person.png'
import email_icon from '../src/assets/email.png'
import password_icon from '../src/assets/password.png'
const LoginSingUp = () => {

    const [action,setAction]=useState("Login");

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
            </div>
            <div className="inputs">
                {action==="Login"?<div></div>:<div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder=' Name' />
                </div>} 
                
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder=' Email ' />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder=' Password ' />
                </div>
            </div>
            <div className="forgot-password">Lost Password?<span>Click Here!</span></div>
            <div className="button-container">
                <button className={action==="Login"?"button gray":"button"} onClick={()=>{setAction("Sing Up")}}>Sing Up</button>
                <button className={action==="Sing Up"?"button gray":"button"} onClick={()=>{setAction("Login")}}>Login</button>
            </div>
        </div>

    )
};
export default LoginSingUp
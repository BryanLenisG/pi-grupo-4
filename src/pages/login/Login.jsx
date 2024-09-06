import React, { useState } from 'react';
import "./Login.css";
import { useCallback, useEffect } from "react";
import useAuthStore from "../../stores/use-auth-store";
import UserDAO from "../../daos/UserDAO";
import { useNavigate } from "react-router-dom";
import user_icon from "../../assets/person.png";
import email_icon from "../../assets/email.png";
import password_icon from "../../assets/password.png";

const Login = () => {

  const [action, setAction] = useState("Login");

  const { user, loginGoogleWithPopUp, logout, observeAuthState, loading } =
    useAuthStore();

  const navigate = useNavigate();

  useEffect(() => {
    observeAuthState();
  }, [observeAuthState]);

  useEffect(() => {
    if (user) {
      const newUser = {
        email: user.email,
        name: user.displayName,
        photo: user.photoURL,
      };
      UserDAO.createUser(newUser);
      navigate("/Quiz");
    }
  }, [user, navigate]);

  const handleLogin = useCallback(() => {
    loginGoogleWithPopUp();
  }, [loginGoogleWithPopUp]);

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  if (loading) {
    return <p className="loading-text">Cargando...</p>;
  }

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
      </div>
      <div className="inputs">
        {action === "Login" ? <div></div> : <div className="input">
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
      {user ? (
        <>
          <p className="welcome-text">Bienvenido, {user.displayName}</p>
          <button className="button-logout" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </>
      ) : (
        <div className="button-container">
          <button className={action === "Login" ? "button gray" : "button"} onClick={() => { setAction("Sing Up") }}>Sing Up</button>
          <button className={action === "Sing Up" ? "button gray" : "button"} onClick={() => { handleLogin("Login") }}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Login;


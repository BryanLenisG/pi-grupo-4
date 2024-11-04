import React, { useState } from 'react';
import "./Login.css";
import { useCallback, useEffect } from "react";
import useAuthStore from "../../stores/use-auth-store";
import UserDAO from "../../daos/UserDAO";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const handleinvite = () =>{
    navigate("/Home")
  };

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
      navigate("/Home");
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
        <h1>Bienvenidos a PLANET ENERGY</h1>
      </div>
      <div className="button-container">
        <button className={action === "Sing Up" ? "button gray" : "button"} onClick={() => { handleLogin("Login") }}>Login</button>
        <button onClick={handleinvite}>invitado</button>
      </div>
    </div>
  );
};

export default Login;

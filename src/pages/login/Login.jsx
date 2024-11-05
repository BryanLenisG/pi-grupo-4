import React, { useState, useCallback, useEffect } from 'react';
import "./Login.css";
import useAuthStore from "../../stores/use-auth-store";
import UserDAO from "../../daos/UserDAO";
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import Home from '../home/Home';


const Login = () => {

  const handleinvite = () =>{
    navigate("/Quiz")
  };

  const [action, setAction] = useState("Login");
  const { user, loginGoogleWithPopUp, logout, observeAuthState, loading } = useAuthStore();

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

  const handleInvite = () => {
    navigate("/Quiz");
  };

  if (loading) {
    return <p className="loading-text">Cargando...</p>;
  }

  return (
    <div>   
      <div className="button-container">
        <button className={action === "Sing Up" ? "button gray" : "button"} onClick={() => { handleLogin("Login") }}>Login</button>
        <button onClick={handleinvite}>invitado</button>
      </div>
    </div>
  );
  
};

export default Login;

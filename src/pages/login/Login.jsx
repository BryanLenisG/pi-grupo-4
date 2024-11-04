import React, { useState, useCallback, useEffect } from 'react';
import "./Login.css";
import useAuthStore from "../../stores/use-auth-store";
import UserDAO from "../../daos/UserDAO";
import { useNavigate } from "react-router-dom";

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
        
      <div className="button-container">
        <h1>Inicia sesión</h1>
        <button
          className={action === "Sign Up" ? "button gray" : "button"}
          onClick={() => handleLogin("Login")}
        >
          Login
        </button>
        <button onClick={handleInvite}>Invitado</button>
      </div>
  );
  
};

export default Login;

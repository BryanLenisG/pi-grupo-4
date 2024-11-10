import React, { useState } from 'react';
import "./Login.css";
import { useCallback, useEffect } from "react";
import useAuthStore from "../../stores/use-auth-store";
import UserDAO from "../../daos/UserDAO";
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import logogroup from '../../assets/Logo.png';


const Login = () => {
  const handleinvite = () => {
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
    <div className="login-container">
      <div className="login-box">
        <h1>Bienvenidos</h1>
        <img src={logogroup} alt="Logogrupo" className="logo-L" />
        <div className="button-container">
          <Button
            className={`button ${action === "Sing Up" ? "gray" : ""}`}
            onClick={() => handleLogin("Login")}
          >
            Iniciar sesión
          </Button>
          <Button variant="secondary" onClick={handleinvite}>
            Ingresar como invitado
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
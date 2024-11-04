import './Home.css';
import { useNavigate } from 'react-router-dom';
import { useCallback } from "react";
import useAuthStore from "../../stores/use-auth-store";
import save_our_planet from '../../assets/save_our_planet.jpg';

const Home = () => {
    const { logout } = useAuthStore();
    const navigate = useNavigate();

    const handleLogout = useCallback(() => {
        logout();
        navigate('/');
      }, [logout, navigate]);

      const handleNavigateToQuiz = useCallback(() => {
        navigate('/Quiz'); 
    }, [navigate]);
  return (
    <div>
      <div className="home-container-title">
      <h1 className="home-title">
          Bienvenidos
        </h1> 
        </div>
        <div className="home-container">
        <p className="home-text">
          La tierra es el hogar que compartimos con millones de especies. Hoy tenemos desafios críticos como deforestación, pérdida de biodiversidad y erosión de suelos. Ésta página es un espacio para aprender, reflexionar y aprender juntos.
        </p>
        <img src={save_our_planet} alt="save_our_planet" className="save_our_planet" />
      </div>

    <div>
    <button className="button-logout" onClick={handleLogout}>
        Cerrar sesión
      </button>
      <div>
        </div><button className="button-continuar" onClick={handleNavigateToQuiz}>
        Continuar
        </button>
    </div>

    </div>

  );
};

export default Home;
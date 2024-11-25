import './Home.css';
import { useNavigate } from 'react-router-dom';
import { useCallback } from "react";
import useAuthStore from "../../stores/use-auth-store";
import save_our_planet from '../../assets/save_our_planet.jpg';
import { OrbitControls } from "@react-three/drei";
import Ant from "../../components/model-3d/ant";
import { Canvas } from "react-three-fiber";
import Navbarcom from "../../components/Navbarcom";

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
      <Navbarcom />
      <div className="home-container">
        <Canvas camera={{ position: [50, 0, 10], zoom: 8 }}
          style={{ width: "130vw", height: "80vh", position: "absolute" }} >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={7} />
          <OrbitControls autoRotate={false} />
          <Ant position={[10, -3.5, 0]} />
        </Canvas>
      </div>
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

      </div>
    </div>
  );
};

export default Home;

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
      <div>
        <div className="home-container-title">
          <h1 className="home-title">
            Bienvenidos a nuestra página de navegacion interactiva 3D.
          </h1>
        </div>
        <div className="home-container">
          <p className="home-text">
            Explora nuestro mundo virtual en 3D y descubre los desafios medioambientales más críticos que enfrentamos hoy en dia.
            Navega a través de paisajes detallados y aprende sobre la pérdida de biodiversidad, la deforestación y la erosión.
            Sumérgete en esta experiencia educativa y visualiza el impacto de nuestras acciones en el planeta. 
            </p>
          <img src={save_our_planet} alt="save_our_planet" className="save_our_planet" />
        </div>

      </div>
      <div className="home-container">
        <Canvas camera={{ position: [50, 0, 10], zoom: 8 }}
          style={{ width: "130vw", height: "80vh", position: "absolute" }} >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={5} />
          <OrbitControls autoRotate={false} />
          <Ant position={[10, 0, 0]} />
        </Canvas>
      </div>
    </div>
  );
};

export default Home;

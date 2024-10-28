import { Canvas } from "react-three-fiber";
import { useCallback } from "react";
import useAuthStore from "../../stores/use-auth-store";
import "./Quiz.css";
import { OrbitControls } from "@react-three/drei";
import Ant from "../../components/model-3d/ant";
import { useNavigate } from 'react-router-dom';
import "../../pages/biodiversity/Biodiversity";
import "../../pages/deforest/Deforest";
import "../../pages/erosion/Erosion";
const Quiz = () => {
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    logout();
    navigate('/');
  }, [logout, navigate]);

  const handleButton = (route) => {
    navigate(route);
  };

  return (
    <div>
      <div className="quiz-container">
        <Canvas camera={{ position: [50, 0, 10], zoom: 8 }}
          style={{ width: "130vw", height: "80vh", position: "absolute" }} >

          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={7} />
          <OrbitControls autoRotate={false} />
          <Ant position={[10, -3.5, 0]} />
        </Canvas>
 
      </div>
      
      <div className="button-container">
        <div className="text-button"> 
          <h2>Selecciona una opción</h2>
        </div>
        <button className="button-biodiversity" onClick={() => handleButton('/Biodiversity')}>
            Ir a Biodiversidad
          </button>
          <button className="button-deforest" onClick={() => handleButton('/Deforest')}>
            Ir a Deforestación
          </button>
          <button className="button-erosion" onClick={() => handleButton('/Erosion')}>
            Ir a Erosión
          </button>
        </div>
      <button className="button-logout" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
    
  );
};

export default Quiz;

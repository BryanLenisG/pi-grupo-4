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

  // Función para manejar la navegación a diferentes rutas
  const handleButton = (route) => {
    navigate(route);
  };

  return (
    <div>
      <div className="quiz-container">
        <Canvas camera={{ position: [20, 0, 10], zoom: 5 }}
          style={{ width: "130vw", height: "100vh", position: "absolute" }} >

          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={7} />
          <OrbitControls autoRotate={false} />
          <Ant position={[-5, -2, 0]} />
        </Canvas>

      </div>
    
      <br />
      <div className="button-menu">
          {/* Botones para redirigir a diferentes páginas */}
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
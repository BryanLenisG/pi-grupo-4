import './Home.css';
import { useNavigate } from 'react-router-dom';
import { useCallback } from "react";
import useAuthStore from "../../stores/use-auth-store";
import save_our_planet from '../../assets/save_our_planet.jpg';
import biodiversityImage from '../../assets/biodiversityImage.jpg'; // Imagen de biodiversidad
import deforestationImage from '../../assets/deforestationImage.jpeg'; // Imagen de deforestación
import erosionImage from '../../assets/erosionImage.jpg'; // Imagen de erosión
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

  return (
    <div>
      <Navbarcom />
      <div>
        <div className="home-container-title">
          <h1 className="home-title">
            Bienvenidos a nuestra página de navegación interactiva 3D.
          </h1>
        </div>
        <div className="home-container">
          <p className="home-text">
            Explora nuestro mundo virtual en 3D y descubre los desafíos medioambientales más críticos que enfrentamos hoy en día.
            Navega a través de paisajes detallados y aprende sobre la pérdida de biodiversidad, la deforestación y la erosión.
            Sumérgete en esta experiencia educativa y visualiza el impacto de nuestras acciones en el planeta.
          </p>
          <img src={save_our_planet} alt="save_our_planet" className="save_our_planet" />
        </div>
        <div className="home-container-summaries">
          {/* Biodiversidad */}
          <div className="summary-container">
            <img src={biodiversityImage} alt="Biodiversidad" className="summary-image" />
            <div>
              <h2 className="home-subtitle">Biodiversidad</h2>
              <p className="home-text">
                La biodiversidad es la variedad de seres vivos en un ecosistema, que incluye plantas, animales, microorganismos y sus interacciones.
                Es esencial para mantener el equilibrio ecológico y proporciona servicios como la polinización y el control del clima.
              </p>
            </div>
          </div>
          {/* Deforestación */}
          <div className="summary-container">
            <img src={deforestationImage} alt="Deforestación" className="summary-image" />
            <div>
              <h2 className="home-subtitle">Deforestación</h2>
              <p className="home-text">
                La deforestación es la eliminación de bosques, generalmente para uso agrícola, urbano o industrial.
                Sus consecuencias incluyen la pérdida de hábitats, el aumento de gases de efecto invernadero y la reducción de biodiversidad.
              </p>
            </div>
          </div>
          {/* Erosión */}
          <div className="summary-container">
            <img src={erosionImage} alt="Erosión" className="summary-image" />
            <div>
              <h2 className="home-subtitle">Erosión</h2>
              <p className="home-text">
                La erosión es el desgaste del suelo causado por el viento, el agua o actividades humanas.
                Este proceso afecta la fertilidad del suelo, los ecosistemas y puede causar problemas como la desertificación.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="home-container">
        <Canvas camera={{ position: [50, 0, 10], zoom: 3 }} style={{ width: "130vw", height: "80vh", position: "absolute" }}>
          {/* Luces para sombras */}
          <ambientLight intensity={0.5} />
          <directionalLight 
            position={[10, 10, 10]} 
            intensity={5} 
            castShadow // Habilita las sombras
          />
          <spotLight 
            position={[0, 10, 0]} 
            angle={0.15} 
            penumbra={1} 
            castShadow 
          />
          {/* El modelo de la hormiga */}
          <Ant position={[10, 0, 0]} castShadow receiveShadow />
          {/* Habilitar controles orbit */}
          <OrbitControls autoRotate={false} />
        </Canvas>
      </div>
    </div>
  );
};

export default Home;

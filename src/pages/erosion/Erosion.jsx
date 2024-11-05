import './Erosion.css'; 
import { Canvas } from "react-three-fiber";
import { useNavigate } from 'react-router-dom';
import Ant from "../../components/model-3d/ant";
import Earth from "../../components/model-3d/EarthErosion"
import { OrbitControls } from "@react-three/drei";
import Navbarcom from '../../components/Navbarcom';


const Erosion = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1); 
};
  return (
    <><Navbarcom /><div>
      <div className="earth-container">
        <Canvas camera={{ position: [40, 10, 10], zoom: 8 }}
          style={{ width: "130vw", height: "80vh", position: "absolute" }}>

          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={7} />
          <OrbitControls autoRotate={true} />
          <Earth />
        </Canvas>
 
      </div>

      <div className="erosion-container">
      <p className="erosion-text">
        La erosión del suelo es un proceso natural que ocurre cuando la capa superior de la tierra es arrastrada o desgastada por factores como el agua, el viento o la actividad humana.
      </p>
      
    </div>
    </div></>

  );
};

export default Erosion;
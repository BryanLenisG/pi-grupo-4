import './Erosion.css'; 
import { Canvas } from "react-three-fiber";
import { useNavigate } from 'react-router-dom';
import Ant from "../../components/model-3d/ant";
import Earth from "../../components/model-3d/EarthErosion"
import { OrbitControls, useHelper } from "@react-three/drei";
import Navbarcom from '../../components/Navbarcom';
import { useRef } from 'react';
import { SpotLightHelper } from 'three';

const Erosion = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1); 
};
  return (
    <><Navbarcom /><div>
        <div className="earth-container">
          <Canvas shadows camera={{ position: [40, 10, 10], zoom: 8 }}
            style={{ width: "130vw", height: "80vh", position: "absolute" }} >

            <ambientLight intensity={1.5} castShadow/>
            <directionalLight 
            // ref={spotLightRef}
            position={[300,500, 400]} 
            intensity={7} 
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={1000}
            shadow-camera-left={-50}
            shadow-camera-right={50}
            shadow-camera-top={50}
            shadow-camera-bottom={-50}
            />
            {/* <spotLight 
              ref={spotLightRef}
              intensity={100}
              distance={5} 
              angle={Math.PI / 4}
              position={[40, 10, 10]}
              castShadow
              penumbra={0.10} /> */}
            <OrbitControls autoRotate={true} />
            <Earth/>
          </Canvas>

        </div>

        <div className="erosion-container">
          <p className="erosion-text">
            La erosión del suelo es un proceso natural que ocurre cuando la capa superior de la tierra es arrastrada o desgastada por factores como el agua, el viento o la actividad humana.
          </p>
      
    </div>
    </div></>
  )
};
  export default Erosion;
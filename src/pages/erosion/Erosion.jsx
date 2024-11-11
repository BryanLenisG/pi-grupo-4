import './Erosion.css'; 
import { Canvas } from "react-three-fiber";
import { useNavigate } from 'react-router-dom';
import Earth from "../../components/model-3d/EarthErosion"
import { OrbitControls } from "@react-three/drei";
import Navbarcom from '../../components/Navbarcom';
import { useCallback } from 'react';
import { SpotLightHelper } from 'three';
import Erosion_text from './Erosion_text';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Erosion = () => {
  const navigate = useNavigate();
  const handleNavigateToErosin3D = useCallback(() => {
    navigate('/Erosion_model_3D');
  }, [navigate]);
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <><Navbarcom />
    <div>
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
        <Canvas shadows camera={{ position: [40, 10, 10], zoom: 8 }} 
        style={{ width: "130vw", height: "80vh", position: "relative" }}>
          <Erosion_text />
          <OrbitControls />
        </Canvas>
          <p className="erosion-text">
            La erosión del suelo es un proceso natural que ocurre cuando la capa superior de la tierra es arrastrada o desgastada por factores como el agua, el viento o la actividad humana.
          </p>
        <Form className="button-continue">
            <Button variant="outline-success" onClick={handleNavigateToErosin3D}>Continuar</Button>
        </Form>
      
    </div>
    </div></>
  )
};
  export default Erosion;
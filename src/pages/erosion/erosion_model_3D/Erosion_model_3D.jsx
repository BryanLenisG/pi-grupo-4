import './Erosion_model_3D.css';
import Escena from "../../../components/model-3d/EscenaErosion"
import ArbolOne from "../../../components/model-3d/EscenaArbol1"
import Pelota from "../../../components/model-3d/Pelota"
import Rabbit from "../../../components/model-3d/Rabbit"
import { Canvas } from "react-three-fiber";
import Navbarcom from '../../../components/Navbarcom';
import Title3DB2 from '../../../components/Title3d_escena_erosion';
import { useCallback, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Staging from './staging/Staging';
import { Physics } from "@react-three/rapier";
import { PositionalAudio } from '@react-three/drei';

const Erosion_model_3D = () => {
  const navigate = useNavigate();
  const handleNavigateToQuizErosion = useCallback(() => {
    navigate('/SensibilizacionErosion');
  }, [navigate]);

  const audioRef = useRef();
  const handleAudio = useCallback(() => {
    audioRef.current.play();
    audioRef.current.setVolume(20);
  }, []);

  return (
    <><Navbarcom />
      <div >
        <Canvas onClick={handleAudio} shadows camera={{ position: [40, 10, 10], zoom: 8 }}
          style={{ width: "130vw", height: "80vh", position: "absolute" }} >
            <Physics 
                gravity={[0, 0, 0]}>            
              <ambientLight intensity={1.5} castShadow />
              <directionalLight />
              <Title3DB2 />
              <ArbolOne scale={30}
                position={[0, -1, 0]} />

                
                <Escena scale={30}
                position={[0, -1, 0]} 
                />


                <Pelota scale={10}
                position={[6, 1, 14  ]} />

            </Physics>

          <Rabbit scale={0.1} position={[12, 0.5, 12]}/>
          <Staging />
          <group position={[0,0,0]}>
          <PositionalAudio ref={audioRef} loop url="../../../../sounds/nature.mp3" distance={5}/>
          </group>
        </Canvas>

      </div>
    </>

  );
};

export default Erosion_model_3D;    
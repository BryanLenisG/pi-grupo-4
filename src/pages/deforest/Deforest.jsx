import { useNavigate } from 'react-router-dom';
import './Deforest.css'; 
import Navbarcom from '../../components/Navbarcom';
import Tree from '../../components/model-3d/Tree';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sky } from '@react-three/drei'; // Agregar Sky desde Drei
import { useRef } from 'react';

const RotatingTree = () => {
  const treeRef = useRef();
  const lightRef = useRef();

  // Rotación del modelo y de la luz
  useFrame(() => {
    if (treeRef.current) {
      treeRef.current.rotation.y += 0.001; // Ajusta la velocidad de rotación
    }
    if (lightRef.current) {
      lightRef.current.rotation.y += 0.001; // Asegura que la luz también gire con el modelo
    }
  });

  return (
    <>
      <Tree ref={treeRef} position={[0, 2.57, 0]} scale={2} castShadow />
      <directionalLight
        ref={lightRef}
        castShadow
        position={[10, 20, 10]}
        intensity={1}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={1}
        shadow-camera-far={50}
        shadow-camera-left={-15}
        shadow-camera-right={15}
        shadow-camera-top={15}
        shadow-camera-bottom={-15}
        shadow-bias={-0.002}
      />
    </>
  );
};

const Deforest = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <>
      <Navbarcom />
      <div className="container-deforest">
        <h1>LA DEFORESTACION 1</h1>
        <p>
          Esta práctica afecta a los bosques y al clima global, tiene unas causas e impactos que atacan directamente al medio ambiente. Conoce las causas y soluciones para combatirla.
        </p>
        
        <h1>Causas de la deforestación</h1>
        <p>
          Entre las principales causas de la deforestación se encuentra la agricultura comercial...
        </p>

        <h1>Impactos de la deforestación</h1>
        <p>
          La deforestación tiene múltiples consecuencias negativas...
        </p>

        <h1>Soluciones para combatir la deforestación</h1>
        <p>
          Para mitigar la deforestación y sus efectos, es crucial adoptar una estrategia multifacética...
        </p>

        {/* Canvas para el modelo 3D */}
        <Canvas
          shadows
          camera={{ position: [20, 10, 20], fov: 30 }} // Mejor ajuste de cámara
          style={{ width: '100%', height: '300px' }}
        >
          {/* Agregar un cielo al fondo */}
          <Sky 
            azimuth={0.25} // dirección del sol (roto en el cielo)
            inclination={0.5} // altura del sol en el cielo
            distance={450000} // control de la "distancia" del cielo
            sunPosition={[100, 100, 100]} // posición del sol
          />

          {/* Iluminación ambiental */}
          <ambientLight intensity={0.5} />

          {/* Luz direccional */}
          <RotatingTree />

          {/* Plano receptor de sombras */}
          <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
            <planeGeometry args={[50, 50]} />
            <shadowMaterial opacity={0.5} />
          </mesh>

          {/* Controles de cámara */}
          <OrbitControls />
        </Canvas>

        <button className="button-back" onClick={handleBack}>
          Volver
        </button>
      </div>
    </>
  );
};

export default Deforest;

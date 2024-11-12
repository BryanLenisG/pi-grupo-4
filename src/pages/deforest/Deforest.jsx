import { useNavigate } from 'react-router-dom';
import './Deforest.css'; 
import Navbarcom from '../../components/Navbarcom';
import Tree from '../../components/model-3d/Tree';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

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
          shadows // Habilitar sombras
          camera={{ position: [10, 10, 10], fov: 50 }}
          style={{ width: '100%', height: '600px' }}
        >
          {/* Iluminación ambiental suave */}
          <ambientLight intensity={0.5} />

          {/* Luz direccional para crear sombras */}
          <directionalLight
            castShadow
            position={[5, 10, 5]}
            intensity={1}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={0.5}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />

          {/* Luz puntual adicional */}
          <pointLight position={[-10, 10, -10]} intensity={0.5} />

          {/* Plano receptor de sombras */}
          <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
            <planeGeometry args={[50, 50]} />
            <shadowMaterial opacity={0.3} />
          </mesh>

          {/* Modelo del árbol */}
          <Tree position={[0, 0, 0]} scale={2} />

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

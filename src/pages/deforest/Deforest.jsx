import { useNavigate } from 'react-router-dom';
import './Deforest.css'; 
import Navbarcom from '../../components/Navbarcom';
import Tree from '../../components/model-3d/Tree';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sky, Text } from '@react-three/drei';
import { useState, useRef, useEffect } from 'react';  // Aquí se agrega useEffect
import { Physics, useBox, usePlane } from '@react-three/cannon';

const RotatingTree = () => {
  const treeRef = useRef();
  const lightRef = useRef();
  const [isShaking, setIsShaking] = useState(false);
  const [shakeTime, setShakeTime] = useState(0);

  // Rotación del modelo y de la luz
  useFrame((state, delta) => {
    if (treeRef.current) {
      treeRef.current.rotation.y += 0.001; // Ajusta la velocidad de rotación
    }
    if (lightRef.current) {
      lightRef.current.rotation.y += 0.001; // Asegura que la luz también gire con el modelo
    }

    // Animar vibración
    if (isShaking && treeRef.current) {
      setShakeTime((prev) => prev + delta);
      const shakeAmplitude = 0.1; // Ajusta la intensidad de la vibración
      treeRef.current.position.x += (Math.random() - 0.5) * shakeAmplitude;
      treeRef.current.position.y += (Math.random() - 0.5) * shakeAmplitude;

      // Finalizar vibración después de 0.5 segundos
      if (shakeTime > 0.5) {
        setIsShaking(false);
        setShakeTime(0);
        treeRef.current.position.set(0, 2.57, 0); // Restablecer posición original
      }
    }
  });

  // Manejar clic en el árbol
  const handleClick = () => {
    setIsShaking(true);
  };

  return (
    <>
      <Text
        position={[0, 4, 0]} // Posición del texto (sobre el árbol)
        fontSize={2}       // Tamaño del texto
        color="red"        // Color del texto
        anchorX="center"     // Anclar al centro horizontalmente
        anchorY="middle"     // Anclar al medio verticalmente
      >
        Haz click al árbol
      </Text>
      <Tree
        ref={treeRef}
        position={[0, 2.57, 0]}
        scale={2}
        castShadow
        onPointerDown={handleClick} // Evento de clic
      />
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

// : Cubo con físicas
const PhysicsCube = () => { 
  const [ref] = useBox(() => ({ 
    mass: 1, // Masa del cubo para la física 
    position: [0, 5, 0], // Posición inicial del cubo 
    args: [1, 1, 1], // Dimensiones del cubo 
  }));

  return (
    <mesh ref={ref} castShadow> 
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" /> 
    </mesh>
  );
};

// : Plano con físicas
const PhysicsPlane = () => { 
  const [ref] = usePlane(() => ({ 
    rotation: [-Math.PI / 2, 0, 0], // Plano horizontal 
    position: [0, 0, 0], // Posición del plano 
  }));

  return (
    <mesh ref={ref} receiveShadow> 
      <planeGeometry args={[50, 50]} /> 
      <shadowMaterial opacity={0.5} /> 
    </mesh>
  );
};

const Deforest = () => {
  const navigate = useNavigate();

  // Función para manejar el botón de regreso
  const handleBack = () => {
    navigate(-1); 
  };

  // Función para manejar el botón de "Realizar Quiz"
  const handleQuiz = () => {
    navigate('/quiz'); // Cambiar por furuta ruta
  };

  // Estado para manejar la visibilidad del contenido completo
  const [showMore, setShowMore] = useState(false);

  // Función para manejar el "Ver más"
  const toggleShowMore = () => setShowMore((prev) => !prev);

  // Reproducir el audio al cargar la página
  useEffect(() => {
    const audio = new Audio('/audio.mp3'); // Ruta al archivo de audio
    audio.play();
    audio.loop = true; // Si quieres que el audio se repita en un bucle
  }, []);

  return (
    <>
      <Navbarcom />
      <div className="container-deforest">
        <h1>LA DEFORESTACION 1</h1>
        <p>
          Esta práctica afecta a los bosques y al clima global, tiene unas causas e impactos que atacan directamente al medio ambiente. Conoce las causas y soluciones para combatirla.
        </p>
        
        {/* Botón "Ver más" para expandir el contenido */}
        <button onClick={toggleShowMore} className="ver-mas-btn">
          {showMore ? 'Ver menos' : 'Ver más'}
        </button>

        {/* Contenido expandible */}
        {showMore && (
          <div className="more-info">
            <h1>Causas de la deforestación</h1>
            <p>
              Entre las principales causas de la deforestación se encuentra la agricultura comercial...
            </p>
            <p>
              Algunas otras causas incluyen la ganadería, la expansión urbana, la tala ilegal, y la minería.
            </p>

            <h1>Impactos de la deforestación</h1>
            <p>
              La deforestación tiene múltiples consecuencias negativas...
            </p>
            <p>
              Estos incluyen la pérdida de biodiversidad, el cambio climático, y la alteración del ciclo del agua.
            </p>

            <h1>Soluciones para combatir la deforestación</h1>
            <p>
              Para mitigar la deforestación y sus efectos, es crucial adoptar una estrategia multifacética...
            </p>
            <p>
              Algunas soluciones son promover la reforestación, la agricultura sostenible, y el fortalecimiento de leyes contra la tala ilegal.
            </p>
          </div>
        )}

        {/* Canvas para el modelo 3D */}
        <Canvas
          shadows
          camera={{ position: [20, 10, 20], fov: 30 }}
          style={{ width: '100%', height: '400px' }}
        >
          <Sky 
            azimuth={0.25}
            inclination={0.5}
            distance={450000}
            sunPosition={[100, 100, 100]}
          />

          <ambientLight intensity={0.5} />

          <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
            <planeGeometry args={[50, 50]} />
            <shadowMaterial opacity={0.5} />
          </mesh>

          <Physics> 
            <PhysicsPlane /> 
            <RotatingTree /> 
            <PhysicsCube />
          </Physics>

          <OrbitControls />
        </Canvas>

        {/* Botones de interacción */}
        <div className="button-group">
          <button className="button-back" onClick={handleBack}>
            Volver
          </button>
          <button className="button-quiz" onClick={handleQuiz}>
            Realizar Quiz
          </button>
        </div>
      </div>
    </>
  );
};

export default Deforest;

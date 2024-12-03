import { useRef } from "react";

const Lights = () => {
  const directionalLightRef = useRef();
  
  return (
    <>
      <ambientLight color="#ffffff" intensity={0.5} /> 
      <directionalLight
        ref={directionalLightRef}
        color="#ffffff"
        position={[-250, 30, 0]}
        intensity={8}
        shadow-mapSize={[2048, 2048]}
        shadow-camera-near={3}
        shadow-camera-far={400}
        shadow-camera-left={-180}
        shadow-camera-right={180}
        shadow-camera-top={100}
        shadow-camera-bottom={-150}
        castShadow={true}
        
      />
    </>
  );
};

export default Lights;

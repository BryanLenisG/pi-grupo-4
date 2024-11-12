import { useGLTF } from '@react-three/drei';
import { useState, useEffect, useRef } from 'react';

const Frog = (props) => {
  const { nodes, materials } = useGLTF("../../models-3d/Frog.glb");


  const [position, setPosition] = useState([0, 1, 70]);  // Valor inicial [X, Y, Z]
  const frogRef = useRef();

  // Manejar las teclas presionadas para mover el modelo
  useEffect(() => {
    const handleKeyDown = (event) => {
      let newPosition = [...position];

      // Mover la rana en el eje X (izquierda/derecha)
      if (event.key === "ArrowLeft") {
        newPosition[0] -= 1;  // Mover hacia la izquierda
      } else if (event.key === "ArrowRight") {
        newPosition[0] += 1;  // Mover hacia la derecha
      }

      // Mover la rana en el eje Y (arriba/abajo)
      else if (event.key === "ArrowUp") {
        newPosition[1] += 1;  // Mover hacia arriba
      } else if (event.key === "ArrowDown") {
        newPosition[1] -= 1;  // Mover hacia abajo
      }

      // Mover la rana en el eje Z (adelante/atrás)
      else if (event.key === "w") {
        newPosition[2] -= 1;  // Mover hacia adelante (en el eje Z negativo)
      } else if (event.key === "s") {
        newPosition[2] += 1;  // Mover hacia atrás (en el eje Z positivo)
      }

      // Actualizar el estado con la nueva posición
      setPosition(newPosition);
    };

    // Añadir el evento de escucha cuando el componente se monta
    window.addEventListener("keydown", handleKeyDown);

    // Limpiar el evento de escucha cuando el componente se desmonta
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [position]);

  return (
    <group {...props} dispose={null} scale={[0.5, 0.5, 0.5]} position={position} ref={frogRef}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="73d8868d7414472898889cf5a032e3c1fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Hoja" position={[-40.176, -76.042, -196.252]} rotation={[0, -1.396, 0.054]}>
                  <mesh name="Hoja_Hoja_0" geometry={nodes.Hoja_Hoja_0.geometry} material={materials.Hoja} />
                </group>
                <group name="Ojo_1_1" position={[-36.408, 78.715, 108.876]} rotation={[-0.279, 0.327, -0.16]}>
                  <group name="Object_7">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_10"
                      geometry={nodes.Object_10.geometry}
                      material={materials.lambert4SG}
                      skeleton={nodes.Object_10.skeleton}
                    />
                    <group name="Object_9" position={[-36.408, 78.715, 108.876]} rotation={[-0.279, 0.327, -0.16]} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default Frog;

useGLTF.preload("../../models-3d/Frog.glb");
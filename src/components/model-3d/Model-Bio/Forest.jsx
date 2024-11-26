import { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const Forest = (props) => {
  const { nodes, materials } = useGLTF("../../models-3d/forest.glb");
  const [position, setPosition] = useState([25, -60, 30]);
  const forestRef = useRef();

  return (
    <group {...props} dispose={null} scale={[40, 40, 40]} position={position} >
      <RigidBody type="fixed" colliders="trimesh" friction={10}  >
        <group name="Scene"> {/*onClick={() => alert.stopPropagation()}  */}
          <mesh
            name="Object_3"
            geometry={nodes.Object_3.geometry}
            material={materials['Material.001']}
            reciveShadow
          />
        </group>
      </RigidBody >
    </group >
  );
};
export default Forest;

useGLTF.preload("/forest.glb");

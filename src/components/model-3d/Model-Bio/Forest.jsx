import { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const Forest = (props) => {
  const { nodes, materials } = useGLTF("../../models-3d/forest.glb");
  

  return (
    <group {...props} dispose={null} scale={[20, 20, 20]} position={[0,-2,0]} receiveShadow={true} >
      <RigidBody type="fixed" colliders="trimesh" friction={10}  >
        <group name="Scene"> {/*onClick={() => alert.stopPropagation()}  */}
          <mesh
            name="Object_3"
            geometry={nodes.Object_3.geometry}
            material={materials['Material.001']}
            receiveShadow={true} 
            castShadow={true}
            
          />
        </group>
      </RigidBody >
    </group >
  );
};
export default Forest;

useGLTF.preload("/forest.glb");

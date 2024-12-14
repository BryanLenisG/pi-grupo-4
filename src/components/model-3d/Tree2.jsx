import React, { forwardRef, useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Tree2 =(props) => {
  const { nodes, materials } = useGLTF("../../models-3d/escena-arbol-2.glb");
  const tree2Ref=useRef();
  return (
    <group {...props} ref={tree2Ref} dispose={null}>
      <group name="Scene">
        <mesh
          name="Hojas1"
          geometry={nodes.Hojas1.geometry}
          material={materials['leafes_Mat.001']}
          
        />
        <mesh
          name="Hojas1006"
          geometry={nodes.Hojas1006.geometry}
          material={materials['leafes_Mat.001']}
         
        />
        <mesh
          name="Hojas1002"
          geometry={nodes.Hojas1002.geometry}
          material={materials['trunk_Mat.001']}
         
         
        />
        <mesh
          name="Hojas1003"
          geometry={nodes.Hojas1003.geometry}
          material={materials['trunk_Mat.001']}
          
        />
        <mesh
          name="Tronco1"
          geometry={nodes.Tronco1.geometry}
          material={materials['trunk_Mat.001']}
         
        />
      </group>
    </group>
  );
};

export default Tree2;
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

// Usamos forwardRef para que podamos manipular el Tree desde fuera
const Tree = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("../../models-3d/tree.glb");

  return (
    <group {...props} ref={ref} dispose={null}>
      <group position={[0.655, -1.166, 0.159]} rotation={[1.397, -1.568, -Math.PI]}>
        <group position={[-1.15, -7.647, -1.218]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2.geometry}
            material={materials.raw2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_3.geometry}
            material={materials.raw2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.raw2}
          />
        </group>
      </group>
    </group>
  );
});

export default Tree;
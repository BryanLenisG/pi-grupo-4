import { useGLTF } from '@react-three/drei'
import React from 'react'


const Tree2 = (props) => {
    const { nodes, materials } = useGLTF("../../models-3d/escena-arbol-1.glb")

    return (
      <>
<group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Hojas2"
          geometry={nodes.Hojas2.geometry}
          material={materials['leafs_Platano.001']}
          
        />
        <mesh
          name="Hojas2001"
          geometry={nodes.Hojas2001.geometry}
          material={materials['leafs_Platano.001']}
          
        />
        <mesh
          name="Hojas2002"
          geometry={nodes.Hojas2002.geometry}
          material={materials['treetop_platano.001']}
          
        />
        <mesh
          name="Tronco2"
          geometry={nodes.Tronco2.geometry}
          material={materials['Platano_Trunk.001']}
        
        />
      </group>
    </group>
    </>
    );
}

export default Tree2;

useGLTF.preload("../../models-3d/escena-arbol-1.glb")
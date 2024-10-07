import { useGLTF, useAnimations } from '@react-three/drei'
import React, { useRef } from 'react'

const Ant = (props) => { 
  const group = useRef()
  const { nodes, materials, animations } = useGLTF("../../models-3d/ant.glb")
  const { actions } = useAnimations(animations, group)
  
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group name="Light" position={[4.003, 5.17, -0.949]} rotation={[2.492, -0.035, 3.046]} />
        <group name="Camera" position={[-3.104, 2.201, -6.328]} rotation={[1.811, -0.23, 2.7]} />
        <group name="Armature" position={[0, 0.305, 0]} scale={0.592}>
          <group name="Cube">
            <skinnedMesh
              name="Cube001"
              geometry={nodes.Cube001.geometry}
              material={materials['Material.002']}
              skeleton={nodes.Cube001.skeleton}
            />
            <skinnedMesh
              name="Cube001_1"
              geometry={nodes.Cube001_1.geometry}
              material={materials['Material.003']}
              skeleton={nodes.Cube001_1.skeleton}
            />
            <skinnedMesh
              name="Cube001_2"
              geometry={nodes.Cube001_2.geometry}
              material={materials['Material.004']}
              skeleton={nodes.Cube001_2.skeleton}
            />
            <skinnedMesh
              name="Cube001_3"
              geometry={nodes.Cube001_3.geometry}
              material={materials['Material.005']}
              skeleton={nodes.Cube001_3.skeleton}
            />
          </group>
          <primitive object={nodes.Bone} />
          <primitive object={nodes.Bone001} />
          <primitive object={nodes.Bone009} />
        </group>
        <group
          name="Light001"
          position={[-4.023, 5.904, -1.005]}
          rotation={[1.89, 0.881, -2.045]}
        />
        <group name="Light002" position={[-0.01, 3.628, -3.141]} rotation={[1.89, 0.881, -2.045]} />
        <group name="Light003" position={[-0.01, 3.628, 3.084]} rotation={[1.89, 0.881, -2.045]} />
        <group name="Light004" position={[-0.01, -1.302, 0.078]} rotation={[1.89, 0.881, -2.045]} />
      </group>
    </group>
  )
}

useGLTF.preload('"../models-3d/ant.glb"');
export default Ant;
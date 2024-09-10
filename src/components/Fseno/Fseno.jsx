
import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Fseno(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('/fseno.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.044}>
          <group name="41fcd105986c432ea5599a81d62c9300fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="cos_GRP" position={[0, 0, 49.322]}>
                  <group name="extrudedSurface3">
                    <mesh name="extrudedSurface3_cosBinn_0" geometry={nodes.extrudedSurface3_cosBinn_0.geometry} material={materials.cosBinn} />
                  </group>
                  <group name="extrudedSurface1">
                    <mesh name="extrudedSurface1_cosBinn_0" geometry={nodes.extrudedSurface1_cosBinn_0.geometry} material={materials.cosBinn} />
                  </group>
                </group>
                <group name="sen_GRP" position={[0, 0, 49.322]}>
                  <group name="extrudedSurface3_1">
                    <mesh name="extrudedSurface3_sinBinn_0" geometry={nodes.extrudedSurface3_sinBinn_0.geometry} material={materials.sinBinn} />
                  </group>
                  <group name="extrudedSurface1_1">
                    <mesh name="extrudedSurface1_sinBinn_0" geometry={nodes.extrudedSurface1_sinBinn_0.geometry} material={materials.sinBinn} />
                  </group>
                </group>
                <group name="coordinates">
                  <group name="sphere" rotation={[0, 0, 1.667]}>
                    <mesh name="sphere_lambert2_0" geometry={nodes.sphere_lambert2_0.geometry} material={materials.lambert2} />
                  </group>
                  <group name="senoSphere" position={[0, -0.996, 0]}>
                    <mesh name="senoSphere_sinBinn_0" geometry={nodes.senoSphere_sinBinn_0.geometry} material={materials.sinBinn} />
                  </group>
                  <group name="cosSphere" position={[-10.282, -10.33, 0]}>
                    <mesh name="cosSphere_cosBinn_0" geometry={nodes.cosSphere_cosBinn_0.geometry} material={materials.cosBinn} />
                  </group>
                  <group name="tanSphere" position={[2.48, 11.766, 0.098]}>
                    <mesh name="tanSphere_tanBinn_0" geometry={nodes.tanSphere_tanBinn_0.geometry} material={materials.tanBinn} />
                  </group>
                  <group name="circumference">
                    <mesh name="circumference_circle_0" geometry={nodes.circumference_circle_0.geometry} material={materials.circle} />
                  </group>
                  <group name="axisY">
                    <mesh name="axisY_sinBinn_0" geometry={nodes.axisY_sinBinn_0.geometry} material={materials.sinBinn} />
                  </group>
                  <group name="axisX">
                    <mesh name="axisX_cosBinn_0" geometry={nodes.axisX_cosBinn_0.geometry} material={materials.cosBinn} />
                  </group>
                  <group name="tangCylinder">
                    <mesh name="tangCylinder_tanBinn_0" geometry={nodes.tangCylinder_tanBinn_0.geometry} material={materials.tanBinn} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/fseno.gltf')

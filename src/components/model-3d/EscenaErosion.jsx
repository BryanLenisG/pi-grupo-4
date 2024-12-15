import { useGLTF, OrbitControls } from '@react-three/drei'
import React from 'react'

const EscenaErosion = (props) => {
    const { nodes, materials } = useGLTF("../../models-3d/escena-erosion.glb")

    return (
      <>
    <group {...props} dispose={null}>
      <group name="Scene">
        <group name="Terreno">
          <group name="Terreno001">
            <group name="Terreno002">
              <group name="TerrenoGroup">
                <group name="TerrenopPlane1">
                  <mesh
                    name="Terreno003"
                    geometry={nodes.Terreno003.geometry}
                    material={materials.blinn1Material}
                  />
                  <mesh
                    name="Terreno004"
                    geometry={nodes.Terreno004.geometry}
                    material={materials.blinn1Material}
                  />
                  <mesh
                    name="Terreno005"
                    geometry={nodes.Terreno005.geometry}
                    material={materials.blinn1Material}
                  />
                  <mesh
                    name="Terreno006"
                    geometry={nodes.Terreno006.geometry}
                    material={materials.blinn1Material}
                  />
                  <mesh
                    name="Terreno007"
                    geometry={nodes.Terreno007.geometry}
                    material={materials.blinn1Material}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
        <group name="Arbol2">
          <group name="Arbol2001">
            <group name="Arbol2002" />
          </group>
        </group>
      </group>
    </group>
    <OrbitControls
      enablePan={false} // Desactiva el movimiento lateral
      enableRotate={true} // Activa la rotación
      minPolarAngle={Math.PI / 2.2} // Restringe la rotación hacia arriba/abajo
      maxPolarAngle={Math.PI / 2.2} // Restringe la rotación hacia arriba/abajo
      target={[0, 0, 0]} // Centro de rotación
  />
    </>
    );
}

export default EscenaErosion;

useGLTF.preload("../../models-3d/escena-erosion.glb")
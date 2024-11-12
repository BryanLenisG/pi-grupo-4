import { useGLTF } from '@react-three/drei'
import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom';

const EscenaArbol1 = (props) => {
    const { nodes, materials } = useGLTF("../../models-3d/escena-arbol-1.glb")

    const navigate = useNavigate();
    const handleNavigateSensibiliza = useCallback(() => {
        navigate('/SensibilizacionErosion');
      }, [navigate]);

    return (
      <>
<group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Hojas2"
          geometry={nodes.Hojas2.geometry}
          material={materials['leafs_Platano.001']}
          onClick={handleNavigateSensibiliza}
        />
        <mesh
          name="Hojas2001"
          geometry={nodes.Hojas2001.geometry}
          material={materials['leafs_Platano.001']}
          onClick={handleNavigateSensibiliza}
        />
        <mesh
          name="Hojas2002"
          geometry={nodes.Hojas2002.geometry}
          material={materials['treetop_platano.001']}
          onClick={handleNavigateSensibiliza}
        />
        <mesh
          name="Tronco2"
          geometry={nodes.Tronco2.geometry}
          material={materials['Platano_Trunk.001']}
          onClick={handleNavigateSensibiliza}
        />
      </group>
    </group>
    </>
    );
}

export default EscenaArbol1;

useGLTF.preload("../../models-3d/escena-arbol-1.glb")
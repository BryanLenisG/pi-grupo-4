import { useGLTF } from '@react-three/drei'
import React from 'react'


const Basura = (props) => {
    const { nodes, materials } = useGLTF("../../models-3d/basura.glb")

    return (
        <>
            <group {...props} dispose={null}>
                <mesh
                    geometry={nodes.uploads_files_1000330_chips_bags_01.geometry}
                    material={materials['Material.001']}
                    scale={0.043}
                />
            </group>
        </>
    );
}

export default Basura;

useGLTF.preload("../../models-3d/basura.glb")
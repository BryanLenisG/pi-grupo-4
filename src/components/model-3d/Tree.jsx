    import React, { useRef } from 'react'
    import { useGLTF } from '@react-three/drei'

    export default function Tree(props) {
    const { nodes, materials } = useGLTF("../../models-3d/tree.glb")
    return (
        <group {...props} dispose={null}>
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
    )
    }

    useGLTF.preload("../../models-3d/tree.glb")
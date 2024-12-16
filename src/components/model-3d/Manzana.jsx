import { OrbitControls, useGLTF } from '@react-three/drei'
import React from 'react'


const Manzana = (props) => {
    const { nodes, materials } = useGLTF("../../models-3d/manzana.glb")

    return (
        <>
            <group {...props} dispose={null}>
                <group name="Scene">
                    <group
                        name="5"
                        position={[-0.006, 0.84, 0.026]}
                        rotation={[Math.PI / 2, 0, 0.063]}
                        scale={0.008}>
                        <mesh name="5_1" geometry={nodes['5_1'].geometry} material={materials['Material.001']} />
                        <mesh name="5_2" geometry={nodes['5_2'].geometry} material={materials['Material.007']} />
                        <mesh name="5_3" geometry={nodes['5_3'].geometry} material={materials['3_Mat']} />
                    </group>
                    <group
                        name="Plane004"
                        position={[0.24, 2.417, 0.244]}
                        rotation={[1.423, -0.162, -1.471]}
                        scale={0.125}>
                        <mesh
                            name="Plane004_1"
                            geometry={nodes.Plane004_1.geometry}
                            material={materials['Material.004']}
                        />
                        <mesh
                            name="Plane004_2"
                            geometry={nodes.Plane004_2.geometry}
                            material={materials['Material.002']}
                        />
                        <mesh
                            name="Plane004_3"
                            geometry={nodes.Plane004_3.geometry}
                            material={materials['Material.005']}
                        />
                    </group>
                    <mesh
                        name="Plane005"
                        geometry={nodes.Plane005.geometry}
                        material={materials['Material.008']}
                        position={[0.099, 2.583, -0.339]}
                        rotation={[1.678, -0.189, -1.739]}
                        scale={0.084}
                    />
                    <mesh
                    />

                </group>
            </group>
        </>
    );
}

export default Manzana;

useGLTF.preload("../../models-3d/manzana.glb")
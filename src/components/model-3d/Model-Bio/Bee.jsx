import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { useState, useRef, useCallback } from 'react';


const Bee = (props) => {
    const { nodes, materials } = useGLTF("../../models-3d/bee.glb");
    const beeRef = useRef();

    useCallback(() => {
        beeRef.current.applyImpulse({ x: 8, y: -1, z: 5 }, true);
    }, 
);
    return (

        <group {...props} dispose={null}   >
            <RigidBody ref={beeRef} colliders='ball' friction={5}  rotation={[0, -Math.PI / 2, 0]}>
                <group name="Scene">
                    <group name="Bee" rotation={[Math.PI / 2, 0, 0]} scale={0.219} >
                        <mesh name="Mesh" geometry={nodes.Mesh.geometry} material={materials.Black} castShadow />
                        <mesh name="Mesh_1" geometry={nodes.Mesh_1.geometry} material={materials.White} castShadow/>
                        <mesh name="Mesh_2" geometry={nodes.Mesh_2.geometry} material={materials.Yellow} castShadow />
                    </group>
                </group>
            </RigidBody>
        </group>
    );
};

export default Bee;

useGLTF.preload("../../models-3d/bee.glb");
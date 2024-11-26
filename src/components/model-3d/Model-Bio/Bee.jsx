import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { useState, useRef, useCallback } from 'react';


const Bee = (props) => {
    const { nodes, materials } = useGLTF("../../models-3d/bee.glb");
    const [position] = useState([45, 20, 120]);  // Valor inicial [X, Y, Z]
    const beeRef = useRef(null);

    const handleBee = useCallback(() => {
        beeRef.current.addTorque({ x: 5, y: 20, z: -5 }, true);
    }, []);
    return (

        <group {...props} dispose={null} scale={[10, 10, 10]} position={position} castShadow >
            <RigidBody ref={beeRef} colliders='ball' >
                <group name="Scene">
                    <group name="Bee" rotation={[Math.PI / 2, 0, 0]} scale={0.219} onClick={handleBee}>
                        <mesh name="Mesh" geometry={nodes.Mesh.geometry} material={materials.Black} />
                        <mesh name="Mesh_1" geometry={nodes.Mesh_1.geometry} material={materials.White} />
                        <mesh name="Mesh_2" geometry={nodes.Mesh_2.geometry} material={materials.Yellow} />
                    </group>
                </group>
            </RigidBody>
        </group>

        // onClick={() => alert("La rana esta en peligro de extincion..")}    
    );
};

export default Bee;

useGLTF.preload("../../models-3d/bee.glb");
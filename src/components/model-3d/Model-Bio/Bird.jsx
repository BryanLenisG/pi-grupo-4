import { useGLTF, useAnimations } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { useState, useRef,  useEffect } from 'react';


const Bird = (props) => {
    const { nodes, materials,animations } = useGLTF("../../models-3d/bird.glb");
    const [position] = useState([-45, 50, 140]);  // Valor inicial [X, Y, Z]
    const birdRef = useRef();
    const { actions } = useAnimations(animations, birdRef)
    console.log(actions);

    useEffect(()=>{
        actions["ArmatureAction.001"].play();
        return()=> actions["ArmatureAction.001"].stop();
    },[actions]);
    return (
        <RigidBody type="fixed" rotation={[0, -Math.PI / 2, 0]}>
            <group {...props} dispose={null} scale={[10, 10, 10]} position={position} ref={birdRef}   >

                <group name="Scene">
                    <group name="Empty" rotation={[0, 1.571, 0]} />
                    <group name="Armature" position={[0, -1.682, -0.777]} rotation={[-0.001, -0.001, 0.001]}>
                        <group name="hummingbird">
                            <skinnedMesh
                                name="Cube001"
                                geometry={nodes.Cube001.geometry}
                                material={materials.hummingbird}
                                skeleton={nodes.Cube001.skeleton}
                                castShadow
                            />
                            <skinnedMesh
                                name="Cube001_1"
                                geometry={nodes.Cube001_1.geometry}
                                material={materials['Material.002']}
                                skeleton={nodes.Cube001_1.skeleton}
                            />
                        </group>
                        <primitive object={nodes.Bone} />
                        <primitive object={nodes.headrottaion} />
                    </group>
                </group>

            </group>
        </RigidBody>


        // onClick={() => alert("La rana esta en peligro de extincion..")}    
    );
};

export default Bird;

useGLTF.preload("../../models-3d/bird.glb");
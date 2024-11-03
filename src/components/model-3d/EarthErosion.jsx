import { useGLTF, useAnimations, useTexture, OrbitControls } from '@react-three/drei'
import React, { useMemo, useRef } from 'react'

const EarthErosion = (props) => {
    const { nodes, materials } = useGLTF("../../models-3d/earth-erosion.glb")

    const PATH = useMemo(() => "materials/earth/Dirt_Texture_", []);

    const earthMaterial = useTexture({
        aoMap: PATH + "ao.png",
        map: PATH + "diff.png"
    });

    console.log(earthMaterial);

    return (
        <>
            <group {...props} dispose={null}>
                <group scale={0.01}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.earth_Earth_0.geometry}
                        position={[-100, 5, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={50}
                    >
                        <meshStandardMaterial
                            map={earthMaterial.map}
                            aoMap={earthMaterial.aoMap}
                            attach="material"
                        />
                    </mesh>
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

export default EarthErosion;

useGLTF.preload("../../models-3d/earth-erosion.glb")
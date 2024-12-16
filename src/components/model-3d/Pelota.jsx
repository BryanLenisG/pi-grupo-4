import { useGLTF, useTexture } from '@react-three/drei'
import React, { useCallback, useMemo, useRef } from 'react'
import { BallCollider, CuboidCollider, RigidBody } from "@react-three/rapier";

const Pelota = (props) => {
  const rbTreeRef = useRef(null);

  const { nodes, materials } = useGLTF("../../models-3d/earth-erosion.glb")

  const PATH = useMemo(() => "materials/earth/Dirt_Texture_", []);

  const earthMaterial = useTexture({
    aoMap: PATH + "ao.png",
    map: PATH + "diff.png"
  });

  const handleTree = useCallback(() => {
    rbTreeRef.current.applyImpulse({ x: -8, y: -1, z: 5 }, true)
  }, [])

  return (
    <>
      <RigidBody ref={rbTreeRef} type="dynamic" colliders={false} position={props.position}>
        <mesh
          onClick={handleTree}>
          <sphereGeometry args={[0.2, props.scale, props.scale]} />
          <meshStandardMaterial

            map={earthMaterial.map}
            aoMap={earthMaterial.aoMap}
            attach="material"
          />
        </mesh>
        <BallCollider args={[1]} position={props.position} />
      </RigidBody>
    </>
  );
}

export default Pelota;

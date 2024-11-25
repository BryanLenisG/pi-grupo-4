import { useGLTF } from '@react-three/drei'
import React, { useCallback, useRef } from 'react'
import { BallCollider, CuboidCollider, RigidBody } from "@react-three/rapier";
import { MeshStandardMaterial } from 'three';

const Pelota = (props) => {
    const rbTreeRef = useRef(null);

  const handleTree = useCallback (() => {
    rbTreeRef.current.applyImpulse({x:-8, y:-1, z:5}, true)
  }, [] ) 

    return (
      <>
      <RigidBody ref={rbTreeRef} type="dynamic" colliders={false} position={props.position}>
        <mesh
        onClick={handleTree}>
        <sphereGeometry args={[0.2, props.scale, props.scale]} />
        <meshStandardMaterial color="blue" />
        </mesh>
        <BallCollider args={[1]} position={props.position} />
      </RigidBody>
    </>
    );
}

export default Pelota;

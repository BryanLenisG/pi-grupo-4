import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const Rabbit = (props) => {
  const group = useRef()
    const { nodes, materials, animations } = useGLTF("../../models-3d/rabbit3.glb")
    const { actions } = useAnimations(animations, group)
    console.log(actions)

  const [currentAction, setcurrentAction] = useState("Eating");

  const handleRabbit = useCallback(()=> {
    setcurrentAction("Run");
  },[]);

    useEffect (()=> {
      actions[currentAction]?.fadeIn(0.5).play();
      return () => actions[currentAction]?.fadeOut(0.5).stop();
    }, [actions, currentAction]);

    return (
      <group ref={group} {...props} dispose={null} onClick={handleRabbit}>
      <group name="Scene">
        <group name="RIG-Armature">
          <primitive object={nodes.root} />
          <primitive object={nodes['MCH-torsoparent']} />
          <primitive object={nodes['MCH-foot_ikparentL']} />
          <primitive object={nodes['MCH-thigh_ik_targetparentL']} />
          <primitive object={nodes['MCH-foot_ikparentR']} />
          <primitive object={nodes['MCH-thigh_ik_targetparentR']} />
          <primitive object={nodes['MCH-front_foot_ikparentL']} />
          <primitive object={nodes['MCH-front_thigh_ik_targetparentL']} />
          <primitive object={nodes['MCH-front_foot_ikparentR']} />
          <primitive object={nodes['MCH-front_thigh_ik_targetparentR']} />
        </group>
        <group name="ReallisticRabbit">
          <skinnedMesh
            name="model_0010"
            geometry={nodes.model_0010.geometry}
            material={materials.RabbitBrown}
            skeleton={nodes.model_0010.skeleton}
          />
          <skinnedMesh
            name="model_0010_1"
            geometry={nodes.model_0010_1.geometry}
            material={materials.RabbitBrownFur}
            skeleton={nodes.model_0010_1.skeleton}
          />
          <skinnedMesh
            name="model_0010_2"
            geometry={nodes.model_0010_2.geometry}
            material={materials.Eye_Blue}
            skeleton={nodes.model_0010_2.skeleton}
          />
          <skinnedMesh
            name="model_0010_3"
            geometry={nodes.model_0010_3.geometry}
            material={materials.EyeGlass}
            skeleton={nodes.model_0010_3.skeleton}
          />
        </group>
      </group>
    </group>
);
}

export default Rabbit;

useGLTF.preload("../../models-3d/rabbit3.glb")
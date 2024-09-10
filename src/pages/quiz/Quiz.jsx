import { useCallback } from "react";
import useQuizStore from "../../stores/use-quiz-store";
import "./Quiz.css";
import { Canvas } from "react-three-fiber";
import { Fseno } from "../../components/Fseno/Fseno";
import React, { Suspense } from "react";
import { TrackballControls, Sky } from "@react-three/drei"; 
import { SoftShadows } from "@react-three/drei";
const Quiz = () => {
  const {quiz, incrementQuizProgress } = useQuizStore();

  const onHandleButtonNext = useCallback(() => {
    incrementQuizProgress();
  }, [incrementQuizProgress]);

  return (
    <div className="quiz-container">

      

<div style={{width: "500%" , height: "10vh" }} />


      <Canvas camera={{ zoom: 60, position: [50, 20, 15] }}>
        <ambientLight intensity={0.5}/>
        <pointLight position={[35, 35, 0]} intensity={0.4} />
        <pointLight position={[-35, 35, 0]} intensity={0.4} />
        <Sky distance = {450000} 
         sunPosition={[0, 1, 0]} 
        inclination={0}
        azimuth={0.25} 
        />
       <Suspense fallback={null}>
        <Fseno/>
        </Suspense>
        <SoftShadows />
        <TrackballControls/>
      </Canvas>



    </div>



  );
};

export default Quiz;
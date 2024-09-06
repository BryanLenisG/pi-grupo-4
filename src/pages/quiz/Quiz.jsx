import { useCallback } from "react";
import useQuizStore from "../../stores/use-quiz-store";
import "./Quiz.css";
import { Canvas } from "react-three-fiber";
import { Fseno } from "../../components/Fseno/Fseno";
import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei"; 

const Quiz = () => {
  const {quiz, incrementQuizProgress } = useQuizStore();

  const onHandleButtonNext = useCallback(() => {
    incrementQuizProgress();
  }, [incrementQuizProgress]);

  return (
    <div className="quiz-container">

      

<div style={{width: "100%" , height: "10vh" }} />
      <Canvas camera={{ zoom: 10, position: [15, 20, 15] }}>
        <ambientLight intensity={0.5}/>
        <pointLight position={[35, 35, 0]} intensity={0.4} />
        <pointLight position={[-35, 35, 0]} intensity={0.4} />
        <Suspense fallback={null}>
        <Fseno/>
        </Suspense>
        <OrbitControls/>
      </Canvas>



    </div>



  );
};

export default Quiz;
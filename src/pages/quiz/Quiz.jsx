import { Canvas } from "react-three-fiber";
import { useCallback } from "react";
import useQuizStore from "../../stores/use-quiz-store";
import "./Quiz.css";
import { OrbitControls } from "@react-three/drei";
import Ant from "../../components/model-3d/ant";

const Quiz = () => {
  const { quiz, incrementQuizProgress } = useQuizStore();

  const onHandleButtonNext = useCallback(() => {
    incrementQuizProgress();}, [incrementQuizProgress]);

  return (
    <div className="quiz-container">
      <Canvas camera={{ position: [20, 0, 10], zoom:5 }}
        style={{ width: "130vw", height: "100vh", position: "absolute" }} >

      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={7} />
      <OrbitControls  autoRotate={false}/>
      <Ant />
    </Canvas>


    </div >

  );
};

export default Quiz
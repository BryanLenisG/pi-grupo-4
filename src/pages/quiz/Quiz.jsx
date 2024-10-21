import { Canvas } from "react-three-fiber";
import { useCallback } from "react";
import useQuizStore from "../../stores/use-quiz-store";
import useAuthStore from "../../stores/use-auth-store";
import "./Quiz.css";
import { OrbitControls } from "@react-three/drei";
import Ant from "../../components/model-3d/ant";
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
  const { quiz, incrementQuizProgress } = useQuizStore();
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const onHandleButtonNext = useCallback(() => {
    incrementQuizProgress();
  }, [incrementQuizProgress]);

  const handleLogout = useCallback(() => {
    logout();
    navigate('/');
  }, [logout]);

  return (
    <div>
    <div className="quiz-container">
      <Canvas camera={{ position: [20, 0, 10], zoom: 5 }}
        style={{ width: "130vw", height: "100vh", position: "absolute" }} >

        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={7} />
        <OrbitControls autoRotate={false} />
        <Ant />
      </Canvas>


    </div >

<br />
<button className="button-logout" onClick={handleLogout}>
  Cerrar sesión
</button>
</div>

  );
};

export default Quiz
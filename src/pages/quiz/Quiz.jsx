import React, { useState } from "react";
import './Quiz.css';
import { useNavigate } from 'react-router-dom';
import { useCallback } from "react";
import useAuthStore from "../../stores/use-auth-store";
import save_our_planet from '../../assets/save_our_planet.jpg';
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "react-three-fiber";
import Navbarcom from "../../components/Navbarcom";
import EscenaErosion from '../../components/model-3d/EscenaErosion';
import Staging from '../biodiversity/Staging/Staging';
import Tree from '../../components/model-3d/Tree';
import { Physics } from '@react-three/rapier';
import Bird from '../../components/model-3d/Model-Bio/Bird';
import Tree2 from "../../components/model-3d/Tree2";

const Quiz = () => {
    const { logout } = useAuthStore();
    const navigate = useNavigate();

    const [treeState, setTreeState] = useState("dry"); // "dry" o "restored"
    const [showQuestion, setShowQuestion] = useState(false);
    const [feedback, setFeedback] = useState("");

    const handleLogout = useCallback(() => {
        logout();
        navigate('/');
    }, [logout, navigate]);

    const handleTreeClick = () => {
        setShowQuestion(true); // Muestra la pregunta
    };

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setTreeState("restored");
            setFeedback("¡Correcto! El árbol ha sido restaurado.");
        } else {
            setFeedback("Respuesta incorrecta. Inténtalo de nuevo.");
        }
        setShowQuestion(false); // Oculta la pregunta
    };

    const TreeComponent = () => {
        if (treeState === "restored") {
            return (
                <>
                    <Tree2 position={[5, -2, -15]} scale={[3,3,3]} />
                    <Bird position={[5, 2, -15]} scale={[0.2, 0.2, 0.2]} />
                </>
            );
        }
        return <Tree position={[5, -2, -15]} onClick={handleTreeClick} />;
    };

    return (
        <>
            <Navbarcom />
            <div className="quiz-container">
                <h1 className="quiz-title">Quiz</h1>
                <p className="quiz-text">
                    Explora nuestro mundo virtual en 3D y descubre los desafíos medioambientales más críticos que enfrentamos hoy en día.
                </p>
                <img src={save_our_planet} alt="save_our_planet" className="save_our_planet" />
                <div className="eart-container">
                    <Canvas shadows camera={{ position: [0, 20, -10], fov: 55 }}
                        style={{ width: "98vw", height: "80vh", position: "absolute" }} >
                        <ambientLight intensity={1.5} castShadow />
                        <directionalLight />
                        <Staging />
                        <OrbitControls />
                        <Physics>
                            <TreeComponent />
                            <EscenaErosion position={[0, -8, 0]} scale={[80, 80, 80]} />
                        </Physics>
                    </Canvas>
                </div>
                {showQuestion && (
                    <div className="question-modal">
                        <p>¿Qué puedes hacer para restaurar el árbol?</p>
                        <button onClick={() => handleAnswer(true)}>Plantar flores</button>
                        <button onClick={() => handleAnswer(false)}>Nada</button>
                    </div>
                )}
                {feedback && <div className="feedback">{feedback}</div>}
            </div>
        </>
    );
};

export default Quiz;

import React, { useEffect, useRef, useState } from "react";
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
import ArbolQuiz from "../../components/model-3d/Tree2";
import { Html } from "@react-three/drei";


const Quiz = () => {
    const { logout } = useAuthStore();
    const navigate = useNavigate();

    const [treeState, setTreeState] = useState("dry"); // "dry" o "restored"
    const [showQuestion, setShowQuestion] = useState(false);
    const [showQuestion2, setShowQuestion2] = useState(true);
    const [feedback, setFeedback] = useState("");

    const handleLogout = useCallback(() => {
        logout();
        navigate('/');
    }, [logout, navigate]);

    const handleTreeClick = () => {
        setFeedback("");
        setShowQuestion(true); // Muestra la pregunta
    };

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setTreeState("restored");
        } else {
            setTreeState("dry");
            setFeedback("Respuesta incorrecta. Inténtalo de nuevo.");
        }
        setShowQuestion(false); // Oculta la pregunta
        
    };

    const handleAnswer2 = (isCorrect) => {
        if (isCorrect) {
            setTreeState("restored2");
        } else {
            setTreeState("dry2");
            setFeedback("Respuesta incorrecta. Inténtalo de nuevo.");
        }
        setShowQuestion(false); // Oculta la pregunta
        
    };


    const TreeComponent = () => {
        if (treeState === "restored") {
            const adjustedScale = [220, 220, 220];
            const adjustedPosition = [-63.5, -15 + (adjustedScale[1] / 2) * 0.01, -108];

            return (
                <>
                    <ArbolQuiz scale={adjustedScale} position={adjustedPosition} />
                    <Bird position={[5, 2, -15]} scale={[0.2, 0.2, 0.2]} />

                    {showQuestion2 && (
                        <Html position={[5, 3, -12]} center>
                            <div className="question-modal2">
                                <p>¡Correcto! El árbol ha sido restaurado. 
                                Ahora ¿Cómo puedes evitar la pérdida de biodiversidad?</p>
                                <button onClick={() => handleAnswer2(true)}>No arrojando basura en el suelo</button>
                                <button onClick={() => handleAnswer2(false)}>Nada</button>
                            </div>
                        </Html>
                    )}
                    {feedback && (
                        <Html position={[5, 3, -12]} center>
                            <div className="feedback">{feedback}</div>
                        </Html>
                    )}
                </>
            );
        }
        if (treeState === "dry") {
            return (
                <>
                    <Tree position={[5, -2.7, -15]} onClick={handleTreeClick} />
                    {feedback && (
                        <Html position={[5, 3, -12]} center>
                            <div className="feedback">{feedback}</div>
                        </Html>
                    )}
                </>
            );
        }
        return <Tree position={[5, -2.7, -15]} onClick={handleTreeClick} />;
    };

    return (
        <>
            <Navbarcom />
            <div className="quiz-container">
                <h1 className="quiz-title">Quiz</h1>
                {/* <p className="quiz-text">
                    Explora nuestro mundo virtual en 3D y descubre los desafíos medioambientales más críticos que enfrentamos hoy en día.
                </p> */}
                {/* <img src={save_our_planet} alt="save_our_planet" className="save_our_planet" /> */}
                <div className="eart-container">
                    <Canvas shadows camera={{ position: [0, 20, -10], fov: 55 }}
                        style={{ width: "98vw", height: "80vh", position: "absolute" }} >
                        <ambientLight intensity={1.5} castShadow />
                        <directionalLight />
                        <Staging />
                        <OrbitControls />
                        <Physics>
                            <TreeComponent />
                            <EscenaErosion position={[0, -8, 0]} scale={[80, 80, 80]}
                            />
                        </Physics>
                    </Canvas>
                </div>
                {showQuestion && (
                    <div className="question-modal">
                        <p>¿Qué puedes hacer para restaurar el árbol?</p>
                        <button onClick={() => handleAnswer(true)}>Reforestar y proteger el área</button>
                        <button onClick={() => handleAnswer(false)}>Nada</button>
                    </div>
                )}
            </div>
        </>
    );
};

export default Quiz;

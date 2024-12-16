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
import Basura from "../../components/model-3d/Basura"
import Manzana from "../../components/model-3d/Manzana";
import Rabbit from "../../components/model-3d/Rabbit";
import Quiz_text from "./Quiz_text";


const Quiz = () => {
    const { logout } = useAuthStore();
    const navigate = useNavigate();

    const [treeState, setTreeState] = useState("dry"); // "dry" o "restored"
    const [showQuestion, setShowQuestion] = useState(false);
    const [showQuestion2, setShowQuestion2] = useState(true);
    const [feedback, setFeedback] = useState("");

     // Estado de progreso del quiz
     const [progress, setProgress] = useState(0); 
     const totalQuestions = 3;

    const handleLogout = useCallback(() => {
        logout();
        navigate('/');
    }, [logout, navigate]);

    const handleTreeClick = () => {
        setFeedback("");
        setShowQuestion(true); // Muestra la pregunta
    };

    const handleTreePlantarClick = () => {
        
        setTreeState("restaurado");
    };

    const handleRecogerBasuraClick = () => {
        
        setTreeState("restaurado_biodiversidad");
        setFeedback("¡La naturaleza ha sido restaurada, sigue cuidandola!");
        setProgress(100); // Llenar la barra al 100%
    };



    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setTreeState("plantar");
            setFeedback("Correcto! Intenta plantar un nuevo árbol");
            setProgress((prev) => prev + (100 / totalQuestions));  //Funciones que incrementan el progreso         
        } else {
            setTreeState("dry");
            setFeedback("Respuesta incorrecta. Inténtalo de nuevo.");
        }
        setShowQuestion(false); // Oculta la pregunta
        
    };

    const handleAnswer2 = (isCorrect) => {
        if (isCorrect) {
            setTreeState("recoger_basura");
            setFeedback("Correcto! Recoge la basura del bosque");
            setProgress((prev) => prev + (100 / totalQuestions));
        } else {
            setTreeState("dry2");
            setFeedback("Respuesta incorrecta. Inténtalo de nuevo.");
        }
        setShowQuestion(false); // Oculta la pregunta
        
    };



    const TreeComponent = () => {
        if (treeState === "restaurado") {
            const adjustedScale = [220, 220, 220];
            const adjustedPosition = [-63.5, -15 + (adjustedScale[1] / 2) * 0.01, -108];

            return (    
                <>
                    <ArbolQuiz scale={adjustedScale} position={adjustedPosition} />

                    {showQuestion2 && (
                        <Html position={[5, 3, -12]} center>
                            <div className="question-modal2">
                                <p>¡Correcto! La naturaleza empieza a restaurarse. 
                                Ahora ¿Cómo puedes evitar la pérdida de biodiversidad?</p>
                                <button onClick={() => handleAnswer2(true)}>No arrojando basura en el suelo</button>
                                <button onClick={() => handleAnswer2(false)}>Haciendo fogatas en el bosque</button>
                                <button onClick={() => handleAnswer2(false)}>Alimentar a los animales salvajes</button>

                            </div>
                        </Html>
                    )}
                </>
            );
        }

        if (treeState === "restaurado_biodiversidad") {
            const adjustedScale = [220, 220, 220];
            const adjustedPosition = [-63.5, -15 + (adjustedScale[1] / 2) * 0.01, -108];

            return (
                <>
                    <ArbolQuiz scale={adjustedScale} position={adjustedPosition} />
                    <Bird position={[5, 2, -15]} scale={[0.2, 0.2, 0.2]} />
                    <Rabbit scale={0.4} position={[-1, -3.79, -6]}/>
                    <Quiz_text />
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
                        <Html position={[5, 0, -12]} center>
                            <div className="feedback">{feedback}</div>
                        </Html>
                    )}
                </>
            );
        }
        if (treeState === "dry2") {
            const adjustedScale = [220, 220, 220];
            const adjustedPosition = [-63.5, -15 + (adjustedScale[1] / 2) * 0.01, -108];
            return (
                <>
                    <ArbolQuiz scale={adjustedScale} position={adjustedPosition} />
                    {showQuestion2 && (
                        <Html position={[-1, 3, -12]} center>
                            <div className="question-modal2">
                                <p>¡Correcto! La naturaleza empieza a restaurarse. 
                                Ahora ¿Cómo puedes evitar la pérdida de biodiversidad?</p>
                                <button onClick={() => handleAnswer2(true)}>No arrojando basura en el suelo</button>
                                <button onClick={() => handleAnswer2(false)}>Haciendo fogatas en el bosque</button>
                                <button onClick={() => handleAnswer2(false)}>Alimentar a los animales salvajes</button>
                            </div>
                        </Html>
                    )}
                    {feedback && (
                        <Html position={[5.42, -2, -5]} center>
                            <div className="feedback">{feedback}</div>
                        </Html>
                    )}
                </>
            );
        }
        if (treeState === "plantar"){
            return (
                <>
                    <Tree position={[5, -2.7, -15]}  />
                    <Manzana position={[3, -3.9, -10]} scale={[0.4, 0.4,0.4]} onClick={handleTreePlantarClick}/>
                    {feedback && (
                        <Html position={[3, 0, -8]} center>
                            <div className="feedback">{feedback}</div>
                        </Html>
                    )}

                </>
            );
        }
        if (treeState === "recoger_basura") {
            const adjustedScale = [220, 220, 220];
            const adjustedPosition = [-63.5, -15 + (adjustedScale[1] / 2) * 0.01, -108];

            return (
                <>
                    <ArbolQuiz scale={adjustedScale} position={adjustedPosition} />
                    <Basura scale={[0.2,0.2,0.2]} position={[5,-3.8,-6]} onClick={handleRecogerBasuraClick}/>
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

                {/* Barra de progreso */}
                <div className="progress-bar-container"> 
                    <div className="progress-bar" style={{ width: `${progress}%` }}></div> 
                  </div>


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
                            <EscenaErosion position={[0, -8, 0]} scale={[80, 80, 80]}/>
                        </Physics>
                    </Canvas>
                </div>
                {showQuestion && (
                    <div className="question-modal2" >
                        <p>¿Qué puedes hacer para restaurar el árbol?</p>
                        <button onClick={() => handleAnswer(true)}>Reforestar y proteger el área</button>
                        <button onClick={() => handleAnswer(false)}>Prendiendole fuego</button>
                        <button onClick={() => handleAnswer(false)}>Explotar el suelo fértil</button>
                    </div>
                )}
            </div>
        </>
    );
};

export default Quiz;

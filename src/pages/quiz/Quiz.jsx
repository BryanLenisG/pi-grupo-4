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
import Bee from '../../components/model-3d/Model-Bio/Bee';
import { Physics } from '@react-three/rapier';

const Quiz = () => {
    const { logout } = useAuthStore();
    const navigate = useNavigate();

    const handleLogout = useCallback(() => {
        logout();
        navigate('/');
    }, [logout, navigate]);

    return (
        <>
            <Navbarcom />
            <div className="quiz-container">
                <h1 className="quiz-title">Quiz</h1>
                <p className="quiz-text">
                    Explora nuestro mundo virtual en 3D y descubre los desafíos medioambientales más críticos que enfrentamos hoy en día.
                    Navega a través de paisajes detallados y aprende sobre la pérdida de biodiversidad, la deforestación y la erosión.
                    Sumérgete en esta experiencia educativa y visualiza el impacto de nuestras acciones en el planeta.
                </p>
                <img src={save_our_planet} alt="save_our_planet" className="save_our_planet" />
                <div>
                    <div className="eart-container">
                        <Canvas shadows camera={{ position: [0, 20, -5], zoom:2 }}
                            style={{ width: "98vw", height: "80vh", position: "absolute" }} >
                            <ambientLight intensity={1.5} castShadow />
                            <directionalLight />
                            <Staging />
                            <OrbitControls />
                            <Physics>
                                <Bee position={[0, 20, 0]}scale={[0.5, 0.5, 0.5]}/>
                                <Tree position={[10, 1, -10]} />
                                <EscenaErosion position={[0, -5, -5]} scale={[80, 80, 80]} />
                            </Physics>

                        </Canvas>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Quiz;

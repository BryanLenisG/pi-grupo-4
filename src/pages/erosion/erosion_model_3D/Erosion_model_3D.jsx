import './Erosion_model_3D.css';
import { useNavigate } from 'react-router-dom';
import { useCallback } from "react";
import useAuthStore from "../../../stores/use-auth-store";
import Navbarcom from '../../../components/Navbarcom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Erosion_model_3D = () => {
    const { logout } = useAuthStore();
    const navigate = useNavigate();

    const handleLogout = useCallback(() => {
        logout();
        navigate('/');
      }, [logout, navigate]);

      const handleNavigateToQuizErosion = useCallback(() => {
        navigate('/QuizErosion'); 
    }, [navigate]);

  return (
    <><Navbarcom />
    <div>
      <div>
        </div>
        <button className="button-continuar" onClick={handleNavigateToQuizErosion}>
        Presentar Quiz
        </button>
        {/* <Form className="button-continue">
            <Button variant="outline-success" onClick={handleNavigateToQuizErosion}>Presentar Quiz</Button>
        </Form> */}
    </div>
    </>
      
  );
};

export default Erosion_model_3D;
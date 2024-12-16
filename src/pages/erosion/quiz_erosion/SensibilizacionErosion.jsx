import './SensibilizacionErosion.css';
import Navbarcom from '../../../components/Navbarcom';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import suelo from '../../../assets/suelo.jpg';

const SensibilizacionErosion = () => {
  const navigate = useNavigate();
  const handleNavigateToQuizErosion = useCallback(() => {
    navigate('/quiz');
  }, [navigate]);
   
  return (
    <>
    <Navbarcom />
    <div className="Bio-container">
    <div className="BioText-introduction">
        <p>
        La tala indiscriminada de árboles provoca graves daños al suelo. Al perder la cobertura vegetal, el suelo queda expuesto a la erosión, ya que las raíces que lo mantenían unido y absorbían agua desaparecen.
        </p>
    </div>
    <div className="BioText-introduction">
        <p>
        Unas de las acciones para evitar la erosion del suelo son:<br />
        -Plantar árboles y cuidar las plantas.<br />
        -No tirar basura en la naturaleza.<br />
        -Protege los bosques.<br />
        </p>
    </div>
</div>

    <Form className="button-continue-quiz-erosion">
        <Button variant="outline-success" onClick={handleNavigateToQuizErosion}>Presentar Quiz</Button>
    </Form>

    <img src={suelo} alt="suelo" className="suelo" />
    </>

  );
};

export default SensibilizacionErosion;
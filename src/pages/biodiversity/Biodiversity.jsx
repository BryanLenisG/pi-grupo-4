import { useNavigate } from 'react-router-dom';
import './Biodiversity.css';

const Biodiversity = () => {
  const navigate = useNavigate(); // Importa y usa el hook useNavigate

  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <div className="Bio-container">
      <p className="BioText-introduction">
        "Cada día, miles de especies desaparecen del planeta,
        afectando el equilibrio de los ecosistemas que sustentan 
        la vida en la Tierra. La deforestación, el cambio climático,
        y la actividad humana han llevado a una acelerada pérdida de biodiversidad. 
        ¿Qué significa esto para nosotros? 
        La extinción de especies no solo afecta la fauna y flora;
        afecta a todos los seres vivos, incluidos nosotros.
        Preservar la biodiversidad es asegurar nuestro propio futuro."
      </p>
      
      <button className="button-back" onClick={handleBack}>
        Volver
      </button>
    </div>
  );
};

export default Biodiversity;

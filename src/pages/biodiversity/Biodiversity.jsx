import { useNavigate } from 'react-router-dom';
import rana from '../../assets/rana.jpg';
import colibri from '../../assets/colibri.jpg';
import './Biodiversity.css';
import Navbarcom from '../../components/Navbarcom';

const Biodiversity = () => {
  const navigate = useNavigate(); // Importa y usa el hook useNavigate

  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <>
    <Navbarcom/>
    <div className="Bio-container">
    <h2>Pérdida de Biodiversidad</h2>
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
      <p className="BioText-introduction">
      ¿Qué está causando la pérdida de biodiversidad?<br/>
        Destrucción de hábitats: La deforestación y la expansión agrícola son las principales causas de la pérdida de hábitats.<br/>
        Cambio climático: Alteraciones en el clima están modificando los patrones de vida de muchas especies.<br/>
        Contaminación: Residuos plásticos y químicos están devastando los hábitats naturales.<br/>
        Especies invasoras: La introducción de especies no nativas desequilibra los ecosistemas.<br/>
      </p>
      
     
    </div>
    <img src={rana} alt="Rana" className="rana" />
    <img src={colibri} alt="Colibri" className="colibri" />
    </>

  );
};

export default Biodiversity;

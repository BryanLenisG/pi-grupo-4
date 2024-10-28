import { useNavigate } from 'react-router-dom';
import './Deforest.css'; 




const Deforest = () => {
  const navigate = useNavigate();
const handleBack = () => {
  navigate(-1); 
};
    return (
      <div className="container-deforest">
      <h1>LA DEFORESTACION</h1>
      <p>Esta práctica afecta a los bosques y al clima global, tiene unas causas e impactos que atacan directamente al medio ambiente. Conoce las causas y soluciones para combatirla.</p>
      
      <h1>Causas de la deforestación</h1>
      <p>Entre las principales causas de la deforestación se encuentra la agricultura comercial. La expansión de tierras agrícolas, especialmente para el cultivo de soja, palma de aceite y otros productos, es una de las principales razones detrás de la pérdida de bosques en América Latina. La ganadería también desempeña un papel crucial, ya que grandes extensiones de bosques son taladas para crear pastizales para el ganado, especialmente en países como Brasil y Argentina. Además, la minería y la urbanización contribuyen significativamente a la deforestación, ya que la extracción de recursos minerales y el crecimiento urbano requieren la intervención de áreas forestales.</p>

      <h1>Impactos de la deforestación</h1>
      <p>La deforestación tiene múltiples consecuencias negativas. En primer lugar, contribuye significativamente al cambio climático. Los bosques actúan como sumideros de carbono, absorbiendo CO2 de la atmósfera. Cuando estos bosques son talados, el carbono almacenado se libera, aumentando los niveles de gases de efecto invernadero y exacerbando el calentamiento global. la pérdida de bosques resulta en una disminución de la biodiversidad. Los bosques albergan a numerosas especies de flora y fauna, muchas de las cuales son endémicas y no pueden sobrevivir fuera de su hábitat natural</p>

      <h1>Soluciones para combatir la deforestación</h1>
      <p>Para mitigar la deforestación y sus efectos, es crucial adoptar una estrategia multifacética. La protección de los bosques mediante la implementación y el cumplimiento de leyes que prohíban su tala indiscriminada es esencial. Además, la reforestación y restauración de ecosistemas degradados puede ayudar a recuperar la biodiversidad y los servicios ambientales que los bosques proporcionan.</p>

      <button className="button-back" onClick={handleBack}>
        Volver
      </button>

      </div>

     
);
  };
  
export default Deforest;
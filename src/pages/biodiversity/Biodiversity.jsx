import { useNavigate } from 'react-router-dom';
import colibri from '../../assets/colibri.jpg';
import rana from '../../assets/rana.jpg';
import './Biodiversity.css';
import { Shadow, SpotLight } from '@react-three/drei';
import Frog from '../../components/model-3d/Model-Bio/Frog';
import { Canvas } from '@react-three/fiber';
import Title3DB from '../../components/Title3d';
import Staging from '../../components/Staging/Staging'
import Navbarcom from '../../components/Navbarcom';
import Forest from '../../components/model-3d/Model-Bio/Forest';
import { Physics } from '@react-three/rapier';
import Controls from '../../components/controls/Controls';
import Bee from '../../components/model-3d/Model-Bio/Bee';



const Biodiversity = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <><Navbarcom />
      <div className="Bio-container">
        <h2 className='Bio-title'>La perdida de biodiversidad</h2>
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
          ¿Qué está causando la pérdida de biodiversidad?<br />
          Destrucción de hábitats: La deforestación y la expansión agrícola son las principales causas de la pérdida de hábitats.<br />
          Cambio climático: Alteraciones en el clima están modificando los patrones de vida de muchas especies.<br />
          Contaminación: Residuos plásticos y químicos están devastando los hábitats naturales.<br />
          Especies invasoras: La introducción de especies no nativas desequilibra los ecosistemas.<br />
        </p>
      </div>

      <div>
        <div className='frog-container'>
          <Canvas shadows camera={{ position: [0, 100, 180], zoom: 1 }}  // Valor inicial [X, Y, Z]
            style={{ width: "100vw", height: "80vh", position: "absolute" }} >

            <ambientLight color={"#08f00ff"} intensity={2} />
            <SpotLight
              castShadow
              color={"red"}
              position={[10, 50, -50]}
              intensity={1}
              penumbra={8}
              angle={1800}
              distance={80000}
              shadow-mapSize={[4096, 4096]}
              shadow-camera-far={20}
              shadow-camera-left={-15}
              shadow-camera-right={15}
              shadow-camera-top={20}
            />
            <Controls />
            <Staging />
            <Shadow />
            <Title3DB />
            <Physics debug gravity={[0, -10, 0]}>
              <Bee castShadow/>
              <Forest />
            </Physics>
            <Frog castShadow />
          </Canvas>
        </div>
      </div >

      <img src={colibri} alt="Colibri" className="colibri" />
      <img src={rana} alt="rana" className="rana" />
    </>
  );
};

export default Biodiversity;
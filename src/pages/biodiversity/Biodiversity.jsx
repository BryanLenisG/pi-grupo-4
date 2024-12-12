import { useState } from 'react';
import colibri from '../../assets/colibri.jpg';
import rana from '../../assets/rana.jpg';
import './Biodiversity.css';
import { OrbitControls, Shadow } from '@react-three/drei';
import Frog from '../../components/model-3d/Model-Bio/Frog';
import { Canvas } from '@react-three/fiber';
import Title3DB from './Title3d';
import Staging from './Staging/Staging';
import Navbarcom from '../../components/Navbarcom';
import Forest from '../../components/model-3d/Model-Bio/Forest';
import { Physics } from '@react-three/rapier';
import Bee from '../../components/model-3d/Model-Bio/Bee';
import Bird from '../../components/model-3d/Model-Bio/Bird';
import Video from './Video';
import Lights from './lights/Lights';
import TextTitle3D from './Text-3D';
import PostProcessing from './PostProcessing';

const Biodiversity = () => {
  // Estado para controlar el PostProcessing
  const [postProcessingEnabled, setPostProcessingEnabled] = useState(true);

  // Función para alternar el PostProcessing
  const togglePostProcessing = () => {
    setPostProcessingEnabled(!postProcessingEnabled);
  };

  return (
    <>
      <Navbarcom />
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
        <p className="BioText-introduction">
          ¿Como evitar la pérdida de biodiversidad?<br />
          Concienciarse sobre su importancia y lo que perdemos al dañarla.<br />
          No adquirir especies exóticas, y mucho menos abandonarlas.<br />
          Asumir las tres erres ecológicas (reutilizar, reducir, reciclar).<br />
          Consumir productos sostenibles.<br />
          Actuar de forma responsable en la naturaleza..<br />
        </p>
      </div>

      {/* Botón para alternar el PostProcessing */}
      <button onClick={togglePostProcessing} style={{ position: 'relative', top: '10px', left: '10px', padding: '10px', background: 'rgba(255, 255, 255, 0.5)', border: 'none', cursor: 'pointer',zIndex: 1,  }}>
        {postProcessingEnabled ? 'Desactivar PostProcessing' : 'Activar PostProcessing'}
      </button>

      <div>
        <div className='frog-container'>
          <Canvas shadows camera={{ position: [-250, 350, 50], fov: 25 }} style={{ width: "100vw", height: "80vh", position: "absolute" }}>
            <OrbitControls />
            <Lights />
            <Staging />
            <Shadow />
            <Title3DB />
            <TextTitle3D />
            <Physics gravity={[0, -10, 0]}>
              <Bee  castShadow position={[-180, 150, 90]}scale={[10, 10, 10]}/>
              <Frog castShadow position={[-150, 20, 10]} />
              <Forest />
              <Bird castShadow />
            </Physics>
            <Video name="screen" position={[-150, 30, -100]} scale={8} rotation={[0, -Math.PI / 3, 0]} />
            {/* Renderizado condicional de PostProcessing */}
            {postProcessingEnabled && <PostProcessing />}
          </Canvas>
        </div>
      </div>

      <img src={colibri} alt="Colibri" className="colibri" />
      <img src={rana} alt="rana" className="rana" />
    </>
  );
};

export default Biodiversity;

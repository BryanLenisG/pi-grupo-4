import { useNavigate } from 'react-router-dom';
import colibri from '../../assets/colibri.jpg';
import rana from '../../assets/rana.jpg';
import './Biodiversity.css';
import { OrbitControls } from '@react-three/drei';
import Frog from '../../components/model-3d/Frog';
import { Canvas } from '@react-three/fiber';
import Title3DB from '../../components/Title3d';
import logo from '../../assets/Logo.png';

const Biodiversity = () => {
  const navigate = useNavigate(); 

  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <>    
      <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        <ul className="navbar-list">
          <li><a href="/Home">Inicio</a></li>
          <li><a href="/Deforest">Deforestacion</a></li>
          <li><a href="/Biodiversity">Biodiversidad</a></li>
          <li><a href="/Erosion">Erosión</a></li>
          <li><a href="/">Cerrar sesion</a></li>
        </ul>
      </nav>

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
        <p className="BioText-introduction">
          ¿Qué está causando la pérdida de biodiversidad?<br/>
          Destrucción de hábitats: La deforestación y la expansión agrícola son las principales causas de la pérdida de hábitats.<br/>
          Cambio climático: Alteraciones en el clima están modificando los patrones de vida de muchas especies.<br/>
          Contaminación: Residuos plásticos y químicos están devastando los hábitats naturales.<br/>
          Especies invasoras: La introducción de especies no nativas desequilibra los ecosistemas.<br/>
        </p>
      </div>

      <div>
        <div className='frog-container'>
          <Canvas shadows camera={{ position: [500, 5, 200], zoom: 5 }}
            style={{ width: "350vw", height: "80vh", position: "absolute" }} >

            <ambientLight intensity={1.5} />
            
            <directionalLight 
              position={[300, 500, 400]} 
              intensity={7} 
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-far={1000}
              shadow-camera-left={-50}
              shadow-camera-right={50}
              shadow-camera-top={50}
              shadow-camera-bottom={-50}
            />
            <Title3DB/>
            <OrbitControls />
            <Frog position={[0, 1, 3]} scale={2} />
          </Canvas>
        </div>
      </div>

      <img src={colibri} alt="Colibri" className="colibri" />
      <img src={rana} alt="rana" className="rana" />
    </>
  );
};

export default Biodiversity;
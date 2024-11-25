import {
    Cloud,
    Sky,
    Sparkles,
    Stars,
  } from "@react-three/drei";
  
  const SkyComponent = () => {
    return (
      <>
        <Sky
          sunPosition={[100, 100, -1]} // Coloca el sol por debajo del horizonte
          inclination={0.2} // Ajusta la inclinación para simular el atardecer
          azimuth={180} // Ajusta el ángulo azimutal para cambiar la dirección de la luz
          mieCoefficient={0.005} // Ajusta la dispersión atmosférica
          elevation={5} // Ajusta la elevación del sol
          mieDirectionalG={0.07} // Ajusta el brillo del sol
          rayleigh={3} // Ajusta la dispersión de Rayleigh
          turbidity={10} // Ajusta la claridad del cielo
          exposure={0.5} // Ajusta la exposición del cielo
        />
        <Sparkles
          position={[-15, 10, -10]} // Posición de las chispas
          color="yellow" // Color de las chispas
          count={256} // Número de chispas
          size={10} // Tamaño de cada chispa
          fade={false} // Desactiva el efecto de desvanecimiento
          speed={1.5} // Velocidad de movimiento de las chispas
          scale={10} // Escala de la distribución de las chispas
        />
        <Cloud
          seed={1}
          scale={2}
          volume={5}
          color="blue"
          fade={100}
          segments={40}
          bounds={[10, 2, 2]}
          position={[-5, 20, -20]}
          opacity={0.5}
          growth={5}
          speed={0.5}
          concentrate={"inside"}
        />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
       
      </>
    );
  };
  
  export default SkyComponent;
  
import { Sky, Sparkles } from "@react-three/drei";

const Staginig = () => {
    return (
        <>
            <Sky/>

            <Sparkles
                position={[0, 15, -15]} // Posición de las chispas
                color="red" // Color de las chispas
                count={256} // Número de chispas
                size={50} // Tamaño de cada chispa
                fade={false} // Desactiva el efecto de desvanecimiento
                speed={8} // Velocidad de movimiento de las chispas
                scale={150} // Escala de la distribución de las chispas
            />

        </>
    );
}; export default Staginig;
import { Html } from "@react-three/drei";


const TitleBiodiversity = () => {
    return(
        <Html
        occlude
        className="text-3D"
        center
        distanceFactor={200}
        transform
        position={[180, 50, -50]}
        rotation={[0, -Math.PI / 2, 0]}>
            <h4 style={{ color: '#FF5733' }}>Los animales estan en peligro..</h4> 
            
        </Html>
    );
};

export default TitleBiodiversity;
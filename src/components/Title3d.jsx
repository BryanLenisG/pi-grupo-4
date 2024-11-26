import { Html } from "@react-three/drei";


const TitleBiodiversity = () => {
    return(
        <Html
        occlude
        className="text-3D"
        center
        distanceFactor={450}
        transform
        position={[50, 90, 20]}>
            <h4 style={{ color: '#FF5733' }}>La ranita esta en peligro..</h4> 
            
        </Html>
    );
};

export default TitleBiodiversity;
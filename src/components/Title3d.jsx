import { Html } from "@react-three/drei";


const TitleBiodiversity = () => {
    return(
        <Html
        occlude
        className="text-3D"
        center
        distanceFactor={500}
        transform
        position={[50, 60, 20]}
        >
            <h4>La ranita esta en peligro..</h4>    
        </Html>
    );
};

export default TitleBiodiversity;
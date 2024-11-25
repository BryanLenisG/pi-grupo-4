import { Html } from "@react-three/drei";


const Title3d_escena_erosion = () => {
    return(
        <Html
        occlude
        className="text-3D"
        center
        distanceFactor={30}
        transform
        position={[5, 2, 0]}
        style={{
            color: "green   "
        }}
        >
            <h4>Tala el árbol</h4>    
        </Html>
    );
};

export default Title3d_escena_erosion;
import { Text3D } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";

const Erosion_text = () => {


    return (
        <Text3D
            position={[-3, 2.3, 0]}
            size={0.4}
            font="/fonts/kabegnos_text_3D.json"
            bevelEnabled
            bevelSize={0.02}
            bevelThickness={0}
            height={0.2}
            letterSpacing={0.05}
        >
            {"erosión del suelo"}
            <meshNormalMaterial
            />
            <OrbitControls
                enablePan={false}
                enableRotate={true}
                minPolarAngle={Math.PI / 2.2}
                maxPolarAngle={Math.PI / 2.2}
            />
        </Text3D>


    );
};

export default Erosion_text;
import { Text3D } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";

const TextTitle3D = () => {


    return (
        <Text3D
            position={[80, 70, -60]}
            rotation={[0, -Math.PI / 2, 0]}
            size={8}
            font="/fonts/kabegnos_text_3D.json"
            bevelEnabled
            bevelSize={0.02}
            bevelThickness={0}
            height={2}
            letterSpacing={0.05}
        >
            {"perdida de biodiversidad"}
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

export default TextTitle3D;
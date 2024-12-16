import { Text3D } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";

const Quiz_text = () => {


    return (
<Text3D
    position={[0, 9, 5]}
    rotation={[0, Math.PI, 0]}
    size={2}
    font="/fonts/kabegnos_text_3D.json"
    bevelEnabled
    bevelSize={0.02}
    bevelThickness={0}
    height={0.2}
    letterSpacing={0.05}
>
    {`gracias 
    por 
    participar`}
    <meshNormalMaterial color={"#ff5733"} metalness={5} roughness={10}/>
</Text3D>


    );
};

export default Quiz_text;
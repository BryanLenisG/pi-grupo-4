import { OrbitControls } from "@react-three/drei"

const Controls = () => {
    return(
         <OrbitControls
         maxAzimuthAngle={Math.PI*0.0}
         minAzimuthAngle={Math.PI*0.0}
         maxPolarAngle={Math.PI*0.50}
         minPolarAngle={Math.PI*0.50}
          enableZoom={false}
         />
    )
};
export default Controls;

import { useVideoTexture } from "@react-three/drei";
import { useCallback, useState } from "react";
const Video = (props) => {
    const texture = useVideoTexture("Videos/video.mp4", {
        muted: true,
        loop: true,
        star: true
        }
    
    );

    const [pause,setPause]= useState(false);
    const handleVideo=useCallback(
        (e)=>{
            e.stopPropagation();
            pause ? texture.image.play(): texture.image.pause();
            setPause(!pause);
        },
        [pause,setPause,texture]
    );
    return (
        <mesh{...props} onClick={handleVideo}>
            <planeGeometry args={[8, 4]} />
            <meshBasicMaterial map={texture} toneMapped={false} />

        </mesh>
    );
};
export default Video;
import { Environment } from "@react-three/drei";
import React from "react";

const Staging = () => {
    return (
        <>
        <Environment ground={{
            height: 20,
            radius:60,
            scale: 50
        }} preset="forest" background={true}/>
        </>
    )
}

export default Staging
"use client";
import { useEffect, useRef } from "react";
import SceneApp from './exten/js/SceneApp';

import { GL } from 'alfrid';
function Canvas() {
    const canvasRef = useRef(null);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.params = {
                numParticles:412 * 1.5,
                skipCount:1,
                maxRadius: 2.5,
                gamma:2.2,
                exposure:5
            };
      
        }
        
            // Initialize 3D tool
            GL.init(canvasRef.current, { ignoreWebgl2: false });
            console.log("=========================")
            // Create scene
            const scene = new SceneApp();
    }, []);

    return <canvas ref={canvasRef} ></canvas>;
}

export default Canvas;

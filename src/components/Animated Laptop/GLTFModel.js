import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Model = ({ path, stopRotation }) => {
  const { scene } = useGLTF(path);
  const [rotationStopped, setRotationStopped] = useState(false);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  useFrame(() => {
    if (!rotationStopped) {
      scene.rotation.y += 0.005; // Adjust the speed of rotation as needed
      if (scene.rotation.y >= THREE.MathUtils.degToRad(30)) {
        setRotationStopped(true);
        stopRotation();
      }
    }
  });

  return <primitive object={scene} />;
};

const GLTFModel = ({ modelPath }) => {
  const canvasRef = useRef();
  const [controlsEnabled, setControlsEnabled] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleStopRotation = () => {
    setControlsEnabled(true);
  };

  return (
    
    <Canvas
      ref={canvasRef}
      shadowMap
      style={{ width: '60vw', height: '80%' }}
      camera={{ position: [-1, 1.5, 1.2], fov: 45 }}
    >
      <ambientLight intensity={0.9} />
      <directionalLight
        position={[0, 32, 64]}
        intensity={2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.5}
        shadow-camera-far={500}
      />
      <Model path={modelPath} stopRotation={handleStopRotation} />
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        enableRotate={controlsEnabled}
        target={[0, 1, 0]} // Adjust the target as needed
      />
    </Canvas>
  );
};

export default GLTFModel;

import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Model = ({ path }) => {
  const { scene } = useGLTF(path);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  return <primitive object={scene} />;
};

const GLTFModel = ({ modelPath }) => {
  const canvasRef = useRef();

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

  return (
    <Canvas
      ref={canvasRef}
      shadowMap
      style={{ width: '100%', height: '100%' }}
      camera={{ position: [10, 10, 20], fov: 45 }}
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
      <Model path={modelPath} />
      <OrbitControls />
    </Canvas>
  );
};

export default GLTFModel;

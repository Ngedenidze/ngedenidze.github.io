import React, { useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import SceneInit from './../Animation/lib/SceneInit';
import './index.scss';

const Laptop = () => {
  useEffect(() => {
    const sceneInit = new SceneInit('myCanvas');
    sceneInit.initialize();
    sceneInit.animate();

    let loadedModel;
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('/laptop/scene.gltf', (gltfScene) => {
      console.log('Model loaded:', gltfScene);
      loadedModel = gltfScene;
      gltfScene.scene.position.y = 0;
      gltfScene.scene.scale.set(1, 1, 1);
      sceneInit.scene.add(gltfScene.scene);
    }, undefined, (error) => {
      console.error('An error occurred while loading the model:', error);
    });

    const animateModel = () => {
      if (loadedModel) {
        const rotationSpeed = 0.01; // Adjust the rotation speed as needed
        loadedModel.scene.rotation.y += rotationSpeed;
        if (loadedModel.scene.rotation.y >= Math.PI / 2) {
          loadedModel.scene.rotation.y = Math.PI / 2; // Limit rotation to a semicircle
        }
      }
      requestAnimationFrame(animateModel);
    };
    animateModel();

    // Disable mouse drag controls
    sceneInit.controls.enabled = false;
  }, []);

  return (
    <div>
      <canvas id="myCanvas" style={{ width: '100%', height: '100%', background: 'transparent' }}></canvas>
    </div>
  );
};

export default Laptop;

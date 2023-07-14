import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import SceneInit from './lib/SceneInit';

function WebgiViewer() {
  useEffect(() => {
    const test = new SceneInit('canvas');
    test.initialize();
    test.animate();

    let loadedModel;
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('./laptop/scene.gltf', (gltfScene) => {
      loadedModel = gltfScene;

      gltfScene.scene.position.y = 0;
      gltfScene.scene.scale.set(1, 1, 1);
      test.scene.add(gltfScene.scene);
    });

    const animate = () => {
      if (loadedModel) {
        const rotationSpeed = -0.01; // Adjust the rotation speed as needed (-0.01 for opposite direction)
        loadedModel.scene.rotation.y += rotationSpeed;
        if (loadedModel.scene.rotation.y <= -Math.PI/2) {
          loadedModel.scene.rotation.y = -Math.PI/2; // Limit rotation to a semicircle
        }
      }
      requestAnimationFrame(animate);
    };
    animate();

    // Disable mouse drag controls
    test.controls.enabled = false;
  }, []);

  return (
    <div>
      <canvas id="canvas" style={{ background: 'transparent' }} />
    </div>
  );
}

export default WebgiViewer;

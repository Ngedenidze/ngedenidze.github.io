import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default class SceneInit {
  constructor(canvasId) {
    // Core components to initialize Three.js app.
    this.scene = undefined;
    this.camera = undefined;
    this.renderer = undefined;

    // Camera params
    this.fov = 45;
    this.nearPlane = 1;
    this.farPlane = 1000;
    this.canvasId = canvasId;

    // Additional components.
    this.controls = undefined;

    // Lighting is basically required.
    this.ambientLight = undefined;
    this.directionalLight = undefined;

    // Model
    this.model = undefined;

    // Bind methods
    this.initialize = this.initialize.bind(this);
    this.loadModel = this.loadModel.bind(this);
    this.animate = this.animate.bind(this);
    this.render = this.render.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);
  }

  initialize() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      window.innerWidth * 5/4 / window.innerHeight, // Adjust aspect ratio based on window dimensions
      this.nearPlane,
      this.farPlane
    );
    this.camera.position.set(10, 10, 20); // Adjust camera position

    // Specify a canvas which is already created in the HTML.
    const canvas = document.getElementById(this.canvasId);
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    this.renderer.setSize(window.innerWidth * 5/4, window.innerHeight); // Adjust renderer size to match window
    this.renderer.shadowMap.enabled = true;

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    // Ambient light which is for the whole scene
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    this.scene.add(this.ambientLight);

    // Directional light - parallel sun rays
    this.directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    this.directionalLight.position.set(0, 32, 64);
    this.directionalLight.castShadow = true; // Enable shadows for directional light
    this.directionalLight.shadow.mapSize.width = 1024; // default
    this.directionalLight.shadow.mapSize.height = 1024; // default
    this.directionalLight.shadow.camera.near = 0.5; // default
    this.directionalLight.shadow.camera.far = 500; // default
    this.scene.add(this.directionalLight);

    // Load the model
    this.loadModel();

    // If window resizes
    window.addEventListener('resize', this.onWindowResize, false);
  }

  loadModel() {
    const loader = new GLTFLoader();
    loader.load(
      '/laptop/scene.gltf', // Path to your model file
      (gltf) => {
        this.model = gltf.scene;
        this.model.traverse((node) => {
          if (node.isMesh) {
            node.castShadow = true; // Let the model cast shadows
            node.receiveShadow = true; // Let the model receive shadows
          }
        });
        this.scene.add(this.model);
      },
      undefined,
      (error) => {
        console.error('An error occurred while loading the model:', error);
      }
    );
  }

  animate() {
    window.requestAnimationFrame(this.animate);
    this.render();
    this.controls.update();
    if (this.model) {
      this.model.rotation.y += 0.01; // Rotate the model
    }
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth * 5/4 / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth * 5/4, window.innerHeight);
  }
}

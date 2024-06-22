import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default class SceneInit {
  constructor(canvasId) {
    this.scene = undefined;
    this.camera = undefined;
    this.renderer = undefined;
    this.fov = 45;
    this.nearPlane = 1;
    this.farPlane = 1000;
    this.canvasId = canvasId;
    this.controls = undefined;
    this.ambientLight = undefined;
    this.directionalLight = undefined;
    this.model = undefined;

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
      window.innerWidth / window.innerHeight,
      this.nearPlane,
      this.farPlane
    );
    this.camera.position.set(10, 10, 20);

    const canvas = document.getElementById(this.canvasId);
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    this.scene.add(this.ambientLight);

    this.directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    this.directionalLight.position.set(0, 32, 64);
    this.directionalLight.castShadow = true;
    this.directionalLight.shadow.mapSize.width = 1024;
    this.directionalLight.shadow.mapSize.height = 1024;
    this.directionalLight.shadow.camera.near = 0.5;
    this.directionalLight.shadow.camera.far = 500;
    this.scene.add(this.directionalLight);

    this.loadModel();

    window.addEventListener('resize', this.onWindowResize, false);
  }

  loadModel() {
    const loader = new GLTFLoader();
    loader.load(
      '/laptop/scene.gltf',
      (gltf) => {
        this.model = gltf.scene;
        this.model.traverse((node) => {
          if (node.isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;
          }
        });
        this.scene.add(this.model);
        console.log('Model loaded successfully');
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
      this.model.rotation.y += 0.01;
    }
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}

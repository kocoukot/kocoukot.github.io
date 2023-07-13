import * as THREE from "three";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";

import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { AfterimagePass } from "three/addons/postprocessing/AfterimagePass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";

// var material = new THREE.ShaderMaterial({
//   uniforms: uniforms,
//   vertexShader: vertexShader,
//   fragmentShader: fragmentShader,
// });
const params = {
  enable: true,
};
let camera, scene, composer;
let mesh;

let afterimagePass;

export function startSwapLines() {
  //

  init();
  //   createGUI();
  animate();
}

function init() {
  var canvas = document.createElement("canvas");
  var container = document.querySelector(".welcome__canvas-container");
  container.appendChild(canvas);
  container.background = 0xffffff;
  //   renderer = new THREE.WebGLRenderer({ alpha: true });
  var renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true, // NOTE: only this is important for a clear background!!!
  });
  renderer.setClearColor(0x000000, 0.5); // NOTE: last parameter is the opacity value (0.0 - 1.0)

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.useLegacyLights = false;
//   canvas.appendChild(renderer.domElement);
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 400;

  scene.background = new THREE.Color(0xffffff);

  scene.add(new THREE.AmbientLight(0xffffff, 0.3));

    scene.fog = new THREE.Fog(0xffffff, 1, 1000);

  const geometry = new THREE.BoxGeometry(150, 150, 150, 2, 2, 2);
  const material = new THREE.MeshNormalMaterial();
  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // postprocessing

  composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));

  afterimagePass = new AfterimagePass();
  composer.addPass(afterimagePass);

  const outputPass = new OutputPass();
  composer.addPass(outputPass);

  window.addEventListener("resize", onWindowResize);

  if (typeof TESTING !== "undefined") {
    for (let i = 0; i < 45; i++) {
      render();
    }
  }
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
  composer.setSize(window.innerWidth, window.innerHeight);
}
function createGUI() {
  const gui = new GUI({ name: "Damp setting" });
  gui.add(afterimagePass.uniforms["damp"], "value", 0, 1).step(0.001);
  gui.add(params, "enable");
}

function render() {
  mesh.rotation.x += 0.005;
  mesh.rotation.y += 0.01;

  afterimagePass.enabled = params.enable;

  composer.render();
}

function animate() {
  requestAnimationFrame(animate);
  render();
}

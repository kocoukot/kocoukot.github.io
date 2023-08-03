import * as THREE from "three";

import Stats from "three/addons/libs/stats.module.js";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";

import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { HalftonePass } from "three/addons/postprocessing/HalftonePass.js";

var selected_sec_name = "current";
var sec_doc = document;
sec_doc.root = document.querySelector(".".concat("steps"));
sec_doc.stepsList = sec_doc.root.querySelectorAll(".".concat("steps__item"));
sec_doc.canvasRoot = sec_doc.root.querySelector(
  ".".concat("steps__canvas-container")
);
sec_doc.currentStep = 0;
let renderer, clock, camera, stats;

const rotationSpeed = Math.PI / 64;

let composer, group;

export function scroll_listener() {
  changeCurrentStep(calculateCurrentStep());
}

function calculateCurrentStep() {
  var y_coord =
    ((window.scrollY - window.innerHeight / 2) /
      (sec_doc.root.offsetTop + sec_doc.root.clientHeight)) *
    3;
  // console.log("y_coord before" + y_coord);

  y_coord = Math.min(1, y_coord);
  y_coord = Math.max(0, y_coord);
  // console.log("y_coord " + y_coord);
  var section_index = Math.floor(y_coord * sec_doc.stepsList.length - 1);
  section_index = Math.min(sec_doc.stepsList.length - 1, section_index);
  return Math.max(0, section_index);
}

function changeCurrentStep(index) {
  setTimeout(() => {
    sec_doc.stepsList[sec_doc.currentStep].classList.remove(selected_sec_name);
    sec_doc.currentStep = index;
    sec_doc.stepsList[sec_doc.currentStep].classList.add(selected_sec_name);
  }, 0);
}

var container = document.querySelector(".steps_graphic-container")
var itemHeight = container.offsetHeight; //700
var itemWidth = container.offsetWidth; //700 

// init();
// animate();

function init() {
  renderer = new THREE.WebGLRenderer({alpha:true});
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(itemWidth, itemHeight);
  renderer.useLegacyLights = false;

  clock = new THREE.Clock();

  camera = new THREE.PerspectiveCamera(
    45,
    itemWidth / itemHeight,
    1,
    150
  );
  camera.position.z = 35;
  container.appendChild(renderer.domElement);

  // scene

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);

  group = new THREE.Group();
  // const floor = new THREE.Mesh(
  //   new THREE.BoxGeometry(100, 1, 100),
  // );
  
  // floor.position.y = -10;
  // const light = new THREE.PointLight(0xffffff, 150);
  // light.position.y = 2;
  // group.add(floor, light);
  scene.add(group);

  const mat = new THREE.ShaderMaterial({
    uniforms: {},

    vertexShader: [
      "varying vec2 vUV;",
      "varying vec3 vNormal;",

      "void main() {",

      "vUV = uv;",
      "vNormal = vec3( normal );",
      "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

      "}",
    ].join("\n"),

    fragmentShader: [
      "varying vec2 vUV;",
      "varying vec3 vNormal;",

      "void main() {",

      "vec4 c = vec4( abs( vNormal ) + vec3( vUV, 0.9 ), 0.0 );",
      "gl_FragColor = c;",

      "}",
    ].join("\n"),
  });

  for (let i = 0; i < 20; ++i) {
    // fill scene with coloured cubes
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), mat);
    mesh.position.set(
      Math.random() * 20 - 8,
      Math.random() * 18 - 8,
      Math.random() * 18 - 8
    );
    mesh.rotation.set(
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2
    );
    group.add(mesh);
  }

  // post-processing

  composer = new EffectComposer(renderer);
  const renderPass = new RenderPass(scene, camera);

  const params = {
    shape: 1,
    radius:6,
    rotateR: Math.PI / 12,
    rotateB: (Math.PI / 12) * 2,
    rotateG: (Math.PI / 12) * 3,
    scatter: 1,
    blending: 1,
    blendingMode: 2,
    greyscale: false,
    disable: false,
  };
  const halftonePass = new HalftonePass(
    itemWidth,
    itemHeight,
    params
  );
  composer.addPass(renderPass);
  composer.addPass(halftonePass);

  window.onresize = function () {
    // resize composer
    itemHeight = container.offsetHeight;
    itemWidth = container.offsetWidth;
    renderer.setSize(itemWidth, itemHeight);
    composer.setSize(itemWidth, itemHeight);
    camera.aspect = itemWidth / itemHeight;
    camera.updateProjectionMatrix();
  };

  // GUI

 

  function initGui(){
    const controller = {
      radius: halftonePass.uniforms["radius"].value,
      rotateR: halftonePass.uniforms["rotateR"].value / (Math.PI / 180),
      rotateG: halftonePass.uniforms["rotateG"].value / (Math.PI / 180),
      rotateB: halftonePass.uniforms["rotateB"].value / (Math.PI / 180),
      scatter: halftonePass.uniforms["scatter"].value,
      shape: halftonePass.uniforms["shape"].value,
      greyscale: halftonePass.uniforms["greyscale"].value,
      blending: halftonePass.uniforms["blending"].value,
      blendingMode: halftonePass.uniforms["blendingMode"].value,
      disable: halftonePass.uniforms["disable"].value,
    };
  
    const gui = new GUI();
    gui
      .add(controller, "shape", { Dot: 1, Ellipse: 2, Line: 3, Square: 4 })
      .onChange(onGUIChange);
    gui.add(controller, "radius", 1, 25).onChange(onGUIChange);
    gui.add(controller, "rotateR", 0, 90).onChange(onGUIChange);
    gui.add(controller, "rotateG", 0, 90).onChange(onGUIChange);
    gui.add(controller, "rotateB", 0, 90).onChange(onGUIChange);
    gui.add(controller, "scatter", 0, 1, 0.01).onChange(onGUIChange);
    gui.add(controller, "greyscale").onChange(onGUIChange);
    gui.add(controller, "blending", 0, 1, 0.01).onChange(onGUIChange);
    gui
      .add(controller, "blendingMode", {
        Linear: 1,
        Multiply: 2,
        Add: 3,
        Lighter: 4,
        Darker: 5,
      })
      .onChange(onGUIChange);
    gui.add(controller, "disable").onChange(onGUIChange);
  
  }


  function onGUIChange() {
    // update uniforms
    halftonePass.uniforms["radius"].value = controller.radius;
    halftonePass.uniforms["rotateR"].value =
      controller.rotateR * (Math.PI / 180);
    halftonePass.uniforms["rotateG"].value =
      controller.rotateG * (Math.PI / 180);
    halftonePass.uniforms["rotateB"].value =
      controller.rotateB * (Math.PI / 180);
    halftonePass.uniforms["scatter"].value = controller.scatter;
    halftonePass.uniforms["shape"].value = controller.shape;
    halftonePass.uniforms["greyscale"].value = controller.greyscale;
    halftonePass.uniforms["blending"].value = controller.blending;
    halftonePass.uniforms["blendingMode"].value = controller.blendingMode;
    halftonePass.uniforms["disable"].value = controller.disable;
  }
}

function animate() {
  requestAnimationFrame(animate);

  const delta = clock.getDelta();
  // stats.update();
  group.rotation.y += delta * rotationSpeed;
  composer.render(delta);
}

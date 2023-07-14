import * as THREE from "three";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";

const vShader = `
			uniform sampler2D map;

			uniform float width;
			uniform float height;
			uniform float nearClipping, farClipping;

			uniform float pointSize;
			uniform float zOffset;

			varying vec2 vUv;

			const float XtoZ = 1.11146; // tan( 1.0144686 / 2.0 ) * 2.0;
			const float YtoZ = 0.83359; // tan( 0.7898090 / 2.0 ) * 2.0;

			void main() {

				vUv = vec2( position.x / width, position.y / height );

				vec4 color = texture2D( map, vUv );
				float depth = ( color.r + color.g + color.b ) / 3.0;

				// Projection code by @kcmic

				float z = ( 1.0 - depth ) * (farClipping - nearClipping) + nearClipping;

				vec4 pos = vec4(
					( position.x / width - 0.5 ) * z * XtoZ,
					( position.y / height - 0.5 ) * z * YtoZ,
					- z + zOffset,
					1.0);

				gl_PointSize = pointSize;
				gl_Position = projectionMatrix * modelViewMatrix * pos;

			}
`;
const fragmentShader = `
			uniform sampler2D map;

			varying vec2 vUv;

			void main() {

				vec4 color = texture2D( map, vUv );
				gl_FragColor = vec4( color.r, color.g, color.b, 0.9 );

			}

			`;

let scene, camera, renderer;
let geometry, mesh, material;
let mouse, center;

const container = document.querySelector(".welcome__video-container");
var itemHeight = container.offsetHeight//700
var itemWidth = container.offsetWidth//700
// var itemHeight = 700
// var itemWidth = 700

export function startSwapLines() {
  init();

  animate();
}

function init() {

  camera = new THREE.PerspectiveCamera(
    75,
    itemWidth / itemHeight,
    1,
    2000
  );
  camera.position.set(150, 250, 1);

  scene = new THREE.Scene();
  center = new THREE.Vector3();
  center.z = -1000;
    // scene.background = new THREE.Color(0x435635)
  const video = document.getElementById("video");

  const texture = new THREE.VideoTexture(video);
  texture.minFilter = THREE.NearestFilter;

  const width = 640,
    height = 480;
  const nearClipping = 500,
    farClipping = 1500;

  geometry = new THREE.BufferGeometry();

  const vertices = new Float32Array(width * height * 3);

  for (let i = 0, j = 0, l = vertices.length; i < l; i += 3, j++) {
    vertices[i] = j % width;
    vertices[i + 1] = Math.floor(j / width);
  }



  
  geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
  var zOffset = 200
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
	  zOffset = 20
  }
  material = new THREE.ShaderMaterial({
    uniforms: {
      map: { value: texture },
      width: { value: width },
      height: { value: height },
      nearClipping: { value: nearClipping },
      farClipping: { value: farClipping },
      pointSize: { value: 1 },
      zOffset: { value: 200 },
    },
    vertexShader: vShader,
    fragmentShader: fragmentShader,
    blending: THREE.AdditiveBlending,
    depthTest: false,
    depthWrite: false,
    transparent: true,
  });

  mesh = new THREE.Points(geometry, material);
  scene.add(mesh);
  // initGUI();
  video.play();

  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);

  renderer.setSize(itemWidth, itemHeight);
  renderer.useLegacyLights = false;
  container.appendChild(renderer.domElement);

  mouse = new THREE.Vector3(0, 0, 1);

  document.addEventListener("mousemove", onDocumentMouseMove);
  window.addEventListener("resize", onWindowResize);



function initGUI() {
  const gui = new GUI();
  gui
    .add(material.uniforms.nearClipping, "value", 1, 10000, 1.0)
    .name("nearClipping");
  gui
    .add(camera.position , "x", 1, 10000, 1.0)
    .name("x position");
    gui
    .add(camera.position , "y", 1, 10000, 1.0)
    .name("y position");
    gui
    .add(camera.position , "z", 1, 10000, 1.0)
    .name("z position");

    gui
    .add(center , "z", -10000, 10000, 1.0)
    .name("z position");

    

  gui
    .add(material.uniforms.farClipping, "value", 1, 10000, 1.0)
    .name("farClipping");
  // gui.add(material.uniforms.pointSize, "value", 1, 10, 1.0).name("pointSize");
  gui.add(material.uniforms.zOffset, "value", 0, 4000, 1.0).name("zOffset");
}


}


function onWindowResize() {
  itemHeight = container.offsetHeight
  itemWidth = container.offsetWidth
  camera.aspect = itemWidth / itemHeight;
  camera.updateProjectionMatrix();
  console.log("window height " + container.offsetHeight)
  console.log("window width " + container.offsetWidth)
  renderer.setSize(itemWidth , itemHeight);
}

function onDocumentMouseMove(event) {
  mouse.x = (event.clientX - itemWidth / 2) * 8;
  mouse.y = (event.clientY - itemHeight / 2) * 8;
}

function animate() {
  requestAnimationFrame(animate);

  render();
}

function render() {
  camera.position.x += (mouse.x - camera.position.x) * 0.0005;
  camera.position.y += (+mouse.y + camera.position.y) * 0.0005;
  camera.lookAt(center);

  renderer.render(scene, camera);
}


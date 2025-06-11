import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  LinearSRGBColorSpace,
  ACESFilmicToneMapping,
} from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import { Sun } from "./sun";
import { Earth } from "./earth";
import { Planet } from "./planet";
import { Starfield } from "./starfield";

const planetConfigs = [
  {
    orbitSpeed: 0.000005,
    orbitRadius: 10,
    orbitRotationDirection: "clockwise",
    planetSize: 0.2,
    planetRotationSpeed: 0.001,
    planetRotationDirection: "counterclockwise",
    planetTexture: "/solar-system-threejs/assets/mercury-map.jpg",
    rimHex: 0xf9cf9f,
    index: 0,
  },
  {
    orbitSpeed: 0.000004,
    orbitRadius: 13,
    orbitRotationDirection: "clockwise",
    planetSize: 0.5,
    planetRotationSpeed: 0.0008,
    planetRotationDirection: "clockwise",
    planetTexture: "/solar-system-threejs/assets/venus-map.jpg",
    rimHex: 0xb66f1f,
    index: 1,
  },
  {
    orbitSpeed: 0.0000035,
    orbitRadius: 16,
    orbitRotationDirection: "clockwise",
    planetSize: 0.5,
    planetAngle: (-23.4 * Math.PI) / 180,
    planetRotationSpeed: 0.001,
    planetRotationDirection: "counterclockwise",
    planetTexture: "/solar-system-threejs/assets/earth-map-1.jpg",
    index: 2,
  },
  {
    orbitSpeed: 0.000002,
    orbitRadius: 19,
    orbitRotationDirection: "clockwise",
    planetSize: 0.3,
    planetRotationSpeed: 0.001,
    planetRotationDirection: "counterclockwise",
    planetTexture: "/solar-system-threejs/assets/mars-map.jpg",
    rimHex: 0xbc6434,
    index: 3,
  },
  {
    orbitSpeed: 0.000001,
    orbitRadius: 22,
    orbitRotationDirection: "clockwise",
    planetSize: 1,
    planetRotationSpeed: 0.002,
    planetRotationDirection: "counterclockwise",
    planetTexture: "/solar-system-threejs/assets/jupiter-map.jpg",
    rimHex: 0xf3d6b6,
    index: 4,
  },
  {
    orbitSpeed: 0.0000008,
    orbitRadius: 25,
    orbitRotationDirection: "clockwise",
    planetSize: 0.8,
    planetRotationSpeed: 0.0015,
    planetRotationDirection: "counterclockwise",
    planetTexture: "/solar-system-threejs/assets/saturn-map.jpg",
    rimHex: 0xd6b892,
    rings: {
      ringsSize: 0.5,
      ringsTexture: "/solar-system-threejs/assets/saturn-rings.jpg",
    },
    index: 5,
  },
  {
    orbitSpeed: 0.0000005,
    orbitRadius: 28,
    orbitRotationDirection: "clockwise",
    planetSize: 0.5,
    planetRotationSpeed: 0.001,
    planetRotationDirection: "clockwise",
    planetTexture: "/solar-system-threejs/assets/uranus-map.jpg",
    rimHex: 0x9ab6c2,
    rings: {
      ringsSize: 0.4,
      ringsTexture: "/solar-system-threejs/assets/uranus-rings.jpg",
    },
    index: 6,
  },
  {
    orbitSpeed: 0.0000004,
    orbitRadius: 31,
    orbitRotationDirection: "clockwise",
    planetSize: 0.5,
    planetRotationSpeed: 0.001,
    planetRotationDirection: "counterclockwise",
    planetTexture: "/solar-system-threejs/assets/neptune-map.jpg",
    rimHex: 0x5c7ed7,
    index: 7,
  },
];

const w = window.innerWidth;
const h = window.innerHeight;

const scene = new Scene();
const camera = new PerspectiveCamera(75, w / h, 0.1, 100);
const renderer = new WebGLRenderer({ antialias: true });
const controls = new OrbitControls(camera, renderer.domElement);

controls.minDistance = 10;
controls.maxDistance = 60;
camera.position.set(30 * Math.cos(Math.PI / 6), 30 * Math.sin(Math.PI / 6), 40);

renderer.setSize(w, h);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.toneMapping = ACESFilmicToneMapping;
renderer.outputColorSpace = LinearSRGBColorSpace;
document.body.appendChild(renderer.domElement);

const sun = new Sun().getSun();
scene.add(sun);

const earth = new Earth({
  orbitSpeed: 0.00029,
  orbitRadius: 16,
  orbitRotationDirection: "clockwise",
  planetSize: 0.5,
  planetAngle: (-23.4 * Math.PI) / 180,
  planetRotationSpeed: 0.01,
  planetRotationDirection: "counterclockwise",
  planetTexture: "/solar-system-threejs/assets/earth-map-1.jpg",
}).getPlanet();
scene.add(earth);

const starfield = new Starfield().getStarfield();
scene.add(starfield);

const planets = [];

planetConfigs.forEach((cfg) => {
  const planet = new Planet(cfg);
  planets.push(planet);
  scene.add(planet.getPlanet());
});

renderer.render(scene, camera);

window.addEventListener("resize", () => {
  const w = window.innerWidth;
  const h = window.innerHeight;
  renderer.setSize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
});

const animate = () => {
  requestAnimationFrame(animate);
  planets.forEach((planet) => planet.animate());
  controls.update();
  renderer.render(scene, camera);
};

animate();

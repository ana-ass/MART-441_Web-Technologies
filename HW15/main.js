/*
Author: Anabel Assante
File Name: HW15 index.html
Date: 04/27/2026
Purpose: HW 15 - three.js

Additional Element:
Orbit Camera Motion

Extra Add-ons:
Extra Shapes
*/

//importing three.js and the required add-ons
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

//delcaring 3d model, model loader, and scene
let sunModel;
var scene = new THREE.Scene();
const loader = new GLTFLoader();

//loading sun model into my scene, resizing and adding atmosphere lighting
loader.load('./assets/sun_gltf/scene.gltf', function (gltf) {

    if(!gltf || !gltf.scene) {
        console.error("GLTF did not load properly");
        return;
    }
    sunModel = gltf.scene;

    sunModel.position.set(0, 0, 0);
    sunModel.scale.set(0.4, 0.4, 0.4);

    var sunLight = new THREE.PointLight(0xffffff, 45, 2000);
    sunLight.position.set(0, 0, 0);

    //if model doesn't load, allows for easy debugging
    sunModel.add(sunLight);
    scene.add(sunModel);
}, undefined, function (error) {
    console.error('An error has happened', error);
});

//adding more ambient light, setting up camera
scene.add(new THREE.AmbientLight (0xffffff, 0.1));

var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 15;
camera.lookAt(0, 0, 0);

//rendering, setting canvas

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//setting controls for orbital camera movement, done via mouse

var controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

//creating the first planet, biggest planet
var geometry1 = new THREE.SphereGeometry(1, 32, 32);

var material1 = new THREE.MeshStandardMaterial({
  color: 0x87CEEB
});

var sphere1= new THREE.Mesh(geometry1, material1);

//allowing pivot for more accurate orbiting
var pivot1 = new THREE.Object3D();
scene.add(pivot1);

pivot1.add(sphere1);
sphere1.position.x = 12;

//shape 2, second to smallest planet
var geometry2 = new THREE.SphereGeometry(0.5, 32, 32);
var material2 = new THREE.MeshStandardMaterial({ color: 0xc1557d});
var sphere2 = new THREE.Mesh(geometry2, material2);

var pivot2 = new THREE.Object3D();
scene.add(pivot2);

//pivot for planet orbit
pivot2.add(sphere2);
sphere2.position.x = 7;

//shape 3, smallest planet
var geometry3 = new THREE.SphereGeometry(0.3, 32, 32);
var material3 = new THREE.MeshStandardMaterial({ color: 0x2e7d32});
var sphere3 = new THREE.Mesh(geometry3, material3);

var pivot3 = new THREE.Object3D();
scene.add(pivot3);
//pivot to allow for orbiting
pivot3.add(sphere3);
sphere3.position.x = 5;

//4th planet, second largest
var geometry4 = new THREE.SphereGeometry(0.75, 32, 32);
var material4 = new THREE.MeshStandardMaterial({ color: 0xa53737});
var sphere4 = new THREE.Mesh(geometry4, material4);

var pivot4 = new THREE.Object3D();
scene.add(pivot4);
//pivot for orbiting
pivot4.add(sphere4);
sphere4.position.x = 9;

//animate function
function animate() {
  requestAnimationFrame(animate);
//sun Model animation
  if (sunModel) {
    sunModel.rotation.y -= 0.001;
  }

  //planet orbit numbers, slower for bigger planets
  pivot1.rotation.y += 0.009;
  pivot2.rotation.y += 0.03;
  pivot3.rotation.y += 0.04;
  pivot4.rotation.y += 0.02;

  //planet rotation, the planets rotate to simulate days
  sphere1.rotation.y += 0.02;
  sphere1.rotation.z = 0.4;
  sphere2.rotation.y += 0.04;
  sphere2.rotation.z = 0.4;
  sphere3.rotation.y += 0.05;
  sphere3.rotation.z = 0.4;
  sphere4.rotation.y += 0.03;
  sphere4.rotation.z = 0.4;
  //camera controls
  controls.update();

  renderer.render(scene, camera);
}

animate(); 
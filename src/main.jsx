/* This project is created by following the Three.JS crash course by Developedbyed */
/* https://www.youtube.com/watch?v=_OwJV2xL8M8 */

import * as THREE from "three";

// Scene
const scene = new THREE.Scene();

// Create our Sphere
const geometry = new THREE.SphereGeometry(
  /*
   * increasing segments will make the sphere more round and smooth but,
   * it will also increase the number of vertices and faces in the sphere which will make the sphere more complex
   * and will require more computational power to render the sphere.
   * It is recommended to keep the segments value to a minimum as much as possible.
   */
  3, // Size in radius
  64, // Width Segments : width segments means how many horizontal lines we want to have on our sphere to give it a more round shape
  64 // Height Segments : height segments means how many vertical lines we want to have on our sphere to give it a more round shape
);

// Material
const material = new THREE.MeshStandardMaterial({
  color: "#00FF83",
});

// Mesh
const sphere = new THREE.Mesh(geometry, material);

// Add the sphere to the scene
scene.add(sphere);


// Camera
const camera = new THREE.PerspectiveCamera(
  45, // Field of View : how much we can see in the scene
  800/ 600, // Aspect Ratio : width / height
) 
camera.position.z = 10; // move the camera back to see the sphere
scene.add(camera);

// Light
const pointLight = new THREE.PointLight(
  0xffffff,  // color
  100,       // intensity
  100     // distance
); 
pointLight.position.set(
  0,  // x
  10, // y
  10 // z
);
scene.add(pointLight);


// Renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(800, 600);
renderer.render(scene, camera);
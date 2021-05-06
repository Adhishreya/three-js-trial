import "./style.css";
import * as THREE from "three";
import { MeshBasicMaterial } from "three";
let scene,camera,renderer,mesh;

function init()
{



 scene = new THREE.Scene();
 camera = new THREE.PerspectiveCamera(
  75, //field of view
  window.innerWidth / window.innerHeight, //aspect ratio
  0.1, //near clipping plane
  1000 //far clipping plane
  //defining the perspectives of the camera
);
 renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
//setting the size of the display screen
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(2, 2, 2); //generating a cube
// var material = new THREE.MeshBasicMaterial({ color: 0x0000ff }); 
//mesh for coloring...there exists some rules in defining color


//adding textures
var texture=new THREE.TextureLoader().load('./galaxy.jpg');
var material = new THREE.MeshBasicMaterial({ map:texture }); 


//finally adding the scene elements to the DOM

mesh = new THREE.Mesh(geometry, material);
//applies material to the geometry

//add mesh to the scene
scene.add(mesh);
camera.position.z = 5;

}


function animate()
{//create loop to draw scene every time screen is refreshed
    requestAnimationFrame(animate);
mesh.rotation.x+=0.01;//rotating
mesh.rotation.y+=0.01;//rotating

    renderer.render(scene, camera);
}


function windowResize()
{
    camera.aspect=window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
renderer.setSize(window.innerWidth, window.innerHeight);

}

window.addEventListener('resize',windowResize,false);
//ensures that the scene gets asapted to window resize events
init();
animate();

// 

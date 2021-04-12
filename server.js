// const THREE = require('https://threejsfundamentals.org/threejs/resources/threejs/r125/build/three.module.js');
// const {OrbitControls} = require('https://threejsfundamentals.org/threejs/resources/threejs/r125/examples/jsm/controls/OrbitControls.js');
// const {OBJLoader} = require ('https://threejsfundamentals.org/threejs/resources/threejs/r125/examples/jsm/loaders/OBJLoader.js');
const THREE = require("threejs-addons")();

function main() {
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({canvas});

  const fov = 45;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 100;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 10, 20);

  const controls = new OrbitControls(camera, canvas);
  controls.target.set(0, 5, 0);
  controls.update();

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('black');

  {
    const planeSize = 40;

    const loader = new THREE.TextureLoader();
    const texture = loader.load('https://threejsfundamentals.org/threejs/resources/images/checker.png');
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.magFilter = THREE.NearestFilter;
    const repeats = planeSize / 2;
    texture.repeat.set(repeats, repeats);

    const planeGeo = new THREE.PlaneGeometry(planeSize, planeSize);
    const planeMat = new THREE.MeshPhongMaterial({
      map: texture,
      side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(planeGeo, planeMat);
    mesh.rotation.x = Math.PI * -.5;
    scene.add(mesh);
  }

  {
    const skyColor = 0xB1E1FF;  // light blue
    const groundColor = 0xB97A20;  // brownish orange
    const intensity = 1;
    const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
    scene.add(light);
  }

  {
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(0, 10, 0);
    light.target.position.set(-5, 0, 0);
    scene.add(light);
    scene.add(light.target);
  }

  {
    const objLoader = new OBJLoader();
    objLoader.load('https://threejsfundamentals.org/threejs/resources/models/windmill/windmill.obj', (root) => {
      scene.add(root);
    });
  }

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  function render() {

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

main();




    // let renderer, scene, camera, banana;

    // let ww = window.innerWidth,
    //   wh = window.innerHeight;

    // function init(){

    //   renderer = new THREE.WebGLRenderer({canvas : document.getElementById('scene')});
    //   renderer.setSize(ww,wh);

    //   scene = new THREE.Scene();

    //   camera = new THREE.PerspectiveCamera(50,ww/wh, 0.1, 10000 );
    //   camera.position.set(0,0,500);
    //   scene.add(camera);

    //   //Add a light in the scene
    //   directionalLight = new THREE.DirectionalLight( 0xffffff, 0.8 );
    //   directionalLight.position.set( 0, 0, 350 );
    //   directionalLight.lookAt(new THREE.Vector3(0,0,0));
    //   scene.add( directionalLight );

    //   //Load the obj file
    //   loadOBJ();
    // }

    // let loadOBJ = function(){

    //   //Manager from ThreeJs to track a loader and its status
    //   let manager = new THREE.LoadingManager();
    //   //Loader for Obj from Three.js
    //   let loader = new THREE.OBJLoader( manager );
      
    //   //Launch loading of the obj file, addBananaInScene is the callback when it's ready 
    //   loader.load('Kallja/Kallja.obj', addBananaInScene);

    // };

    // let addBananaInScene = function(object){
    //   banana = object;
    //   //Move the banana in the scene
    //   banana.rotation.x = Math.PI/2;
    //   banana.position.y = -200;
    //   banana.position.z = 50;
    //   //Go through all children of the loaded object and search for a Mesh
    //   object.traverse( function ( child ) {
    //     //This allow us to check if the children is an instance of the Mesh constructor
    //     if(child instanceof THREE.Mesh){
    //       child.material.color = new THREE.Color(0X00FF00);
    //       //Sometimes there are some vertex normals missing in the .obj files, ThreeJs will compute them
    //       child.geometry.computeVertexNormals();
    //     }
    //   });
    //   //Add the 3D object in the scene
    //   scene.add(banana);
    //   render();
    // };


    // let render = function () {
    //   requestAnimationFrame(render);

    //   //Turn the banana
    //   banana.rotation.z += .01;

    //   renderer.render(scene, camera);
    // };

    // init();
// stats.js by MrDoob
(function(){var script=document.createElement('script');script.onload=function(){var stats=new Stats();document.body.appendChild(stats.dom);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});};script.src='//mrdoob.github.io/stats.js/build/stats.min.js';document.head.appendChild(script);})()

const socket = io();
socket.on('connect', function() {
    console.log('Connected to server!');
});
socket.on('debug', function(data) {
    console.log(data);
});

class Config {
    static CHUNK_SIZE = 16;
    static CHUNK_HEIGHT = 32;
    // static RENDER_DISTANCE = 1;
    static UPDATE_INTERVAL = 60;
}

var chunks = {};

var scene = new THREE.Scene();
var cam = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function loadChunks() {
    chunks = {};
}

function frame() {
    renderer.render(scene, cam);

    requestAnimationFrame(frame);
}

loadChunks();
frame();
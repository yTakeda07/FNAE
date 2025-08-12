import { RNG } from '../JS/RNG.js';

window.onload = function(){

const BTNPlay = document.getElementById("Jogar");

BTNPlay.addEventListener("click", function() {


const body = document.getElementsByTagName("body")[0];
body.style.backgroundImage = "url('../IMG/FDAE.jpg')";


const main = `

<input type="button" value="--" id="abrirCamera">
<div class="modal-overlay" id="modalOverlay">
  <div class="modal">
    <input type="button" value="C1" id="C1" onclick="verificarCamera(1)"><br>
    <input type="button" value="C2" id="C2" onclick="verificarCamera(2)"><br>
    <input type="button" value="C3" id="C3" onclick="verificarCamera(3)"><br>
    <input type="button" value="C4" id="C4" onclick="verificarCamera(4)"><br>
    <input type="button" value="C5" id="C5" onclick="verificarCamera(5)"><br>
    <img src="../IMG/0.jpg" alt="Camera 1" id="CI1" class="cameras">
    <img src="../IMG/7.jpg" alt="Camera 2" id="CI2" class="cameras">
    <img src="../IMG/11.jpg" alt="Camera 3" id="CI3" class="cameras">
    <img src="../IMG/15.jpg" alt="Camera 4" id="CI4" class="cameras">
    <img src="../IMG/19.jpg" alt="Camera 5" id="CI5" class="cameras">
  </div>
</div>
`;

document.getElementsByTagName("main")[0].innerHTML = main;


document.getElementById('modalOverlay').style.display = "none";


document.getElementsByTagName("footer")[0].innerHTML = 

    ''

;

const ScriptCamera = document.createElement("script");
ScriptCamera.src = "../JS/abrirCamera.js";
document.body.appendChild(ScriptCamera);

// const ScriptRNG = document.createElement("script");
// ScriptCamera.src = "../JS/RNG.js";
// document.body.appendChild(ScriptRNG);

RNG();

const verificarCamera = document.createElement("script");
verificarCamera.src = "../JS/verificarCamera.js";
document.body.appendChild(verificarCamera);

});




















}

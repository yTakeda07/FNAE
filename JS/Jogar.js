import { RNG } from '../JS/RNG.js';
import { SALAS, SALASM } from './salas.js';

window.onload = function(){

const BTNPlay = document.getElementById("Jogar");

BTNPlay.addEventListener("click", function() {


const body = document.getElementsByTagName("body")[0];
body.style.backgroundImage = "url('../IMG/FDAE.jpg')";


const main = `
<div id="centralizar">
<input type="button" value="------------------------------------" id="abrirCamera">
</div>
<div class="modal-overlay" id="modalOverlay">
  <div class="modal">
    <p id="NM_CAMERA">CAMERA-C1</p>
    <img src="../IMG/0.jpg" alt="" id="${SALAS[1]}" class="cameras">
    <img src="../IMG/7.jpg" alt="" id="${SALAS[2]}" class="cameras">
    <img src="../IMG/11.jpg" alt="" id="${SALAS[3]}" class="cameras">
    <img src="../IMG/15.jpg" alt="" id="${SALAS[4]}" class="cameras">
    <img src="../IMG/19.jpg" alt="" id="${SALAS[5]}" class="cameras">
    <img src="../IMG/0.jpg" alt="" id="${SALAS[6]}" class="cameras">
    <img src="../IMG/0.jpg" alt="" id="${SALAS[7]}" class="cameras">
    <img src="../IMG/0.jpg" alt="" id="${SALAS[8]}" class="cameras">
      <div id="cameraContainer1">
      <p id="NM_SALA">HORTA</p>
      <div id="cameraIMG">
    <input type="button" value="${SALAS[1]}" id="${SALASM[1]}" onclick="verificarCamera('${SALAS[1]}')"><br>
    <input type="button" value="${SALAS[2]}" id="${SALASM[2]}" onclick="verificarCamera('${SALAS[2]}')"><br>
    <input type="button" value="${SALAS[3]}" id="${SALASM[3]}" onclick="verificarCamera('${SALAS[3]}')"><br>
    <input type="button" value="${SALAS[4]}" id="${SALASM[4]}" onclick="verificarCamera('${SALAS[4]}')"><br>
    <input type="button" value="${SALAS[5]}" id="${SALASM[5]}" onclick="verificarCamera('${SALAS[5]}')"><br>
    <input type="button" value="${SALAS[6]}" id="${SALASM[6]}" onclick="verificarCamera('${SALAS[6]}')"><br>
    <input type="button" value="${SALAS[7]}" id="${SALASM[7]}" onclick="verificarCamera('${SALAS[7]}')"><br>
    <input type="button" value="${SALAS[8]}" id="${SALASM[8]}" onclick="verificarCamera('${SALAS[8]}')"><br>
  </div>
  </div>
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

// agora eu importo a função do RNG em vez de criar o elemento script.
RNG();

const verificarCamera = document.createElement("script");
verificarCamera.src = "../JS/verificarCamera.js";
document.body.appendChild(verificarCamera);

const mudarAndar = document.createElement("script");
verificarCamera.src = "../JS/mudarAndar.js";
document.body.appendChild(mudarAndar);


});


}

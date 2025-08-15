import { SALAS, SALASM } from './salas.js';
const meuSwitch = document.getElementById("meuSwitch");

let andar = 1;

meuSwitch.addEventListener("change", () => {
  
if(andar == 1){
    document.getElementById("mudarContainer").innerHTML = `
      <div id="cameraIMG2">
        <input type="button" value="${SALAS[9]}" id="${SALASM[9]}" onclick="verificarCamera('${SALAS[9]}')"><br>
        <input type="button" value="${SALAS[10]}" id="${SALASM[10]}" onclick="verificarCamera('${SALAS[10]}')"><br>
        <input type="button" value="${SALAS[11]}" id="${SALASM[11]}" onclick="verificarCamera('${SALAS[11]}')"><br>
        <input type="button" value="${SALAS[12]}" id="${SALASM[12]}" onclick="verificarCamera('${SALAS[12]}')"><br>
        <input type="button" value="${SALAS[13]}" id="${SALASM[13]}" onclick="verificarCamera('${SALAS[13]}')"><br>
        <input type="button" value="${SALAS[14]}" id="${SALASM[14]}" onclick="verificarCamera('${SALAS[14]}')"><br>
        <input type="button" value="${SALAS[15]}" id="${SALASM[15]}" onclick="verificarCamera('${SALAS[15]}')"><br>

      </div>
    `;
    
    andar = 2;
}else{
    document.getElementById("mudarContainer").innerHTML=`
    
          <div id="cameraIMG1">
        <input type="button" value="${SALAS[1]}" id="${SALASM[1]}" onclick="verificarCamera('${SALAS[1]}')"><br>
        <input type="button" value="${SALAS[2]}" id="${SALASM[2]}" onclick="verificarCamera('${SALAS[2]}')"><br>
        <input type="button" value="${SALAS[3]}" id="${SALASM[3]}" onclick="verificarCamera('${SALAS[3]}')"><br>
        <input type="button" value="${SALAS[4]}" id="${SALASM[4]}" onclick="verificarCamera('${SALAS[4]}')"><br>
        <input type="button" value="${SALAS[5]}" id="${SALASM[5]}" onclick="verificarCamera('${SALAS[5]}')"><br>
        <input type="button" value="${SALAS[6]}" id="${SALASM[6]}" onclick="verificarCamera('${SALAS[6]}')"><br>
        <input type="button" value="${SALAS[7]}" id="${SALASM[7]}" onclick="verificarCamera('${SALAS[7]}')"><br>
        <input type="button" value="${SALAS[8]}" id="${SALASM[8]}" onclick="verificarCamera('${SALAS[8]}')"><br>
      </div>
    
    `;
    andar = 1;
}


  
});

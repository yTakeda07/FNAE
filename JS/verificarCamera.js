function verificarCamera(cameraId) {

let valorA1 = document.getElementById("valorA1").value;
let valorA2 = document.getElementById("valorA2").value;
const img = document.querySelector(".modal img");
let NM_SALA;

switch (cameraId) {
    case "H1":
     NM_SALA = "HORTA";            
        break;
    case "E2":
     NM_SALA = "ESCADA 2";            
        break;
    case "R3":
     NM_SALA = "REFEITÓRIO 3";            
        break;
    case "E1":
     NM_SALA = "ESCADA 1";            
        break;
    case "R2":
     NM_SALA = "REFEITÓRIO 2";            
        break;
    case "R1":
     NM_SALA = "REFEITÓRIO 1";            
        break;
    case "S1":
     NM_SALA = "SECRETÁRIA 1";            
        break;
    case "S2":
     NM_SALA = "SECRETÁRIA 2";            
        break;
    case "E1":
     NM_SALA = "HORTA";            
        break;
    default:
        break;
}

for (let i = 0; i <=7 ; i++) {
document.getElementsByClassName("cameras")[i].style.display = "none";
}
document.getElementById(cameraId).style.display = "flex";
document.getElementById("NM_CAMERA").innerText = "CAMERA-"+cameraId;
document.getElementById("NM_SALA").innerText = NM_SALA;
}
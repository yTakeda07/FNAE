function verificarCamera(cameraId) {
    
let valorA1 = document.getElementById("valorA1").value;
let valorA2 = document.getElementById("valorA2").value;

NcameraId = parseInt(cameraId);

switch (NcameraId) {
    case 1:
        if (valorA1 ==0){
            alert("fabricio esta na camera C1");
        }
        if (valorA2 ==0){
            alert("julio esta na camera C1");
        }
        break;
    case 2:
        if (valorA1 ==1){
            alert("fabricio esta na camera C2");
        }
        if (valorA2 ==1){
            alert("julio esta na camera C2");
        }
        break;
    case 3:
        if (valorA1 ==2){
            alert("fabricio esta na camera C3");
        }
        if (valorA2 ==2){
            alert("julio esta na camera C3");
        }
    default:
        break;
}

}
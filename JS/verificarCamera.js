function verificarCamera(cameraId) {
    
let valorA1 = document.getElementById("valorA1").value;
let valorA2 = document.getElementById("valorA2").value;
const img = document.querySelector(".modal img");
NcameraId = parseInt(cameraId);

for (let i = 0; i <= 4; i++) {
document.getElementsByClassName("cameras")[i].style.display = "none";
}
document.getElementById("CI"+NcameraId).style.display = "flex";



// switch (NcameraId) {
//     case 1:
//         if (valorA1 ==0 && valorA2 ==0){
//             img.src= "../IMG/0.jpg";
//         }else if (valorA1 ==0){
//             img.src= "../IMG/1.jpg";
//         }else if (valorA2 ==0){
//             img.src= "../IMG/2.jpg";
//         }else{
//             img.src= "../IMG/3.jpg";
//         }
//         break;
//     case 2:
//         if (valorA1 ==1 && valorA2 ==1){
//             img.src= "../IMG/4.jpg";
//         }else if (valorA1 ==1){
//             img.src= "../IMG/5.jpg";
//         }else if (valorA2 ==1){
//             img.src= "../IMG/6.jpg";
//         }else{
//             img.src= "../IMG/7.jpg";
//         }
//         break;
//     case 3:
//         if (valorA1 ==2 && valorA2 ==2){
//             img.src= "../IMG/8.jpg";
//         }else if (valorA1 ==2){
//             img.src= "../IMG/9.jpg";
//         }else if (valorA2 ==2){
//             img.src= "../IMG/10.jpg";
//         }else{
//             img.src= "../IMG/11.jpg";
//         }
//         break;
//     case 4:
//         if (valorA1 ==3 && valorA2 ==3){
//             img.src= "../IMG/12.jpg";
//         }else if (valorA1 ==3){
//             img.src= "../IMG/13.jpg";
//         }else if (valorA2 ==3){
//             img.src= "../IMG/14.jpg";
//         }else{
//             img.src= "../IMG/15.jpg";
//         }
//         break;
//     case 5:
//         if (valorA1 ==4 && valorA2 ==4){
//             img.src= "../IMG/16.jpg";
//         }else if (valorA1 ==4){
//             img.src= "../IMG/17.jpg";
//         }else if (valorA2 ==4){
//             img.src= "../IMG/18.jpg";
//         }else{
//             img.src= "../IMG/19.jpg";
//         }
//         break;
//     default:
//         break;
// }

}
import { SALAS, SALASM } from './salas.js';

export async function RNG() {

    let P1 = 0;
    let P2 = 0;

    let D1 = 2 + 1;
    let D2 = 1 + 1;

    let TH = 86; // tempo de cada rodada em segundos
    let HM = 6;
    let TEMPO = HM * TH; // tempo total do jogo em segundos
    let HORAS = 0;

    const img1 = document.getElementsByTagName("img")[0];
    const img2 = document.getElementsByTagName("img")[1];
    const img3 = document.getElementsByTagName("img")[2];
    const img4 = document.getElementsByTagName("img")[3];
    const img5 = document.getElementsByTagName("img")[4];

    document.getElementById("valorA1").value = P1;
    document.getElementById("valorA2").value = P2;


    document.querySelector("header").innerHTML = '<div id="cronometro">12 AM</div><div id="noite">Noite: 1</div>';

    const timer = setInterval(() => {
        HORAS++;
        document.getElementById("cronometro").textContent = `${HORAS} AM`;

        if (HORAS*TH >= TEMPO) {
            clearInterval(timer);
        }
    }, TH * 1000);

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    do{
        await sleep(1000);
            if(HORAS <6) {
        await sleep(1000);
            if(HORAS < 6){
        await sleep(1000); 
            if(HORAS < 6){
        await sleep(1000); 
            if(HORAS < 6){
        await sleep(1000);
            if(HORAS < 6){
                
            
        
        let NA1 = Number(Math.floor(Math.random() * 21) + 1);
        let NA2 = Number(Math.floor(Math.random() * 21) + 1);
        console.log(NA1 + " " + NA2);

        if (NA1 < D1) {
            P1++;
            document.getElementById("valorA1").value = P1;
            console.log("Fabricio andou");
        }
        if (NA2 < D2) {
            P2++;
            document.getElementById("valorA2").value = P2;
            console.log("Julio andou");
        }


        if (P1 ==0 && P2 ==0){
            img1.src= "../IMG/0.jpg";
        }else if (P1 ==0){
            img1.src= "../IMG/1.jpg";
        }else if (P2 ==0){
            img1.src= "../IMG/2.jpg";
        }else{
            img1.src= "../IMG/3.jpg";
        }

        if (P1 ==1 && P2 ==1){
            img2.src= "../IMG/4.jpg";
        }else if (P1 ==1){
            img2.src= "../IMG/5.jpg";
        }else if (P2 ==1){
            img2.src= "../IMG/6.jpg";
        }else{
            img2.src= "../IMG/7.jpg";
        }

        if (P1 ==2 && P2 ==2){
            img3.src= "../IMG/8.jpg";
        }else if (P1 ==2){
            img3.src= "../IMG/9.jpg";
        }else if (P2 ==2){
            img3.src= "../IMG/10.jpg";
        }else{
            img3.src= "../IMG/11.jpg";
        }

        if (P1 ==3 && P2 ==3){
            img4.src= "../IMG/12.jpg";
        }else if (P1 ==3){
            img4.src= "../IMG/13.jpg";
        }else if (P2 ==3){
            img4.src= "../IMG/14.jpg";
        }else{
            img4.src= "../IMG/15.jpg";
        }

        if (P1 ==4 && P2 ==4){
            img5.src= "../IMG/16.jpg";
        }else if (P1 ==4){
            img5.src= "../IMG/17.jpg";
        }else if (P2 ==4){
            img5.src= "../IMG/18.jpg";
        }else{
            img5.src= "../IMG/19.jpg";
        }
    }}}}

    }}while (HORAS*TH < TEMPO);

    alert("Terminou a noite");
}

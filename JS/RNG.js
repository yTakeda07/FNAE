export async function RNG() {
    
    
    let P1 = 0;
    let P2 = 0;

    let D1 = 10;
    let D2 = 10;

    let TEMPO = 6 * 60; // segundos
    let SEGUNDOS = 0;

    const img1 = document.getElementsByTagName("img")[0];
    const img2 = document.getElementsByTagName("img")[1];
    const img3 = document.getElementsByTagName("img")[2];
    const img4 = document.getElementsByTagName("img")[3];
    const img5 = document.getElementsByTagName("img")[4];

    document.getElementById("valorA1").value = P1;
    document.getElementById("valorA2").value = P2;


    document.querySelector("header").innerHTML = '<div id="cronometro">Tempo: 0s</div>';

    const timer = setInterval(() => {
        SEGUNDOS++;
        document.getElementById("cronometro").textContent = `Tempo: ${SEGUNDOS}s`;

        if (SEGUNDOS >= TEMPO) {
            clearInterval(timer);
        }
    }, 1000);

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    while (SEGUNDOS < TEMPO) {
        await sleep(5000);
        let NA1 = Number(Math.floor(Math.random() * 20) + 1);
        let NA2 = Number(Math.floor(Math.random() * 20) + 1);
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


        
    }

    alert("Terminou a noite");
}

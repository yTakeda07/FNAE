export async function RNG() {
    let P1 = 0;
    let P2 = 0;

    let D1 = 20;
    let D2 = 10;

    let TEMPO = 6 * 60; // segundos
    let SEGUNDOS = 0;

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
        let NA1 = Math.floor(Math.random() * 20) + 1;
        let NA2 = Math.floor(Math.random() * 20) + 1;
        console.log(NA1 + " " + NA2);

        if (NA1 <= D1) {
            P1++;
            document.getElementById("valorA1").value = P1;
            console.log("Fabricio andou");
        }
        if (NA2 <= D2) {
            P2++;
            document.getElementById("valorA2").value = P2;
            console.log("Julio andou");
        }

        
    }

    alert("Terminou a noite");
}

export async function RNG() {
    let P1 = 0;
    let P2 = 0;

    let D1 = 10;
    let D2 = 10;

    let TEMPO = 6 * 2; // segundos
    let SEGUNDOS = 0;

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
        let NA1 = Math.floor(Math.random() * 20) + 1;
        let NA2 = Math.floor(Math.random() * 20) + 1;
        console.log(NA1 + " " + NA2);

        if (NA1 <= D1) {
            P1++;
            console.log("Fabricio andou");
        }
        if (NA2 <= D2) {
            P2++;
            console.log("Julio andou");
        }

        await sleep(5000);
    }

    alert("Terminou a noite");
}

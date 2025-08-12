const abrirModal = document.getElementById("abrirCamera");
const fecharModal = document.getElementById("fecharCamera");
const modalOverlay = document.getElementById("modalOverlay");
let aberta = 0;



// Abrir modal
abrirModal.addEventListener("mouseenter", () => {

if(aberta == 0) {
    modalOverlay.style.display = "flex";
    aberta = 1;
}else{
    modalOverlay.style.display = "none";
    aberta = 0;
}
});


// Fechar clicando fora da caixa
modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.style.display = "none";
        aberta = 0;
    }
});
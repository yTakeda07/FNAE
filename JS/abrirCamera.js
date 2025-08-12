const abrirModal = document.getElementById("abrirCamera");
const fecharModal = document.getElementById("fecharCamera");
const modalOverlay = document.getElementById("modalOverlay");

// Abrir modal
abrirModal.addEventListener("click", () => {
    modalOverlay.style.display = "flex";
});

// Fechar modal
fecharModal.addEventListener("click", () => {
    modalOverlay.style.display = "none";
});

// Fechar clicando fora da caixa
modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.style.display = "none";
    }
});
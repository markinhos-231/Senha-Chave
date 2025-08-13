const senhaInput = document.getElementById("senha");
const forcaSenha = document.getElementById("forcaSenha");
const confirmacao = document.getElementById("confirmacao");
const mensagemFinal = document.getElementById("mensagemFinal");
const btnConfirmar = document.getElementById("btnConfirmar");
const btnCancelar = document.getElementById("btnCancelar");

let ultimaForca = "";

senhaInput.addEventListener("input", () => {
    const senha = senhaInput.value;
    let forca = 0;

    if (senha.length >= 8) forca++;
    if (/[A-Z]/.test(senha)) forca++;
    if (/[0-9]/.test(senha)) forca++;
    if (/[^A-Za-z0-9]/.test(senha)) forca++;

    confirmacao.classList.add("escondido");
    mensagemFinal.textContent = "";

    if (forca === 0) {
        forcaSenha.textContent = "Digite uma senha...";
        forcaSenha.style.background = "#ccc";
        ultimaForca = "";
    } else if (forca <= 2) {
        forcaSenha.textContent = "Senha fraca";
        forcaSenha.style.background = "#ff4d4d";
        ultimaForca = "fraca";
    } else if (forca >= 3) {
        forcaSenha.textContent = forca === 3 ? "Senha média" : "Senha forte";
        forcaSenha.style.background = forca === 3 ? "#ffcc00" : "#4CAF50";
        ultimaForca = "media_ou_forte";
        confirmacao.classList.remove("escondido");
    }
});

btnConfirmar.addEventListener("click", () => {
    if (ultimaForca === "media_ou_forte") {
        mensagemFinal.textContent = "Parabéns, juramos que não vamos usar sua senha pra nada ;)";
    }
    confirmacao.classList.add("escondido");
});

btnCancelar.addEventListener("click", () => {
    mensagemFinal.textContent = "Criação de senha cancelada";
    confirmacao.classList.add("escondido");
});

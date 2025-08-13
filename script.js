const senhaInput = document.getElementById("senha");
const forcaSenha = document.getElementById("forcaSenha");

senhaInput.addEventListener("input", () => {
    const senha = senhaInput.value;
    let forca = 0;

    if (senha.length >= 8) forca++;
    if (/[A-Z]/.test(senha)) forca++;
    if (/[0-9]/.test(senha)) forca++;
    if (/[^A-Za-z0-9]/.test(senha)) forca++;

    if (forca === 0) {
        forcaSenha.textContent = "Digite uma senha...";
        forcaSenha.style.background = "#ccc";
    } else if (forca <= 2) {
        forcaSenha.textContent = "Senha fraca 😬";
        forcaSenha.style.background = "#ff4d4d";
    } else if (forca === 3) {
        forcaSenha.textContent = "Senha média 🙂";
        forcaSenha.style.background = "#ffcc00";
    } else {
        forcaSenha.textContent = "Senha forte 💪";
        forcaSenha.style.background = "#4CAF50";
    }
});

const texto = document.getElementById("texto");
let cambiado = false;

document.getElementById("btn").addEventListener("click", () => {
  if (cambiado) {
    texto.textContent = "Texto original";
  } else {
    texto.textContent = "Texto cambiado";
  }
  cambiado = !cambiado;
});
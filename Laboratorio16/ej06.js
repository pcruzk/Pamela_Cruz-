let contador = 0;

const valor = document.getElementById("valor");
const msg = document.getElementById("mensaje");

document.getElementById("mas").addEventListener("click", () => {
  contador++;
  valor.textContent = contador;
  msg.textContent = "";
});

document.getElementById("menos").addEventListener("click", () => {
  if (contador > 0) {
    contador--;
    valor.textContent = contador;
    msg.textContent = "";
  } else {
    msg.textContent = "El contador no puede ser negativo.";
  }
});
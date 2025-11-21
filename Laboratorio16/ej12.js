// Colaboré con ChatGPT

const cuadro = document.getElementById("cuadro");

document.getElementById("btnMover").addEventListener("click", () => {
  cuadro.classList.add("mover");
});

document.getElementById("btnReset").addEventListener("click", () => {
  cuadro.classList.remove("mover");
});
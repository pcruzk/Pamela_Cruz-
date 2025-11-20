const p = document.querySelector("p");

const nuevoDiv = document.createElement("div");
nuevoDiv.textContent = "Párrafo reemplazado";

p.replaceWith(nuevoDiv);
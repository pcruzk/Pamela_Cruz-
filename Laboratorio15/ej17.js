const cont = document.getElementById("contenedor");
const lista = Array.from(cont.querySelectorAll("p"));

lista.sort((a, b) => a.textContent.localeCompare(b.textContent));

lista.forEach(p => cont.appendChild(p));
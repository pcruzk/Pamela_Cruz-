const cont2 = document.getElementById("contenedor");

for (let i = 1; i <= 3; i++) {
    const p = document.createElement("p");
    p.textContent = `Párrafo ${i}`;
    cont2.appendChild(p);
}

cont2.children[1].remove();
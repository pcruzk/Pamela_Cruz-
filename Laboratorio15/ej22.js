const sec = document.querySelector("section");

// eliminar título
const oldH2 = sec.querySelector("h2");
if (oldH2) oldH2.remove();

// nuevo h2
const h2 = document.createElement("h2");
h2.textContent = "Título nuevo";
sec.appendChild(h2);

// párrafo
const p = document.createElement("p");
p.textContent = "Descripción generada";
sec.appendChild(p);

// lista
const ul3 = document.createElement("ul");
for (let i = 1; i <= 3; i++) {
    const li = document.createElement("li");
    li.textContent = `Ítem ${i}`;
    ul3.appendChild(li);
}
sec.appendChild(ul3);
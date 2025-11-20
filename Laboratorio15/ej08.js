const colores = ["lightblue", "lightgreen", "lightyellow", "pink", "lavender"];
const divs = document.querySelectorAll("div");

divs.forEach((div, i) => {
    div.style.backgroundColor = colores[i % colores.length];
});
const lista = document.getElementById("lista");

document.getElementById("agregar").addEventListener("click", () => {
  const txt = document.getElementById("texto").value;
  if (txt.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = txt;
    lista.appendChild(li);
    document.getElementById("texto").value = "";
  }
});

document.getElementById("borrar").addEventListener("click", () => {
  if (lista.lastChild) {
    lista.removeChild(lista.lastChild);
  }
});
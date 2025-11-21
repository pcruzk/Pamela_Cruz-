const productos = [
  { nombre: "Laptop", precio: 3500 },
  { nombre: "Mouse", precio: 80 },
];

document.getElementById("generar").addEventListener("click", () => {
  const cuerpo = document.getElementById("cuerpo");
  cuerpo.innerHTML = "";

  productos.forEach(p => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${p.nombre}</td><td>${p.precio}</td>`;
    cuerpo.appendChild(tr);
  });
});

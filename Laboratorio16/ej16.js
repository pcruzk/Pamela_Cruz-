const productos = [
  { nombre: "Laptop", precio: 3500 },
  { nombre: "Mouse", precio: 80 },
  { nombre: "Teclado", precio: 120 }
];

const json = JSON.stringify(productos);
const arr = JSON.parse(json);

arr.forEach(p => {
  const li = document.createElement("li");
  li.textContent = p.nombre;
  document.getElementById("lista").appendChild(li);
});
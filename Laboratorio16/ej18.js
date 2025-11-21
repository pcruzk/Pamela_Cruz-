const jsonLibros = `[
  { "titulo": "Clean Code", "autor": "Robert Martin" },
  { "titulo": "El Quijote", "autor": "Miguel de Cervantes" }
]`;

const libros = JSON.parse(jsonLibros);
const tbody = document.getElementById("libros");

libros.forEach(l => {
  const tr = document.createElement("tr");
  tr.innerHTML = `<td>${l.titulo}</td><td>${l.autor}</td>`;
  tbody.appendChild(tr);
});
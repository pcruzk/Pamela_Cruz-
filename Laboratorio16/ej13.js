const tabla = document.getElementById("tabla");
let usuarios = [];

document.getElementById("agregar").addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value.trim();
  const edad = document.getElementById("edad").value.trim();

  if (nombre === "" || edad === "") return;

  const usuario = { nombre, edad };
  usuarios.push(usuario);

  mostrarTabla();
});

function mostrarTabla() {
  tabla.innerHTML = "";

  usuarios.forEach((u, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${u.nombre}</td>
      <td>${u.edad}</td>
      <td>
        <button data-ind="${i}" class="editar">Editar</button>
        <button data-ind="${i}" class="eliminar">Eliminar</button>
      </td>
    `;
    tabla.appendChild(tr);
  });
}

tabla.addEventListener("click", (e) => {
  const i = e.target.dataset.ind;

  if (e.target.classList.contains("eliminar")) {
    usuarios.splice(i, 1);
    mostrarTabla();
  }

  if (e.target.classList.contains("editar")) {
    const nuevoNombre = prompt("Nuevo nombre:", usuarios[i].nombre);
    const nuevaEdad = prompt("Nueva edad:", usuarios[i].edad);
    if (nuevoNombre && nuevaEdad) {
      usuarios[i].nombre = nuevoNombre;
      usuarios[i].edad = nuevaEdad;
      mostrarTabla();
    }
  }
});
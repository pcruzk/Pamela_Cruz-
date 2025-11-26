const jsonTareas = `[
  { "titulo": "Estudiar JS", "completada": true },
  { "titulo": "Hacer ejercicio", "completada": false }
]`;

const tareas = JSON.parse(jsonTareas);
const ul = document.getElementById("tareas");

tareas.forEach(t => {
  let li = document.createElement("li");
  li.textContent = t.titulo;
  li.style.color = t.completada ? "green" : "red";
  ul.appendChild(li);
});
document.getElementById("guardar").addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value;
  const persona = { nombre };
  console.log(JSON.stringify(persona));
});
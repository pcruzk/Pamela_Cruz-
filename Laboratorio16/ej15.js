const cadena = `{
  "nombre": "Ana",
  "edad": 20
}`;

const obj = JSON.parse(cadena);
document.getElementById("resultado").textContent = "Nombre: " + obj.nombre;
const usuario = {
  nombre: "Carlos",
  correo: "carlos@mail.com",
  rol: "admin"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

const u = JSON.parse(localStorage.getItem("usuario"));
document.getElementById("info").textContent = 
  `Nombre: ${u.nombre} - Correo: ${u.correo}`;